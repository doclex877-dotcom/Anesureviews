import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "All Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#2563EB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/reviews"
            className="hidden sm:inline-flex items-center rounded-md bg-[#0B0F19] px-4 py-2 text-sm font-bold text-white hover:bg-[#2563EB] transition-colors"
          >
            Browse Guides
          </Link>
        </div>
        <div className="flex md:hidden gap-5 overflow-x-auto pb-3 text-sm font-semibold text-slate-700 no-scrollbar">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-[#2563EB]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
