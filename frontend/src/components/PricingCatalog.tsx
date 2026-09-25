import type { Plan } from "@/lib/types";
import { formatINR } from "@/lib/data";

/** External checkout links — exactly as used on the live alphainsiight.com/pricing.php */
const CHECKOUT_LINKS: Record<string, string> = {
  "INSIIGHT-INTRA-2": "https://tradeboxlive.com/view/services/69579a568ee1afaf21b888ba",
  "INSIIGHT-INTRA-3": "https://tradeboxlive.com/view/services/69579a568ee1afaf21b888ba",
  "INSIIGHT-EQUITY-CASH-M": "https://tradeboxlive.com/view/services/6957998b8ee1afaf21b8887b",
  "INSIIGHT-EQUITY-CASH-Q": "https://tradeboxlive.com/view/services/6957998b8ee1afaf21b8887b",
  "INSIIGHT-STOCK-FUTURE-M": "https://tradeboxlive.com/view/services/6957981b8ee1afaf21b8850d",
  "INSIIGHT-STOCK-FUTURE-Q": "https://tradeboxlive.com/view/services/6957981b8ee1afaf21b8850d",
  "INSIIGHT-MCX-COMMODITY-M": "https://tradeboxlive.com/view/services/695798d68ee1afaf21b886fa",
  "INSIIGHT-MCX-COMMODITY-Q": "https://tradeboxlive.com/view/services/695798d68ee1afaf21b886fa",
  "INSIIGHT-STOCK-OPTION-M": "https://tradeboxlive.com/view/services/69579b958ee1afaf21b8890d",
  "INSIIGHT-STOCK-OPTION-Q": "https://tradeboxlive.com/view/services/69579b958ee1afaf21b8890d",
  "INSIIGHT-INDEX-OPTION-M": "https://tradeboxlive.com/view/services/69578a408ee1afaf21b83c12",
  "INSIIGHT-INDEX-OPTION-Q": "https://tradeboxlive.com/view/services/69578a408ee1afaf21b83c12",
  "INSIIGHT-COMBO-DESK-M": "https://tradeboxlive.com/view/services/695649bc325d3f3db3dbc10c",
  "INSIIGHT-COMBO-DESK-Q": "https://tradeboxlive.com/view/services/695649bc325d3f3db3dbc10c",
  "INSIIGHT-360": "https://tradeboxlive.com/view/services/695796e68ee1afaf21b881f2",
};

const FAMILIES: { title: string; monthly: string; quarterly: string }[] = [
  { title: "Insiight Equity", monthly: "INSIIGHT-EQUITY-CASH-M", quarterly: "INSIIGHT-EQUITY-CASH-Q" },
  { title: "Insiight Stock Future — Intraday", monthly: "INSIIGHT-STOCK-FUTURE-M", quarterly: "INSIIGHT-STOCK-FUTURE-Q" },
  { title: "Insiight MCX", monthly: "INSIIGHT-MCX-COMMODITY-M", quarterly: "INSIIGHT-MCX-COMMODITY-Q" },
  { title: "Insiight Stock Option", monthly: "INSIIGHT-STOCK-OPTION-M", quarterly: "INSIIGHT-STOCK-OPTION-Q" },
  { title: "Insiight Index Option", monthly: "INSIIGHT-INDEX-OPTION-M", quarterly: "INSIIGHT-INDEX-OPTION-Q" },
  { title: "Insiight Option Combo — Stock", monthly: "INSIIGHT-COMBO-DESK-M", quarterly: "INSIIGHT-COMBO-DESK-Q" },
];

function findPlan(plans: Plan[], code: string) {
  return plans.find((p) => p.code === code);
}

function Card({ plan, periodLabel }: { plan: Plan; periodLabel: string }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-6">
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold text-slate-950 sm:text-2xl">{formatINR(plan.price_paise)}</span>
          <span className="text-xs text-slate-500">+18% GST</span>
        </div>
        <span className="mt-1 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600">
          {periodLabel}
        </span>
        <div className="mt-3 flex flex-col gap-1.5 text-xs text-slate-600 sm:mt-4 sm:text-sm">
          {plan.features.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="mt-0.5 text-red-600">✓</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <a
        href={CHECKOUT_LINKS[plan.code]}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full rounded-full bg-slate-950 py-2 text-center text-xs font-medium text-white transition hover:bg-red-600 sm:mt-5 sm:py-2.5 sm:text-sm"
      >
        Choose Pricing Plan
      </a>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="reveal mt-8 w-full text-left sm:mt-14">
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-red-700">Our Pricing</span>
      <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">{children}</div>
    </section>
  );
}

export default function PricingCatalog({ plans }: { plans: Plan[] }) {
  const flagship = findPlan(plans, "INSIIGHT-360");
  const intra2 = findPlan(plans, "INSIIGHT-INTRA-2");
  const intra3 = findPlan(plans, "INSIIGHT-INTRA-3");

  return (
    <div className="mt-4 w-full">
      {(intra2 || intra3) && (
        <Section title="Insiight Intra Pack">
          {intra2 && <Card plan={intra2} periodLabel="Intra Pack 2 Call" />}
          {intra3 && <Card plan={intra3} periodLabel="Intra Pack 3 Call" />}
        </Section>
      )}

      {FAMILIES.map((f) => {
        const monthly = findPlan(plans, f.monthly);
        const quarterly = findPlan(plans, f.quarterly);
        if (!monthly && !quarterly) return null;
        return (
          <Section key={f.title} title={f.title}>
            {monthly && <Card plan={monthly} periodLabel="Monthly" />}
            {quarterly && <Card plan={quarterly} periodLabel="Quarterly" />}
          </Section>
        );
      })}

      {flagship && (
        <section className="mt-8 w-full text-left sm:mt-14">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-red-700">Insiight Pack</span>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-3xl">Insiight 360</h2>
          <div className="mt-4 max-w-xl rounded-xl border border-red-200 bg-white p-4 sm:mt-6 sm:rounded-2xl sm:p-6">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-slate-950 sm:text-3xl">{formatINR(flagship.price_paise)}</span>
              <span className="text-xs text-slate-500">+18% GST</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{flagship.description}</p>
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-800">
              Minimum Investment: ₹2,00,000
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-slate-600">
              {flagship.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="mt-0.5 text-red-600">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a
              href={CHECKOUT_LINKS[flagship.code]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block w-full rounded-full bg-slate-950 py-2.5 text-center text-sm font-medium text-white transition hover:bg-red-600"
            >
              Choose Insiight 360
            </a>
          </div>
        </section>
      )}

      <div className="mt-14 flex flex-col items-center justify-between gap-3 rounded-2xl bg-slate-50 p-5 text-center sm:flex-row sm:text-left">
        <span className="text-sm text-slate-600">Need help choosing a desk?</span>
        <a href="tel:+919575519739" className="text-sm font-semibold text-red-700 hover:text-red-600">
          +91 95755 19739
        </a>
      </div>
    </div>
  );
}
