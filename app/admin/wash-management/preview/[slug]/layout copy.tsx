// import '@/styles/dist.css';
import React from 'react';

import './invoice.css';
import Script from './Script';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} <Script />
    </>
  );
}
