'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { vehicleBrandSchema } from './data.schema';

export interface IVehicleBrandModalData {
  id?: number;
  name: string;
}
export default function VehicleBrandModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IVehicleBrandModalData>) {
  const isUpdateData = defaultData?.name !== '';

  return (
    <Modal
      id="customerModal"
      title={`${isUpdateData ? 'Update' : 'Create'}  Vehicle Type`}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <DynamicForm
          defaultData={defaultData}
          schema={vehicleBrandSchema}
          setSpecificData={() => {}}
          isUpdateData={isUpdateData}
          label="Customer"
          inputs={[
            {
              name: 'name',
              type: 'text',
              placeholder: 'Name',
            }
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/vehicle-brands"
        />
      </div>
    </Modal>
  );
}
