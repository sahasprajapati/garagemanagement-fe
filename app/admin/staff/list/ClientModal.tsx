'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { staffSchema } from './data.schema';

export interface IStaffModalData {
  id: number;
  name: string;
  mobile: string;
  staffDesignationId: number;
}
export default function StaffModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IStaffModalData>) {
  const isUpdateData = defaultData?.name !== '';

  return (
    <Modal
      id="staffModal"
      title={`${isUpdateData ? 'Update' : 'Create'}  Customer`}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <DynamicForm
          defaultData={defaultData}
          schema={staffSchema}
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
              name: 'staffDesignationId',
              type: 'async',
              placeholder: 'Staff Designation',
              route: "staffs/designation",
            },
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/staffs"
        />
      </div>
    </Modal>
  );
}
