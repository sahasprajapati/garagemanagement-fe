'use client';
import { useEffect } from 'react';
import AppScript from './script';
export default function Script() {
  useEffect(() => {
    const App = AppScript();
    App.loader();
    App.init('layout');
  }, []);
  return (
    <>
  {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
  <script src="/perfect-scrollbar/perfect-scrollbar.min.js"></script>
  <script src="/mousetrap/mousetrap.min.js"></script>
  <script src="/waves/waves.min.js"></script>
  {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
  </>
  )
}
