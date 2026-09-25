"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminGuard from "@/components/AdminGuard";
import { api } from "@/lib/api";
import type { BlogPostAdmin } from "@/lib/types";

function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPostAdmin[] | null>(null);
  const [error, setError] = useState("");

  const refresh = () => {
    api
      .get<BlogPostAdmin[]>("/admin/blog", true)
      .then(setPosts)
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load posts"));
  };

  useEffect(refresh, []);

  const remove = async (post: BlogPostAdmin) => {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    try {
      await api.del(`/admin/blog/${post.id}`, true);
      refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete post");
    }
  };

  const togglePublish = async (post: BlogPostAdmin) => {
    try {
      await api.patch(`/admin/blog/${post.id}`, { is_published: !post.is_published }, true);
      refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update post");
    }
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="container-site space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-navy-900">Blog Posts</h1>
          <Link href="/admin/blog/new" className="btn-primary">
            New Post
          </Link>
        </div>

        {error && <p className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}

        <div className="card divide-y divide-slate-100 !p-0">
          {posts === null && <p className="p-6 text-sm text-slate-500">Loading…</p>}
          {posts?.length === 0 && (
            <p className="p-6 text-sm text-slate-500">
              No posts yet. Create your first one.
            </p>
          )}
          {posts?.map((post) => (
            <div key={post.id} className="flex items-center justify-between gap-4 p-5">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="truncate font-semibold text-navy-900 hover:text-brand-600"
                  >
                    {post.title}
                  </Link>
                  <span className={post.is_published ? "badge-green" : "badge-slate"}>
                    {post.is_published ? "Published" : "Draft"}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-slate-500">
                  /blog/{post.slug} · by {post.author}
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center gap-2">
                <button
                  onClick={() => togglePublish(post)}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  {post.is_published ? "Unpublish" : "Publish"}
                </button>
                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Edit
                </Link>
                <button
                  onClick={() => remove(post)}
                  className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AdminBlogListPage() {
  return (
    <AdminGuard next="/admin/blog">
      <AdminBlogList />
    </AdminGuard>
  );
}
