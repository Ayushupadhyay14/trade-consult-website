"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons";

const WHATSAPP_NUMBER = "919424858997";
const DEFAULT_MESSAGE =
  "Hi Alpha Insiight, I'd like to know more about your research subscription plans.";

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 1800);
    const hide = setTimeout(() => setShowTip(false), 6500);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        role="status"
        className={`hidden max-w-[220px] rounded-xl bg-white px-4 py-3 text-sm font-medium text-navy-900 shadow-xl ring-1 ring-black/5 transition-all duration-300 sm:block ${
          showTip
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        Need help choosing a plan?
        <span className="mt-0.5 block text-xs font-normal text-slate-500">
          Chat with us on WhatsApp
        </span>
        <button
          aria-label="Dismiss"
          onClick={() => setShowTip(false)}
          className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 text-[10px] text-white shadow"
        >
          ×
        </button>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Alpha Insiight on WhatsApp"
        onClick={() => setShowTip(false)}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-white sm:h-3.5 sm:w-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />
        </span>
        <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
