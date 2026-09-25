import type { Metadata } from "next";

export const metadata: Metadata = { title: "Grievance Redressal" };

const ADDRESS = "206 Jobat Apartment, 12/3 Old Palasiya, Indore, Madhya Pradesh - 452018";

const ROWS = [
  { designation: "Customer Care", address: ADDRESS },
  { designation: "Head of Customer Care", address: "Same as above" },
  { designation: "Compliance Officer", address: "Same as above" },
  { designation: "Principal Officer", address: "Same as above" },
];

export default function GrievancePage() {
  return (
    <div className="bg-slate-50 py-8 sm:py-16">
      <div className="container-site max-w-5xl">
        <h1 className="section-title">Grievance Redressal / Escalation Matrix</h1>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
          If you have any grievance or complaint, you may contact the below officials for assistance.
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 shadow-sm sm:mt-8 sm:rounded-2xl">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-900 text-xs font-semibold uppercase tracking-wide text-white">
              <tr>
                <th className="px-4 py-3">Designation</th>
                <th className="px-4 py-3">Contact Person</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Contact No.</th>
                <th className="px-4 py-3">Email ID</th>
                <th className="px-4 py-3">Working Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {ROWS.map((r) => (
                <tr key={r.designation}>
                  <td className="px-4 py-4 font-medium text-navy-900">{r.designation}</td>
                  <td className="px-4 py-4 text-slate-600">Harshit Kumar Singh</td>
                  <td className="px-4 py-4 text-slate-600">{r.address}</td>
                  <td className="px-4 py-4 text-slate-600">+91 8896969806</td>
                  <td className="px-4 py-4">
                    <a href="mailto:harshit.singh105@gmail.com" className="text-red-700 hover:underline">
                      harshit.singh105@gmail.com
                    </a>
                  </td>
                  <td className="px-4 py-4 text-slate-600">Mon-Sat 09 AM – 05 PM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card mt-6 border-l-4 border-red-700 sm:mt-10">
          <h2 className="text-base font-semibold text-navy-900 sm:text-lg">Escalation Process</h2>
          <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:space-y-3 sm:text-sm">
            <p>
              The above details facilitate complainants to approach the concerned Research Analyst
              before filing a complaint with SEBI. For more details, refer to the applicable BSE Circular.
            </p>
            <p>We aim to resolve all grievances within 21 working days from the date of receipt.</p>
            <p>
              If your grievance is not resolved within this timeframe, you may escalate it to SCORES
              (SEBI Complaints Redress System) at{" "}
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                scores.sebi.gov.in
              </a>
              .
            </p>
            <p>
              If you are unsatisfied with the resolution provided through SCORES, you may access the
              Online Dispute Resolution (ODR) Portal at{" "}
              <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                smartodr.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
