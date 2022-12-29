'use client';
import {
  createRole,
  createUser,
  fetchPermission,
  fetchRole,
  updateUser,
} from '@/lib/api/user/role';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import { userSchema } from './user.schema';

export interface IUserModalData {
  id?: number;
  name: string;
  email: string;
  password: string;
  roleId: number;
}
export default function RoleModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IUserModalData>) {
  // const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);
  const [role, setRole] = useState<number>(0);

  const { data } = useSWR('/roles', async () => {
    return await fetchRole({ take: 50 });
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
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    if (defaultData) {
      reset({
        name: defaultData.name,
        email: defaultData.email,
        password: defaultData.password,
      });
      setRole(defaultData.roleId);
    }
    // setSelectedPermissions([...defaultData.permissions]);
  }, [defaultData]);
  const isUpdateData = defaultData?.name !== '' && defaultData?.roleId !== 0;

  const onSubmit = async (data: any) => {
    try {
      const user = await mutate(
        '/api/users',

        isUpdateData
          ? updateUser({
              id: defaultData?.id,
              name: data.name,
              email: data.email,
              roleId: data.roleId,
            })
          : createUser({
              name: data.name,
              email: data.email,
              password: data.password,
              roleId: data.roleId,
            }),
        {
          revalidate: true,
        },
      )
        .then(() => {
          toast.success(
            `Successfully ${isUpdateData ? 'updated' : 'created'} Role`,
          );
          refetchData && refetchData();
          reset({
            name: '',
          });
          setRole(0);
          // setSelectedPermissions([]);
        })
        .catch(() => {
          toast.error(`Error ${isUpdateData ? 'updating' : 'creating'} Role`);
        });
    } catch (err) {
      toast.error('Invalid credentials!');
    }
  };

  // useEffect(() => {
  //   setValue('permissions', selectedPermissions);
  // }, [selectedPermissions]);
  useEffect(() => {
    setValue('roleId', role);
  }, [role]);
  return (
    <Modal
      title={`${isUpdateData ? 'Update' : 'Create'}  User`}
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
          {defaultData?.id === 0 && (
            <div className="widget-content widget-content-area blog-create-section">
              <input
                type="text"
                className="form-control"
                id="post-title"
                placeholder="Password"
                {...register('password')}
              />
              {errors.password?.message && (
                <span>{errors.password?.message as string}</span>
              )}
            </div>
          )}
          <div className="widget-content widget-content-area blog-create-section">
            <div className="form-group row invoice-created-by">
              <label
                htmlFor="payment-method-country"
                className="col-sm-3 col-form-label col-form-label-sm"
              >
                Role:
              </label>
              <div className="col-sm-9">
                <select
                  onChange={(e) => {
                    setRole(+e.target.value);
                  }}
                  value={role}
                  name="role"
                  className="form-select country_code  form-control-sm"
                  id="payment-method-country"
                >
                  <option value={0}>Choose Role</option>
                  {data?.data?.map((role: any) => {
                    return <option value={+role?.id}>{role?.name}</option>;
                  })}
                </select>
              </div>
            </div>
            {errors.roleId?.message && (
              <span>{errors.roleId?.message as string}</span>
            )}
          </div>
          <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
            <button
              className="btn btn-success w-100"
              type="submit"
              onMouseOver={() => {
                trigger(['name', 'email', 'password', 'roleId']);
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
