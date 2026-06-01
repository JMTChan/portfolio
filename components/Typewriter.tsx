'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  /** ms per character */
  speed?: number;
  /** ms before typing starts */
  startDelay?: number;
  className?: string;
}

/**
 * Types `text` one character at a time with a blinking cursor — a faithful
 * port of the original vanilla hero effect. Honors prefers-reduced-motion by
 * rendering the full string immediately. Re-types whenever `text` changes,
 * so flipping the Reality Toggle re-runs the animation.
 */
export default function Typewriter({
  text,
  speed = 55,
  startDelay = 250,
  className = '',
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? text : '');

  useEffect(() => {
    if (reduce) {
      setShown(text);
      return;
    }
    setShown('');
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(function tick() {
      i += 1;
      setShown(text.slice(0, i));
      if (i < text.length) timer = setTimeout(tick, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay, reduce]);

  return (
    <span className={className}>
      {shown}
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-blink bg-accent"
      />
    </span>
  );
}
