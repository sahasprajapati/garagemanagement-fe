// import '@/styles/dist.css';
import React from 'react';
import AuthGuard from '../AuthGuard';
import Loader from '../Loader';
import Footer from './Footer';
import Header from './Header';
import Script from './Script';
import Sidebar from './Sidebar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthGuard>
        <Loader>
          <Header />
          {/* BEGIN MAIN CONTAINER  */}
          <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            {/* <!--  BEGIN SIDEBAR  --> */}
            <Sidebar />
            {/* <!--  END SIDEBAR  --> */}

            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
              <div className="layout-px-spacing">
                <div className="middle-content container-xxl p-0">
                  {children}
                </div>
              </div>
              {/* <!--  BEGIN FOOTER  --> */}
              <Footer />
              {/* <!--  END FOOTER  --> */}
            </div>
            {/* <!--  END CONTENT AREA  --> */}
          </div>
        </Loader>
        <Script />
      </AuthGuard>
    </>
  );
}
