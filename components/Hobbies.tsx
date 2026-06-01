'use client';

import { useTheme } from '@/context/ThemeProvider';
import { portfolio } from '@/lib/portfolio-data';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import WorkGrid from './WorkGrid';

export default function Hobbies() {
  const { isDevMode } = useTheme();

  // Hobbies are a dev-side thing; hide the whole section in business mode.
  if (!isDevMode) return null;

  return (
    <section id="hobbies" className="mx-auto w-full max-w-wrap scroll-mt-24 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHead index="05" title="Hobbies" slug="hobbies" sub="Things I build for fun" />
      </Reveal>

      <WorkGrid items={portfolio.hobbies} kind="hobby" />
    </section>
  );
}
