import { Block } from "@/lib/types";

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="mb-5 text-[17px] leading-8 text-slate-700">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 mb-4 text-2xl font-black text-[#0B0F19] scroll-mt-24"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-7 mb-3 text-lg font-bold text-[#0B0F19]">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mb-6 space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[17px] leading-7 text-slate-700">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-6 space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[17px] leading-7 text-slate-700">
                    <span className="shrink-0 font-black text-[#2563EB] w-5">{j + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="mb-7 overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0B0F19]">
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-3 text-left font-bold text-white whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-3 align-top text-slate-700 leading-6">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="mb-6 border-l-4 border-[#2563EB] bg-blue-50/60 py-3 pl-5 pr-4 italic text-slate-700"
              >
                &ldquo;{block.text}&rdquo;
                {block.attribution && (
                  <footer className="mt-1 text-sm not-italic font-semibold text-slate-500">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );
          case "tip":
            return (
              <div
                key={i}
                className="mb-7 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-amber-700 mb-1">
                  💡 Anesu&apos;s tip
                </p>
                <p className="text-[15px] leading-7 text-amber-900">{block.text}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
