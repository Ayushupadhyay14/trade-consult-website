import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO: Obsidian Keynote & Liquid Glass ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-white to-[#F5F5F7] pb-14 pt-6 sm:pb-24 sm:pt-10">
        <div className="pointer-events-none absolute -top-4 left-1/2 -z-10 h-[560px] w-[1000px] -translate-x-1/2 bg-gradient-to-tr from-red-200/50 via-rose-100/60 to-transparent blur-[140px]" />
        <div className="pointer-events-none absolute -left-16 top-1/3 -z-10 h-96 w-96 bg-red-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-96 w-96 bg-red-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6">
          {/* Center pill badge */}
          <div className="mb-3 flex justify-center sm:mb-5">
            <div
              className="hero-in glass-pill shadow-apple-soft inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-black/5 px-3 py-1 text-[10px] font-medium text-slate-800 transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-xs"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600 sm:h-2 sm:w-2" />
              </span>
              <span className="font-medium text-slate-700">SEBI Registered Research Analyst</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span className="font-mono font-semibold text-red-700">Reg. INH000020660</span>
              <span className="material-symbols-outlined text-[13px] text-red-600 sm:text-[15px]">verified</span>
            </div>
          </div>

          {/* Headline & subtitle */}
          <div
            className="hero-in mx-auto mb-8 max-w-4xl text-center sm:mb-12"
            style={{ "--hero-delay": "120ms" } as React.CSSProperties}
          >
            <h1 className="mb-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:mb-5 sm:text-6xl lg:text-7xl">
              Engineered for Clarity. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-slate-950 via-red-700 to-red-500 bg-clip-text text-transparent">
                Driven by Alpha.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
              Institutional-grade technical market research, disciplined risk
              allocations, and pure execution signals delivered directly to your live
              dashboard, SMS and WhatsApp.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-7 sm:gap-3.5">
              <Link
                href="/services"
                className="apple-red-gradient flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:shadow-red-600/50 hover:brightness-110 active:scale-95 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
              >
                <span>Explore 12 Research Services</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_downward</span>
              </Link>
              <Link
                href="/disclosure"
                className="shadow-apple-soft flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950 px-4 py-2.5 text-[11px] font-semibold text-white transition-all hover:bg-slate-900 active:scale-95 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="material-symbols-outlined text-[16px] text-red-400 sm:text-[18px]">verified_user</span>
                <span>Verify SEBI Mandate</span>
              </Link>
            </div>
          </div>

          {/* 3D spatial hardware stage */}
          <div
            className="hero-in relative -mx-3 max-w-6xl pb-6 sm:mx-auto"
            style={{ "--hero-delay": "240ms" } as React.CSSProperties}
          >
            <div className="group relative overflow-hidden rounded-none border border-white/15 bg-gradient-to-b from-slate-900 via-[#121316] to-[#0A0C10] p-3 shadow-2xl sm:rounded-3xl sm:p-5 mb-5">
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-red-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#0A0B0E] shadow-inner">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddkKtn2KalRbFzasXm_NiJNmHpfqqrvmufO0FmuO9UMUdn1Bhv03JSwTiJHSZ1oRLrcl0ukJINdbVT-MSLBtFiv2IfHb-IDi7vShAFz5kPunrh_uWOVwelJmDJ1pACE7G2Ik-bmLeGax9i3bFs_SPIwv8FIiLvIyi8gMKhE_aE9yVg1M4VbjaZ17oU-I7qDNj-oyQBBYdQRfxJOnNJAlNknRVR9hP9DWXKXCgkNz7778S_4XGYfyzUA"
                  alt="3D spatial hardware financial trading station"
                  className="h-full w-full origin-center scale-[1.01] transform object-cover object-center opacity-90 transition-transform duration-700 ease-out group-hover:scale-100"
                />

                {/* Floating glass: signal matrix */}
                <div className="glass-dark shadow-apple-dark absolute left-5 top-5 hidden max-w-xs transform rounded-2xl border border-red-400/30 p-4 backdrop-blur-xl transition-transform duration-500 group-hover:scale-105 sm:block">
                  <div className="mb-2 flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-red-300">Signal Matrix</span>
                    </div>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-400">98.4% Confidence</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400">Target Ratio</span>
                      <span className="text-[11px] font-bold text-white">1 : 2.8+ R:R</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400">Trailing SL</span>
                      <span className="text-[11px] font-medium text-red-300">Dynamic Breakeven</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400">Model Desk</span>
                      <span className="text-[11px] font-semibold text-emerald-400">NIFTY Alpha 24K</span>
                    </div>
                  </div>
                </div>

                {/* Floating glass: telecom stream */}
                <div className="glass-dark shadow-apple-dark absolute right-5 top-5 hidden max-w-xs transform rounded-2xl border border-emerald-400/30 p-4 backdrop-blur-xl transition-transform duration-500 group-hover:scale-105 sm:block">
                  <div className="mb-2 flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-300">Telecom Stream</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-white">&lt; 320ms</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="text-slate-400">Carrier Gateway</span>
                      <span className="font-medium text-red-300">Priority High-SLA</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="text-slate-400">Regulatory Seal</span>
                      <span className="font-semibold text-emerald-400">SEBI Verified</span>
                    </div>
                  </div>
                </div>

                {/* Floating glass: execution ticker */}
                <div className="glass-dark shadow-apple-dark absolute bottom-4 left-1/2 mx-auto flex w-auto max-w-lg -translate-x-1/2 items-center gap-3.5 rounded-2xl border border-white/15 px-4 py-2.5 backdrop-blur-xl">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-red-400/30 bg-red-500/20 text-red-300">
                    <span className="material-symbols-outlined text-[18px]">candlestick_chart</span>
                  </div>
                  <div className="text-left font-mono">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-red-300">Real-Time Intraday &amp; Swing Execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-pod telemetry strip — sits below the image, on the light page background */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                { label: "Coverage Scope", icon: "grid_view", value: "12 Research Services", sub: "Equity, Derivatives, Cash & MCX" },
                { label: "Signal Protocol", icon: "sms", value: "Live Dashboard + SMS", sub: "Zero social lag, bypasses chats", accent: true },
                { label: "Execution Discipline", icon: "tune", value: "Strict SL & 1:2.8+ Targets", sub: "Pre-calculated mathematical R:R" },
                { label: "Regulatory Mandate", icon: "verified_user", value: "INH000020660", sub: "SEBI RA • Fiduciary Compliance", mono: true },
              ].map((m) => (
                <div key={m.label} className="glass-light shadow-apple-soft rounded-xl border border-slate-200/70 p-2.5 transition-all hover:bg-white sm:rounded-2xl sm:p-4">
                  <div className="mb-1 flex items-center justify-between gap-1">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px]">{m.label}</span>
                    <span className="material-symbols-outlined text-[14px] text-red-600 sm:text-[16px]">{m.icon}</span>
                  </div>
                  <span className={`block break-words text-xs font-bold sm:text-lg ${m.accent ? "text-red-700" : "text-slate-900"} ${m.mono ? "font-mono" : ""}`}>{m.value}</span>
                  <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-[11px]">{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DELIVERY SPOTLIGHT: Panoramic Triple-Visual Stream ============ */}
      <section className="relative overflow-hidden bg-slate-950 py-8 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 bg-red-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-96 w-96 bg-red-600/10 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mx-auto mb-8 sm:mb-16 max-w-3xl text-center">
            <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-widest text-red-400">
              Delivery Infrastructure
            </span>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Panoramic Triple-Visual Stream
            </h2>
            <p className="mt-4 text-base font-normal text-slate-400 sm:text-lg">
              Dedicated high-precision transmission architecture engineered for Indian
              equity, derivative, and commodity execution.
            </p>
          </div>

          <div className="-mx-6 grid grid-cols-1 gap-4 sm:mx-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
            {[
              {
                title: "Instant DLT SMS",
                badge: "<350ms Transmission",
                badgeCls: "border-red-400/20 bg-red-500/10 text-red-300",
                img: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=900&auto=format&fit=crop",
                alt: "Trading alert delivered instantly to a phone",
                objectPos: "object-right",
                desc: "Whitelisted regulatory delivery bypassing social media delays.",
              },
              {
                title: "Quant Screening",
                badge: "1:2.8+ Calibrated R:R",
                badgeCls: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
                img: "https://images.unsplash.com/photo-1738737271801-d404a575d870?q=80&w=900&auto=format&fit=crop",
                alt: "Tablet displaying a live candlestick chart",
                objectPos: "object-center",
                desc: "Real-time mathematical filter for strike skew and high-probability setups.",
              },
              {
                title: "MCX Resource Desk",
                badge: "Global Macro Sync",
                badgeCls: "border-amber-400/20 bg-amber-500/10 text-amber-300",
                img: "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=900&auto=format&fit=crop",
                alt: "Gold bullion — MCX commodities desk",
                objectPos: "object-center",
                desc: "Macro-aligned evening volatility setups in crude oil and precious metals.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="reveal glass-dark shadow-apple-dark group flex flex-col overflow-hidden rounded-none border-x-0 border-white/10 p-4 transition-all duration-300 hover:-translate-y-1 sm:rounded-3xl sm:border-x sm:p-5"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl border border-white/15">
                  <img
                    src={c.img}
                    alt={c.alt}
                    className={`h-full w-full ${c.objectPos} object-cover transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{c.title}</h3>
                  <span className={`w-fit rounded-full border px-3 py-1 font-mono text-[11px] ${c.badgeCls}`}>
                    {c.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENTO: ADVISORY DESKS ============ */}
      <section className="bg-[#F5F5F7] py-10 sm:py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mb-6 sm:mb-12 flex flex-col gap-3 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-red-700">
                Advisory Architecture
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Institutional Discipline. <br className="hidden sm:inline" />
                10 Specialized Desks.
              </h2>
            </div>
            <p className="max-w-md text-sm font-normal text-slate-600 sm:text-base">
              Every client objective is unique. Choose from segmented advisory suites
              engineered strictly according to capital size, risk tolerance, and time
              horizon.
            </p>
          </div>

          {/* Segmented switcher */}
          <div className="no-scrollbar mb-6 flex items-center gap-2 overflow-x-auto pb-4 sm:mb-8">
            {["All Desks (10)", "Equity & Delivery", "Cash Intraday", "F&O Derivatives", "MCX Commodities"].map((label, i) => (
              <button
                key={label}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold shadow-apple-soft transition-colors ${
                  i === 0 ? "bg-slate-950 text-white shadow-sm" : "glass-light text-slate-700 hover:text-slate-950"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="reveal grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
            {/* Equity — big card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-8">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-100/60 blur-3xl transition-all group-hover:bg-red-200/40" />
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-red-600">Wealth Compounding</span>
                    <h3 className="text-2xl font-bold text-slate-950">Insiight Equity</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[11px] font-medium text-slate-700">1-Year Horizon</span>
                    <span className="rounded-full border border-red-200/60 bg-red-50 px-3 py-1 font-mono text-[11px] font-medium text-red-700">Risk Controlled</span>
                  </div>
                </div>
                <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  A 1-year disciplined investment programme recommending 20 to 25
                  high-conviction research calls across 8 to 10 resilient growth
                  sectors. Crafted for structural capital appreciation without
                  speculative noise.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:grid-cols-3">
                <div>
                  <span className="mb-0.5 block font-mono text-[11px] uppercase tracking-wider text-slate-400">Portfolio Breadth</span>
                  <span className="font-mono text-lg font-bold text-slate-900">20–25 Scrips</span>
                </div>
                <div>
                  <span className="mb-0.5 block font-mono text-[11px] uppercase tracking-wider text-slate-400">Sector Allocation</span>
                  <span className="font-mono text-lg font-bold text-slate-900">8–10 Sectors</span>
                </div>
                <div>
                  <span className="mb-0.5 block font-mono text-[11px] uppercase tracking-wider text-slate-400">Notification</span>
                  <span className="font-mono text-lg font-bold text-red-700">Live Dashboard + SMS</span>
                </div>
              </div>
            </div>

            {/* Cash */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-4">
              <div>
                <div className="mb-6">
                  <span className="rounded-full bg-rose-100/60 px-3 py-1 font-mono text-[11px] text-rose-800">Hourly Intraday</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-950">Insiight Cash</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Active day-trading in high-liquidity cash equities. Buy and sell
                  signals executed on an hourly basis within market hours for sharp
                  momentum gains.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="font-mono text-xs text-slate-500">Execution Velocity</span>
                <span className="font-mono text-xs font-bold text-slate-900">Same Session Square-off</span>
              </div>
            </div>

            {/* NSE Real-Time Feed — image tile */}
            <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6 shadow-apple-dark lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=1200&auto=format&fit=crop"
                alt="NSE real-time equities terminal"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10" />
              <span className="relative w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-red-300 backdrop-blur">
                NSE Real-Time Equities Feed
              </span>
              <span className="relative font-mono text-xs text-slate-300">
                Systematic Index Valuation &amp; Depth Candlesticks
              </span>
            </div>

            {/* Option Index */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-7">
              <div>
                <div className="mb-6">
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[11px] text-slate-700">1–2 Calls / Day</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-950">Option — Index</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Laser focus on NIFTY, BANKNIFTY, FINNIFTY and SENSEX contracts.
                  Strict probability filters applied to strike selection and implied
                  volatility skew.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-indigo-100/60 bg-indigo-50/50 p-3.5 text-indigo-950">
                <span className="font-mono text-xs">Risk Parameter</span>
                <span className="font-mono text-xs font-bold">Hard Stop-Loss Only</span>
              </div>
            </div>

            {/* Option Stock */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-4">
              <div>
                <div className="mb-6">
                  <span className="rounded-full bg-red-100/50 px-3 py-1 font-mono text-[11px] text-red-800">Stock Derivative</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-950">Option — Stock</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  High-liquidity F&amp;O stock options with exact entry, dual profit
                  targets and disciplined trailing exits.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="font-mono text-xs text-slate-500">Ideas</span>
                <span className="font-mono text-xs font-bold text-slate-900">1–2 / Day</span>
              </div>
            </div>

            {/* Future */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-4">
              <div>
                <div className="mb-6">
                  <span className="rounded-full bg-rose-100/60 px-3 py-1 font-mono text-[11px] text-rose-800">Higher Risk</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-950">Insiight Future</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Intraday and positional index &amp; stock futures for traders with a
                  higher risk tolerance.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-rose-100/60 bg-rose-50/50 p-3.5 text-rose-950">
                <span className="font-mono text-xs">Margin</span>
                <span className="font-mono text-xs font-bold">Hedging Advised</span>
              </div>
            </div>

            {/* Options Volatility Core — image tile */}
            <div className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6 shadow-apple-dark lg:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=900&auto=format&fit=crop"
                alt="Options volatility 3D model"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10" />
              <span className="relative w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-red-300 backdrop-blur">
                Options Volatility Core
              </span>
              <div className="relative flex items-center justify-between font-mono text-[11px] text-slate-300">
                <span>Implied Volatility Delta</span>
                <span className="font-bold text-red-300">1:2.8+ Calibrated</span>
              </div>
            </div>

            {/* Cash Intraday */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-6">
              <div>
                <div className="mb-6">
                  <span className="rounded-full bg-red-100/50 px-3 py-1 font-mono text-[11px] text-red-800">Same-Session</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-950">Cash — Intraday (Equity)</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Active day-trading in high-liquidity equities. Buy and sell signals
                  executed within market hours, backed by high-accuracy research.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <span className="text-xs font-medium text-slate-800">Square-Off Discipline</span>
                <span className="font-mono text-xs font-semibold text-red-700">1–2 Calls / Day</span>
              </div>
            </div>

            {/* MCX */}
            <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 sm:p-6 md:p-8 shadow-apple-soft transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg lg:col-span-6">
              <div>
                <div className="mb-6">
                  <span className="rounded-full bg-amber-100/50 px-3 py-1 font-mono text-[11px] text-amber-800">MCX Exchange</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-950">Insiight MCX (Commodities)</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Gold, silver, crude oil and natural gas setups driven by macro dollar
                  trends and volume-weighted breakout indicators.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <span className="text-xs font-medium text-slate-800">Global Correlation</span>
                <span className="font-mono text-xs font-semibold text-slate-900">Intraday &amp; Positional</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-semibold text-red-700 hover:text-red-600">
              See all 12 research services →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US — DARK BENTO ============ */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0B0E] py-10 sm:py-24 text-white">
        <div className="pointer-events-none absolute -top-40 right-10 h-[620px] w-[620px] rounded-full bg-red-500/10 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 left-5 h-[560px] w-[560px] rounded-full bg-red-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mb-6 sm:mb-12 flex flex-col gap-3 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-red-300 shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" /> Why Choose Us • Our Principles
              </div>
              <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built on Principles. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                  Validated by Precision.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm font-normal leading-relaxed text-slate-400 sm:text-base">
              Fiduciary stewardship anchored in disciplined research, zero speculative
              distortion, and strict statutory compliance.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 items-stretch gap-3 sm:gap-6 lg:grid-cols-12">
            {/* Mission & vision */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#121316] p-4 transition-all duration-300 hover:-translate-y-1 sm:p-6 md:p-8 lg:p-10 shadow-apple-dark lg:col-span-8">
              <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-gradient-to-bl from-red-500/20 via-rose-500/10 to-transparent opacity-80 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-red-300">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-red-400" />
                    Mission &amp; Vision
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-red-300">
                    SEBI RA Regulations, 2014
                  </span>
                </div>
                <h3 className="mb-6 max-w-2xl text-xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  Engineered for Capital Preservation &amp; Disciplined Growth
                </h3>
                <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                    <div className="mb-2 font-mono text-xs font-semibold uppercase text-red-400">
                      Our Mission
                    </div>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                      To grow the client&rsquo;s portfolio consistently and educate them
                      about risk management and the basics of trading &amp; investment,
                      regularly.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                    <div className="mb-2 font-mono text-xs font-semibold uppercase text-red-400">
                      Our Vision
                    </div>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                      Our approach is built to make Alpha Insiight one of Asia&rsquo;s
                      leading research brands — known for transparency, discipline and
                      professional advice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span className="font-mono text-xs text-slate-400">
                  Individual Research Analyst Desk • Regulated Under SEBI (RA) Regulations, 2014
                </span>
                <Link href="/about" className="font-mono text-xs font-semibold text-red-300 transition-colors hover:text-white">
                  Desk Profile
                </Link>
              </div>
            </div>

            {/* SEBI rigor */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#16181d] p-4 transition-all duration-300 hover:-translate-y-1 sm:p-6 md:p-8 shadow-apple-dark lg:col-span-4">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-red-500/10 blur-2xl transition-all group-hover:bg-red-500/20" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-red-300">
                    Compliance First
                  </span>
                </div>
                <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-red-400">
                  Fiduciary Qualification
                </div>
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">SEBI-Registered Research</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  Every call is authored by a SEBI-registered research analyst, published
                  with full disclosure and compliance under RA Regulations, 2014.
                </p>
              </div>
              <div className="relative z-10 space-y-2.5">
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="font-mono text-xs text-slate-400">SEBI Registration</span>
                  <span className="font-mono text-xs font-bold text-white">Active Since 2025</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="font-mono text-xs text-slate-400">Certification</span>
                  <span className="font-mono text-xs font-bold text-red-300">NISM Certified Desk</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="font-mono text-xs text-slate-400">SEBI License</span>
                  <span className="font-mono text-xs font-bold text-red-300">INH000020660</span>
                </div>
              </div>
            </div>

            {/* Support / delivery */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#16181d] p-4 sm:p-6 md:p-8 shadow-apple-dark lg:col-span-6">
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-red-500/10 blur-3xl transition-all group-hover:bg-red-500/20" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="rounded-full border border-red-400/20 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-red-300">
                    Always On
                  </span>
                </div>
                <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-red-400">
                  Direct Delivery Architecture
                </div>
                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">24/7 Support &amp; Real-Time Delivery</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  Calls reach your live dashboard instantly — with SMS and WhatsApp as
                  backup, and a real grievance ticketing system, not just a static page.
                </p>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-slate-400">Channel Delivery</span>
                  <span className="font-mono text-base font-bold text-white">Live Dashboard</span>
                  <span className="mt-0.5 block text-[11px] text-red-400">+ SMS &amp; WhatsApp</span>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-slate-400">Support</span>
                  <span className="font-mono text-base font-bold text-white">24/7 Available</span>
                  <span className="mt-0.5 block text-[11px] text-emerald-400">Tracked Grievance SLA</span>
                </div>
              </div>
            </div>

            {/* Risk discipline */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#16181d] p-4 sm:p-6 md:p-8 shadow-apple-dark lg:col-span-6">
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-red-500/10 blur-3xl transition-all group-hover:bg-red-500/20" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="rounded-full border border-red-400/20 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-red-300">
                    Mathematical Edge
                  </span>
                </div>
                <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-red-300">
                  Capital Stewardship
                </div>
                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">Disciplined Risk Planning</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  Every call ships with a defined stop-loss and target. Capital
                  protection comes before profit — no exceptions.
                </p>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-slate-400">Target Asymmetry</span>
                  <span className="font-mono text-base font-bold text-white">1 : 2.8+ R:R</span>
                  <span className="mt-0.5 block text-[11px] text-red-400">Statistical Edge</span>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-slate-400">SL Protocol</span>
                  <span className="font-mono text-base font-bold text-white">Hard Stop-Loss</span>
                  <span className="mt-0.5 block text-[11px] text-red-300">Capital Preservation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="border-y border-slate-200/70 bg-white py-10 sm:py-24" id="methodology">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mx-auto mb-8 sm:mb-16 max-w-3xl text-center">
            <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-widest text-red-600">
              Systematic Engineering
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Why Professional Advisory Matters
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Unsystematic retail trading leads to emotional drawdown. Alpha Insiight
              replaces speculation with disciplined research rules.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-5">
            {[
              { n: "01", tag: "DISCIPLINE", title: "Risk Minimization", desc: "Pre-calculated risk-to-reward ratios ensure a single trade never imperils overall portfolio capital." },
              { n: "02", tag: "EXPERTISE", title: "Professional Insight", desc: "Technical patterns, liquidity zones and multi-timeframe chart confirmation on every call." },
              { n: "03", tag: "INTEGRITY", title: "Regulatory Trust", desc: "Zero guaranteed returns or profit-sharing. Fully compliant with SEBI RA Regulations." },
              { n: "04", tag: "DISPATCH", title: "Direct Execution", desc: "Live dashboard delivery guarantees direct access with zero social-channel distraction." },
              { n: "05", tag: "PSYCHOLOGY", title: "Stress-Free Alpha", desc: "Systematic, rules-based research removes emotional bias, FOMO and revenge trading." },
            ].map((p, i) => (
              <div
                key={p.n}
                className="reveal shadow-apple-soft rounded-2xl border border-black/5 bg-[#F5F5F7] p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="mb-3 block font-mono text-xs font-bold text-red-600">{p.n} / {p.tag}</span>
                <h4 className="mb-2 text-base font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* R:R gauge */}
          <div className="relative mt-12 flex flex-col items-center justify-between gap-5 sm:gap-8 md:gap-10 overflow-hidden rounded-3xl bg-slate-950 p-4 sm:p-8 lg:p-12 text-white shadow-2xl lg:flex-row">
            <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-red-500/10 blur-3xl" />
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-red-400">
                <span className="material-symbols-outlined text-[16px]">tune</span>
                Asymmetric Risk Strategy
              </div>
              <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Designed to protect during drawdowns and scale during momentum runs.
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Every idea originates from a structured risk thesis. When we are wrong,
                losses remain strictly controlled; when the market trends, trailing
                parameters extract maximum alpha.
              </p>
            </div>
            <div className="glass-dark shadow-apple-dark flex w-full flex-col items-center justify-center rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 text-center lg:w-80">
              <span className="mb-3 font-mono text-[11px] uppercase tracking-widest text-slate-400">Average Target Profile</span>
              <svg aria-label="Risk to Reward Ratio Gauge" className="mb-2 h-auto w-40 overflow-visible" viewBox="0 0 200 120">
                <path className="text-slate-800" d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="14" />
                <path className="text-red-400" d="M 20 100 A 80 80 0 0 1 155 45" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="14" />
                <circle className="text-white" cx="155" cy="45" fill="currentColor" r="6" />
                <text className="fill-white font-mono text-2xl font-bold" textAnchor="middle" x="100" y="95">1 : 2.8</text>
                <text className="fill-slate-400 font-mono text-[9px] uppercase tracking-wider" textAnchor="middle" x="100" y="112">Risk to Reward</text>
              </svg>
              <span className="font-mono text-xs font-medium text-red-300">Asymmetric Upside Bias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-[#F5F5F7] py-8 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mb-6 sm:mb-12 flex flex-col gap-3 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-widest text-red-600">
                Verified Experience
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Trusted by Serious Market Participants
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-500">Feedback from active advisory subscribers</span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2">
            {[
              {
                quote: "We engaged with Alpha Insiight to help us navigate a challenging period of growth and expansion. Their team provided invaluable insight and strategic guidance.",
                name: "Verified Subscriber",
                role: "Advisory Client",
              },
              {
                quote: "I have invested my savings on the advice of Alpha Insiight's advisors and they gave me a great outcome.",
                name: "Verified Subscriber",
                role: "Advisory Client",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="reveal shadow-apple-soft flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 md:p-8"
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                    ))}
                  </div>
                  <p className="text-base italic leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-xs font-bold text-slate-900">{t.name}</span>
                  <span className="font-mono text-xs text-red-700">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPLIANCE / STATUTORY CARD ============ */}
      <section className="border-t border-slate-200/80 bg-white py-8 sm:py-20" id="compliance">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0B0E] p-4 sm:p-8 lg:p-12 text-white shadow-2xl">
            <div className="flex flex-col items-start justify-between gap-5 sm:gap-8 md:gap-12 lg:flex-row">
              <div className="flex flex-col gap-3 sm:gap-6 lg:w-1/2">
                <div className="flex items-center gap-4">
                  <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white sm:h-12 sm:w-12">
                    <Image src="/logo.jpeg" alt="Alpha Insight logo" fill sizes="48px" className="object-contain" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">Alpha Insiight</h3>
                    <div className="flex items-center gap-2 font-mono text-xs text-red-400">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      SEBI Reg. No. INH000020660
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Sole Proprietor / Analyst:</span>
                    <span className="font-medium text-white">Harshit Kumar Singh</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Entity Classification:</span>
                    <span className="font-medium text-white">SEBI Registered Research Analyst</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Signal Delivery Route:</span>
                    <span className="font-medium text-red-400">Dashboard, Official SMS &amp; WhatsApp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Certification Standards:</span>
                    <span className="font-medium text-white">NISM Certified</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white">Registered Office Desk:</p>
                  <p className="font-sans leading-relaxed text-slate-400">
                    206 Jobat Apartment, 12/3 Old Palasiya, Indore, Madhya Pradesh — 452018
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2 font-mono">
                    <a className="flex items-center gap-1.5 text-red-300 transition-colors hover:text-red-400" href="mailto:info@alphainsiight.com">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                      info@alphainsiight.com
                    </a>
                    <a className="flex items-center gap-1.5 text-white transition-colors hover:text-red-400" href="tel:+919575519739">
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      +91 95755 19739
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 lg:w-1/2">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <span className="material-symbols-outlined text-[18px]">warning</span>
                    Mandatory Statutory Regulatory Disclaimer
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-slate-300">
                    &ldquo;Investment in securities market are subject to market risks. Read
                    all the related documents carefully before investing. Registration
                    granted by SEBI, enlistment as RA with exchange and certification from
                    NISM in no way guarantee performance of the Research Analyst or provide
                    any assurance of returns to investors.&rdquo;
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400">
                    The securities quoted, if any, are for illustration only and are not
                    recommendatory. Stock trading is inherently risky and subscribers agree
                    to assume complete responsibility for their trading decisions.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-slate-300">NISM Certified</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-slate-300">Zero Profit-Sharing</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-slate-300">Investor Charter Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
