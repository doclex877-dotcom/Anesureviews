import Link from "next/link";
import { Article } from "@/lib/types";

const categoryColors: Record<string, string> = {
  "Power & Solar": "bg-amber-100 text-amber-800",
  Smartphones: "bg-blue-100 text-blue-800",
  "Smart Home": "bg-emerald-100 text-emerald-800",
  Audio: "bg-purple-100 text-purple-800",
  Wearables: "bg-pink-100 text-pink-800",
  Computing: "bg-slate-200 text-slate-800",
  "Buying Advice": "bg-cyan-100 text-cyan-800",
};

export default function ArticleCard({ article }: { article: Article }) {
  const colorClass = categoryColors[article.category] ?? "bg-slate-100 text-slate-700";
  return (
    <Link
      href={`/reviews/${article.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-bold ${colorClass}`}>
        {article.category}
      </span>
      <h3 className="mt-3 text-lg font-bold leading-snug text-[#0B0F19] group-hover:text-[#2563EB] transition-colors">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
        {article.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-medium">
        <span>By {article.author}</span>
        <span>{article.readTime}</span>
      </div>
    </Link>
  );
}
