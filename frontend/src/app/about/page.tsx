import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

const VALUES = [
  "Streamlining of investment procedure",
  "Increased ROI",
  "Risk minimization",
  "Professional advice",
  "Maintenance of regulatory compliance",
];

const STATS = [
  { pct: "90%", title: "Scalable Solutions", desc: "Driving business forward with trusted strategies." },
  { pct: "85%", title: "Automation Features", desc: "Always available, always on, no downtime." },
  { pct: "80%", title: "24/7 Support", desc: "Stopping problems in their tracks." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-10 sm:py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-5xl">
            Alpha Insiight
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            Alpha Insiight services is one the innovative service provider in India.
            We provide technical based view and information under one roof. Our team
            is highly skilled and experienced in Indian stock market. Our team helps
            one to accomplish goals in day trading / short term trading working in
            Indian stock market.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-20">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h2 className="text-lg font-semibold text-navy-900">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To grow the client&rsquo;s portfolio consistently and educate them
                about risk management and basics of trading &amp; investment
                regularly. Our approach will help to make us Asia&rsquo;s leading
                brand.
              </p>
            </div>
            <div className="card">
              <h2 className="text-lg font-semibold text-navy-900">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Experienced advisors, happy customers and 24×7 support available,
                built around disciplined financial planning.
              </p>
            </div>
          </div>

          <div className="card mt-8">
            <h2 className="text-lg font-semibold text-navy-900">Why Choose Us — Our Company Values</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-brand-600">✓</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <div
                key={s.title}
                className="card reveal text-center"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="text-2xl font-extrabold text-brand-600 sm:text-3xl">{s.pct}</span>
                <h3 className="mt-2 text-sm font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="card mt-12 border-brand-500/30 bg-brand-50">
            <h2 className="text-lg font-semibold text-navy-900">Registration Details</h2>
            <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-slate-500">SEBI Registration No.</dt>
                <dd className="mt-1 font-semibold text-navy-900">INH000020660</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Research Analyst</dt>
                <dd className="mt-1 font-semibold text-navy-900">Harshit Kumar Singh</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Registered Office</dt>
                <dd className="mt-1 font-semibold text-navy-900">
                  206 Jobat Apartment, 12/3 Old Palasiya, Indore, MP — 452018
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Contact</dt>
                <dd className="mt-1 font-semibold text-navy-900">info@alphainsiight.com · +91 95755 19739</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
