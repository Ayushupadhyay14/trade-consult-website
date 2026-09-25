"use client";

import { useState } from "react";
import { api } from "@/lib/api";

interface TicketOut {
  ticket_no: string;
}

const SEGMENTS = [
  "Index Options (Nifty/BankNifty)",
  "Stock Options",
  "Stock Futures",
  "MCX Commodities",
  "Equity Cash",
  "Insiight 360 / Combo Desk",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    segment: SEGMENTS[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [ticketNo, setTicketNo] = useState("");
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const ticket = await api.post<TicketOut>("/tickets", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        category: form.segment,
        subject: `Advisory inquiry — ${form.segment}`,
        message: form.message,
      });
      setTicketNo(ticket.ticket_no);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send");
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#F5F5FA] py-10 sm:py-16 md:py-24">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          SEBI Reg. INH000020660
        </span>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:mt-5 sm:text-6xl">
          Get in touch.
        </h1>
        <p className="mt-2 text-sm text-slate-500 sm:mt-3 sm:text-lg">
          Direct regulatory &amp; advisory communication desk.
        </p>
      </div>

      {/* Desk card + form */}
      <div className="mx-auto mt-8 grid max-w-6xl gap-4 px-4 sm:mt-14 sm:gap-6 sm:px-6 md:gap-8 lg:grid-cols-2">
        {/* Direct desk */}
        <div className="reveal flex flex-col rounded-3xl bg-navy-950 p-4 transition-all duration-300 hover:-translate-y-1 sm:p-6 md:p-8 text-white shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Direct Desk</p>
              <p className="mt-1 text-xl font-bold text-white">Alpha Insiight</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          <div className="my-6 border-t border-white/10" />

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Priority Research Line</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <a href="tel:+919575519739" className="font-mono text-lg font-bold text-white hover:text-red-300 sm:text-2xl">
                +91 95755 19739
              </a>
              <a
                href="tel:+919575519739"
                className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-brand-400"
              >
                Direct Call
              </a>
            </div>
          </div>

          <div className="my-6 border-t border-white/10" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Inquiries</p>
              <a href="mailto:info@alphainsiight.com" className="mt-1 block truncate text-sm text-white hover:text-red-300">
                info@alphainsiight.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Subscribers</p>
              <a href="mailto:support@alphainsiight.com" className="mt-1 block truncate text-sm text-white hover:text-red-300">
                support@alphainsiight.com
              </a>
            </div>
          </div>

          <div className="my-6 border-t border-white/10" />

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Registered Headquarters</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              206 Jobat Apartment, 12/3 Old Palasiya,
              <br />
              Indore, Madhya Pradesh 452018, India
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between rounded-xl bg-white/5 p-4 pt-4">
            <div>
              <p className="text-sm font-semibold text-white">Harshit Kumar Singh</p>
              <p className="text-xs text-slate-400">Research Analyst</p>
            </div>
            <span className="font-mono text-xs font-semibold text-emerald-400">NISM Certified</span>
          </div>
        </div>

        {/* Form */}
        <div
          className="reveal rounded-3xl bg-white p-4 sm:p-6 md:p-8 shadow-sm"
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          {status === "done" ? (
            <div className="flex h-full flex-col items-center justify-center py-6 text-center sm:py-10">
              <h2 className="text-lg font-semibold text-navy-900">Message received</h2>
              <p className="mt-2 text-sm text-slate-600">
                Your ticket number is <span className="font-mono font-semibold">{ticketNo}</span>.
                Save it to track your request.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-950">Send a Message</h2>
              <p className="mt-1 text-sm text-slate-500">Connect directly with our registered research team.</p>

              <form onSubmit={submit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="name">Your Name</label>
                    <input
                      id="name" required minLength={2} className="input bg-slate-50"
                      placeholder="e.g. Vikram Sharma" value={form.name} onChange={update("name")}
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">Mobile Phone</label>
                    <input
                      id="phone" required minLength={10} maxLength={15} className="input bg-slate-50"
                      placeholder="+91 98765 43210" value={form.phone} onChange={update("phone")}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="email">Email Address</label>
                    <input
                      id="email" type="email" required className="input bg-slate-50"
                      placeholder="name@company.com" value={form.email} onChange={update("email")}
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="segment">Segment</label>
                    <select id="segment" className="input bg-slate-50" value={form.segment} onChange={update("segment")}>
                      {SEGMENTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="message">Message</label>
                  <textarea
                    id="message" required minLength={10} rows={5} className="input bg-slate-50"
                    placeholder="Share your inquiry details…" value={form.message} onChange={update("message")}
                  />
                </div>

                {error && <p className="text-sm text-rose-600">{error}</p>}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <span className="text-xs text-slate-400">256-bit encrypted</span>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Grievance redressal */}
      <div className="mx-auto mt-8 max-w-6xl px-4 sm:mt-16 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
            Statutory Grievance Redressal
          </span>
          <span className="font-mono text-xs text-slate-400">24h Internal SLA</span>
        </div>

        <div className="reveal mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
          <a
            href="/grievance"
            className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-2xl sm:p-5"
          >
            <p className="text-sm font-semibold text-slate-900">Internal Desk</p>
            <p className="mt-0.5 text-xs text-slate-500">Compliance &amp; Principal Officer</p>
          </a>

          <a
            href="https://scores.sebi.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-2xl sm:p-5"
          >
            <p className="text-sm font-semibold text-slate-900">SEBI SCORES 2.0</p>
            <p className="mt-0.5 text-xs text-slate-500">scores.sebi.gov.in</p>
          </a>

          <a
            href="https://smartodr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-2xl sm:p-5"
          >
            <p className="text-sm font-semibold text-slate-900">SMART ODR</p>
            <p className="mt-0.5 text-xs text-slate-500">smartodr.in</p>
          </a>
        </div>
      </div>
    </div>
  );
}
