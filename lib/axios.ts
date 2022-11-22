import { config } from './config';
import axios from 'axios';
import { getStorage } from './utils';

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  timeout: 1000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config && config.headers) {
      config.headers['Authorization'] = 'Bearer ' + getStorage('accessToken');
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export const responseInterceptor = (logout:  () => Promise<void>) => {
  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async  (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      if (error.response.status === 401) {
        await logout();
      }
      // Do something with response error
      return Promise.reject(error);
    },
  );
};
