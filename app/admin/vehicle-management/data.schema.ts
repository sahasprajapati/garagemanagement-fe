import * as yup from 'yup';
export const vehicleSchema = yup
  .object({
    name: yup.string().required(),
    fuel: yup.string().required(),
    engine: yup.string().required(),
    mileage: yup.string().required(),
    transmission: yup.string().required(),
    features: yup.string().required(),
    
  })
  .required();
