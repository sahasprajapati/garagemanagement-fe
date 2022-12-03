import { axiosInstance } from '@/lib/axios';
import { IPaginate, IPaginateResult } from '@/lib/types';
import { generatePagination } from '@/lib/utils';

export const fetchData = async <T>({
  route,
  pageOptions,
}: {
  route: string;
  pageOptions: IPaginate;
}): Promise<IPaginateResult<T>> => {
  const response = await axiosInstance.get(
    `/${route}/` + generatePagination(pageOptions),
  );
  return response.data;
};

export const createData = async <T>({
  route,
  data,
}: {
  route: string;
  data: T;
}) => {
  const response = await axiosInstance.post(`/${route}/`, data);
  return response.data.data;
};
export const updateData = async <T>({
  route,
  data,
}: {
  route: string;
  data: T & { id: number };
}) => {
  const { id, ...updateData } = data;
  const response = await axiosInstance.patch(`/${route}/${id}`, updateData);
  return response.data.data;
};

// Delete Data
export const deleteData = async ({
  route,
  ids,
}: {
  route: string;
  ids: number[];
}) => {
  const response = await axiosInstance.put(`/${route}/delete`, {
    ids: ids,
  });
  return response.data.data;
};

// Delete By Id
export const deleteDataById = async ({
  route,
  id,
}: {
  route: string;
  id: number;
}) => {
  const response = await axiosInstance.put(`/${route}/${id}`);
  return response.data.data;
};
