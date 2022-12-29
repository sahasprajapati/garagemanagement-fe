import * as yup from 'yup';
export const vehicleSchema = yup
  .object({
    serviceName: yup.string().required(),
    customerId: yup.mixed().required(),
    vehicleId: yup.mixed().required(),
    staffId: yup.mixed().optional(),
    transactionId: yup.mixed().optional(),
  })
  .required();
