import { axiosInstance } from '@/lib/axios';
import { IPaginate } from '@/lib/types';
import { generatePagination } from '@/lib/utils';

export const fetchPermission = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/roles/permissions` + generatePagination(pageOptions),
  );
  return response.data;
};

export const fetchRole = async (pageOptions: IPaginate) => {
  console.log("Sas", pageOptions)
  const response = await axiosInstance.get(
    `/roles` + generatePagination(pageOptions),
  );
  return response.data;
};

interface IRole {
  id?: number;
  name: string;
  permissionIds: number[];
}
interface IUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
  roleId: number;
}
export const createRole = async (data: IRole) => {
  const response = await axiosInstance.post('/roles', data);
  return response.data.data;
};

export const updateRole = async (data: IRole) => {
  const { id, ...roleData } = data;
  const response = await axiosInstance.patch(`/roles/${data?.id}`, roleData);
  return response.data.data;
};

export const deleteRoles = async (ids: number[]) => {
  const response = await axiosInstance.put(`/roles/delete`, {
    ids: ids
  });
  return response.data.data;
};

export const createUser = async (data: IUser) => {
  const response = await axiosInstance.post('/users', data);
  return response.data.data;
};
export const updateUser = async (data: IUser) => {
  const response = await axiosInstance.patch(`/users/${data?.id}`, data);
  return response.data.data;
};

export const deleteUsers = async (ids: number[]) => {
  const response = await axiosInstance.put(`/users/delete`, {
    ids: ids
  });
  return response.data.data;
};