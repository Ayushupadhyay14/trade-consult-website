import type { Metadata } from "next";
import { apiServer } from "@/lib/api";
import type { TrackRecord } from "@/lib/types";

export const metadata: Metadata = {
  title: "Verified Track Record",
  description: "Every closed research call, published publicly with timestamps.",
};

export const dynamic = "force-dynamic";

const EMPTY: TrackRecord = {
  stats: { total_closed: 0, target_hit: 0, sl_hit: 0, accuracy_pct: 0, avg_return_pct: 0 },
  calls: [],
};

const STATUS_STYLE: Record<string, string> = {
  target_hit: "badge-green",
  sl_hit: "badge-red",
  closed: "badge-slate",
};

export default async function TrackRecordPage() {
  const data = await apiServer<TrackRecord>("/recommendations/track-record", EMPTY);
  const { stats, calls } = data;

  return (
    <>
      <section className="bg-navy-950 py-10 sm:py-20">
        <div className="container-site">
          <p className="eyebrow">Radical Transparency</p>
          <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-5xl">
            Verified Track Record
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:mt-4 sm:text-lg">
            Every closed call — wins and losses — published with entry, exit and
            timestamps. No cherry-picking. Ever.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-8 sm:py-16">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {[
              { label: "Closed Calls", value: stats.total_closed },
              { label: "Targets Hit", value: stats.target_hit },
              { label: "Accuracy", value: `${stats.accuracy_pct}%` },
              { label: "Avg Return / Call", value: `${stats.avg_return_pct}%` },
            ].map((s, i) => (
              <div
                key={s.label}
                className="card reveal text-center"
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <p className="text-xl font-extrabold text-navy-900 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="card mt-6 overflow-x-auto p-0 sm:mt-10">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-3">Symbol</th>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">Entry</th>
                  <th className="px-6 py-3">Target</th>
                  <th className="px-6 py-3">Stop-Loss</th>
                  <th className="px-6 py-3">Exit</th>
                  <th className="px-6 py-3">Result</th>
                  <th className="px-6 py-3">Closed On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {calls.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-6 py-10 text-center text-slate-500">
                      No closed calls yet. Check back after the first calls complete.
                    </td>
                  </tr>
                )}
                {calls.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="px-6 py-3 font-semibold text-navy-900">{c.symbol}</td>
                    <td className="px-6 py-3">
                      <span className={c.action === "BUY" ? "badge-green" : "badge-red"}>
                        {c.action}
                      </span>
                    </td>
                    <td className="px-6 py-3">₹{c.entry_price}</td>
                    <td className="px-6 py-3">₹{c.target_price}</td>
                    <td className="px-6 py-3">₹{c.stop_loss}</td>
                    <td className="px-6 py-3">{c.exit_price ? `₹${c.exit_price}` : "—"}</td>
                    <td className="px-6 py-3">
                      <span className={STATUS_STYLE[c.status] ?? "badge-slate"}>
                        {c.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-slate-500">
                      {c.closed_at ? new Date(c.closed_at).toLocaleDateString("en-IN") : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Past performance is not indicative of future returns. Investment in
            securities market is subject to market risks.
          </p>
        </div>
      </section>
    </>
  );
}
