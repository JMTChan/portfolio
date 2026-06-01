'use client';

import { useReducedMotion } from 'framer-motion';
import { portfolio } from '@/lib/portfolio-data';

export default function Marquee() {
  const reduce = useReducedMotion();
  const group = (
    <div className="flex shrink-0 items-center">
      {portfolio.marquee.map((item) => (
        <span key={item} className="flex items-center font-mono text-sm text-subtle">
          <span className="px-6 py-4">{item}</span>
          <span className="text-accent">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-border bg-surface"
    >
      <div className={`flex w-max ${reduce ? '' : 'animate-marquee'}`}>
        {group}
        {group}
      </div>
    </div>
  );
}
