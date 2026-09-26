import { useState } from 'react';

interface LogoBadgeProps {
  /** Company or school name; the first letter is used as the monogram fallback. */
  name: string;
  src?: string;
  className?: string;
}

/**
 * Square logo badge. Falls back to a monogram when no logo asset exists, which
 * keeps the timeline alignment intact without placeholder images.
 */
export const LogoBadge = ({ name, src, className }: LogoBadgeProps) => {
  const [failed, setFailed] = useState(false);
  const showMonogram = !src || failed;

  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md bg-navy ring-1 ring-navy-lighter ${className ?? ''}`}
    >
      {showMonogram ? (
        <span
          className="font-mono text-base font-semibold text-accent"
          aria-hidden="true"
        >
          {name.charAt(0)}
        </span>
      ) : (
        <img
          src={src}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
};
