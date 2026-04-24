import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Martin & Co. — Yard Care for Platt Park",
  description: 'Honest yard care for Platt Park homes. Spring cleanup, mowing, mulch, pruning, snow clearing. One local gardener. 24-hour reply guaranteed.',
  keywords: 'Platt Park gardening, Denver yard care, spring cleanup Denver, lawn mowing Platt Park',
  authors: [{ name: 'Martin Delgado' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
