'use client';

import { deleteStaffs, fetchStaff } from '@/lib/api/staff';
import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';
import StaffModal, { IStaffModalData } from './StaffModal';

import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
WarnModal;
export default function ClientStaffList() {
  const defaultData: IStaffModalData = {
    id: 0,
    name: '',
    mobile: '',
    staffDesignationId: 0,
  };
  const [modalData, setModalData] = useState<IStaffModalData>(defaultData);
  const [refetchData, setRefetchData] = useState(false);

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
                row?.mobile,
                row?.designation?.id,
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
        selector: (row : any) => camelCaseToTitleCase(row?.name),
        sortable: true,
      },
      {
        name: 'Mobile',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return camelCaseToTitleCase(row?.mobile);
        },
        sortable: true,
      },
      {
        name: 'Designation',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return camelCaseToTitleCase(row?.designation?.name);
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
              Delete Staff
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
              Add Staff
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <StaffModal
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
              console.log('Sahas ', warnButtonRef.current);

              if (idsToDelete && idsToDelete?.length > 0)
                deleteStaffs(idsToDelete)
                  .then(() => {
                    setClearRow(!clearRows);
                    toast.success('Successfully deleted staffs!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting staffs: ' +
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
            message="Are you sure you want to delete these staffs?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="Staff"
            columns={columns}
            onClick={() => {}}
            fetcher={fetchStaff}
            clearRows={clearRows}
            refetchData={refetchData}
            selectedActions={[
              {
                label: 'Delete',
                action: (e) => {
                  setSelectedRows(e);
                  warnButtonRef.current?.click();
                },
              },
            ]}
            fetchLabel="/api/staffs"
          />
        </div>
      </div>
    </>
  );
}
