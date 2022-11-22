import { axiosInstance } from '@/lib/axios';
import { IPaginate } from '@/lib/types';
import { generatePagination } from '@/lib/utils';

export const fetchUser = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/users` + generatePagination(pageOptions),
  );
  return response.data;
};

