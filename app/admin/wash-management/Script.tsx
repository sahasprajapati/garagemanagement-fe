'use client';
import { useEffect } from 'react';
export default function Script() {
  useEffect(() => {
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
