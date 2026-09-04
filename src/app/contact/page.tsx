import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${site.name} team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-14 sm:py-20">
      <h1 className="text-4xl font-black text-[#0B0F19]">Get in touch</h1>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Questions, corrections, guide requests, or partnership enquiries — we read every message.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block text-lg font-bold text-[#2563EB] hover:underline"
          >
            {site.email}
          </a>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Based in</p>
          <p className="mt-2 text-lg font-bold text-[#0B0F19]">Harare, Zimbabwe</p>
        </div>
      </div>

      <div className="mt-10 rounded-xl bg-slate-50 border border-slate-200 p-6 text-sm text-slate-600 leading-relaxed">
        We typically reply within a few business days. For guide correction requests, please
        include a link to the specific page and a short description of what needs updating.
      </div>
    </div>
  );
}
