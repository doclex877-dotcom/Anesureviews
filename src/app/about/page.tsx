import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name} and why we write buying guides the way we do.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
        About Us
      </span>
      <h1 className="mt-4 text-4xl font-black text-[#0B0F19]">
        Hi, I&apos;m Anesu.
      </h1>

      <div className="mt-8 space-y-5 text-[17px] leading-8 text-slate-700">
        <p>{site.authorBio}</p>
        <p>
          {site.name} started from a simple frustration: most tech review sites are written for
          readers with stable power, unlimited data, and next-day delivery. That&apos;s not the
          reality for most of us in Zimbabwe and the wider region. A power bank review that never
          mentions load-shedding, or a smart home guide that assumes your Wi-Fi router never loses
          power, isn&apos;t actually useful advice — it&apos;s advice written somewhere else and
          copy-pasted here.
        </p>
        <p>
          So every guide on this site is built around the questions we&apos;d actually ask before
          spending our own money: Does this work with EcoCash-friendly local sellers? What happens
          during a 10-hour outage? Is this a real spec advantage or just marketing language on the
          box? We&apos;d rather give you three honest paragraphs than ten padded ones.
        </p>
        <h2 className="text-2xl font-black text-[#0B0F19] pt-4">How we write our guides</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We focus on buying criteria and price-tier trade-offs rather than claiming hands-on lab testing we haven&apos;t done.</li>
          <li>We flag when marketing numbers (wattage, mAh, &quot;flagship-killer&quot; claims) are unreliable and explain what to check instead.</li>
          <li>We factor in regional realities — load-shedding, cross-border shopping, mobile money, and data costs — because they change what &quot;best&quot; actually means here.</li>
          <li>We update guides as pricing, availability, and product generations shift.</li>
        </ul>
        <h2 className="text-2xl font-black text-[#0B0F19] pt-4">Get in touch</h2>
        <p>
          Have a topic you&apos;d like us to cover, or spotted something we got wrong? We&apos;d
          genuinely like to hear from you — visit our{" "}
          <a href="/contact" className="font-bold text-[#2563EB] hover:underline">
            contact page
          </a>{" "}
          to reach out.
        </p>
      </div>
    </div>
  );
}
