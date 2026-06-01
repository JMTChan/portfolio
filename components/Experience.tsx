'use client';

import { useTheme } from '@/context/ThemeProvider';
import { portfolio } from '@/lib/portfolio-data';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

export default function Experience() {
  const { mode } = useTheme();

  return (
    <section id="experience" className="mx-auto w-full max-w-wrap scroll-mt-24 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHead index="03" title="Experience" slug="experience" sub="Where the work has been" />
      </Reveal>

      <div className="border-t border-border">
        {portfolio.experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_2fr] md:gap-12">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{job.company}</h3>
                <div className="mt-1 space-y-0.5">
                  {job.periods.map((p) => (
                    <p key={p} className="font-mono text-xs text-subtle">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
                  {job.role}
                </p>
                <ul className="space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
