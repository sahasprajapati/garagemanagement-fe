import * as yup from 'yup';
export const leaveSchema = yup
  .object({
    days: yup.number().required(),
    description: yup.string().optional(),
    from: yup.date().required(),
    to: yup.date().required(),
    staffId: yup.number().min(1, "Please Select a Staff").required(),
  })
  .required();
