import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
      <h1 className="text-4xl font-black text-[#0B0F19]">Terms of Use</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

      <div className="mt-8 space-y-6 text-[16px] leading-7 text-slate-700">
        <p>
          By accessing and using {site.url} (&quot;the Site&quot;), you agree to be bound by these
          Terms of Use. If you do not agree with any part of these terms, please do not use the
          Site.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Use of content</h2>
        <p>
          All articles, guides, and original graphics on this Site are the property of{" "}
          {site.name} unless otherwise stated. You may share links to our content, but may not
          republish, copy, or redistribute substantial portions of our articles without prior
          written permission.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Nature of our content</h2>
        <p>
          Our guides are informational buying advice based on publicly available specifications,
          general product categories, and pricing trends. They are not a substitute for
          hands-on testing of any specific unit you purchase, and product specifications,
          availability, and pricing can change after publication. Always verify current details
          with the seller before purchasing.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">No professional advice</h2>
        <p>
          Content related to electrical installations (such as inverters and battery backup
          systems) is general information only and does not replace advice from a qualified,
          licensed electrician. Always use a certified professional for electrical installation
          work.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Limitation of liability</h2>
        <p>
          {site.name} is provided on an &quot;as is&quot; basis. We make reasonable efforts to
          keep our guides accurate and up to date, but we do not guarantee the completeness or
          accuracy of any information on the Site, and we are not liable for any loss or damage
          arising from purchase decisions made based on our content.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Third-party links</h2>
        <p>
          The Site may contain links to third-party retailers, including affiliate links. We do
          not control and are not responsible for the content, policies, or practices of
          third-party sites.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Changes to these terms</h2>
        <p>
          We may revise these Terms of Use at any time. Continued use of the Site after changes
          are posted constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-[#2563EB] hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
