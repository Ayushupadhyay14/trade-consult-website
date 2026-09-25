import type { Metadata } from "next";
import Link from "next/link";
import { apiServer, API_ORIGIN } from "@/lib/api";
import { FALLBACK_POSTS } from "@/lib/data";
import type { BlogPost } from "@/lib/types";

export const metadata: Metadata = { title: "Blog" };
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await apiServer<BlogPost[]>("/blog", FALLBACK_POSTS);

  return (
    <>
      <section className="bg-navy-950 py-10 sm:py-20">
        <div className="container-site">
          <p className="eyebrow">News &amp; Insights</p>
          <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-5xl">Our Blog</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:mt-4 sm:text-lg">
            Market insights, trading psychology and research explainers from our desk.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-8 sm:py-16">
        <div className="container-site grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="card reveal group flex flex-col overflow-hidden !p-0"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              {p.cover_image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.cover_image.startsWith("http") ? p.cover_image : `${API_ORIGIN}${p.cover_image}`}
                  alt={p.title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-40 items-center justify-center bg-navy-900 text-4xl">
                  📊
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {p.published_at
                    ? new Date(p.published_at).toLocaleDateString("en-IN", {
                        day: "numeric", month: "long", year: "numeric",
                      })
                    : "Draft"}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-navy-900 group-hover:text-brand-600">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-brand-600">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
