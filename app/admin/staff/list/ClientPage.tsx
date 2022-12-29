'use client';

import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';

import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
import { deleteData } from '@/lib/api/common';
import StaffModal, { IStaffModalData } from './ClientModal';
WarnModal;
export default function ClientStaffList() {
  const defaultData: IStaffModalData = {
    id: 0,
    name: '',
    mobile: '',
    staffDesignationId: 0,
  };
  const [modalData, setModalData] = useState<IStaffModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    name: string,
    mobile: string,
    staffDesignationId: number,
  ) => {
    setModalData({ id, name, mobile, staffDesignationId });
  };

  const [clearRows, setClearRow] = useState(false);
  const [refreshData, setRefetchData] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const columns = useMemo(
    () => [
      {
        name: 'Action',
        cell: (row: any) => (
          <button
            className="btn btn-primary mr-2"
            data-bs-toggle="modal"
            data-bs-target="#staffModal"
            type="button"
            onClick={() => {
              handleButtonClick(
                row?.id,
                row?.name,
                row?.mobile,
                row?.staffDesignationId,
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
        selector: (row: any) => camelCaseToTitleCase(row?.name),
        sortable: true,
      },
      {
        name: 'Email',
        selector: (row: any) => camelCaseToTitleCase(row?.email),
        sortable: true,
      },
      {
        name: 'Mobile',
        selector: (row: any) => camelCaseToTitleCase(row?.mobile),
        sortable: true,
      },
      {
        name: 'Address',
        selector: (row: any) => camelCaseToTitleCase(row?.address),
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
              Delete Staff
            </button>{' '}
            <button
              type="button"
              className="btn btn-primary mr-2"
              data-bs-toggle="modal"
              data-bs-target="#staffModal"
              onClick={() => {
                setClearRow(!clearRows);
                setModalData(defaultData);
              }}
            >
              Add Staff
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <StaffModal
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
                deleteData({ route: '/vehicles', ids: idsToDelete })
                  .then(() => {
                    setClearRow(!clearRows);
                    toast.success('Successfully deleted Staffs!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting Staffs: ' +
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
            message="Are you sure you want to delete these Staffs?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="Staff"
            columns={columns}
            onClick={() => {}}
            route="staffs"
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
            fetchLabel="/api/Staffs"
          />
        </div>
      </div>
    </>
  );
}
