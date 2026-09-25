"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/payment", label: "Payment" },
  { href: "/contact", label: "Contact Us" },
];

const MORE_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/investor-charter", label: "Investor Charter" },
  { href: "/grievance", label: "Grievance Redressal Mechanism" },
  { href: "/disclaimer", label: "Disclosures & Disclaimer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isMoreActive = MORE_LINKS.some((l) => l.href === pathname);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [moreOpen]);

  return (
    <header className="glass-light sticky top-0 z-40 w-full transition-all duration-300">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-3 px-3 sm:h-32 sm:gap-6 sm:px-6">
        {/* Brand */}
        <Link className="group flex min-w-0 items-center gap-2 sm:gap-3" href="/">
          <span className="relative block h-[88px] w-[88px] shrink-0 transition-transform group-hover:scale-105 sm:h-[112px] sm:w-[112px]">
            <Image
              src="/logo.png"
              alt="Alpha Insight — SEBI Registered Research Analyst"
              fill
              sizes="(max-width: 640px) 88px, 112px"
              className="object-contain"
              priority
            />
          </span>

        </Link>

        {/* Segmented capsule nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-300/40 bg-slate-200/50 p-1 text-[13px] font-medium text-slate-600 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-1.5 transition-all ${pathname === l.href
                ? "bg-white font-semibold text-slate-900 shadow-sm"
                : "hover:text-slate-900"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              className={`flex items-center gap-1 rounded-full px-4 py-1.5 transition-all ${isMoreActive
                ? "bg-white font-semibold text-slate-900 shadow-sm"
                : "hover:text-slate-900"
                }`}
            >
              More
              <span
                className={`material-symbols-outlined text-[16px] transition-transform ${moreOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] w-64 rounded-2xl border border-slate-200 bg-white p-1.5 text-slate-700 shadow-xl">
                {MORE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`block rounded-xl px-3 py-2 text-sm transition-colors ${pathname === l.href
                      ? "bg-slate-100 font-semibold text-slate-900"
                      : "hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 font-mono text-xs font-medium text-slate-700 transition-all hover:bg-slate-200/70 hover:text-slate-950"
            href="tel:+919575519739"
          >
            <span className="material-symbols-outlined text-[15px] text-red-600">call</span>
            +91 95755 19739
          </a>
          <Link
            href="/pricing"
            className="apple-red-gradient inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold text-white shadow-md shadow-red-600/25 transition-all hover:brightness-110 active:scale-95"
          >
            Start Advisory
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="shrink-0 rounded-lg p-1.5 text-slate-700 sm:p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[22px] sm:text-2xl">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <nav className="glass-light max-h-[70vh] overflow-y-auto border-t border-slate-200/60 px-4 py-3 sm:px-6 sm:py-4 lg:hidden">
          <div className="flex flex-col gap-1 sm:gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:px-0 sm:py-0 sm:hover:bg-transparent"
              >
                {l.label}
              </Link>
            ))}
            <span className="mt-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:px-0">
              More
            </span>
            {MORE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:px-0 sm:py-0 sm:hover:bg-transparent"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+919575519739"
              className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 sm:hidden"
            >
              <span className="material-symbols-outlined text-[16px] text-red-600">call</span>
              +91 95755 19739
            </a>
            <Link
              href="/pricing"
              className="apple-red-gradient mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              Start Advisory
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
