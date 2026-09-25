import Image from "next/image";
import Link from "next/link";

const ADVISORY_LINKS = [
  { href: "/services", label: "Equity Portfolio" },
  { href: "/services", label: "Cash Intraday" },
  { href: "/services", label: "Index Options" },
  { href: "/services", label: "Stock Options" },
  { href: "/services", label: "MCX Commodities" },
];

const REGULATORY_LINKS = [
  { href: "/disclosure", label: "SEBI Registration Status" },
  { href: "/investor-charter", label: "Investor Charter" },
  { href: "/grievance", label: "Grievance Redressal Mechanism" },
  { href: "/disclaimer", label: "Disclosures & Disclaimer" },
  { href: "/complaint-status", label: "Complaint Status" },
  { href: "/payment", label: "Payment Details" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Advisory" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-600 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 border-b border-slate-100 pb-6 sm:gap-8 sm:pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="relative block h-10 w-10 overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm">
                <Image
                  src="/logo.jpeg"
                  alt="Alpha Insight logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>
              <span className="text-base font-bold text-slate-900">
                ALPHA <span className="text-red-600">INSIGHT</span>
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              SEBI Registered Individual Research Analyst providing high-conviction
              research, risk protocols, and instant SMS market intelligence for
              Indian equities, derivatives and commodities.
            </p>
            <div className="font-mono text-xs text-slate-800">
              SEBI Reg: <span className="font-semibold text-red-700">INH000020660</span>
            </div>
          </div>

          <div className="space-y-2.5 lg:col-span-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-900">
              Advisory
            </span>
            <ul className="space-y-1.5">
              {ADVISORY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link className="transition-colors hover:text-slate-950" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5 lg:col-span-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-900">
              Regulatory Documents
            </span>
            <ul className="space-y-1.5">
              {REGULATORY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link className="transition-colors hover:text-slate-950" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5 lg:col-span-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-900">
              Principal Desk
            </span>
            <div className="space-y-1 text-slate-500">
              <p className="font-semibold text-slate-900">Harshit Kumar Singh</p>
              <p>Research Analyst (SEBI INH000020660)</p>
              <p>Indore, Madhya Pradesh, India</p>
              <p className="pt-2 font-mono">
                <a className="text-red-700 hover:underline" href="mailto:info@alphainsiight.com">
                  info@alphainsiight.com
                </a>
              </p>
              <p className="font-mono text-slate-800">+91 95755 19739</p>
            </div>
          </div>
        </div>

        <p className="pt-6 text-center text-[11px] leading-relaxed text-slate-400">
          Investment in securities market are subject to market risks. Read all the
          related documents carefully before investing. Registration granted by SEBI
          and certification from NISM in no way guarantee performance or provide any
          assurance of returns.
        </p>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-[11px] text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Alpha Insiight. Harshit Kumar Singh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} className="transition-colors hover:text-slate-700" href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
