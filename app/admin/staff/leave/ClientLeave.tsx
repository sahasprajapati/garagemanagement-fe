'use client';

import { fetchStaff, fetchStaffsOnLeave } from '@/lib/api/staff';
import { fetchRole } from '@/lib/api/user/role';
import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useState } from 'react';
import StaffModal from '../list/StaffModal';
import LeaveModal, { ILeaveModalData } from './LeaveModal';

export default function ClientStaffLeaveList() {
  const defaultData: ILeaveModalData = {
    id: 0,
    days: 0,
    from: new Date(),
    to: null,
    description: '',
    staffId: 0,
  };
  const [refetchData, setRefetchData] = useState(false);

  const [modalData, setModalData] = useState<ILeaveModalData>(defaultData);
  const handleButtonClick = (
    id: number,
    days: number,
    from: Date,
    to: Date,
    description: string,
    staffId: number,
  ) => {
    setModalData({ id, days, from, to, description, staffId });
  };

  const columns = useMemo(
    () => [
      {
        name: 'Action',
        cell: (row : any) => (
          <button
            className="btn btn-primary mr-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              handleButtonClick(
                row?.leave?.length > 0 && row?.leave[0]?.id,
                row?.leave?.length > 0 && row?.leave[0]?.days,
                row?.leave?.length > 0 && row?.leave[0]?.from,
                row?.leave?.length > 0 && row?.leave[0]?.to,
                row?.leave?.length > 0 && row?.leave[0]?.description,
                row?.id,
              );
            }}
          >
            Action
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
        name: 'Designation',
        selector: (row : any) => camelCaseToTitleCase(row?.designation?.name),
        sortable: true,
      },
      {
        name: 'Days',
        selector: (row : any) => row?.leave?.length > 0 && row?.leave[0]?.days,
        sortable: true,
      },
      {
        name: 'From',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return row?.leave?.length > 0 && row?.leave[0]?.from;
        },
        sortable: true,
      },
      {
        name: 'To',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return row?.leave?.length > 0 && row?.leave[0]?.to;
        },
        sortable: true,
      },
      {
        name: 'Description',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return camelCaseToTitleCase(row?.leave?.length > 0 && row?.leave[0]?.description);
        },
        sortable: true,
      },
    ],
    [],
  );

  return (
    <>
      <div className="w-100  d-flex justify-content-end align-items-end">
        <button
          type="button"
          className="btn btn-primary mr-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Set Staff Leave
        </button>
      </div>

      <ReactDataTable
        title="Staffs On Leave"
        columns={columns}
        onClick={() => {}}
        refetchData={refetchData}
        fetcher={fetchStaffsOnLeave}
        fetchLabel="/api/staffs"
      />
      <LeaveModal
        defaultData={modalData}
        setDefaultData={setModalData}
        refetchData={() => {
          setRefetchData(!refetchData);
        }}
      />
    </>
  );
}
