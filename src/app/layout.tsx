import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

import { AppHeader } from '../components';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Voicify',
  description: 'Voicify is a platform for voice AI modeling.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
