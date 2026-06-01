'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';
import { getContent, portfolio } from '@/lib/portfolio-data';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

export default function Contact() {
  const { mode, isDevMode } = useTheme();
  const c = getContent(mode);
  const id = portfolio.identity;

  // Dev mode adds the Hobbies section (05), so Contact becomes 06 there.
  const index = isDevMode ? '06' : '05';

  const rows = [
    { icon: Mail, label: 'Email', value: id.email, href: `mailto:${id.email}` },
    { icon: Phone, label: 'Phone', value: id.phone, href: `tel:${id.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: id.location, href: null },
    { icon: FileText, label: 'Resume', value: 'View Resume', href: id.resumeUrl },
  ];

  return (
    <section id="contact" className="mx-auto w-full max-w-wrap scroll-mt-24 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHead index={index} title="Contact" slug="contact" sub="Open to work · worldwide" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
              {c.contactHeadline}
            </h3>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">{c.contactLede}</p>
            <a
              href={`mailto:${id.email}`}
              className="group mt-7 inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-colors duration-300 ease-editorial hover:bg-accent-strong"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
            </a>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <dl className="border-t border-border-strong">
            {rows.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
                    <Icon className="h-4 w-4" /> {label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
                </>
              );
              const cls =
                'flex items-center justify-between gap-4 border-b border-border py-4 transition-[padding] duration-300 ease-editorial hover:pl-2';
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${cls} hover:text-accent`}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
