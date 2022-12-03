'use client';
import { createUser, updateUser } from '@/lib/api/user/role';
import toast from 'react-hot-toast';
import { mutate } from 'swr';
export const createUpdateData = async ({
  data,
  isUpdateData,
  id,
  refetchData,
  reset,
  name,
  createData,
  updateData,
  route,
}: {
  route: string;
  data: any;
  isUpdateData: boolean;
  id?: number;
  refetchData: () => void;
  reset: () => void;
  name: string;
  createData: (data: any) => Promise<void>;
  updateData: (data: any) => Promise<void>;
}) => {
  try {
    const { id, ...otherData } = data;
    const user = await mutate(
      route,

      isUpdateData
        ? updateData({ route: route.slice(1), data: { ...otherData, id } })
        : createData({ route: route.slice(1), data: { ...otherData } }),
      {
        revalidate: true,
      },
    )
      .then(() => {
        toast.success(
          `Successfully ${isUpdateData ? 'updated' : 'created'} ${name}`,
        );
        refetchData();
        reset();
        // setSelectedPermissions([]);
      })
      .catch(() => {
        toast.error(`Error ${isUpdateData ? 'updating' : 'creating'} ${name}`);
      });
  } catch (err) {
    toast.error('Invalid credentials!');
  }
};
