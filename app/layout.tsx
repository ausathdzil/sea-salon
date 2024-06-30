import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'SEA Salon',
  description: 'SEA Salon is a salon in Jakarta, Indonesia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        <main className="flex flex-col items-center justify-between w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

