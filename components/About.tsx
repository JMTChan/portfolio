'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeProvider';
import { getContent } from '@/lib/portfolio-data';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

export default function About() {
  const { mode } = useTheme();
  const c = getContent(mode);

  const facts: [string, string][] = [
    ['Based in', 'Davao City, PH'],
    ['Working with', 'Clients worldwide'],
    ['Specialty', mode === 'dev' ? 'Next.js · TypeScript' : 'Wix · Velo · Studio'],
    ['Status', 'Open to work'],
  ];

  return (
    <section id="about" className="mx-auto w-full max-w-wrap scroll-mt-24 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHead index="01" title="About" slug="about" sub={c.headline} />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-[1.7fr_1fr] md:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="font-serif text-2xl leading-snug text-foreground">{c.about[0]}</p>
            {c.about.slice(1).map((p) => (
              <p key={p} className="max-w-[58ch] text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <dl className="border-t border-border-strong">
            {facts.map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between gap-4 border-b border-border py-4 transition-[padding] duration-300 ease-editorial hover:pl-2"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{k}</dt>
                <dd className="text-right text-sm font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
