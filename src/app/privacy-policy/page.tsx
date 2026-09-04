import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
      <h1 className="text-4xl font-black text-[#0B0F19]">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

      <div className="mt-8 space-y-6 text-[16px] leading-7 text-slate-700">
        <p>
          This Privacy Policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          collects, uses, and protects information when you visit {site.url}.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Information we collect</h2>
        <p>
          We do not require account registration to read our guides. We may automatically collect
          standard technical information such as your browser type, device type, approximate
          location (derived from IP address), and pages visited, through analytics tools. If you
          contact us directly by email, we collect the information you choose to provide, such as
          your name and email address.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Cookies and advertising</h2>
        <p>
          Like most websites, we may use cookies and similar technologies to understand site usage
          and to display advertising. We intend to use Google AdSense to serve ads on this site.
          Google, as a third-party vendor, uses cookies to serve ads based on a user&apos;s prior
          visits to this and other websites. Google&apos;s use of advertising cookies enables it
          and its partners to serve ads based on your visit to this site and/or other sites on the
          Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            className="font-bold text-[#2563EB] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . You can also review the Network Advertising Initiative&apos;s opt-out page for further
          options.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Third-party links</h2>
        <p>
          Our guides may contain links to third-party retailers and services. We are not
          responsible for the privacy practices or content of those external sites. We encourage
          you to review the privacy policy of any site you visit.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Children&apos;s privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not knowingly collect personal
          information from children.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or request deletion
          of personal data we hold about you. To make such a request, contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-[#2563EB] hover:underline">
            {site.email}
          </a>
          .
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-[#0B0F19] pt-2">Contact us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-[#2563EB] hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
