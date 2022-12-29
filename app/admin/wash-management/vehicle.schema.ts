import * as yup from 'yup';
export const customerSchema = yup
  .object({
    name: yup.string().optional(),
    mobile: yup.string().optional(),
    email: yup.string().optional(),
    address: yup.string().optional(),
  })
  .required();
