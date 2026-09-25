"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Plan, Recommendation, User } from "@/lib/types";

interface Stats {
  total_users: number;
  active_subscriptions: number;
  open_calls: number;
  open_tickets: number;
}

const EMPTY_FORM = {
  plan_id: 0,
  symbol: "",
  exchange: "NSE",
  segment: "cash",
  action: "BUY" as "BUY" | "SELL",
  entry_price: "",
  target_price: "",
  stop_loss: "",
  notes: "",
};

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [openCalls, setOpenCalls] = useState<Recommendation[]>([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const refresh = () => {
    api.get<Stats>("/admin/stats", true).then(setStats).catch(() => {});
    api.get<Recommendation[]>("/recommendations/live", true).then(setOpenCalls).catch(() => {});
  };

  useEffect(() => {
    api
      .get<User>("/auth/me", true)
      .then((u) => {
        if (u.role === "admin" || u.role === "analyst") {
          setAuthorized(true);
          refresh();
          api.get<Plan[]>("/plans").then(setPlans).catch(() => {});
        } else {
          router.replace("/");
        }
      })
      .catch(() => router.replace("/admin/login?next=/admin"));
  }, [router]);

  const publish = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await api.post<Recommendation>(
        "/admin/recommendations",
        {
          plan_id: Number(form.plan_id),
          symbol: form.symbol.toUpperCase(),
          exchange: form.exchange,
          segment: form.segment,
          action: form.action,
          entry_price: Number(form.entry_price),
          target_price: Number(form.target_price),
          stop_loss: Number(form.stop_loss),
          notes: form.notes,
        },
        true
      );
      setMessage(`Call published: ${form.symbol.toUpperCase()} — pushed to all subscribers.`);
      setForm(EMPTY_FORM);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to publish");
    }
  };

  const closeCall = async (id: number, status: "target_hit" | "sl_hit") => {
    const exit = window.prompt("Exit price:");
    if (!exit) return;
    try {
      await api.patch(`/admin/recommendations/${id}/close`, {
        status,
        exit_price: Number(exit),
      }, true);
      refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to close call");
    }
  };

  if (!authorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Checking access…</p>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-10">
      <div className="container-site space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-navy-900">Analyst Console</h1>
          <Link href="/admin/blog" className="btn-dark">
            Manage Blog
          </Link>
        </div>

        {stats && (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { label: "Total Users", value: stats.total_users },
              { label: "Active Subscriptions", value: stats.active_subscriptions },
              { label: "Open Calls", value: stats.open_calls },
              { label: "Open Tickets", value: stats.open_tickets },
            ].map((s) => (
              <div key={s.label} className="card text-center">
                <p className="text-2xl font-extrabold text-navy-900 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Publish form */}
          <div className="card">
            <h2 className="text-lg font-semibold text-navy-900">Publish a Call</h2>
            <form onSubmit={publish} className="mt-4 space-y-4">
              <div>
                <label className="label">Plan</label>
                <select
                  required
                  className="input"
                  value={form.plan_id}
                  onChange={(e) => setForm({ ...form, plan_id: Number(e.target.value) })}
                >
                  <option value={0} disabled>Select plan</option>
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Symbol</label>
                  <input required className="input" placeholder="RELIANCE" value={form.symbol}
                    onChange={(e) => setForm({ ...form, symbol: e.target.value })} />
                </div>
                <div>
                  <label className="label">Action</label>
                  <select className="input" value={form.action}
                    onChange={(e) => setForm({ ...form, action: e.target.value as "BUY" | "SELL" })}>
                    <option value="BUY">BUY</option>
                    <option value="SELL">SELL</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {(["entry_price", "target_price", "stop_loss"] as const).map((k) => (
                  <div key={k}>
                    <label className="label capitalize">{k.replace("_", " ")}</label>
                    <input required type="number" step="0.05" min="0.01" className="input"
                      value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
                  </div>
                ))}
              </div>
              <div>
                <label className="label">Notes (optional)</label>
                <textarea rows={2} className="input" value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })} />
              </div>
              {message && <p className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}
              {error && <p className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
              <button type="submit" className="btn-primary w-full">Publish & Notify Subscribers</button>
            </form>
          </div>

          {/* Open calls */}
          <div className="card">
            <h2 className="text-lg font-semibold text-navy-900">Open Calls ({openCalls.length})</h2>
            <div className="mt-4 space-y-3">
              {openCalls.map((c) => (
                <div key={c.id} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-navy-900">{c.symbol}</span>
                      <span className={`ml-2 ${c.action === "BUY" ? "badge-green" : "badge-red"}`}>{c.action}</span>
                    </div>
                    <span className="text-xs text-slate-500">
                      ₹{c.entry_price} → ₹{c.target_price} / SL ₹{c.stop_loss}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => closeCall(c.id, "target_hit")}
                      className="btn bg-emerald-600 px-3 py-1.5 text-xs text-white hover:bg-emerald-500">
                      Target Hit
                    </button>
                    <button onClick={() => closeCall(c.id, "sl_hit")}
                      className="btn bg-rose-600 px-3 py-1.5 text-xs text-white hover:bg-rose-500">
                      SL Hit
                    </button>
                  </div>
                </div>
              ))}
              {openCalls.length === 0 && (
                <p className="py-8 text-center text-sm text-slate-500">No open calls.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
