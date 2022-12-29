import * as yup from 'yup';
export const designationSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().optional(),
    totalLeave: yup.string().optional(),
  })
  .required();
