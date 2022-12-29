'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { vehicleSchema } from './data.schema';

export interface IVehicleModalData {
  id?: number;
  customerId: number;
  vehicleId: number;
  staffId: number;
  transactionId?: number;
}
export default function VehicleModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IVehicleModalData>) {
  const isUpdateData = defaultData?.customerId ? defaultData?.customerId > 0 : false ;

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
          label="Wash"
          inputs={[
            {
              name: 'serviceName',
              type: 'text',
              placeholder: 'Service Name',
              defaultValue: "WASH",
              disabled: true,
            },
            {
              name: 'customerId',
              type: 'async',
              placeholder: 'Customer',
              route: "customers"
            },
            {
              name: 'vehicleId',
              type: 'async',
              placeholder: 'Vehicle',
              route: "owned-vehicle"

            },
            {
              name: 'staffId',
              type: 'async',
              placeholder: 'Staff',
              route: "staffs"
            },
            // {
            //   name: 'transactionId',
            //   type: 'async',
            //   placeholder: 'Transaction',
            //   route: "transactions"
            // },
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/service"
        />
      </div>
    </Modal>
  );
}
