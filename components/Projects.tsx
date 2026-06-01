'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeProvider';
import { getContent, getProjects } from '@/lib/portfolio-data';
import SectionHead from './SectionHead';
import Reveal from './Reveal';
import WorkGrid from './WorkGrid';

export default function Projects() {
  const { mode } = useTheme();
  const c = getContent(mode);
  const projects = getProjects(mode);

  return (
    <section id="projects" className="mx-auto w-full max-w-wrap scroll-mt-24 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHead index="04" title={c.projectsTitle} slug="work" sub={c.projectsSub} />
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <WorkGrid items={projects} kind="work" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
