export default function AddInvoice() {
  return (
    <div className="row invoice layout-top-spacing layout-spacing">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="doc-container">
          <div className="row">
            <div className="col-xl-9">
              <div className="invoice-container">
                <div className="invoice-inbox">
                  <div id="ct" >
                    <div className="invoice-00001">
                      <div className="content-section">
                        <div className="inv--head-section inv--detail-section">
                          <div className="row">
                            <div className="col-sm-6 col-12 mr-auto">
                              <div className="d-flex">
                                <img
                                  className="company-logo"
                                  src="../src/assets/img/cork-logo.png"
                                  alt="company"
                                />
                                <h3 className="in-heading align-self-center">
                                  Cork Inc.
                                </h3>
                              </div>
                              <p className="inv-street-addr mt-3">
                                XYZ Delta Street
                              </p>
                              <p className="inv-email-address">
                                info@company.com
                              </p>
                              <p className="inv-email-address">(120) 456 789</p>
                            </div>
                            <div className="col-sm-6 text-sm-end">
                              <p className="inv-list-number mt-sm-3 pb-sm-2 mt-4">
                                <span className="inv-title">Invoice : </span>{' '}
                                <span className="inv-number">#0001</span>
                              </p>
                              <p className="inv-created-date mt-sm-5 mt-3">
                                <span className="inv-title">
                                  Invoice Date :{' '}
                                </span>{' '}
                                <span className="inv-date">20 Mar 2022</span>
                              </p>
                              <p className="inv-due-date">
                                <span className="inv-title">Due Date : </span>{' '}
                                <span className="inv-date">26 Mar 2022</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="inv--detail-section inv--customer-detail-section">
                          <div className="row">
                            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                              <p className="inv-to">Invoice To</p>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 text-sm-end mt-sm-0 order-1 mt-5">
                              <h6 className=" inv-title">Invoice From</h6>
                            </div>
                            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                              <p className="inv-customer-name">Jesse Cory</p>
                              <p className="inv-street-addr">
                                405 Mulberry Rd., NC, 28649
                              </p>
                              <p className="inv-email-address">
                                jcory@company.com
                              </p>
                              <p className="inv-email-address">(128) 666 070</p>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 text-sm-end order-1">
                              <p className="inv-customer-name">Oscar Garner</p>
                              <p className="inv-street-addr">
                                2161 Ferrell Street, MN, 56545{' '}
                              </p>
                              <p className="inv-email-address">info@mail.com</p>
                              <p className="inv-email-address">
                                (218) 356 9954
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="inv--product-table-section">
                          <div className="table-responsive">
                            <table className="table">
                              <thead >
                                <tr>
                                  <th scope="col">S.No</th>
                                  <th scope="col">Items</th>
                                  <th className="text-end" scope="col">
                                    Qty
                                  </th>
                                  <th className="text-end" scope="col">
                                    Price
                                  </th>
                                  <th className="text-end" scope="col">
                                    Amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Calendar App Customization</td>
                                  <td className="text-end">1</td>
                                  <td className="text-end">$120</td>
                                  <td className="text-end">$120</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Chat App Customization</td>
                                  <td className="text-end">1</td>
                                  <td className="text-end">$230</td>
                                  <td className="text-end">$230</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Laravel Integration</td>
                                  <td className="text-end">1</td>
                                  <td className="text-end">$405</td>
                                  <td className="text-end">$405</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Backend UI Design</td>
                                  <td className="text-end">1</td>
                                  <td className="text-end">$2500</td>
                                  <td className="text-end">$2500</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="inv--total-amounts">
                          <div className="row mt-4">
                            <div className="col-sm-5 col-12 order-sm-0 order-1"></div>
                            <div className="col-sm-7 col-12 order-sm-1 order-0">
                              <div className="text-sm-end">
                                <div className="row">
                                  <div className="col-sm-8 col-7">
                                    <p >Sub Total :</p>
                                  </div>
                                  <div className="col-sm-4 col-5">
                                    <p >$3155</p>
                                  </div>
                                  <div className="col-sm-8 col-7">
                                    <p >Tax 10% :</p>
                                  </div>
                                  <div className="col-sm-4 col-5">
                                    <p >$315</p>
                                  </div>
                                  <div className="col-sm-8 col-7">
                                    <p className=" discount-rate">Shipping :</p>
                                  </div>
                                  <div className="col-sm-4 col-5">
                                    <p >$10</p>
                                  </div>
                                  <div className="col-sm-8 col-7">
                                    <p className=" discount-rate">
                                      Discount 5% :
                                    </p>
                                  </div>
                                  <div className="col-sm-4 col-5">
                                    <p >$150</p>
                                  </div>
                                  <div className="col-sm-8 col-7 grand-total-title mt-3">
                                    <h4 >Grand Total : </h4>
                                  </div>
                                  <div className="col-sm-4 col-5 grand-total-amount mt-3">
                                    <h4 >$3480</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="inv--note">
                          <div className="row mt-4">
                            <div className="col-sm-12 col-12 order-sm-0 order-1">
                              <p>Note: Thank you for doing Business with us.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="invoice-actions-btn">
                <div className="invoice-action-btn">
                  <div className="row">
                    <div className="col-xl-12 col-md-3 col-sm-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary btn-send"
                      >
                        Send Invoice
                      </a>
                    </div>
                    <div className="col-xl-12 col-md-3 col-sm-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-print  action-print"
                      >
                        Print
                      </a>
                    </div>
                    <div className="col-xl-12 col-md-3 col-sm-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-success btn-download"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col-xl-12 col-md-3 col-sm-6">
                      <a
                        href="./app-invoice-edit.html"
                        className="btn btn-dark btn-edit"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
