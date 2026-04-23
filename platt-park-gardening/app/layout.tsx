import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geist_mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Platt Park Gardening | Denver Luxury Landscape Design',
  description: 'Expert landscape design and maintenance for Denver\'s finest homes in Platt Park and Cherry Creek. Spring cleanup, custom designs, and year-round care.',
  keywords: 'Denver landscaping, garden design, landscape maintenance, Platt Park, Cherry Creek',
  authors: [{ name: 'Platt Park Gardening' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geist_mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
