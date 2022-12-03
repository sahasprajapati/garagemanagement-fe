'use client';

import { deleteRoles, fetchRole } from '@/lib/api/user/role';
import { camelCaseToTitleCase } from '@/lib/utils';
import WarnModal from '@/ui/Modal/WarnModal';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import RoleModal, { IModalData } from './RoleModal';

export default function ClientRoleList() {
  const defaultData: IModalData = {
    id: 0,
    name: '',
    permissions: [],
  };
  const [modalData, setModalData] = useState<IModalData>(defaultData);
  const [refetchData, setRefetchData] = useState(false);

  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    name: string,
    permissions: number[],
  ) => {
    setModalData({ id, name, permissions });
  };

  const [clearRows, setClearRow] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const columns = useMemo(
    () => [
      {
        name: 'Action',
        cell: (row : any) => (
          <button
            className="btn btn-primary mr-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
            onClick={() => {
              handleButtonClick(
                row?.id,
                row?.name,
                row?.rolePermissions?.map(
                  (rolepermission: any) => rolepermission?.permission?.id,
                ),
              );
            }}
          >
            Edit
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        name: 'Name',
        selector: (row : any) => camelCaseToTitleCase(row?.name),
        sortable: true,
        grow: 2,
      },
      {
        name: 'Subject',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return camelCaseToTitleCase(
            row?.rolePermissions[0]?.permission?.action,
          );
        },
        sortable: true,
      },
    ],
    [],
  );

  return (
    <>
      <div className="widget">
        <div className="widget-content widget-content-area m-3">
          <div className="w-100  d-flex justify-content-end align-items-end">
            <button
              ref={warnButtonRef}
              type="button"
              className="btn btn-primary mr-2 "
              data-bs-toggle="modal"
              data-bs-target="#warnModal"
              onClick={() => {}}
              style={{
                display: 'none',
              }}
            >
              Delete Role
            </button>{' '}
            <button
              type="button"
              className="btn btn-primary mr-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                setClearRow(!clearRows);
                setModalData(defaultData);
              }}
            >
              Add Role
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <RoleModal
            defaultData={modalData}
            setDefaultData={setModalData}
            refetchData={() => {
              setRefetchData(!refetchData);
            }}
          />
          <WarnModal
            action={() => {
              const idsToDelete = selectedRows?.map((rows: any) => {
                return rows?.id;
              });

              if (idsToDelete && idsToDelete?.length > 0)
                deleteRoles(idsToDelete)
                  .then(() => {
                    setRefetchData(!refetchData);
                    setClearRow(!clearRows);
                    toast.success('Successfully deleted roles!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting roles: ' +
                          selectedRows?.map((rows: any) => {
                            return rows?.name;
                          }),
                      )
                      .toString();
                  });
            }}
            cancelAction={() => {
              setClearRow(!clearRows);
            }}
            message="Are you sure you want to delete these roles?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="Role"
            columns={columns}
            refetchData={refetchData}
            onClick={() => {}}
            fetcher={fetchRole}
            clearRows={clearRows}
            selectedActions={[
              {
                label: 'Delete',
                action: (e) => {
                  setSelectedRows(e);
                  warnButtonRef.current?.click();
                },
              },
            ]}
            fetchLabel="/api/roles"
          />
        </div>
      </div>
    </>
  );
}
