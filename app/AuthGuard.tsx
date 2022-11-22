'use client';
import { fetchProfile } from '@/lib/api/auth';
import { fetchUserProfile, logoutUser } from '@/lib/auth/function';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { GlobalContext } from './context';

export default function AuthGuard({
  children,
  redirectTo,
  requiredAuthentication = true,
}: {
  children: React.ReactNode;
  redirectTo?: string;
  requiredAuthentication?: boolean;
}) {
  const { user, setUser, isLoading, setIsLoading } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);
    fetchUserProfile(setUser)
      .then(() => {
        if (redirectTo) {
          router.replace(redirectTo);
        } else {
          setIsLoading(false);
        }
      })
      .catch(async () => {
        if (requiredAuthentication) {
          await logoutUser(setUser, true);
          router.push('/auth/signin');
        } else {
          setIsLoading(false);
        }
      });
  }, []);
  return <>{isLoading ? <p>Authenticating User</p> : children}</>;
}
