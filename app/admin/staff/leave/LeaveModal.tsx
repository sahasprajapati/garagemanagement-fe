'use client';
import {
  createStaff,
  createStaffLeave,
  fetchStaff,
  fetchStaffDesignation,
  updateStaff,
  updateStaffLeave,
} from '@/lib/api/staff';
import CustomDateRangePicker from '@/ui/DateRangePicker/DateRangePicker';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import { leaveSchema } from './leave.schema';

export interface ILeaveModalData {
  id: number;
  days: number;
  description: string;
  from: Date;
  to: Date | null;
  staffId: number;
}
export default function LeaveModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<ILeaveModalData>) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const handleDateChange = (dates: [startDate: Date, endDate: Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [staff, setStaff] = useState<number>(0);

  const { data } = useSWR('/staffs', async () => {
    return await fetchStaff({ take: 50 });
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
    resolver: yupResolver(leaveSchema),
  });

  useEffect(() => {
    if (defaultData) {
      reset({
        days: defaultData.days,
        description: defaultData.description,
      });
      setStaff(defaultData.staffId);
      setStartDate(new Date(defaultData.from));
      setEndDate(defaultData.to ? new Date(defaultData.to) : new Date());
    }
    // setSelectedPermissions([...defaultData.permissions]);
  }, [defaultData]);
  const isUpdateData =
    defaultData?.days !== 0 &&
    defaultData?.staffId !== 0 &&
    defaultData?.from &&
    defaultData.to;

  const onSubmit = async (data: any) => {
    try {
      const user = await mutate(
        '/api/users',

        isUpdateData
          ? updateStaffLeave({
              id: defaultData?.id,
              days: data.days,
              description: data.description,
              from: data.from,
              to: data.to,
              staffId: data.staffId,
            })
          : createStaffLeave({
              days: data.days,
              description: data.description,
              from: data.from,
              to: data.to,
              staffId: data.staffId,
            }),
        {
          revalidate: true,
        },
      )
        .then(() => {
          toast.success(
            `Successfully ${isUpdateData ? 'updated' : 'created'} Staff`,
          );
          refetchData && refetchData();
          reset({
            days: 0,
            description: '',
            from: new Date(),
            to: null,
            staffId: 0,
          });
          setStaff(0);
          setStartDate(new Date());
          setEndDate(null);
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
    setValue('from', startDate);
    setValue('to', endDate);
    setValue('staffId', staff);
  }, [startDate, endDate, staff]);
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
              placeholder="Days"
              {...register('days')}
            />
            {errors.days?.message && (
              <span>{errors.days?.message as string}</span>
            )}
          </div>
          <div className="widget-content widget-content-area blog-create-section">
            <input
              type="text"
              className="form-control"
              id="post-title"
              placeholder="Description"
              {...register('description')}
            />
            {errors.description?.message && (
              <span>{errors.description?.message as string}</span>
            )}
          </div>

          <div className="widget-content widget-content-area blog-create-section">
            <CustomDateRangePicker
              date={startDate}
              endDate={endDate}
              showTime={false}
              handleDateChange={handleDateChange}
            />
            {errors.from?.message && (
              <span>{errors.from?.message as string}</span>
            )}
            {errors.to?.message && <span>{errors.to?.message as string}</span>}
          </div>

          <div className="widget-content widget-content-area blog-create-section">
            <div className="form-group row invoice-created-by">
              <label
                htmlFor="payment-method-country"
                className="col-sm-3 col-form-label col-form-label-sm"
              >
                Staff:
              </label>
              <div className="col-sm-9">
                <select
                  onChange={(e) => {
                    setStaff(+e.target.value);
                  }}
                  value={staff}
                  name="staff"
                  className="form-select country_code  form-control-sm"
                  id="payment-method-country"
                >
                  <option value={0}>Choose Staff</option>
                  {data?.data?.map((staff: any) => {
                    return <option value={+staff?.id}>{staff?.name}</option>;
                  })}
                </select>
              </div>
            </div>
            {errors.staffId?.message && (
              <span>{errors.staffId?.message as string}</span>
            )}
          </div>

          <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
            <button
              className="btn btn-success w-100"
              type="submit"
              onMouseOver={() => {
                trigger(['days', 'from', 'to', 'staffId']);
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
