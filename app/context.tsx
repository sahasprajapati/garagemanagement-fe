'use client';
import { fetchProfile, logout } from '@/lib/api/auth';
import { logoutUser } from '@/lib/auth/function';
import { responseInterceptor } from '@/lib/axios';
import { clearStorage, getStorage } from '@/lib/utils';
import axios from 'axios';
import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from 'react';
import { SWRConfig } from 'swr';

export type IUser = {
  id: string;
  name: string;
  email: string;
};
export type IGlobalContext = {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export const GlobalContextDefault: IGlobalContext = {
  user: null,
  setUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
};
export const GlobalContext = createContext(GlobalContextDefault);
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<null | IUser>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  responseInterceptor(() => logoutUser(setUser));

  useEffect(() => {
    setUser(JSON.parse(getStorage('user') ?? 'null'));
  }, []);
  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000,
        // fetcher: (resource, init) => resource,
        // fetch(resource, init).then(res => res.json())
      }}
    >
      <GlobalContext.Provider
        value={{
          user,
          setUser,
          isLoading,
          setIsLoading,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </SWRConfig>
  );
}
