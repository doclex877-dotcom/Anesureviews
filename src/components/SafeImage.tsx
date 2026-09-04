"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Wraps next/image with a graceful fallback. If the file at `src`
 * is missing (common right after adding a new image before it's
 * been uploaded/pushed), this shows a soft gradient placeholder
 * instead of a blank white box — makes missing images obvious
 * during QA instead of silently invisible.
 */
export default function SafeImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-3xl opacity-40">🖼️</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
