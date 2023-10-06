import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

const baseFont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snap photos and share like never before',
  description: 'Snap photos and share like never before',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={baseFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
