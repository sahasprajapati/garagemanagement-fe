import { axiosInstance } from '@/lib/axios';
import { IPaginate } from '@/lib/types';
import { generatePagination } from '@/lib/utils';
import { fetchData } from '../common';

export const fetchVehicle = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/vehicles` + generatePagination(pageOptions),
  );
  return response.data;
};

interface IVehicle {
  id?: number;
  name: string;
  mobile: string;
  email: string;
  address: string;
}

export const createVehicles = async (data: IVehicle) => {
  const response = await axiosInstance.post('/vehicles', data);
  return response.data.data;
};
export const updateVehicles = async (data: IVehicle) => {
  const { id, ...updateData } = data;
  const response = await axiosInstance.patch(`/vehicles/${id}`, updateData);
  return response.data.data;
};
export const deleteVehicles = async (ids: number[]) => {
  const response = await axiosInstance.put(`/vehicles/delete`, {
    ids: ids,
  });
  return response.data.data;
};
