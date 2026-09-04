import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
      <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">404</p>
      <h1 className="mt-3 text-3xl font-black text-[#0B0F19]">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-[#0B0F19] px-6 py-3 text-sm font-bold text-white hover:bg-[#2563EB] transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
