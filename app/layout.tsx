// import '@/styles/dist.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="../src/assets/img/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,600,700"
          rel="stylesheet"
        />
        <link
          href="/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/modern-dark-menu/css/light/plugins.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/modern-dark-menu/css/dark/plugins.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        {children}
        {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
        <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
      </body>
    </html>
  );
}
