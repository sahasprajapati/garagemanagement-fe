'use client';
import { createRole, fetchPermission, updateRole } from '@/lib/api/user/role';
import Modal, { CustomModal } from '@/ui/Modal/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR, { mutate } from 'swr';
import PermissionChecker from './PermissionChecker';
import { roleSchema } from './role.schema';

export interface IModalData {
  id?: number;
  name: string;
  permissions: number[];
}
export default function RoleModal({
  defaultData,
  setDefaultData,
  refetchData,
}: CustomModal<IModalData>) {
  const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

  const { data } = useSWR('/roles/permissions', async () => {
    return await fetchPermission({ take: 50 });
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
    resolver: yupResolver(roleSchema),
  });

  useEffect(() => {
    if (defaultData) {
      reset({
        name: defaultData.name,
      });
      setSelectedPermissions([...defaultData.permissions]);
    }
  }, [defaultData]);
  const isUpdateData =
    defaultData?.name !== '' && defaultData?.permissions?.length > 0;

  const onSubmit = async (data: any) => {
    try {
      const user = await mutate(
        '/api/roles',

        isUpdateData
          ? updateRole({
              id: defaultData?.id,
              name: data.name,
              permissionIds: data.permissions,
            })
          : createRole({
              name: data.name,
              permissionIds: data.permissions,
            }),
        {
          revalidate: true,
        },
      )
        .then(() => {
          toast.success(
            `Successfully ${isUpdateData ? 'updated' : 'created'} Role`,
          );
          refetchData && refetchData()

          reset({
            name: '',
          });
          setSelectedPermissions([]);
        })
        .catch(() => {
          toast.error(`Error ${isUpdateData ? 'updating' : 'creating'} Role`);
        });
    } catch (err) {
      toast.error('Invalid credentials!');
    }
  };

  useEffect(() => {
    setValue('permissions', selectedPermissions);
  }, [selectedPermissions]);
  return (
    <Modal
      title={`${isUpdateData ? 'Update' : 'Create'}  Role`}
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
              placeholder="Role"
              {...register('name')}
            />
            {errors.name?.message && (
              <span>{errors.name?.message as string}</span>
            )}
          </div>
          <div className="widget-content widget-content-area blog-create-section mt-4">
            <div className="row mb-4">
              <h5 className="mb-4">Permissions</h5>

              <div className="col-xxl-12">
                <PermissionChecker
                  selectedPermissions={selectedPermissions}
                  onTogglePermission={(permissionId: number) => {
                    if (selectedPermissions.includes(permissionId)) {
                      setSelectedPermissions(
                        selectedPermissions.filter((id) => id !== permissionId),
                      );
                      return;
                    }
                    setSelectedPermissions([
                      ...selectedPermissions,
                      permissionId,
                    ]);
                  }}
                  permissions={data?.data}
                />
                {errors.permissions?.message && (
                  <span>{errors.permissions?.message as string}</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
            <button
              className="btn btn-success w-100"
              type="submit"
              onMouseOver={() => {
                trigger(['name', 'permissions']);
              }}
              data-bs-dismiss={Object.keys(errors).length === 0 && 'modal'}
              aria-label="Save"
            >
              {isUpdateData ? 'Update' : 'Create'} Role
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
