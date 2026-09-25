"use client";

import { useEffect, useRef } from "react";

// NSE: symbols show a "no real-time data" placeholder on TradingView's free
// widget (NSE real-time distribution needs a paid license). BSE: does not
// have that restriction and quotes the same large-caps within paise of NSE,
// so — same workaround the live alphainsiight.com site uses — stocks are
// quoted on BSE. NIFTY/BANKNIFTY have no BSE equivalent and will still show
// the placeholder; that's a TradingView limitation, not a bug here.
const SYMBOLS = [
  { proName: "NSE:NIFTY", title: "NIFTY 50" },
  { proName: "BSE:SENSEX", title: "SENSEX" },
  { proName: "BSE:RELIANCE", title: "RELIANCE" },
  { proName: "BSE:TCS", title: "TCS" },
  { proName: "BSE:HDFCBANK", title: "HDFC BANK" },
  { proName: "BSE:INFY", title: "INFOSYS" },
  { proName: "BSE:ICICIBANK", title: "ICICI BANK" },
  { proName: "BSE:SBIN", title: "SBIN" },
  { proName: "BSE:ITC", title: "ITC" },
  { proName: "BSE:TATAMOTORS", title: "TATA MOTORS" },
  { proName: "BSE:BAJFINANCE", title: "BAJAJ FINANCE" },
  { proName: "MCX:GOLD1!", title: "GOLD" },
];

/**
 * Free, official TradingView ticker-tape embed — real, live market data,
 * no API key or backend required. Same mechanism used by most Indian
 * research/advisory sites for a live price strip.
 */
export default function StockTicker() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el || el.childElementCount > 0) return;

    const isSmallScreen = window.innerWidth < 640;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: !isSmallScreen,
      isTransparent: false,
      displayMode: isSmallScreen ? "compact" : "adaptive",
      colorTheme: "dark",
      locale: "in",
    });
    el.appendChild(script);
  }, []);

  return (
    <div className="border-b border-white/10 bg-navy-950">
      <div ref={container} className="tradingview-widget-container" />
    </div>
  );
}
