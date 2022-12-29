import * as yup from 'yup';
export const vehicleSchema = yup
  .object({
    name: yup.string().required(),
  })
  .required();
