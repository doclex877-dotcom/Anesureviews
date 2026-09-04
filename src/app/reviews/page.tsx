import { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "All Guides",
  description: `Every tech, gadget, and smart-living buying guide from ${site.name}.`,
};

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const filtered = category
    ? articles.filter((a) => a.category === category)
    : articles;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0B0F19]">
          All Guides
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
          {category ? ` in ${category}` : ""} — practical, budget-aware, and written for Southern African readers.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/reviews"
          className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
            !category
              ? "bg-[#0B0F19] text-white"
              : "border border-slate-300 text-slate-600 hover:border-slate-400"
          }`}
        >
          All
        </Link>
        {site.categories.map((c) => (
          <Link
            key={c}
            href={`/reviews?category=${encodeURIComponent(c)}`}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              category === c
                ? "bg-[#0B0F19] text-white"
                : "border border-slate-300 text-slate-600 hover:border-slate-400"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-slate-500">No guides in this category yet — check back soon.</p>
      )}

      <AdSlot />
    </div>
  );
}
