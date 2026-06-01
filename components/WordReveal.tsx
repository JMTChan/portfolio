'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveals text one word at a time, each rising and fading in with a stagger —
 * a port of the original site's headline load animation. Runs on mount, so it
 * replays whenever the element remounts (e.g. when the Reality Toggle flips).
 * Honors prefers-reduced-motion by rendering the text statically.
 */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const word = {
  hidden: { y: '0.5em', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function WordReveal({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  const words = text.split(' ');
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block" aria-hidden>
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}
