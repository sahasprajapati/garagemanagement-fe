import * as yup from 'yup';
export const vehicleSchema = yup
  .object({

    kilometerRun: yup.string().optional(),
    makeYear: yup.string().optional(),
    color: yup.string().optional(),
    price: yup.string().optional(),
    numberPlate : yup.string().optional(),
    // customerId 1,
    // vehicleId 2,
    
  })
  .required();
