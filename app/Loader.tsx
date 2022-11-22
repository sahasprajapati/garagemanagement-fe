'use client';
import { useContext } from 'react';
import { GlobalContext } from './context';

export default function Loader({ children }: { children: React.ReactNode }) {
  const { isLoading } = useContext(GlobalContext);

  return <>{isLoading ? <div>Loading...</div> : children}</>;
}
