import * as yup from 'yup';
export const customerSchema = yup
  .object({
    name: yup.string().required(),
    mobile: yup.string().required(),
    email: yup.string().optional(),
    address: yup.string().optional(),
  })
  .required();

