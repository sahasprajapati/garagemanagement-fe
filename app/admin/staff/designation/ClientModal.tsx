'use client';
import DynamicForm from '@/ui/DynamicForm/DynamicForm';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { designationSchema } from './data.schema';

export interface IStaffDesignationModalData {
  id?: number;
  name: string;
  description?: string;
  totalLeave?: number;
}
export default function StaffDesignationModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IStaffDesignationModalData>) {
  const isUpdateData = defaultData?.name !== '';

  return (
    <Modal
      id="staffModal"
      title={`${isUpdateData ? 'Update' : 'Create'}  Staff`}
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <DynamicForm
          defaultData={defaultData}
          schema={designationSchema}
          setSpecificData={() => {}}
          isUpdateData={isUpdateData}
          label="Staff"
          inputs={[
            {
              name: 'name',
              type: 'text',
              placeholder: 'Name',
            },
            {
              name: 'description',
              type: 'text',
              placeholder: 'Description',
            },    {
              name: 'totalLeave',
              type: 'text',
              placeholder: 'Total Leave',
            },
          ]}
          refetchData={refetchData ? refetchData : () => {}}
          route="/staffs/designation"
        />
      </div>
    </Modal>
  );
}
