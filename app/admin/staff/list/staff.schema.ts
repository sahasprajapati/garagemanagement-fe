import * as yup from 'yup';
export const staffSchema = yup
  .object({
    name: yup.string().required(),
    mobile: yup.string().required(),
    staffDesignationId: yup.number().min(1, "Please Select a Staff Designation ").required(),
  })
  .required();
