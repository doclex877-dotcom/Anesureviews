"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-[#2563EB] transition-colors">
              Home
            </Link>

            {/* Guides dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1 hover:text-[#2563EB] transition-colors"
                aria-expanded={open}
                aria-haspopup="true"
              >
                All Guides
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                  <Link
                    href="/reviews"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-bold text-[#0B0F19] hover:bg-slate-50"
                  >
                    All Guides
                  </Link>
                  <div className="my-1 border-t border-slate-100" />
                  {site.categories.map((c) => (
                    <Link
                      key={c}
                      href={`/reviews?category=${encodeURIComponent(c)}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2563EB]"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-[#2563EB] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#2563EB] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/reviews"
              className="hidden sm:inline-flex items-center rounded-md bg-[#0B0F19] px-4 py-2 text-sm font-bold text-white hover:bg-[#2563EB] transition-colors"
            >
              Browse Guides
            </Link>
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-slate-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4H16M2 9H16M2 14H16" stroke="#0B0F19" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-1 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563EB]"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-2 mb-1 px-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Guides by category
            </p>
            <Link
              href="/reviews"
              onClick={() => setMobileOpen(false)}
              className="block px-1 py-2 text-sm font-bold text-[#0B0F19]"
            >
              All Guides
            </Link>
            {site.categories.map((c) => (
              <Link
                key={c}
                href={`/reviews?category=${encodeURIComponent(c)}`}
                onClick={() => setMobileOpen(false)}
                className="block px-1 py-2 text-sm text-slate-600 hover:text-[#2563EB]"
              >
                {c}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
