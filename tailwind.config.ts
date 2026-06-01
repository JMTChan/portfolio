import type { Config } from 'tailwindcss';

/**
 * Theme colors are NOT hardcoded here. Each token resolves to a CSS variable
 * (defined in app/globals.css) that is swapped by the `data-theme` attribute
 * on <html>. The `<alpha-value>` placeholder lets Tailwind opacity modifiers
 * (e.g. `bg-surface/70`, `text-accent/40`) keep working.
 *
 * Components therefore use clean native-style utilities — `bg-background`,
 * `text-foreground`, `border-border`, `text-accent` — and the actual color is
 * decided entirely by the active theme.
 */
const themeColor = (cssVar: string) => `rgb(var(${cssVar}) / <alpha-value>)`;

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: themeColor('--color-bg'),
        surface: themeColor('--color-surface'),
        'surface-2': themeColor('--color-surface-2'),
        foreground: themeColor('--color-fg'),
        muted: themeColor('--color-fg-muted'),
        subtle: themeColor('--color-fg-subtle'),
        border: themeColor('--color-border'),
        'border-strong': themeColor('--color-border-strong'),
        accent: themeColor('--color-accent'),
        'accent-strong': themeColor('--color-accent-strong'),
        'on-accent': themeColor('--color-on-accent'),
      },
      fontFamily: {
        // Wired up via next/font in app/layout.tsx
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1240px',
      },
      borderRadius: {
        // Print-like, barely rounded — matches the editorial source design
        DEFAULT: '4px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        tightest: '-0.025em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse2: {
          '0%': { transform: 'scale(0.6)', opacity: '0.45' },
          '80%, 100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        pulse2: 'pulse2 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        blink: 'blink 1s steps(2) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
