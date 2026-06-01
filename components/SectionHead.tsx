'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeProvider';

interface SectionHeadProps {
  index: string;
  title: string;
  slug: string; // kept for API compatibility; no longer rendered as a path
  sub: string;
}

/**
 * Two refined voices for the same heading:
 *  - business: oversized serif index numeral + serif title (printed journal)
 *  - dev:      compact accent index + serif title with a thin accent rule
 * Both share the serif display face so the site reads as one designer's hand.
 */
export default function SectionHead({ index, title, sub }: SectionHeadProps) {
  const { mode } = useTheme();

  return (
    <div className="mb-12 border-b border-border-strong pb-5">
      <AnimatePresence mode="wait" initial={false}>
        {mode === 'business' ? (
          <motion.div
            key="biz-head"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 sm:grid-cols-[auto_1fr_auto]"
          >
            <span className="font-serif text-4xl font-medium leading-none text-accent">{index}</span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
            <span className="col-span-2 font-mono text-xs uppercase tracking-wider text-subtle sm:col-span-1 sm:text-right">
              {sub}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="dev-head"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm tracking-wider text-accent">{index}</span>
              <span className="h-px w-8 bg-accent/60" />
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
            </div>
            <span className="mt-2 block font-mono text-xs uppercase tracking-wider text-subtle">{sub}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
