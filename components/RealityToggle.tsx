'use client';

import { Briefcase, Code2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';

export default function RealityToggle() {
  const { isDevMode, toggleMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-pressed={isDevMode}
      aria-label={`Switch to ${isDevMode ? 'business' : 'dev'} mode`}
      title="Toggle reality"
      className="group inline-flex items-center gap-2.5 rounded border border-border-strong bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-colors duration-300 ease-editorial hover:border-accent"
    >
      <span
        className={`hidden items-center gap-1.5 transition-colors sm:inline-flex ${
          !isDevMode ? 'text-accent' : 'text-subtle'
        }`}
      >
        <Briefcase className="h-4 w-4" /> Business
      </span>
      <span aria-hidden className="relative h-5 w-9 rounded-full bg-surface-2 ring-1 ring-border-strong">
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-accent transition-all duration-300 ease-editorial ${
            isDevMode ? 'left-[18px]' : 'left-0.5'
          }`}
        />
      </span>
      <span
        className={`hidden items-center gap-1.5 transition-colors sm:inline-flex ${
          isDevMode ? 'text-accent' : 'text-subtle'
        }`}
      >
        <Code2 className="h-4 w-4" /> Dev
      </span>
      {/* compact label on mobile */}
      <span className="font-mono text-xs uppercase tracking-wider text-subtle sm:hidden">
        {isDevMode ? 'dev' : 'biz'}
      </span>
    </button>
  );
}
