import * as yup from 'yup';
export const staffSchema = yup
  .object({
    name: yup.string().required(),
    mobile: yup.string().required(),
    staffDesignationId: yup.mixed().required(),
  })
  .required();
