import { axiosInstance } from '@/lib/axios';
import { IPaginate } from '@/lib/types';
import { generatePagination } from '@/lib/utils';

export const fetchStaff = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/staffs` + generatePagination(pageOptions),
  );
  console.log('Sahas res', response);
  return response.data;
};

interface IStaff {
  id?: number;
  name: string;
  mobile: string;
  staffDesignationId: number;
}
export const createStaff = async (data: IStaff) => {
  const response = await axiosInstance.post('/staffs', data);
  return response.data.data;
};

export const updateStaff = async (data: IStaff) => {
  const { id, ...staffData } = data;
  const response = await axiosInstance.patch(`/staffs/${id}`, staffData);
  return response.data.data;
};

export const deleteStaffs = async (ids: number[]) => {
  const response = await axiosInstance.put(`/staffs/delete`, {
    ids: ids,
  });
  return response.data.data;
};
export const fetchStaffDesignation = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/staffs/designation` + generatePagination(pageOptions),
  );
  return response.data;
};

export const fetchStaffsOnLeave = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/staffs/onLeave` + generatePagination(pageOptions),
  );
  console.log('Sahas res', response);
  return response.data;
};

export const fetchStaffsAttendance = async (pageOptions: IPaginate) => {
  const response = await axiosInstance.get(
    `/staffs/attendance` + generatePagination(pageOptions),
  );
  console.log('Sahas res', response);
  return response.data;
};

interface IStaffAttendance {
  ids: string[];
  status: 'ABSENT' | 'PRESENT';
}
export const changeAttendanceStatus = async (data: IStaffAttendance) => {
  const response = await axiosInstance.patch(`/staffs/attendance`, data);
  return response.data.data;
};

interface IStaffLeave {
  id?: number;
  days: number;
  description: string;
  from: Date;
  to: Date | null;
  staffId: number;
}

export const createStaffLeave = async (data: IStaffLeave) => {
  const response = await axiosInstance.post('/staffs/leave', data);
  return response.data.data;
};

export const updateStaffLeave = async (data: IStaffLeave) => {
  const { id, ...staffData } = data;
  const response = await axiosInstance.patch(`/staffs/leave/${id}`, staffData);
  return response.data.data;
};