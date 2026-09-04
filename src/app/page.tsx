import Link from "next/link";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import SafeImage from "@/components/SafeImage";

export default function Home() {
  const latest = articles.slice(0, 6);
  const featured = articles[0];

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Southern Africa&apos;s honest tech guide
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-[#0B0F19] leading-[1.1]">
              Tech advice built for real budgets and real load-shedding.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/reviews"
                className="inline-flex items-center rounded-md bg-[#0B0F19] px-6 py-3 text-sm font-bold text-white hover:bg-[#2563EB] transition-colors"
              >
                Browse all guides
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-md border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 hover:border-slate-400 transition-colors"
              >
                About Anesu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Featured */}
        <section className="py-12 sm:py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#0B0F19]">Latest guide</h2>
          </div>
          <Link
            href={`/reviews/${featured.slug}`}
            className="group grid gap-6 md:grid-cols-5 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-md transition-shadow"
          >
            <div className="md:col-span-3 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-800">
                {featured.category}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black leading-tight text-[#0B0F19] group-hover:text-[#2563EB] transition-colors">
                {featured.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-sm text-slate-400 font-medium">
                <span>By {featured.author}</span>
                <span>&middot;</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
              <SafeImage
                src={featured.heroImage}
                alt={featured.heroImageAlt}
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Link>
        </section>

        <AdSlot />

        {/* Latest grid */}
        <section className="py-8 sm:py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#0B0F19]">Recent guides</h2>
            <Link href="/reviews" className="text-sm font-bold text-[#2563EB] hover:underline">
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 sm:py-12">
          <h2 className="text-2xl font-black text-[#0B0F19] mb-6">Browse by category</h2>
          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4">
            {site.categories.map((c) => (
              <Link
                key={c}
                href={`/reviews?category=${encodeURIComponent(c)}`}
                className="rounded-lg border border-slate-200 px-4 py-4 text-center font-bold text-sm text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </section>

        {/* Why trust us */}
        <section className="py-12 sm:py-16 mb-6">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-10">
            <h2 className="text-2xl font-black text-[#0B0F19]">Why read Anesu Reviews?</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl mb-2">🇿🇼</p>
                <h3 className="font-bold text-[#0B0F19]">Written for this region</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Load-shedding, cross-border shopping, and mobile-money buying — factored into every guide, not bolted on.
                </p>
              </div>
              <div>
                <p className="text-3xl mb-2">🎯</p>
                <h3 className="font-bold text-[#0B0F19]">No inflated specs</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  We explain which numbers on the box actually matter and which are marketing noise.
                </p>
              </div>
              <div>
                <p className="text-3xl mb-2">💸</p>
                <h3 className="font-bold text-[#0B0F19]">Budget-first advice</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Every guide is built around real price tiers, not aspirational flagship gear most readers won&apos;t buy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
