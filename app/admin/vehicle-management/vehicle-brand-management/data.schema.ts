import * as yup from 'yup';
export const vehicleBrandSchema = yup
  .object({
    name: yup.string().required(),
  })
  .required();
