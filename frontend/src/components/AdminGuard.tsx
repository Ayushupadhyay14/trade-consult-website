"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { User } from "@/lib/types";

export default function AdminGuard({
  next,
  children,
}: {
  next: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    api
      .get<User>("/auth/me", true)
      .then((u) => {
        if (u.role === "admin" || u.role === "analyst") {
          setAuthorized(true);
        } else {
          router.replace("/");
        }
      })
      .catch(() => router.replace(`/admin/login?next=${encodeURIComponent(next)}`));
  }, [router, next]);

  if (!authorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Checking access…</p>
      </div>
    );
  }

  return <>{children}</>;
}
