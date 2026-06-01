'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

export type Mode = 'business' | 'dev';

interface ThemeContextValue {
  /** true when the "dev" track is active */
  isDevMode: boolean;
  /** convenience string: "dev" | "business" */
  mode: Mode;
  /** flip between the two tracks */
  toggleMode: () => void;
  /** set a specific track */
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-mode';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to "business" (the paper identity). Static export renders this on
  // the server, then the effect below reconciles with any stored preference.
  const [isDevMode, setIsDevMode] = useState(false);

  // Read persisted preference once on mount (guarded for the static-export
  // server pass where `window` does not exist).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Mode | null;
      if (stored === 'dev') setIsDevMode(true);
      else if (stored === 'business') setIsDevMode(false);
    } catch {
      /* ignore unavailable storage */
    }
  }, []);

  // Reflect state onto <html data-theme="..."> so the CSS variables swap,
  // and persist the choice.
  useEffect(() => {
    const mode: Mode = isDevMode ? 'dev' : 'business';
    document.documentElement.setAttribute('data-theme', mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore unavailable storage */
    }
  }, [isDevMode]);

  const toggleMode = useCallback(() => setIsDevMode((v) => !v), []);
  const setMode = useCallback((mode: Mode) => setIsDevMode(mode === 'dev'), []);

  return (
    <ThemeContext.Provider
      value={{ isDevMode, mode: isDevMode ? 'dev' : 'business', toggleMode, setMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}
