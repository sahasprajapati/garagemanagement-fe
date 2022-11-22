import { axiosInstance } from './../../axios';
export type ILogin = {
  email: string;
  password: string;
};
export const login = async (data: ILogin) => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data.data;
};

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data.data;
};

export const fetchProfile = async () => {
    const response = await axiosInstance.get('/auth/profile');
    return response.data.data;
}