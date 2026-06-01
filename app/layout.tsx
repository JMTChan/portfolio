import type { Metadata } from 'next';
import { Fraunces, Outfit, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jasper Marc Chan — Wix Designer · Velo Developer · Full-Stack Web Developer',
  description:
    'Jasper Marc Chan — Wix Designer, Velo Developer, and AI-Assisted Full-Stack Web Developer based in Davao City, Philippines.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme seeds the "business" palette for the static-export server pass;
    // ThemeProvider reconciles it with the stored preference after hydration.
    <html
      lang="en"
      data-theme="business"
      className={`${fraunces.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
