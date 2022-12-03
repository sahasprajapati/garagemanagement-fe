'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { vehicleSchema } from './data.schema';

export interface IVehicleWheelerModalData {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
}
export default function VehicleWheelerModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IVehicleWheelerModalData>) {
  const isUpdateData = defaultData?.name !== '';

  return (
    <Modal
      id="customerModal"
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
              name: 'mobile',
              type: 'text',
              placeholder: 'Mobile',
            },
            {
              name: 'email',
              type: 'text',
              placeholder: 'Email',
            },
            {
              name: 'address',
              type: 'text',
              placeholder: 'Address',
            },
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/customers"
        />
      </div>
    </Modal>
  );
}
