// import '@/styles/dist.css';
import React from 'react';
import AuthGuard from '../AuthGuard';
import Loader from '../Loader';

import './auth.css';
import Script from './Script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthGuard redirectTo="/admin/dashboard" requiredAuthentication={false}>
        <Loader>{children}</Loader>
        <Script />
      </AuthGuard>
    </>
  );
}
