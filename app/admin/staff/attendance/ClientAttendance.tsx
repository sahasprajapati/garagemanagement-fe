'use client';

import { changeAttendanceStatus, fetchStaffsAttendance } from '@/lib/api/staff';
import { camelCaseToTitleCase } from '@/lib/utils';
import CustomDatePicker from '@/ui/DatePicker/DatePicker';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';

export default function ClientStaffAttendanceList() {
  const [clearRows, setClearRow] = useState(false);
  const [refetchData, setRefetchData] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const { mutate } = useSWRConfig();

  const handleButtonClick = () => {
  };

  const columns = useMemo(
    () => [
      // {
      //   name: 'Action',
      //   cell: () => (
      //     <button className="btn btn-primary mr-2" onClick={handleButtonClick}>
      //       Action
      //     </button>
      //   ),
      //   ignoreRowClick: true,
      //   allowOverflow: true,
      //   button: true,
      // },
      {
        name: 'Name',
        selector: (row : any) => camelCaseToTitleCase(row?.name),
        sortable: true,
      },
      {
        name: 'Mobile',
        selector: (row : any) => {
          return camelCaseToTitleCase(row?.mobile);
        },
        sortable: true,
      },
      {
        name: 'Designation',
        selector: (row : any) => {
          return camelCaseToTitleCase(row?.designation?.name);
        },
        
        sortable: true,
      },
      {
        name: 'Status',
        selector: (row : any) => {
          return row?.attendance?.length > 0 && row?.attendance[0]?.status;
        },
        sortable: true,
      },
    ],
    [],
  );

  useEffect(() => {
  }, [date]);

  return (
    <>
      {/* <div className="widget">
        <div className="widget-content widget-content-area m-3">

          <ReactDataTable
            title="On Leave"
            columns={columns.slice(1)}
            onClick={() => {}}
            fetcher={fetchStaff}
            fetchLabel="/api/staffs"
            selectableRows={false}
          />
        </div>
      </div> */}

      <div className="widget">
        <div className="widget-content widget-content-area m-3">
          <div className="col-2">
            <CustomDatePicker
              date={date}
              handleDateChange={(date) => {
                setDate(date);
              }}
              maxDate={new Date()}
              format="P"
            />
          </div>
          <ReactDataTable
            clearRows={clearRows}
            refetchData={refetchData}
            title="Attendance"
            columns={columns}
            onClick={() => {}}
            route="staffs/attendance"
            fetchLabel="/api/staffs"
            rowDisabledCriteria={(row:any) => {
              return row?.attendance?.length > 0 && row?.attendance[0]?.status === "LEAVE"
            }}
            selectedActions={[
              {
                label: 'Set Selected Absent',
                action: (e) => {
                  changeAttendanceStatus({
                    ids: e.map((staff) => staff?.id),
                    status: 'ABSENT',
                  })
                    .then(() => {
                      toast.success('Changed Status');
                      setRefetchData(!refetchData);
                    })
                    .catch(() => {
                      toast.error('Failed to change Status');
                    })
                    .finally(() => {
                      setClearRow(!clearRows);
                    });
                },
              },
              {
                label: 'Set Selected Present',
                action: (e) => {
                  changeAttendanceStatus({
                    ids: e.map((staff) => staff?.id),
                    status: 'PRESENT',
                  })
                    .then(() => {
                      toast.success('Changed Status');
                      setRefetchData(!refetchData);
                    })
                    .catch(() => {
                      toast.error('Failed to change Status');
                    })
                    .finally(() => {
                      setClearRow(!clearRows);
                    });
                },
              },
            ]}
          />
        </div>
      </div>

      {/* <div className="widget">
        <div className="widget-content widget-content-area m-3">
          <ReactDataTable
            title="Absent"
            columns={columns}
            onClick={() => {}}
            fetcher={fetchStaff}
            fetchLabel="/api/staffs"
            selectedActions={[
              {
                label: "Set Selected Present",
                action: () => {}
              }
            ]}
          />
        </div>
      </div> */}
    </>
  );
}
