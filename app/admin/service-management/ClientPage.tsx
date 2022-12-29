'use client';

import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';

import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
import { deleteData } from '@/lib/api/common';
import { fetchVehicle } from '@/lib/api/vehicle';
import VehicleModal, { IVehicleModalData } from './ClientModal';
WarnModal;
export default function ClientWashList() {
  const defaultData: IVehicleModalData = {
    id: 0,
    customerId: 0,
    vehicleId: 0,
    staffId: 0,
    transactionId: 0,
  };
  const [modalData, setModalData] = useState<IVehicleModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    customerId: number,
    vehicleId: number,
    staffId: number,
    transactionId?: number,
  ) => {
    setModalData({ id, customerId, vehicleId, staffId, transactionId });
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
            data-bs-target="#customerModal"
            type="button"
            onClick={() => {
              handleButtonClick(
                row?.id,
                row?.customerId,
                row?.vehicleId,
                row?.staffId,
                row?.transactionId,
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
        name: 'Customer',
        selector: (row: any) => camelCaseToTitleCase(row?.customer?.name),
        sortable: true,
      },
      {
        name: 'Vehicle',
        selector: (row: any) =>
          camelCaseToTitleCase(row?.vehicle?.vehicle?.name),
        sortable: true,
      },
      {
        name: 'Staff',
        selector: (row: any) => camelCaseToTitleCase(row?.staff?.name),
        sortable: true,
      },
      {
        name: 'Created',
        selector: (row: any) => new Date(row?.createdAt).toString(),
        sortable: true,
      },
      {
        name: 'Last Updated',
        selector: (row: any) => new Date(row?.updatedAt).toString(),
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
              Delete Vehicle
            </button>{' '}
            <button
              type="button"
              className="btn btn-primary mr-2"
              data-bs-toggle="modal"
              data-bs-target="#customerModal"
              onClick={() => {
                setClearRow(!clearRows);
                setModalData(defaultData);
              }}
            >
              Add Vehicle
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <VehicleModal
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
                    toast.success('Successfully deleted Vehicles!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting Vehicles: ' +
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
            message="Are you sure you want to delete these Vehicles?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="Vehicle"
            columns={columns}
            onClick={() => {}}
            route="service?filter=WASH"
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
            fetchLabel="/api/Vehicles"
          />
        </div>
      </div>
    </>
  );
}
