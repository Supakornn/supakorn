import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SITE_CONFIG } from '@/lib/constants';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  icons: {
    icon: '/images/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${spaceGrotesk.className}`}>
        <Navigation />
        <main className="w-full flex-1">
          <div className="mx-auto max-w-4xl px-6 py-12">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
