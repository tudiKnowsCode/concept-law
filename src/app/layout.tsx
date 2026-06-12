import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import CounterInit from '@/components/CounterInit';
import ParallaxInit from '@/components/ParallaxInit';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashford & Vane LLP | Connecticut Attorneys at Law',
  description:
    'Full-service Connecticut law firm serving Hartford and Stamford since 1991. Personal injury, business law, estate planning, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <ScrollRevealInit />
        <CounterInit />
        <ParallaxInit />
      </body>
    </html>
  );
}
