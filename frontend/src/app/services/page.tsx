import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "All 12 Alpha Insiight research services — cash, equity, futures, index & stock options, combos, MCX commodities, Insiight 360 and the Intra Pack trial.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=1600&auto=format&fit=crop";
const MCX_IMAGE =
  "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=800&auto=format&fit=crop";

function TileHeader({ tag, badge }: { tag: string; badge: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs uppercase text-slate-500">{tag}</span>
      <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-700">{badge}</span>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-2.5 font-mono text-xs">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
}

function MandateCard({
  span, tag, badge, title, desc, spec, footNote, delay,
}: {
  span: string; tag: string; badge: string; title: string; desc: string;
  spec: { label: string; value: string }; footNote: string; delay?: number;
}) {
  return (
    <div
      className={`${span} reveal group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg`}
      style={{ "--reveal-delay": `${delay ?? 0}ms` } as React.CSSProperties}
    >
      <div className="space-y-3">
        <TileHeader tag={tag} badge={badge} />
        <h3 className="text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="text-sm font-light leading-snug text-slate-600">{desc}</p>
        <SpecRow label={spec.label} value={spec.value} />
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="font-mono text-xs font-medium text-secondary">{footNote}</span>
        <Link href="/pricing" className="flex items-center gap-1 text-sm font-medium text-primary transition-all hover:text-on-primary-container group-hover:translate-x-0.5">
          <span>Details</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#fbfbfd]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <div className="mx-auto mb-5 flex max-w-4xl flex-col items-center space-y-2 text-center sm:mb-8 sm:space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-surface-container-low px-3.5 py-1 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-slate-600 sm:text-xs">
              SEBI Reg. INH000020660 • Disciplined Advisory Desks
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            All 12 Research Services. Pure Focus.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
            Alpha Insiight is one of the innovative research service providers in
            India — technical, research-driven views delivered across Indian
            equities, derivatives, and commodities, under one roof.
          </p>
        </div>

        {/* Banner */}
        <div className="group relative h-72 w-full overflow-hidden rounded-3xl border border-dark-border bg-dark-surface shadow-xl sm:h-80 md:h-[340px]">
          <img
            src={HERO_IMAGE}
            alt="Institutional quantitative financial trading desks"
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/30 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-dark-border bg-dark-surface/85 px-3 py-1 font-mono text-xs text-cyan-accent backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-accent" /> Execution Engine
            </span>
            <span className="hidden rounded-full border border-dark-border bg-dark-surface/85 px-3 py-1 font-mono text-xs text-slate-300 backdrop-blur-md sm:inline-flex">
              &lt;350ms Dashboard Dispatch
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-between gap-3 text-white sm:flex-row sm:items-center">
            <div>
              <span className="block font-mono text-xs uppercase tracking-wider text-cyan-accent">Institutional Architecture</span>
              <p className="text-sm font-light text-slate-300">Mathematical 1:2+ calibrated setups across NSE, BSE &amp; MCX.</p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-medium text-dark-surface shadow-md transition-all hover:bg-slate-100 sm:self-auto"
            >
              <span>View Allocation Plans</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Bento Portfolio Matrix</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">The 12 Official Research Services</h2>
          </div>
          <span className="rounded-full border border-slate-200 bg-surface-container-low px-3 py-1.5 font-mono text-xs text-slate-600">
            12 Active Services
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* 01 Flagship */}
          <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-dark-border bg-dark-surface p-4 sm:p-5 md:p-7 text-white shadow-lg md:col-span-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-xs font-semibold tracking-wider text-white">01 • FLAGSHIP</span>
                <span className="rounded-full bg-dark-container px-2.5 py-0.5 font-mono text-xs text-cyan-accent">Omni-Asset Breadth</span>
                <span className="rounded-full bg-dark-container px-2.5 py-0.5 font-mono text-xs text-slate-300">Family Office Grade</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">INSIIGHT 360</h3>
              <p className="max-w-xl text-sm font-light leading-relaxed text-slate-300">
                High-precision, research-driven investment service with disciplined,
                diversified market strategies — 10 Index Options, 10 Stock Options, 5
                Stock Futures, 5 Index Futures, 5 MCX Options, 5 Equity Cash (Intraday)
                and 5 Positional / Long-term recommendations. Minimum investment ₹2,00,000.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Equities", "F&O Combos", "Commodities", "Live Dashboard Routing"].map((t) => (
                  <span key={t} className="rounded-md bg-dark-container-high px-2 py-0.5 font-mono text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-4 flex items-center justify-between border-t border-dark-border pt-6">
              <span className="font-mono text-xs text-slate-400">Total Universe • Dynamic Allocation</span>
              <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-accent transition-colors hover:text-white group-hover:translate-x-0.5">
                <span>Details</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 10 MCX with image */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md md:col-span-4">
            <div className="space-y-3">
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-dark-surface">
                <img src={MCX_IMAGE} alt="MCX commodities & energy" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent" />
                <span className="absolute left-2 top-2 rounded-full bg-dark-surface/80 px-2 py-0.5 font-mono text-xs text-tertiary-fixed backdrop-blur">10 • COMMODITIES</span>
                <span className="absolute bottom-2 left-2 font-mono text-xs text-white">Crude • NG • Gold • Silver</span>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">INSIIGHT-MCX</h3>
                  <span className="rounded-full border border-amber-200/60 bg-amber-50 px-2 py-0.5 font-mono text-xs text-amber-700">Macro Aligned</span>
                </div>
                <p className="text-sm font-light leading-snug text-slate-600">High-risk commodity trading requiring larger investments, aiming for higher returns.</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="font-mono text-xs text-slate-500">Intraday &amp; Swing</span>
              <Link href="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:text-on-primary-container group-hover:translate-x-0.5">
                <span>Details</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <MandateCard
            span="md:col-span-4" tag="10 • COMMODITIES" badge="Research-Driven"
            title="INSIIGHT MCX (COMMODITIES)"
            desc="High-risk, research-driven commodity trades in MCX markets."
            spec={{ label: "Segment", value: "Gold • Silver • Crude • NG" }}
            footNote="Intraday & Positional"
          />

          <MandateCard
            span="md:col-span-4" tag="02 • INDEX F&O" badge="1–2 Setups / Day"
            title="INSIIGHT OPTION – INDEX"
            desc="Focused on NIFTY / BANKNIFTY / FINNIFTY / SENSEX with 1–2 trading ideas per day."
            spec={{ label: "Benchmark", value: "NIFTY / BANKNIFTY" }}
            footNote="Defined Risk Stops"
          />
          <MandateCard
            span="md:col-span-4" tag="03 • STOCK F&O" badge="F&O Segment"
            title="INSIIGHT OPTION – STOCK"
            desc="High-liquidity stock option trading with 1–2 ideas per day, including entry, target, and stop-loss guidance."
            spec={{ label: "Universe", value: "Liquid F&O Equities" }}
            footNote="Strict Trailing SL"
          />
          <MandateCard
            span="md:col-span-4" tag="04 • HEDGED COMBO" badge="Multi-Leg"
            title="INSIIGHT OPTION COMBO – STOCK"
            desc="High-liquidity stock option trading with 1–2 ideas per day, including entry, target, and stop-loss guidance."
            spec={{ label: "Structure", value: "Hedged Spreads" }}
            footNote="Theta + Directional"
          />
          <MandateCard
            span="md:col-span-4" tag="05 • LEVERAGE" badge="NSE Futures"
            title="INSIIGHT FUTURE"
            desc="For risky traders aiming for profits in intraday and positional trading with higher risk tolerance."
            spec={{ label: "Risk Profile", value: "Leveraged Intraday" }}
            footNote="1:2+ Calibrated R:R"
          />

          {/* 11 Intra Pack (dark) */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-white shadow-sm md:col-span-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-cyan-accent">11 • STARTER TRIAL</span>
                <span className="rounded-full border border-red-500/20 bg-primary/20 px-2 py-0.5 font-mono text-xs text-cyan-accent">One-Time Trial</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">INTRA PACK</h3>
              <p className="text-sm font-light leading-snug text-slate-300">
                One-time intraday trading service offering precise calls with controlled risk.
              </p>
              <div className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-800/60 p-2.5 font-mono text-xs">
                <span className="text-slate-400">Trial Delivery</span>
                <span className="font-medium text-secondary-fixed">Dashboard + SMS</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-800 pt-4">
              <span className="font-mono text-xs text-slate-400">Zero Long-Term Lock</span>
              <Link href="/pricing" className="inline-flex items-center gap-1 text-sm font-medium text-cyan-accent transition-all hover:text-white group-hover:translate-x-0.5">
                <span>Details</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <MandateCard
            span="md:col-span-4" tag="06 • CASH TRADING" badge="Hourly"
            title="INSIIGHT CASH"
            desc="Short-term trading on an hourly basis. Buy and sell shares on the same day for quick profits."
            spec={{ label: "Horizon", value: "Hourly to Same-Day" }}
            footNote="Quick Turnaround"
          />
          <MandateCard
            span="md:col-span-4" tag="07 • INTRADAY EQUITY" badge="Intraday"
            title="INSIIGHT CASH – INTRADAY (EQUITY)"
            desc="High-accuracy intraday equity calls backed by research."
            spec={{ label: "Mandate", value: "Zero Overnight Risk" }}
            footNote="NSE Cash"
          />

          <MandateCard
            span="md:col-span-6" tag="08 • EQUITY DELIVERY" badge="Long Term"
            title="INSIIGHT CASH – LONG TERM (EQUITY DELIVERY)"
            desc="Quality long-term equity investments with disciplined research."
            spec={{ label: "Filter Standard", value: "Quality & Clean Debt" }}
            footNote="Wealth Compounding"
          />
          <MandateCard
            span="md:col-span-6" tag="09 • PORTFOLIO ALLOCATION" badge="20–25 Calls"
            title="INSIIGHT EQUITY"
            desc="1-year investment across 20–25 calls from 8–10 sectors for a diversified equity portfolio."
            spec={{ label: "Diversification", value: "8–10 Key Sectors" }}
            footNote="1-Year Model"
          />
        </div>
      </section>

      {/* Regulatory protocol strip */}
      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="rounded-2xl border border-slate-200/70 bg-surface-container-low p-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-[18px]">shield</span>
              <span>SEBI Delivery Protocol:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["1. KYC & Suitability", "2. Transparent Agreement", "3. Live Dashboard + SMS Dispatch"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-sm text-slate-800 shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                    <span className="font-mono text-xs">{step}</span>
                  </div>
                  {i < arr.length - 1 && <span className="hidden text-slate-300 sm:inline">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-2">
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-6 rounded-3xl border border-dark-border bg-dark-surface p-4 sm:p-6 md:p-8 text-white shadow-xl md:flex-row">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-accent">Institutional Desk Concierge</span>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Need guidance choosing the right research desk?</h3>
            <p className="max-w-xl text-sm font-light text-slate-400">
              Speak with our principal desk analyst to evaluate allocation models and historical mandate parameters.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="hidden text-right font-mono text-sm sm:block">
              <span className="block font-mono text-xs text-slate-400">Direct Priority Desk</span>
              <a className="font-medium text-white transition-colors hover:text-cyan-accent" href="tel:+919575519739">+91 95755 19739</a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-dark-surface shadow-md transition-all hover:bg-slate-100"
            >
              Schedule Advisory Briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
