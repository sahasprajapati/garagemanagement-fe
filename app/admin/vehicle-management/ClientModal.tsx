'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { vehicleSchema } from './data.schema';

export interface IVehicleModalData {
  id?: number;
  name: string;
  fuel: string;
  engine: string;
  mileage: string;
  transmission: string;
  features: string;
  vehicleTypeId: number;
  vehicleWheelerTypeId: number;
  vehicleBrandId: number;
}
export default function VehicleModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IVehicleModalData>) {
  const isUpdateData = defaultData?.name !== '';

  return (
    <Modal
      id="vehicleModal"
      title={`${isUpdateData ? 'Update' : 'Create'}  Customer`}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <DynamicForm
          defaultData={defaultData}
          schema={vehicleSchema}
          setSpecificData={() => {}}
          isUpdateData={isUpdateData}
          label="Customer"
          inputs={[
            {
              name: 'name',
              type: 'text',
              placeholder: 'Name',
            },
            {
              name: 'fuel',
              type: 'text',
              placeholder: 'Fuel',
            },
            {
              name: 'engine',
              type: 'text',
              placeholder: 'Engine',
            },
            {
              name: 'mileage',
              type: 'text',
              placeholder: 'Mileage',
            },

            {
              name: 'transmission',
              type: 'text',
              placeholder: 'Transmission',
            },
            {
              name: 'features',
              type: 'text',
              placeholder: 'Features',
            },

            {
              name: 'vehicleTypeId',
              type: 'async',
              placeholder: 'Vehicle Type',
              route: 'vehicle-types',
              isMulti: false,
            },

            {
              name: 'vehicleWheelerTypeId',
              type: 'async',
              placeholder: 'Vehicle Wheeler',
              route: 'vehicle-wheeler-type',
              isMulti: false,
            },

            {
              name: 'vehicleBrandId',
              type: 'async',
              placeholder: 'Vehicle Brand',
              route: 'vehicle-brands',
              isMulti: false,
            },
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/vehicles"
        />
      </div>
    </Modal>
  );
}
