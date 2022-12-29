'use client';

import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';

import { deleteData } from '@/lib/api/common';
import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
import VehicleModal, { IVehicleModalData } from './ClientModal';
export default function ClientVehicleList() {
  const defaultData: IVehicleModalData = {
    id: 0,
    kilometerRun: '',
    makeYear: '',
    color: '',
    price: '',
    numberPlate: '',
    customerId: 0,
    vehicleId: 0,
  };
  const [modalData, setModalData] = useState<IVehicleModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    kilometerRun: string,
    makeYear: string,
    color: string,
    price: string,
    numberPlate: string,
    customerId: number,
    vehicleId: number,
  ) => {
    setModalData({
      id,
      kilometerRun,
      makeYear,
      color,
      price,
      numberPlate,
      customerId,
      vehicleId,
    });
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
            data-bs-target="#vehicleModal"
            type="button"
            onClick={() => {
              handleButtonClick(
                row?.id,
                row?.kilometerRun,
                row?.makeYear,
                row?.color,
                row?.price,
                row?.numberPlate,
                row?.customerId,
                row?.vehicleId,
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
        name: 'Kilometer Run',
        selector: (row: any) => camelCaseToTitleCase(row?.kilometerRun),
        sortable: true,
      },
      {
        name: 'Make Year',
        selector: (row: any) => camelCaseToTitleCase(row?.makeYear),
        sortable: true,
      },
      {
        name: 'Color',
        selector: (row: any) => camelCaseToTitleCase(row?.color),
        sortable: true,
      },
      {
        name: 'Price',
        selector: (row: any) => camelCaseToTitleCase(row?.price),
        sortable: true,
      },
      {
        name: 'Number Plate',
        selector: (row: any) => camelCaseToTitleCase(row?.numberPlate),
        sortable: true,
      },
      {
        name: 'Customer',
        selector: (row: any) => camelCaseToTitleCase(row?.customer?.name),
        sortable: true,
      },
      {
        name: 'Vehicle',
        selector: (row: any) => camelCaseToTitleCase(row?.vehicle?.name),
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
              data-bs-target="#vehicleModal"
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
                deleteData({ route: '/owned-vehicle', ids: idsToDelete })
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
            route="owned-vehicle"
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
