import * as yup from 'yup';
export const userSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().optional(),
    roleId: yup.number().min(1, "Please Select a Role ").required(),
  })
  .required();
