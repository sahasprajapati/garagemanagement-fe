export default function Container() {
  return (
    <div className="row layout-top-spacing">
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-six">
          <div className="widget-heading">
            <h6 className="">Statistics</h6>
            <div className="task-action">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="statistics"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div
                  className="dropdown-menu left"
                  aria-labelledby="statistics"
                  style={{ willChange: 'transform' }}
                >
                  <a className="dropdown-item" href="#">
                    View
                  </a>
                  <a className="dropdown-item" href="#">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-chart">
            <div className="w-chart-section">
              <div className="w-detail">
                <p className="w-title">Total Visits</p>
                <p className="w-stats">423,964</p>
              </div>
              <div className="w-chart-render-one">
                <div id="total-users"></div>
              </div>
            </div>

            <div className="w-chart-section">
              <div className="w-detail">
                <p className="w-title">Paid Visits</p>
                <p className="w-stats">7,929</p>
              </div>
              <div className="w-chart-render-one">
                <div id="paid-visits"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-card-four">
          <div className="widget-content">
            <div className="w-header">
              <div className="w-info">
                <h6 className="value">Expenses</h6>
              </div>
              <div className="task-action">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="expenses"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-horizontal"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </a>

                  <div
                    className="dropdown-menu left"
                    aria-labelledby="expenses"
                    style={{ willChange: 'transform' }}
                  >
                    <a className="dropdown-item" href="#">
                      This Week
                    </a>
                    <a className="dropdown-item" href="#">
                      Last Week
                    </a>
                    <a className="dropdown-item" href="#">
                      Last Month
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-content">
              <div className="w-info">
                <p className="value">
                  $ 45,141 <span>this week</span>{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trending-up"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </p>
              </div>
            </div>

            <div className="w-progress-stats">
              <div className="progress">
                <div
                  className="progress-bar bg-gradient-secondary"
                  role="progressbar"
                  style={{ width: '57%' }}
                  aria-valuenow="57"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="">
                <div className="w-icon">
                  <p>57%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-card-five">
          <div className="widget-content">
            <div className="account-box">
              <div className="info-box">
                <div className="icon">
                  <span>
                    <img src="/img/money-bag.png" alt="money-bag" />
                  </span>
                </div>

                <div className="balance-info">
                  <h6>Total Balance</h6>
                  <p>$41,741.42</p>
                </div>
              </div>

              <div className="card-bottom-section">
                <div>
                  <span className="badge badge-light-success">
                    + 13.6%{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trending-up"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </span>
                </div>
                <a href="#" className="">
                  View Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <div className="widget widget-card-three">
              <div className="widget-content">
                  <div className="account-box">
                      <div className="info">
                          <div className="inv-title">
                              <h5 className="">Total Balance</h5>
                          </div>
                          <div className="inv-balance-info">
                              <p className="inv-balance">$ 41,741.42</p>
                              <span className="inv-stats balance-credited">+ 2453</span>
                          </div>
                      </div>
                      <div className="acc-action">
                          <div className="">
                              <a href="#" className="btn-wallet"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></a>
                          </div>
                          <a href="#" className="btn-add-balance">Add Balance</a>
                      </div>
                  </div>
              </div>
          </div>
      </div> --> */}

      <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-chart-three">
          <div className="widget-heading">
            <div className="">
              <h5 className="">Unique Visitors</h5>
            </div>

            <div className="task-action">
              <div className="dropdown ">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="uniqueVisitors"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div
                  className="dropdown-menu left"
                  aria-labelledby="uniqueVisitors"
                >
                  <a className="dropdown-item" href="#">
                    View
                  </a>
                  <a className="dropdown-item" href="#">
                    Update
                  </a>
                  <a className="dropdown-item" href="#">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-content">
            <div id="uniqueVisits"></div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-activity-five">
          <div className="widget-heading">
            <h5 className="">Activity Log</h5>

            <div className="task-action">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="activitylog"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div
                  className="dropdown-menu left"
                  aria-labelledby="activitylog"
                  style={{ willChange: 'transform' }}
                >
                  <a className="dropdown-item" href="#">
                    View All
                  </a>
                  <a className="dropdown-item" href="#">
                    Mark as Read
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-content">
            <div className="w-shadow-top"></div>

            <div className="mt-container mx-auto">
              <div className="timeline-line">
                <div className="item-timeline timeline-new">
                  <div className="t-dot">
                    <div className="t-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="t-content">
                    <div className="t-uppercontent">
                      <h5>
                        New project created :{' '}
                        <a href="javscript:void(0);">
                          <span>[Cork Admin]</span>
                        </a>
                      </h5>
                    </div>
                    <p>07 May, 2022</p>
                  </div>
                </div>

                <div className="item-timeline timeline-new">
                  <div className="t-dot">
                    <div className="t-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="t-content">
                    <div className="t-uppercontent">
                      <h5>
                        Mail sent to <a href="#">HR</a> and{' '}
                        <a href="#">Admin</a>
                      </h5>
                    </div>
                    <p>06 May, 2022</p>
                  </div>
                </div>

                <div className="item-timeline timeline-new">
                  <div className="t-dot">
                    <div className="t-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="t-content">
                    <div className="t-uppercontent">
                      <h5>Server Logs Updated</h5>
                    </div>
                    <p>01 May, 2022</p>
                  </div>
                </div>

                <div className="item-timeline timeline-new">
                  <div className="t-dot">
                    <div className="t-danger">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="t-content">
                    <div className="t-uppercontent">
                      <h5>
                        Task Completed :{' '}
                        <a href="javscript:void(0);">
                          <span>[Backup Files EOD]</span>
                        </a>
                      </h5>
                    </div>
                    <p>30 Apr, 2022</p>
                  </div>
                </div>

                <div className="item-timeline timeline-new">
                  <div className="t-dot">
                    <div className="t-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-file"
                      >
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="t-content">
                    <div className="t-uppercontent">
                      <h5>
                        Documents Submitted from <a href="#">Sara</a>
                      </h5>
                      <span className=""></span>
                    </div>
                    <p>25 Apr, 2022</p>
                  </div>
                </div>

                <div className="item-timeline timeline-new">
                  <div className="t-dot">
                    <div className="t-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-server"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <rect
                          x="2"
                          y="14"
                          width="20"
                          height="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="6" y1="6" x2="6" y2="6"></line>
                        <line x1="6" y1="18" x2="6" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="t-content">
                    <div className="t-uppercontent">
                      <h5>Server rebooted successfully</h5>
                      <span className=""></span>
                    </div>
                    <p>10 Apr, 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-shadow-bottom"></div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget-four">
          <div className="widget-heading">
            <h5 className="">Visitors by Browser</h5>
          </div>
          <div className="widget-content">
            <div className="vistorsBrowser">
              <div className="browser-list">
                <div className="w-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chrome"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="21.17" y1="8" x2="12" y2="8"></line>
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                  </svg>
                </div>
                <div className="w-browser-details">
                  <div className="w-browser-info">
                    <h6>Chrome</h6>
                    <p className="browser-count">65%</p>
                  </div>
                  <div className="w-browser-stats">
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-primary"
                        role="progressbar"
                        style={{ width: '65%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="browser-list">
                <div className="w-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-compass"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <div className="w-browser-details">
                  <div className="w-browser-info">
                    <h6>Safari</h6>
                    <p className="browser-count">25%</p>
                  </div>

                  <div className="w-browser-stats">
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-danger"
                        role="progressbar"
                        style={{ width: '35%' }}
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="browser-list">
                <div className="w-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-globe"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="w-browser-details">
                  <div className="w-browser-info">
                    <h6>Others</h6>
                    <p className="browser-count">15%</p>
                  </div>

                  <div className="w-browser-stats">
                    <div className="progress">
                      <div
                        className="progress-bar bg-gradient-warning"
                        role="progressbar"
                        style={{ width: '15%' }}
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="row widget-statistic">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
            <div className="widget widget-one_hybrid widget-followers">
              <div className="widget-heading">
                <div className="w-title">
                  <div className="w-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-users"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="">
                    <p className="w-value">31.6K</p>
                    <h5 className="">Followers</h5>
                  </div>
                </div>
              </div>
              <div className="widget-content">
                <div className="w-chart">
                  <div id="hybrid_followers"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
            <div className="widget widget-one_hybrid widget-referral">
              <div className="widget-heading">
                <div className="w-title">
                  <div className="w-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <div className="">
                    <p className="w-value">1,900</p>
                    <h5 className="">Referral</h5>
                  </div>
                </div>
              </div>
              <div className="widget-content">
                <div className="w-chart">
                  <div id="hybrid_followers1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
            <div className="widget widget-one_hybrid widget-engagement">
              <div className="widget-heading">
                <div className="w-title">
                  <div className="w-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-message-circle"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div className="">
                    <p className="w-value">18.2%</p>
                    <h5 className="">Engagement</h5>
                  </div>
                </div>
              </div>
              <div className="widget-content">
                <div className="w-chart">
                  <div id="hybrid_followers3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-five">
          <div className="widget-heading">
            <a href="#" className="task-info">
              <div className="usr-avatar">
                <span>FD</span>
              </div>

              <div className="w-title">
                <h5>Figma Design</h5>
                <span>Design Project</span>
              </div>
            </a>

            <div className="task-action">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="pendingTask"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div
                  className="dropdown-menu left"
                  aria-labelledby="pendingTask"
                  style={{ willChange: 'transform' }}
                >
                  <a className="dropdown-item" href="#">
                    View Project
                  </a>
                  <a className="dropdown-item" href="#">
                    Edit Project
                  </a>
                  <a className="dropdown-item" href="#">
                    Mark as Done
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-content">
            <p>
              Doloribus nisi vel suscipit modi, optio ex repudiandae
              voluptatibus officiis commodi.
            </p>

            <div className="progress-data">
              <div className="progress-info">
                <div className="task-count">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-square"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>5 Tasks</p>
                </div>
                <div className="progress-stats">
                  <p>86.2%</p>
                </div>
              </div>

              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: '65%' }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="meta-info">
              <div className="due-time">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>{' '}
                  3 Days Left
                </p>
              </div>

              <div className="avatar--group">
                <div className="avatar translateY-axis more-group">
                  <span className="avatar-title">+6</span>
                </div>
                <div className="avatar translateY-axis">
                  <img alt="avatar" src="/img/profile-8.jpeg" />
                </div>
                <div className="avatar translateY-axis">
                  <img alt="avatar" src="/img/profile-12.jpeg" />
                </div>
                <div className="avatar translateY-axis">
                  <img alt="avatar" src="/img/profile-19.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-card-one">
          <div className="widget-content">
            <div className="media">
              <div className="w-img">
                <img src="/img/profile-19.jpeg" alt="avatar" />
              </div>
              <div className="media-body">
                <h6>Jimmy Turner</h6>
                <p className="meta-date-time">Monday, May 18</p>
              </div>
            </div>

            <p>
              "Duis aute irure dolor" in reprehenderit in voluptate velit esse
              cillum "dolore eu fugiat" nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>

            <div className="w-action">
              <div className="card-like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-thumbs-up"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <span>551 Likes</span>
              </div>

              <div className="read-more">
                <a href="#">
                  Read More{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevrons-right"
                  >
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-card-two">
          <div className="widget-content">
            <div className="media">
              <div className="w-img">
                <img src="/img/g-8.png" alt="avatar" />
              </div>
              <div className="media-body">
                <h6>Dev Summit - New York</h6>
                <p className="meta-date-time">Bronx, NY</p>
              </div>
            </div>

            <div className="card-bottom-section">
              <h5>4 Members Going</h5>
              <div className="img-group">
                <img src="/img/profile-19.jpeg" alt="avatar" />
                <img src="/img/profile-6.jpeg" alt="avatar" />
                <img src="/img/profile-8.jpeg" alt="avatar" />
                <img src="/img/profile-3.jpeg" alt="avatar" />
              </div>
              <a href="#" className="btn">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
