import { axiosInstance } from '@/lib/axios';
import { IPaginate } from '@/lib/types';
import { generatePagination } from '@/lib/utils';

export const fetchCustomer = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/customers` + generatePagination(pageOptions),
  );
  return response.data;
};

interface ICustomer {
  id?: number;
  name: string;
  mobile: string;
  email: string;
  address: string;
}

export const createCustomers = async (data: ICustomer) => {
  const response = await axiosInstance.post('/customers', data);
  return response.data.data;
};
export const updateCustomers = async (data: ICustomer) => {
  const { id, ...updateData } = data;
  const response = await axiosInstance.patch(`/customers/${id}`, updateData);
  return response.data.data;
};
export const deleteCustomers = async (ids: number[]) => {
  const response = await axiosInstance.put(`/customers/delete`, {
    ids: ids
  });
  return response.data.data;
};

