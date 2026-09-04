import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate & Ad Disclosure",
  description: `How ${site.name} makes money, in plain language.`,
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
      <h1 className="text-4xl font-black text-[#0B0F19]">Affiliate &amp; Ad Disclosure</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

      <div className="mt-8 space-y-6 text-[16px] leading-7 text-slate-700">
        <p>
          In line with standard advertising disclosure practice, here&apos;s a plain-language
          explanation of how {site.name} supports itself.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Display advertising</h2>
        <p>
          This site displays advertisements served through Google AdSense and may in the future
          use other display advertising partners. These ads are selected automatically and are
          not directly chosen or endorsed by our editorial team. Ad placements are visually
          separated from our editorial content.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Affiliate links</h2>
        <p>
          Some links on this site may be affiliate links, meaning we may earn a small commission
          if you make a purchase through them, at no additional cost to you. This potential
          commission never influences which products or categories we choose to write about, or
          the honesty of our buying advice.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Editorial independence</h2>
        <p>
          We do not accept payment in exchange for positive coverage, and advertisers have no
          input into our editorial content or recommendations. Where we discuss specific product
          categories or price tiers, our goal is to give practical, honest buying guidance, not to
          maximize affiliate revenue.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Questions</h2>
        <p>
          If you have questions about a specific piece of content or link on this site, contact us
          at{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-[#2563EB] hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
