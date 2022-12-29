import React from 'react';

export interface CustomModal<T> {
  defaultData?: T;
  setDefaultData?: (data: T) => void;
  refetchData?: () => void;
}

interface Props {
  id?: string;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({id, title, footer, children }: Props) {
  return (
    <div
      className="modal fade"
      id={id ? id :"exampleModal"}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              color="white"
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
            {children}
          </div>
          {footer && (
            <div className="modal-footer">
              {footer}
              {/* <button className="btn btn btn-light-dark" data-bs-dismiss="modal">
              <i className="flaticon-cancel-12"></i> Discard
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
