'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';
import { portfolio, getContent } from '@/lib/portfolio-data';
import RealityToggle from './RealityToggle';

const LINKS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Work', '#projects'],
  ['Contact', '#contact'],
] as const;

export default function Nav() {
  const { mode } = useTheme();
  const content = getContent(mode);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (open) return setHidden(false);
    setHidden(y > prev && y > 200);
  });

  return (
    <motion.nav
      animate={{ y: hidden ? '-110%' : '0%' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-3.5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            {portfolio.identity.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.08em] text-subtle sm:inline">
            {content.tagline}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-sm text-muted transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-editorial group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <RealityToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="mx-auto flex max-w-wrap flex-col gap-1 px-6 py-3">
              {LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
