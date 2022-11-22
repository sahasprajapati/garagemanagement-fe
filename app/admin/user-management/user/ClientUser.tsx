'use client';

import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';
import UserModal, { IUserModalData } from './UserModal';

import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
import { deleteUsers } from '@/lib/api/user/role';
import { fetchUser } from '@/lib/api/user';
WarnModal;
export default function ClientUserList() {
  const defaultData: IUserModalData = {
    id: 0,
    name: '',
    email: '',
    password: '',
    roleId: 0,
  };
  const [modalData, setModalData] = useState<IUserModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    name: string,
    email: string,
    password: string,
    roleId: number,
  ) => {
    setModalData({ id, name, email, password, roleId });
  };

  const [clearRows, setClearRow] = useState(false);
  const [refreshData, setRefetchData] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const columns = useMemo(
    () => [
      {
        name: 'Action',
        cell: (row) => (
          <button
            className="btn btn-primary mr-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
            onClick={() => {
              handleButtonClick(
                row?.id,
                row?.name,
                row?.email,
                row?.password,
                row?.role?.id,
              );
            }}
          >
            {' '}
            Edit
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        name: 'Name',
        selector: (row) => camelCaseToTitleCase(row?.name),
        sortable: true,
        grow: 2,
      },
      {
        name: 'Email',
        selector: (row) => camelCaseToTitleCase(row?.email),
        sortable: true,
        grow: 2,
      },
      {
        name: 'Role',
        selector: (row) => {
          console.log('Sahas row', row);
          return camelCaseToTitleCase(row?.role?.name);
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
              Delete User
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
              Add User
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <UserModal
            defaultData={modalData}
            setDefaultData={setModalData}
            refetchData={() => {
              setRefetchData(!refreshData);
            }}
          />
          <WarnModal
            action={() => {
              const idsToDelete = selectedRows?.map((rows: any) => {
                return rows?.id;
              });

              if (idsToDelete && idsToDelete?.length > 0)
                deleteUsers(idsToDelete)
                  .then(() => {
                    setClearRow(!clearRows);
                    toast.success('Successfully deleted users!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting users: ' +
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
            message="Are you sure you want to delete these users?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="User"
            columns={columns}
            onClick={() => {}}
            fetcher={fetchUser}
            clearRows={clearRows}
            refetchData={refreshData}
            selectedActions={[
              {
                label: 'Delete',
                action: (e) => {
                  setSelectedRows(e);
                  warnButtonRef.current?.click();
                },
              },
            ]}
            fetchLabel="/api/users"
          />
        </div>
      </div>
    </>
  );
}
