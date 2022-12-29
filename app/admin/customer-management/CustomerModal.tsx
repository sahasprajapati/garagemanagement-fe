'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { customerSchema } from './customer.schema';

export interface ICustomerModalData {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
}
export default function CustomerModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<ICustomerModalData>) {
  const isUpdateData = defaultData?.name ? defaultData?.name !== '' : false;

  return (
    <Modal
      id="customerModal"
      title={`${isUpdateData ? 'Update' : 'Create'}  Customer`}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <DynamicForm
          defaultData={defaultData}
          schema={customerSchema}
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
