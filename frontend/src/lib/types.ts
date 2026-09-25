export interface Plan {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  price_paise: number;
  duration_days: number;
  calls_per_day: number;
  features: string[];
}

export interface User {
  id: number;
  phone: string;
  name: string | null;
  email: string | null;
  role: "subscriber" | "analyst" | "admin";
  kyc_status: string;
}

export interface Recommendation {
  id: number;
  plan_id: number;
  symbol: string;
  exchange: string;
  segment: string;
  action: "BUY" | "SELL";
  entry_price: number;
  target_price: number;
  stop_loss: number;
  status: "open" | "target_hit" | "sl_hit" | "closed";
  exit_price: number | null;
  notes: string;
  created_at: string;
  closed_at: string | null;
}

export interface TrackRecord {
  stats: {
    total_closed: number;
    target_hit: number;
    sl_hit: number;
    accuracy_pct: number;
    avg_return_pct: number;
  };
  calls: Recommendation[];
}

export interface Subscription {
  id: number;
  plan_id: number;
  status: string;
  starts_at: string | null;
  ends_at: string | null;
  plan: Plan;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  cover_image: string | null;
  author: string;
  published_at: string | null;
}

export interface BlogPostAdmin extends BlogPost {
  content: string;
  is_published: boolean;
  created_at: string;
}

export interface BlogPostInput {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  author: string;
  is_published: boolean;
}
