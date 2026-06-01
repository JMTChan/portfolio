'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';
import { getContent } from '@/lib/portfolio-data';
import Typewriter from './Typewriter';
import WordReveal from './WordReveal';

const STACK: [string, string][] = [
  ['cms', 'Wix Studio'],
  ['code', 'Velo + TypeScript'],
  ['app', 'Next.js'],
  ['database', 'Postgres · Neon'],
  ['payments', 'Stripe Connect'],
  ['ai', 'Claude Code'],
];

const swap = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Hero() {
  const { mode, isDevMode } = useTheme();
  const c = getContent(mode);

  return (
    <header id="top" className="mx-auto w-full max-w-wrap px-6 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="grid items-end gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        {/* LEFT — swaps wholesale on toggle */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={mode} {...swap}>
              {/* kicker — same elegant treatment in both modes */}
              <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.1em] text-subtle">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse2 rounded-full bg-accent" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {c.kicker}
                <span className="hidden h-px w-10 bg-border-strong sm:inline-block" />
                <span className="hidden sm:inline">Davao City, PH</span>
              </p>

              {/* headline — words rise in on load (serif journal vs tight sans) */}
              <h1
                className={
                  isDevMode
                    ? 'max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tightest text-foreground sm:text-5xl lg:text-6xl'
                    : 'max-w-[15ch] font-serif text-5xl font-semibold leading-[0.98] tracking-tightest text-foreground sm:text-6xl lg:text-7xl'
                }
              >
                <WordReveal text={c.headline} />
              </h1>

              {/* typed accent line — types out with a blinking cursor */}
              <p
                className={
                  isDevMode
                    ? 'mt-4 pb-1 text-xl font-medium leading-[1.15] text-accent sm:text-2xl'
                    : 'mt-4 pb-1 font-serif text-xl italic leading-[1.15] text-accent sm:text-2xl'
                }
              >
                <Typewriter text={c.heroType} startDelay={650} />
              </p>

              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">{c.lede}</p>

              {/* role — static meta line */}
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
                {c.role}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-colors duration-300 ease-editorial hover:bg-accent-strong"
                >
                  View work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 ease-editorial hover:border-accent hover:text-accent"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — colophon, themed but uncluttered */}
        <AnimatePresence mode="wait">
          <motion.aside
            key={mode}
            {...swap}
            className="rounded border border-border-strong bg-surface p-1"
          >
            <div className="flex items-center justify-between px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">
              <span>The Stack</span>
              <span>2026</span>
            </div>
            <dl className="rounded border border-border bg-background">
              {STACK.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${
                    i < STACK.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <dt className="font-mono text-xs text-subtle">{k}</dt>
                  <dd className={`font-medium ${k === 'ai' ? 'text-accent' : 'text-foreground'}`}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </AnimatePresence>
      </div>
    </header>
  );
}
