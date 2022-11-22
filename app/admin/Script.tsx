'use client';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context';
import AppScript, { AppLoader } from '../script';
export default function Script() {
  const { setIsLoading, isLoading } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoading(true);
    AppLoader();

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const App = AppScript();
      App.init('layout');
    }
  }, [isLoading]);
  return (
    <>
      {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
      <script src="/perfect-scrollbar/perfect-scrollbar.min.js"></script>
      <script src="/mousetrap/mousetrap.min.js"></script>
      <script src="/waves/waves.min.js"></script>
      {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
    </>
  );
}
