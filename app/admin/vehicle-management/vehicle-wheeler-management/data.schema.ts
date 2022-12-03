import * as yup from 'yup';
export const vehicleSchema = yup
  .object({
    name: yup.string().required(),
    mobile: yup.string().required(),
    email: yup.string().optional(),
    address: yup.string().optional(),
  })
  .required();

