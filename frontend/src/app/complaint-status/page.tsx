import type { Metadata } from "next";

export const metadata: Metadata = { title: "Complaint Status" };

const MONTHLY_ROWS = [
  "July-2025", "August-2025", "September-2025", "October-2025", "November-2025",
  "December-2025", "January-2026", "February-2026", "March-2026",
];

const YEARLY_ROWS = ["2025-2026", "2026-2027"];

function Table({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-3 py-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className={row[0] === "Grand Total" ? "font-semibold text-navy-900" : "text-slate-600"}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComplaintStatusPage() {
  return (
    <div className="bg-slate-50 py-8 sm:py-16">
      <div className="container-site max-w-4xl space-y-6 sm:space-y-10">
        <div>
          <h1 className="section-title">Complaint Status</h1>
          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Data for the month ending March 2026, published in line with SEBI (Research
            Analysts) Regulations, 2014.
          </p>
        </div>

        <div className="card">
          <h2 className="mb-3 text-base font-semibold text-navy-900 sm:mb-4 sm:text-lg">This Month</h2>
          <Table
            head={["Sr. No.", "Received From", "Pending (Last Month)", "Received", "Total Pending", "Pending > 3 Months", "Avg. Resolution (Days)"]}
            rows={[
              [1, "Directly from Investors", 0, 0, 0, 0, 0],
              [2, "SEBI (SCORES)", 0, 0, 0, 0, 0],
              [3, "Other Sources (if any)", 0, 0, 0, 0, 0],
              ["Grand Total", "", 0, 0, 0, 0, 0],
            ]}
          />
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Average resolution time is the sum total of time taken to resolve each
            complaint in days, in the current month, divided by the total number of
            complaints resolved in the current month.
          </p>
        </div>

        <div className="card">
          <h2 className="mb-3 text-base font-semibold text-navy-900 sm:mb-4 sm:text-lg">Trend of Monthly Disposal of Complaints</h2>
          <Table
            head={["Sr. No.", "Month", "Carried Forward", "Received", "Resolved", "Pending"]}
            rows={[
              ...MONTHLY_ROWS.map((m, i) => [i + 1, m, 0, 0, 0, 0]),
              ["Grand Total", "", 0, 0, 0, 0],
            ]}
          />
        </div>

        <div className="card">
          <h2 className="mb-3 text-base font-semibold text-navy-900 sm:mb-4 sm:text-lg">Trend of Annual Disposal of Complaints</h2>
          <Table
            head={["Sr. No.", "Year", "Carried Forward", "Received", "Resolved", "Pending"]}
            rows={[
              ...YEARLY_ROWS.map((y, i) => [i + 1, y, 0, 0, 0, 0]),
              ["Grand Total", "", 0, 0, 0, 0],
            ]}
          />
        </div>
      </div>
    </div>
  );
}
