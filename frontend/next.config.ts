import type { NextConfig } from "next";

// Set BACKEND_URL in Vercel env vars (no trailing slash).
// e.g. http://200.97.166.212
const BACKEND_URL = (
  process.env.BACKEND_URL ?? "http://200.97.166.212"
).replace(/\/+$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // All /api/v1/* → backend /api/v1/*
        source: "/api/v1/:path*",
        destination: `${BACKEND_URL}/api/v1/:path*`,
      },
      {
        // /static/* → backend /static/* (uploaded images)
        source: "/static/:path*",
        destination: `${BACKEND_URL}/static/:path*`,
      },
    ];
  },
};

export default nextConfig;
