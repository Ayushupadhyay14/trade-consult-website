"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import AdminGuard from "@/components/AdminGuard";
import BlogPostForm from "@/components/BlogPostForm";
import { api } from "@/lib/api";
import type { BlogPostAdmin } from "@/lib/types";

function EditBlogPost({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPostAdmin | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<BlogPostAdmin>(`/admin/blog/${id}`, true)
      .then(setPost)
      .catch((err) => setError(err instanceof Error ? err.message : "Post not found"));
  }, [id]);

  if (error) return <p className="rounded-lg bg-rose-50 p-4 text-sm text-rose-700">{error}</p>;
  if (!post) return <p className="text-sm text-slate-500">Loading…</p>;

  return <BlogPostForm initial={post} />;
}

export default function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <AdminGuard next={`/admin/blog/${id}/edit`}>
      <section className="bg-slate-50 py-10">
        <div className="container-site space-y-6">
          <Link href="/admin/blog" className="text-sm font-semibold text-brand-600">
            ← Back to posts
          </Link>
          <EditBlogPost id={id} />
        </div>
      </section>
    </AdminGuard>
  );
}
