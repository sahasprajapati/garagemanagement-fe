import { fetchProfile } from './../api/auth/index';
import { Dispatch, SetStateAction } from 'react';
import { clearStorage, setStorage } from './../utils';
import { logout } from '../api/auth';
import { IUser } from '@/app/context';

export const logoutUser = async (
  setUser: Dispatch<SetStateAction<IUser | null>>,
  clientOnly: boolean = false,
) => {
  if (!clientOnly) await logout();
  // Log out the user
  setUser(null);
  clearStorage();
};

export const loginUser = async (
  setUser: Dispatch<SetStateAction<IUser | null>>,
  accessToken: string,
) => {
  console.log('Sahas token', accessToken);
  setStorage('accessToken', accessToken);
  const user = await fetchUserProfile(setUser);
};

export const fetchUserProfile = async (
  setUser: Dispatch<SetStateAction<IUser | null>>,
) => {
  const user = await fetchProfile();
  setUser(user);
  setStorage('user', JSON.stringify(user));
  return user;
};

