import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo compact />
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {site.description}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/reviews" className="hover:text-[#2563EB]">All Guides</Link></li>
              <li><Link href="/about" className="hover:text-[#2563EB]">About Anesu</Link></li>
              <li><Link href="/contact" className="hover:text-[#2563EB]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {site.categories.slice(0, 4).map((c) => (
                <li key={c}>
                  <Link
                    href={`/reviews?category=${encodeURIComponent(c)}`}
                    className="hover:text-[#2563EB]"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/privacy-policy" className="hover:text-[#2563EB]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#2563EB]">Terms of Use</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-[#2563EB]">Affiliate &amp; Ad Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Independent buying guides for Southern African readers.</p>
        </div>
      </div>
    </footer>
  );
}
