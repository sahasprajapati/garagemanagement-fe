'use client';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context';
import AppScript, { AppLoader } from '../script';

export default function Script() {
  const { setIsLoading, isLoading } = useContext(GlobalContext);

  useEffect(() => {
    document.body.classList.add('form');

    setIsLoading(true);
    AppLoader();
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
      {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
    </>
  );
}
