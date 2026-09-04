import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import ArticleBody from "@/components/ArticleBody";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.heroImage }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    datePublished: article.date,
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <div>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <nav className="mb-6 text-xs font-medium text-slate-400">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/reviews" className="hover:text-[#2563EB]">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">{article.category}</span>
        </nav>

        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-800">
          {article.category}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-black leading-tight text-[#0B0F19]">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">{article.excerpt}</p>

        <div className="mt-6 flex items-center gap-3 border-y border-slate-200 py-4 text-sm text-slate-500 font-medium">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B0F19] text-xs font-black text-white">
            {article.author.slice(0, 1)}
          </div>
          <div>
            <p className="text-slate-700 font-bold">{article.author}</p>
            <p className="text-xs">
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              &middot; {article.readTime}
            </p>
          </div>
        </div>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="mt-8">
          <ArticleBody blocks={article.blocks} />
        </div>

        <AdSlot />

        {article.faqs && (
          <section className="mt-10">
            <h2 className="text-2xl font-black text-[#0B0F19] mb-5">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {article.faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-slate-200 p-5">
                  <p className="font-bold text-[#0B0F19]">{f.q}</p>
                  <p className="mt-2 text-[15px] leading-7 text-slate-600">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <Link href="/affiliate-disclosure" className="font-bold text-[#2563EB] hover:underline">
              Affiliate &amp; Ad Disclosure:
            </Link>{" "}
            {site.name} may earn a commission from qualifying purchases made through links on this
            page, at no extra cost to you. This never affects the honesty of our recommendations.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-black text-[#0B0F19] mb-6">
              More in {article.category}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
