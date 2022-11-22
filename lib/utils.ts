import { IPaginate } from './types';

export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};

export const generatePagination = (pageOptions: IPaginate) => {
  const { take, page = 1, order, filter } = pageOptions;
  let pagination = `?page=${page}`;
  if (take) pagination += `&take=${take}`;
  if (order) pagination += `&order=${order}`;
  if (filter) pagination += `&filter=${filter}`;

  return pagination;
};

export const camelCaseToTitleCase = (text: string) => {
  if (!text) return 'N/A';
  const result = text.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};
