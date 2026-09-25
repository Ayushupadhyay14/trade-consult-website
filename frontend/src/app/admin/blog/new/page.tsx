"use client";

import Link from "next/link";
import AdminGuard from "@/components/AdminGuard";
import BlogPostForm from "@/components/BlogPostForm";

export default function NewBlogPostPage() {
  return (
    <AdminGuard next="/admin/blog/new">
      <section className="bg-slate-50 py-10">
        <div className="container-site space-y-6">
          <Link href="/admin/blog" className="text-sm font-semibold text-brand-600">
            ← Back to posts
          </Link>
          <BlogPostForm />
        </div>
      </section>
    </AdminGuard>
  );
}
