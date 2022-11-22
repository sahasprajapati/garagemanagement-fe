'use client';
import {
  createStaff,
  fetchStaffDesignation,
  updateStaff,
} from '@/lib/api/staff';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import { staffSchema } from './staff.schema';

export interface IStaffModalData {
  id: 0,
  days: 0,
  from: new Date(),
  to: null,
  description: '',
  staffId: 0,
}
export default function StaffModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IStaffModalData>) {
  const [designation, setDesignation] = useState<number>(0);

  const { data } = useSWR('/staffs/designation', async () => {
    return await fetchStaffDesignation({ take: 50 });
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(staffSchema),
  });

  useEffect(() => {
    if (defaultData) {
      reset({
        name: defaultData.name,
        mobile: defaultData.mobile,
        staffDesignationId: defaultData.staffDesignationId,
      });
      console.log('Sahas default data', defaultData);
      setDesignation(defaultData.staffDesignationId);
    }
    // setSelectedPermissions([...defaultData.permissions]);
  }, [defaultData]);
  const isUpdateData =
    defaultData?.name !== '' && defaultData?.staffDesignationId !== 0;

  const onSubmit = async (data: any) => {
    try {
      console.log('Sahas data', data);
      const user = await mutate(
        '/api/users',

        isUpdateData
          ? updateStaff({
              id: defaultData?.id,
              name: data.name,
              mobile: data.mobile,
              staffDesignationId: data.staffDesignationId,
            })
          : createStaff({
              name: data.name,
              mobile: data.mobile,
              staffDesignationId: data.staffDesignationId,
            }),
        {
          revalidate: true,
        },
      )
        .then(() => {
          toast.success(
            `Successfully ${isUpdateData ? 'updated' : 'created'} Staff`,
          );
          refetchData && refetchData()
          reset({
            name: '',
          });
          setDesignation(0);
          // setSelectedPermissions([]);
        })
        .catch(() => {
          toast.error(`Error ${isUpdateData ? 'updating' : 'creating'} Staff`);
        });
    } catch (err) {
      toast.error('Invalid credentials!');
    }
  };

  useEffect(() => {
    setValue('staffDesignationId', designation);
  }, [designation]);
  return (
    <Modal
      title="Create Staff"
      // footer={
      //   <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
      //     <button className="btn btn-success w-100" type="submit">
      //       Create Staff
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
              placeholder="Mobile"
              {...register('mobile')}
            />
            {errors.mobile?.message && (
              <span>{errors.mobile?.message as string}</span>
            )}
          </div>

          <div className="widget-content widget-content-area blog-create-section">
            <div className="form-group row invoice-created-by">
              <label
                htmlFor="payment-method-country"
                className="col-sm-3 col-form-label col-form-label-sm"
              >
                Designation:
              </label>
              <div className="col-sm-9">
                <select
                  onChange={(e) => {
                    // console.log('Sahas Select', e.target.value);
                    setDesignation(+e.target.value);
                  }}
                  value={designation}
                  name="designation"
                  className="form-select country_code  form-control-sm"
                  id="payment-method-country"
                >
                  <option value={0}>Choose Staff Designation</option>
                  {data?.data?.map((designation: any) => {
                    return (
                      <option value={+designation?.id}>
                        {designation?.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {errors.staffDesignationId?.message && (
              <span>{errors.staffDesignationId?.message as string}</span>
            )}
          </div>
          <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
            <button
              className="btn btn-success w-100"
              type="submit"
              onMouseOver={() => {
                trigger(['name', 'mobile', 'staffDesignationId']);
              }}
              data-bs-dismiss={Object.keys(errors).length === 0 && 'modal'}
              aria-label="Save"
            >
              {isUpdateData ? 'Update' : 'Create'} Staff
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
