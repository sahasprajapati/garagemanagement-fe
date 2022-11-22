import * as yup from 'yup';
export const roleSchema = yup
  .object({
    name: yup.string().required(),
    permissions: yup.array().of(yup.string()).min(1).required(),
  })
  .required();
