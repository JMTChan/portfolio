'use client';

import { ArrowUp } from 'lucide-react';
import { portfolio } from '@/lib/portfolio-data';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-wrap flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <span className="font-serif text-base font-semibold text-foreground">
          {portfolio.identity.name}
        </span>
        <span className="font-mono text-xs text-subtle">
          © 2026 · Designed &amp; built by {portfolio.identity.name} · Davao City, PH
        </span>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
