"use client";

/** SEBI regulatory strip — topmost bar, exactly per mockup. */
export default function TopBar() {
  return (
    <aside
      aria-label="Regulatory Notice"
      className="relative z-50 w-full border-b border-red-900/40 bg-gradient-to-r from-[#7A0303] via-[#C00505] to-[#7A0303] px-3 py-1.5 text-[11px] text-red-50 sm:px-4 sm:py-2 sm:text-xs"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-white sm:gap-1.5 sm:px-2 sm:text-[11px]">
            <span className="h-1 w-1 animate-pulse rounded-full bg-white sm:h-1.5 sm:w-1.5"></span>
            INH000020660
          </span>
          <span className="hidden text-red-100/80 min-[420px]:inline">SEBI Registered Research Analyst:</span>
          <strong className="hidden font-medium text-white min-[420px]:inline">Harshit Kumar Singh</strong>
        </div>
        <div className="hidden items-center gap-6 text-red-100/90 md:flex">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-white">gavel</span>
            Statutory Risk Mandate Adherent
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-white">sms</span>
            Official SMS Gateway Only
          </span>
          <a
            className="flex items-center gap-1 font-mono text-white transition-colors hover:text-red-100"
            href="tel:+919575519739"
          >
            <span className="material-symbols-outlined text-[14px]">call</span> +91 95755 19739
          </a>
        </div>
      </div>
    </aside>
  );
}
