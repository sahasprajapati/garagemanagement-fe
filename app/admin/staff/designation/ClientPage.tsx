'use client';

import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';

import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
import { deleteData } from '@/lib/api/common';
import StaffDesignationModal, {
  IStaffDesignationModalData,
} from './ClientModal';
import { fetchStaffDesignation } from '@/lib/api/staff';
export default function ClientDesignationList() {
  const defaultData: IStaffDesignationModalData = {
    id: 0,
    name: '',
    description: '',
    totalLeave: 15,
  };
  const [modalData, setModalData] =
    useState<IStaffDesignationModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    name: string,
    description: string,
    totalLeave: number,
  ) => {
    setModalData({ id, name, description, totalLeave });
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
                row?.description,
                row?.totalLeave,
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
        name: 'Description',
        selector: (row: any) => camelCaseToTitleCase(row?.description),
        sortable: true,
      },
      {
        name: 'Leave',
        selector: (row: any) => row?.totalLeave,
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
              Delete StaffDesignation
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
              Add StaffDesignation
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <StaffDesignationModal
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
                deleteData({ route: '/staffs/designation', ids: idsToDelete })
                  .then(() => {
                    setClearRow(!clearRows);
                    setRefetchData(!refreshData);
                    toast.success('Successfully deleted StaffDesignations!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting StaffDesignations: ' +
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
            message="Are you sure you want to delete these StaffDesignations?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="StaffDesignation"
            columns={columns}
            onClick={() => {}}
            route="staffs/designation"
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
            fetchLabel="/api/StaffDesignations"
          />
        </div>
      </div>
    </>
  );
}
