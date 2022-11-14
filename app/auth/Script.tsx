'use client';
import { useEffect } from 'react';
import AppScript from './script';
export default function Script() {
  useEffect(() => {
    document.body.classList.add("form")
    const App = AppScript();
    App.loader();
    // App.init('layout');
  }, []);
  return (
    <>
  {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
  {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
  </>
  )
}
