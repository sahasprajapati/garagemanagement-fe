'use client';

import { fetchPermission } from '@/lib/api/user';
import ReactDataTable from '@/ui/ReactDataTable/ReactDataTable';
import { useMemo } from 'react';

export default function ClientInvoiceList() {
  const handleButtonClick = () => {
    console.log('clicked');
  };

  const columns = useMemo(
    () => [
      {
        name: 'Action',
        cell: () => (
          <button className="btn btn-primary mr-2" onClick={handleButtonClick}>
            Action
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        name: 'Action',
        selector: (row : any) => row?.action,
        sortable: true,
        grow: 2,
      },
      {
        name: 'Subject',
        selector: (row : any) => {
          console.log('Sahas row', row);
          return row?.subject?.name;
        },
        sortable: true,
      },
    ],
    [],
  );

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary mr-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch modal
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg> ... </svg>
              </button>
            </div>
            <div className="modal-body">
              {/* <p className="modal-text">
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros.
                Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar.
                Ut sit amet ullamcorper mi.{' '}
              </p> */}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn btn-light-dark"
                data-bs-dismiss="modal"
              >
                <i className="flaticon-cancel-12"></i> Discard
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReactDataTable
        fetcher={fetchPermission}
        title="User"
        columns={columns}
        onClick={() => {}}
      />
    </>
  );
}
