import type { Metadata } from 'next';
import './globals.css';
import Background from '@/assets/background';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Mario Correa | Portfolio',
  description: 'Developer, designer, and creator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0c0f13] relative">
        <Background />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
