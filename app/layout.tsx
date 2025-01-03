import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CV Yahor Akunevich',
  description: 'Junior Frontend Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex justify-center w-full ">
          <div className="max-w-screen-lg">{children}</div>
        </div>
      </body>
    </html>
  );
}
