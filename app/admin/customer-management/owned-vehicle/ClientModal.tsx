'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { vehicleSchema } from './data.schema';

export interface IVehicleModalData {
  id?: number;
  kilometerRun: string;
  makeYear: string;
  color: string;
  price: string;
  numberPlate: string;
  customerId: number;
  vehicleId: number;
}
export default function VehicleModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IVehicleModalData>) {
  const isUpdateData = defaultData?.makeYear !== '';

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
              name: 'kilometerRun',
              type: 'text',
              placeholder: 'Kilometer Run',
            },
            {
              name: 'makeYear',
              type: 'text',
              placeholder: 'Make Year',
            },
            {
              name: 'color',
              type: 'text',
              placeholder: 'Color',
            },
            {
              name: 'price',
              type: 'text',
              placeholder: 'Price',
            },
            {
              name: 'numberPlate',
              type: 'text',
              placeholder: 'Number plate',
            },
            {
              name: 'customerId',
              type: 'async',
              placeholder: 'Customer',
              route: 'customers',
              isMulti: false,
            },
            {
              name: 'vehicleId',
              type: 'async',
              placeholder: 'Vehicle',
              route: 'vehicles',
              isMulti: false,
            },
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/owned-vehicle"
        />
      </div>
    </Modal>
  );
}
