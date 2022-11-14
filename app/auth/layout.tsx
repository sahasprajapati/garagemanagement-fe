// import '@/styles/dist.css';
import React from 'react';

import './auth.css';
import Script from './Script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script />
    </>
  );
}
