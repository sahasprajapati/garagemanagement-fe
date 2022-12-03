'use client';

import { camelCaseToTitleCase } from '@/lib/utils';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo, useRef, useState } from 'react';

import WarnModal from '@/ui/Modal/WarnModal';
import toast from 'react-hot-toast';
import CustomerModal, { ICustomerModalData } from './CustomerModal';
import { deleteCustomers, fetchCustomer } from '@/lib/api/customer';
WarnModal;
export default function ClientCustomerList() {
  const defaultData: ICustomerModalData = {
    id: 0,
    name: '',
    email: '',
    address: '',
    mobile: '',
  };
  const [modalData, setModalData] = useState<ICustomerModalData>(defaultData);
  const warnButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = (
    id: number,
    name: string,
    email: string,
    address: string,
    mobile: string,
  ) => {
    setModalData({ id, name, email, address, mobile });
  };

  const [clearRows, setClearRow] = useState(false);
  const [refreshData, setRefetchData] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const columns = useMemo(
    () => [
      {
        name: 'Action',
        cell: (row : any) => (
          <button
            className="btn btn-primary mr-2"
            data-bs-toggle="modal"
            data-bs-target="#customerModal"
            type="button"
            onClick={() => {
              handleButtonClick(
                row?.id,
                row?.name,
                row?.email,
                row?.address,
                row?.mobile,
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
      },
      {
        name: 'Email',
        selector: (row : any) => camelCaseToTitleCase(row?.email),
        sortable: true,
      },
      {
        name: 'Mobile',
        selector: (row : any) => camelCaseToTitleCase(row?.mobile),
        sortable: true,
      },
      {
        name: 'Address',
        selector: (row : any) => camelCaseToTitleCase(row?.address),
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
              Delete Customer
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
              Add Customer
            </button>
          </div>
          <div className="w-100  d-flex justify-content-end align-items-end"></div>

          <CustomerModal
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
                deleteCustomers(idsToDelete)
                  .then(() => {
                    setClearRow(!clearRows);
                    toast.success('Successfully deleted Customers!');
                  })
                  .catch(() => {
                    setClearRow(!clearRows);

                    toast
                      .error(
                        'Error deleting Customers: ' +
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
            message="Are you sure you want to delete these Customers?"
            actionLabel="Delete"
          />
          <ReactDataTable
            title="Customer"
            columns={columns}
            onClick={() => {}}
            fetcher={fetchCustomer}
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
            fetchLabel="/api/Customers"
          />
        </div>
      </div>
    </>
  );
}
