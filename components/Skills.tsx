'use client';

import { useTheme } from '@/context/ThemeProvider';
import { getContent, portfolio } from '@/lib/portfolio-data';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

export default function Skills() {
  const { mode } = useTheme();
  const c = getContent(mode);

  return (
    <section id="skills" className="mx-auto w-full max-w-wrap scroll-mt-24 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHead
          index="02"
          title="Skills & Stack"
          slug="skills"
          sub="Two ecosystems, one consistent craft"
        />
      </Reveal>

      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.skillGroups.map((group, i) => {
          const active = group.label === c.emphasisGroup;
          return (
            <Reveal key={group.label} delay={i * 0.08}>
              <div
                className={`h-full p-6 transition-colors duration-500 ease-editorial ${
                  active ? 'bg-surface-2' : 'bg-background'
                }`}
              >
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  {group.label}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
