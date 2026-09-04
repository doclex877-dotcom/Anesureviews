import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group shrink-0">
      <svg
        width={compact ? 34 : 40}
        height={compact ? 34 : 40}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M22 4L4 44H14L22 24L30 44H40L22 4Z" fill="#0B0F19" />
        <path
          d="M26 4C34 4 40 9 40 16C40 21.5 36.5 25 31 26L40 44H30L23 28"
          fill="none"
          stroke="#2563EB"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-black tracking-tight text-[#0B0F19] text-lg sm:text-xl">
          ANESU <span className="text-[#2563EB]">REVIEWS</span>
        </span>
        {!compact && (
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-slate-500 font-semibold mt-0.5">
            TECH &middot; GADGETS &middot; SMART LIFE
          </span>
        )}
      </span>
    </Link>
  );
}
