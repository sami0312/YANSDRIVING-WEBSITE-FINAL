'use client'; // ← make this a Client Component so Header works

import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "Yan's Driving Lessons - Learn to Drive in Mitcham",
  description:
    'Professional driving lessons with 100% DVSA approved instructors in South London. Book your first lesson today with Yans!',
  keywords:
    'driving lessons, driving instructor, South London, DVSA approved, learn to drive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066FF" />
      </head>
      <body>
        {/* Header will now work because layout is a Client Component */}
        <Header />
        {children}
      </body>
    </html>
  );
}
