import ClientInvoiceList from "./List";

export default function InvoiceList() {
  return (
    <div className="row" id="cancel-row">
      <div className="col-xl-12 col-lg-12 col-sm-12 layout-top-spacing layout-spacing">
        <div className="widget-content widget-content-area br-8">
          <ClientInvoiceList />
          {/* <table
            id="invoice-list"
            className="dt-table-hover table"
            style={{ width: '100%' }}
          >
            <thead>
              <tr>
                <th className="checkbox-column"> Record no. </th>
                <th>Invoice Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#098424</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-12.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Alma Clarke{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    alma.clarke@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$234.40</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    10 Feb{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#095841</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-8.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Kelly Young{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    youngkelly@hotmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$49.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    06 Feb{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#091768</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-7.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Vincent Carpenter{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    vincentcarpenter@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$400</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    30 Jan{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#089472</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-1.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Andy King{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    kingandy07@company.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$149.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    28 Jan{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#087916</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-15.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Mary McDonald{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    maryDonald007@gamil.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$79.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    25 Jan{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#086773</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-14.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Nia Hillyer{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    niahillyer666@comapny.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$59.21</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    20 Jan{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#086643</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-11.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Amy Diaz{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    amy968@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$100.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    14 Jan{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#084743</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-18.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Donna Rogers{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    donnaRogers@hotmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$405.15</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    03 Jan{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#082693</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-24.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Grace Roberts{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    graceRoberts@company.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$344.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    31 Dec{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#081681</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-32.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      James Taylor{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    jamestaylor468@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$20.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    27 Dec{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#081452</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-30.png"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Alexander Gray{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    alexGray3188@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$1044.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    20 Dec{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#081451</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-28.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Laurie Fox{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    lauriefox@company.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$2275.45</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    15 Dec{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#098425</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-4.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Felicia Terry{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    feliciaterry@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$234.40</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    10 Feb{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#098445</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-9.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Carol Mack{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    carolmack@hotmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$49.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    06 Feb{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#099825</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-21.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Ian Munoz{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    ianMunoz@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$400</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    10 Feb{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#099835</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-34.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Devin Cole{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    devincole46@company.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$149.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    20 Feb{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#099859</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-31.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Nina Flores{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    ninaFlores207@gamil.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$79.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    01 Mar{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#099989</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-33.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Leah Romero{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    leahRomero61@comapny.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-warning inv-status">
                    Pending
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$59.21</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    06 Mar{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#101261</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-22.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Kelli Myers{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    kelli968@gmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$100.00</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    10 Mar{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="checkbox-column"> 1 </td>
                <td>
                  <a href="./app-invoice-preview.html">
                    <span className="inv-number">#102261</span>
                  </a>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="usr-img-frame me-2 rounded-circle">
                      <img
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        src="../src/assets/img/profile-2.jpeg"
                      />
                    </div>
                    <p className="align-self-center user-name mb-0">
                      {' '}
                      Susan Norton{' '}
                    </p>
                  </div>
                </td>
                <td>
                  <span className="inv-email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>{' '}
                    susanNorton@hotmail.com
                  </span>
                </td>
                <td>
                  <span className="badge badge-light-success inv-status">
                    Paid
                  </span>
                </td>
                <td>
                  <span className="inv-amount">$405.15</span>
                </td>
                <td>
                  <span className="inv-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>{' '}
                    15 Mar{' '}
                  </span>
                </td>
                <td>
                  <a
                    className="badge badge-light-primary me-2 action-edit text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit-3"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </a>
                  <a
                    className="badge badge-light-danger action-delete text-start"
                    href="javascript:void(0);"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
