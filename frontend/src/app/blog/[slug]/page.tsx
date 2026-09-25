import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apiServer, API_ORIGIN } from "@/lib/api";
import { FALLBACK_POSTS } from "@/lib/data";
import { ensureHtmlContent } from "@/lib/htmlContent";
import { processContent, readingTime } from "@/lib/toc";
import TableOfContents from "@/components/TableOfContents";
import type { BlogPost } from "@/lib/types";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  return apiServer<BlogPost | null>(`/blog/${slug}`, fallback);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const safeContent = ensureHtmlContent(post.content ?? "");
  const { html, toc } = processContent(safeContent);
  const minutes = readingTime(safeContent);
  const dateLabel = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="bg-white">
      {post.cover_image ? (
        <div className="relative h-[38vh] min-h-[280px] w-full overflow-hidden bg-navy-950 sm:h-[46vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              post.cover_image.startsWith("http")
                ? post.cover_image
                : `${API_ORIGIN}${post.cover_image}`
            }
            alt={post.title}
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        </div>
      ) : (
        <div className="h-16 bg-navy-950 sm:h-20" />
      )}

      <div className="container-site max-w-3xl -translate-y-14 sm:-translate-y-20">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-apple-soft sm:p-10">
          <Link href="/blog" className="text-sm font-semibold text-brand-600">
            ← Back to blog
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <span className="font-semibold text-navy-900">{post.author}</span>
            {dateLabel && (
              <>
                <span className="text-slate-300">·</span>
                <span>{dateLabel}</span>
              </>
            )}
            <span className="text-slate-300">·</span>
            <span>{minutes} min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-5xl pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <TableOfContents items={toc} />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="rounded-xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-800">
            Disclaimer: This article is for educational purposes only and is not
            investment advice. Investment in securities market is subject to market
            risks.
          </p>
        </div>
      </div>
    </article>
  );
}
