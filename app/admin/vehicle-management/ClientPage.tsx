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
    name: '',
    fuel: '',
    engine: '',
    mileage: '',
    transmission: '',
    features: '',
    vehicleTypeId: 0,
    vehicleWheelerTypeId: 0,
    vehicleBrandId: 0,
  };
  const [modalData, setModalData] = useState<IVehicleModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    name: string,
    fuel: string,
    engine: string,
    mileage: string,
    transmission: string,
    features: string,
    vehicleBrandId: number,
    vehicleTypeId: number,
    vehicleWheelerTypeId: number,
  ) => {
    setModalData({
      id,
      name,
      fuel,
      engine,
      mileage,
      transmission,
      features,
      vehicleBrandId,
      vehicleTypeId,
      vehicleWheelerTypeId,
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
                row?.name,
                row?.fuel,
                row?.engine,
                row?.mileage,
                row?.transmission,
                row?.features,
                row?.vehicleBrandId,
                row?.vehicleTypeId,
                row?.vehicleWheelerTypeId,
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
        name: 'Fuel',
        selector: (row: any) => camelCaseToTitleCase(row?.fuel),
        sortable: true,
      },
      {
        name: 'Engine',
        selector: (row: any) => camelCaseToTitleCase(row?.engine),
        sortable: true,
      },
      {
        name: 'Mileage',
        selector: (row: any) => camelCaseToTitleCase(row?.mileage),
        sortable: true,
      },
      {
        name: 'Transmission',
        selector: (row: any) => camelCaseToTitleCase(row?.transmission),
        sortable: true,
      },
      {
        name: 'Features',
        selector: (row: any) => camelCaseToTitleCase(row?.features),
        sortable: true,
      },
      {
        name: 'Vehicle Brand',
        selector: (row: any) => camelCaseToTitleCase(row?.brand?.name),
        sortable: true,
      },
      {
        name: 'Vehicle Type',
        selector: (row: any) => camelCaseToTitleCase(row?.type?.name),
        sortable: true,
      },
      {
        name: 'Vehicle Wheeler',
        selector: (row: any) => camelCaseToTitleCase(row?.wheelerType?.name),
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
            route="vehicles"

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
