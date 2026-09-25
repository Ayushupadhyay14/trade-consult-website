import type { Metadata } from "next";
import { apiServer } from "@/lib/api";
import { FALLBACK_PLANS } from "@/lib/data";
import type { Plan } from "@/lib/types";
import PricingCatalog from "@/components/PricingCatalog";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, flat-fee research subscription plans. No hidden charges, no profit-sharing.",
};

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const plans = await apiServer<Plan[]>("/plans", FALLBACK_PLANS);

  return (
    <div className="relative w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[360px] w-[850px] -translate-x-1/2 bg-gradient-to-b from-primary/10 via-cyan-accent/5 to-transparent blur-3xl" />

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-3 pb-8 pt-6 text-center sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
        <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-on-surface-variant sm:text-xs">
          SEBI Reg. INH000020660
        </span>

        <h1 className="mt-2 max-w-4xl text-2xl font-semibold tracking-tight text-on-surface sm:mt-3 sm:text-5xl">
          Pricing &amp; Plans
        </h1>

        <p className="mt-2 max-w-xl text-xs text-on-surface-variant sm:mt-3 sm:text-base">
          Flat-fee research subscriptions. No hidden charges, no profit-sharing.
        </p>

        <PricingCatalog plans={plans} />

        <p className="mt-6 max-w-2xl text-xs text-outline sm:mt-10">
          All fees are for research services only. Read our{" "}
          <a href="/disclaimer" className="underline hover:text-on-surface">
            disclaimer
          </a>{" "}
          before subscribing.
        </p>
      </section>
    </div>
  );
}
