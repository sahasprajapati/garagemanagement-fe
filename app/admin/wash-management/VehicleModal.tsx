'use client';
import { createUpdateData } from '@/lib/api.utils';
import { fetchUser } from '@/lib/api/user';
import { createUser, fetchRole, updateUser } from '@/lib/api/user/role';
import CustomAsyncSelect from '@/ui/AsyncSelect/CustomAsyncSelect';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { customerSchema } from './customer.schema';
import useModalHook from './modalHook';

export interface IVehicleModalData {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
}
export default function VehicleModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IVehicleModalData>) {
  // const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

  const { data } = useSWR('/roles', async () => {
    return await fetchRole({ take: 50 });
  });


  // name    String
  // mobile  String  @unique
  // email   String?
  // address String?
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   setValue,
  //   trigger,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(userSchema),
  // });

  const { formProps } = useModalHook({
    schema: customerSchema,
    defaultData: defaultData,
    setSpecificData: () => {
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = formProps;

  const isUpdateData = defaultData?.name !== '' ;

  const onSubmit = (data: any) => {
    createUpdateData({
      createData: createUser,
      updateData: updateUser,
      data: data,
      id: defaultData.id,
      refetchData: refetchData ?? (() => {}),
      reset: () => {
        reset({
          name: '',
          email: '',
          mobile: '',
          address: '',
        });
      },
      isUpdateData: isUpdateData,
      name: 'Vehicle',
    });
  };

  return (
    <Modal
    id="VehicleModal"
      title={`${isUpdateData ? 'Update' : 'Create'}  Vehicle`}
      // footer={
      //   <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
      //     <button className="btn btn-success w-100" type="submit">
      //       Create Role
      //     </button>
      //   </div>
      // }
    >

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="widget-content widget-content-area blog-create-section">
            <input
              type="text"
              className="form-control"
              id="post-title"
              placeholder="User Name"
              {...register('name')}
            />
            {errors.name?.message && (
              <span>{errors.name?.message as string}</span>
            )}
          </div>
          <div className="widget-content widget-content-area blog-create-section">
            <input
              type="text"
              className="form-control"
              id="post-title"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email?.message && (
              <span>{errors.email?.message as string}</span>
            )}
          </div>
     
          <div className="widget-content widget-content-area blog-create-section">
            <input
              type="text"
              className="form-control"
              id="post-title"
              placeholder="Mobile No"
              {...register('mobile')}
            />
            {errors.mobile?.message && (
              <span>{errors.mobile?.message as string}</span>
            )}
          </div>
     
          <div className="widget-content widget-content-area blog-create-section">
            <input
              type="text"
              className="form-control"
              id="post-title"
              placeholder="Address"
              {...register('address')}
            />
            {errors.address?.message && (
              <span>{errors.address?.message as string}</span>
            )}
          </div>
     
          <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
            <button
              className="btn btn-success w-100"
              type="submit"
              onMouseOver={() => {
                trigger(['name', 'email', 'mobile', 'address']);
              }}
              data-bs-dismiss={Object.keys(errors).length === 0 && 'modal'}
              aria-label="Save"
            >
              {isUpdateData ? 'Update' : 'Create'} User
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
