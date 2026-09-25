import type { BlogPost, Plan } from "./types";

/** Static fallback content so public pages render even when the API is down. */

export const FALLBACK_PLANS: Plan[] = [
  {
    id: 1, code: "INSIIGHT-360", name: "Insiight 360", category: "combo",
    description: "An exhaustive annual allocation umbrella across NSE equities, index options, stock derivatives and MCX commodity desks.",
    price_paise: 11800000, duration_days: 365, calls_per_day: 0,
    features: ["10 Index Options setups", "10 Stock Options setups", "5 Stock Futures calls", "5 Index Futures calls", "5 MCX Options setups", "5 Equity Cash momentum calls", "5 Positional & long-term growth picks"],
  },
  {
    id: 2, code: "INSIIGHT-INTRA-2", name: "Insiight Intra Pack — 2 Call", category: "trial",
    description: "A flat-fee, no-renewal trial pack: 2 intraday high-conviction calls in your preferred segment.",
    price_paise: 199900, duration_days: 7, calls_per_day: 2,
    features: ["2 intraday high-conviction calls", "Choose NSE equity, F&O or MCX", "Instant dashboard + SMS delivery", "Pre-calculated target, SL & trailing revisions"],
  },
  {
    id: 3, code: "INSIIGHT-INTRA-3", name: "Insiight Intra Pack — 3 Call", category: "trial",
    description: "A flat-fee, no-renewal trial pack: 3 intraday research calls with dual targets.",
    price_paise: 399900, duration_days: 7, calls_per_day: 3,
    features: ["3 intraday calls with dual targets", "Equity cash, stock F&O, index options or MCX", "Dashboard + SMS delivery", "Real-time trailing updates & profit alerts"],
  },
  {
    id: 4, code: "INSIIGHT-INDEX-OPTION-M", name: "Insiight Index Option", category: "option",
    description: "NIFTY, BANKNIFTY & SENSEX option setups with strike precision.",
    price_paise: 1700000, duration_days: 30, calls_per_day: 2,
    features: ["1-2 intraday calls daily with strike precision", "Pre-defined dual targets and fixed stop-loss", "Instant dashboard, SMS & email delivery", "24/7 dedicated market support desk"],
  },
  {
    id: 5, code: "INSIIGHT-INDEX-OPTION-Q", name: "Insiight Index Option", category: "option",
    description: "NIFTY, BANKNIFTY & SENSEX option setups with strike precision.",
    price_paise: 4200000, duration_days: 90, calls_per_day: 2,
    features: ["1-2 intraday calls daily with strike precision", "Pre-defined dual targets and fixed stop-loss", "Instant dashboard, SMS & email delivery", "24/7 dedicated market support desk"],
  },
  {
    id: 6, code: "INSIIGHT-STOCK-OPTION-M", name: "Insiight Stock Option", category: "option",
    description: "NSE F&O top-100 universe stock option setups.",
    price_paise: 1500000, duration_days: 30, calls_per_day: 2,
    features: ["1-2 intraday breakout setups daily", "Volume anomaly & IV skew analysis", "Dashboard + SMS with trailing updates", "Daily sector rotation research report"],
  },
  {
    id: 7, code: "INSIIGHT-STOCK-OPTION-Q", name: "Insiight Stock Option", category: "option",
    description: "NSE F&O top-100 universe stock option setups.",
    price_paise: 3200000, duration_days: 90, calls_per_day: 2,
    features: ["1-2 intraday breakout setups daily", "Volume anomaly & IV skew analysis", "Dashboard + SMS with trailing updates", "Daily sector rotation research report"],
  },
  {
    id: 8, code: "INSIIGHT-STOCK-FUTURE-M", name: "Insiight Stock Future", category: "future",
    description: "Intraday & positional high-beta stock futures.",
    price_paise: 1500000, duration_days: 30, calls_per_day: 2,
    features: ["1-2 intraday stock futures setups daily", "Built-in hedging guidelines & risk limits", "Priority dashboard + SMS with exit signals", "Published track record & audits"],
  },
  {
    id: 9, code: "INSIIGHT-STOCK-FUTURE-Q", name: "Insiight Stock Future", category: "future",
    description: "Intraday & positional high-beta stock futures.",
    price_paise: 2500000, duration_days: 90, calls_per_day: 2,
    features: ["1-2 intraday stock futures setups daily", "Built-in hedging guidelines & risk limits", "Priority dashboard + SMS with exit signals", "Published track record & audits"],
  },
  {
    id: 10, code: "INSIIGHT-MCX-COMMODITY-M", name: "Insiight MCX Commodity", category: "mcx",
    description: "Crude, natural gas, gold & silver commodity setups.",
    price_paise: 1500000, duration_days: 30, calls_per_day: 2,
    features: ["1-2 intraday commodity setups daily", "US inventory & macro correlation research", "Evening session coverage (until 11:30 PM)", "Direct phone desk support access"],
  },
  {
    id: 11, code: "INSIIGHT-MCX-COMMODITY-Q", name: "Insiight MCX Commodity", category: "mcx",
    description: "Crude, natural gas, gold & silver commodity setups.",
    price_paise: 3200000, duration_days: 90, calls_per_day: 2,
    features: ["1-2 intraday commodity setups daily", "US inventory & macro correlation research", "Evening session coverage (until 11:30 PM)", "Direct phone desk support access"],
  },
  {
    id: 12, code: "INSIIGHT-EQUITY-CASH-M", name: "Insiight Equity Cash", category: "cash",
    description: "NSE cash swing & momentum calls.",
    price_paise: 1000000, duration_days: 30, calls_per_day: 2,
    features: ["1-2 intraday cash calls daily", "Dashboard, SMS & WhatsApp alerts", "Daily equity research newsletter", "Quarterly results & sector trend updates"],
  },
  {
    id: 13, code: "INSIIGHT-EQUITY-CASH-Q", name: "Insiight Equity Cash", category: "cash",
    description: "NSE cash swing & momentum calls.",
    price_paise: 2200000, duration_days: 90, calls_per_day: 2,
    features: ["1-2 intraday cash calls daily", "Dashboard, SMS & WhatsApp alerts", "Daily equity research newsletter", "Quarterly results & sector trend updates"],
  },
  {
    id: 14, code: "INSIIGHT-COMBO-DESK-M", name: "Insiight Combo Desk", category: "combo",
    description: "Cross-market coverage: equity, F&O and MCX in one desk.",
    price_paise: 7500000, duration_days: 30, calls_per_day: 0,
    features: ["Multi-desk intraday recommendations", "Real-time target & stop-loss revisions", "Priority line with a senior analyst", "Full research newsletter suite access"],
  },
  {
    id: 15, code: "INSIIGHT-COMBO-DESK-Q", name: "Insiight Combo Desk", category: "combo",
    description: "Cross-market coverage: equity, F&O and MCX in one desk.",
    price_paise: 15100000, duration_days: 90, calls_per_day: 0,
    features: ["Multi-desk intraday recommendations", "Real-time target & stop-loss revisions", "Priority line with a senior analyst", "Full research newsletter suite access"],
  },
];

export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1, slug: "navigating-the-ipo-wave",
    title: "Navigating the IPO Wave: How to Evaluate New Listings",
    excerpt: "A practical framework for separating quality IPOs from hype-driven listings.",
    content: "IPO markets reward discipline. Before applying, check the company's revenue growth, promoter holding, peer valuation and the objects of the issue.\n\nAvoid subscribing purely for listing gains in overheated markets.",
    cover_image: null, author: "Research Desk", published_at: "2025-07-10T00:00:00",
  },
  {
    id: 2, slug: "risk-management-basics",
    title: "Risk Management Basics Every Trader Must Follow",
    excerpt: "Position sizing and stop-losses decide survival long before strategy decides profit.",
    content: "Never risk more than 1-2% of your capital on a single trade. A stop-loss is not a suggestion — it is the cost of being wrong.\n\nConsistency beats intensity in markets.",
    cover_image: null, author: "Research Desk", published_at: "2025-07-05T00:00:00",
  },
];

export const SERVICES = [
  { title: "Insiight Cash", desc: "Short-term positional trading in cash segment with disciplined levels.", icon: "cash" },
  { title: "Insiight Cash Intraday", desc: "Buy and sell shares on the same day with high-accuracy intraday research.", icon: "bolt" },
  { title: "Insiight Equity (Long Term)", desc: "1-year delivery portfolio: 20-25 quality calls across 8-10 sectors.", icon: "trend" },
  { title: "Insiight Future", desc: "Intraday and positional futures strategies for higher risk tolerance.", icon: "gauge" },
  { title: "Insiight Option — Index", desc: "NIFTY, BANKNIFTY, FINNIFTY & SENSEX — 1-2 curated ideas daily.", icon: "target" },
  { title: "Insiight Option — Stock", desc: "High-liquidity stock options with entry, target and stop-loss.", icon: "puzzle" },
  { title: "Insiight MCX", desc: "Research-driven commodity trades across bullion, energy and metals.", icon: "coin" },
] as const;

export const WHY_US = [
  { title: "Risk Minimization", desc: "Every call ships with a defined stop-loss. Capital protection comes before profit.", icon: "shield" },
  { title: "SEBI-Registered Research", desc: "Recommendations from a SEBI-registered Research Analyst with full compliance.", icon: "badge" },
  { title: "Verified Track Record", desc: "Every closed call is published publicly with timestamps. No cherry-picking.", icon: "trend" },
  { title: "Real-Time Delivery", desc: "Calls reach your dashboard instantly — plus SMS and WhatsApp as backup.", icon: "clock" },
  { title: "Transparent Pricing", desc: "One flat fee per plan. No hidden charges, no profit-sharing gimmicks.", icon: "receipt" },
  { title: "Grievance Redressal", desc: "A real ticketing system with tracked SLAs — not just a static page.", icon: "headset" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rohit Malhotra",
    role: "Intraday Trader, Pune",
    quote:
      "The discipline of getting an entry, target and stop-loss on every single call changed how I trade. No more guesswork.",
    rating: 5,
  },
  {
    name: "Ankita Sharma",
    role: "Equity Investor, Mumbai",
    quote:
      "Insiight Equity gave my long-term portfolio real structure — sector diversification I wouldn't have built on my own.",
    rating: 5,
  },
  {
    name: "Devendra Patil",
    role: "F&O Trader, Indore",
    quote:
      "What I trust most is the verified track record. Wins and losses, both published. That transparency is rare.",
    rating: 5,
  },
  {
    name: "Karthik Iyer",
    role: "Options Trader, Bangalore",
    quote:
      "Live dashboard alerts are instant — by the time I open WhatsApp the call is already on my screen with full levels.",
    rating: 4,
  },
] as const;

export const FAQS = [
  {
    q: "Are your recommendations SEBI compliant?",
    a: "Yes. Alpha Insiight operates as a SEBI-registered Research Analyst (Reg. No. INH000020660). Every call is issued with a clear rationale, entry, target and stop-loss, and our disclosures are published on the Disclosure and Investor Charter pages.",
  },
  {
    q: "How do I receive calls after subscribing?",
    a: "Instantly on your live dashboard the moment a call is published, with SMS and WhatsApp as backup so you never miss a level.",
  },
  {
    q: "Is there a minimum capital requirement?",
    a: "No fixed minimum, but we recommend sizing positions so that no single trade risks more than 1-2% of your trading capital, in line with the stop-loss on each call.",
  },
  {
    q: "What is your refund policy?",
    a: "Refund eligibility depends on the plan and usage — see our full Refund Policy for the exact terms and timelines.",
  },
  {
    q: "How do I raise a complaint or grievance?",
    a: "Use the Contact Us page to raise a ticket — every grievance gets a tracked ticket number. You can also escalate via SEBI SCORES or the ODR portal, detailed on our Grievance Redressal page.",
  },
] as const;

export const TRUST_MARQUEE = [
  "SEBI Registered Research Analyst",
  "INH000020660",
  "NISM Certified",
  "Verified Public Track Record",
  "Defined Stop-Loss on Every Call",
  "Real-Time Dashboard Delivery",
];

export function formatINR(paise: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(paise / 100);
}
