export default function AddInvoice() {
  return (
    <div className="row invoice layout-top-spacing layout-spacing">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="doc-container">
          <div className="row">
            <div className="col-xl-9">
              <div className="invoice-content">
                <div className="invoice-detail-body">
                  <div className="invoice-detail-title">
                    <div className="invoice-logo">
                      <div className="profile-image">
                        {/* // The classic file input element we'll enhance
                                                            // to a file pond, we moved the configuration
                                                            // properties to JavaScript */}
                        <div className="img-uploader-content">
                          <input
                            type="file"
                            className="filepond"
                            name="filepond"
                            accept="image/png, image/jpeg, image/gif"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="invoice-title">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Invoice Label"
                        defaultValue="Invoice Label"
                      />
                    </div>
                  </div>
                  <div className="invoice-detail-header">
                    <div className="row justify-content-between">
                      <div className="col-xl-5 invoice-address-company">
                        <h4>From:-</h4>
                        <div className="invoice-address-company-fields">
                          <div className="form-group row">
                            <label
                              htmlFor="company-name"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="company-name"
                                placeholder="Business Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="company-email"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Email
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="company-email"
                                placeholder="name@company.com"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="company-address"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Address
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="company-address"
                                placeholder="XYZ Street"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="company-phone"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Phone
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="company-phone"
                                placeholder="(123) 456 789"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 invoice-address-client">
                        <h4>Bill To:-</h4>
                        <div className="invoice-address-client-fields">
                          <div className="form-group row">
                            <label
                              htmlFor="client-name"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="client-name"
                                placeholder="Client Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="client-email"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Email
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="client-email"
                                placeholder="name@company.com"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="client-address"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Address
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="client-address"
                                placeholder="XYZ Street"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="client-phone"
                              className="col-sm-3 col-form-label col-form-label-sm"
                            >
                              Phone
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="client-phone"
                                placeholder="(123) 456 789"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-detail-terms">
                    <div className="row justify-content-between">
                      <div className="col-md-3">
                        <div className="form-group mb-4">
                          <label htmlFor="number">Invoice Number</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="number"
                            placeholder="#0001"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group mb-4">
                          <label htmlFor="date">Invoice Date</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="date"
                            placeholder="Add date picker"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group mb-4">
                          <label htmlFor="due">Due Date</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="due"
                            placeholder="None"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-detail-items">
                    <div className="table-responsive">
                      <table className="item-table table">
                        <thead>
                          <tr>
                            <th />
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Qty</th>
                            <th className="text-right">Amount</th>
                            <th className="text-center">Tax</th>
                          </tr>
                          <tr
                            aria-hidden="true"
                            className="d-block table-row-hidden mt-3"
                          />
                        </thead>
                        <tbody>
                          <tr>
                            <td className="delete-item-row">
                              <ul className="table-controls">
                                <li>
                                  <a
                                    href="#"
                                    className="delete-item"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    data-original-title="Delete"
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
                                      className="feather feather-x-circle"
                                    >
                                      <circle cx={12} cy={12} r={10} />
                                      <line x1={15} y1={9} x2={9} y2={15} />
                                      <line x1={9} y1={9} x2={15} y2={15} />
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </td>
                            <td className="description">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Item Description"
                              />{' '}
                              <textarea
                                className="form-control"
                                placeholder="Additional Details"
                                defaultValue={''}
                              />
                            </td>
                            <td className="rate">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Price"
                              />
                            </td>
                            <td className="qty text-right">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Quantity"
                              />
                            </td>
                            <td className="amount text-right">
                              <span className="editable-amount">
                                <span className="currency">$</span>{' '}
                                <span className="amount">100.00</span>
                              </span>
                            </td>
                            <td className="tax text-center">
                              <div className="n-chk">
                                <div className="form-check form-check-primary form-check-inline me-0 mb-0">
                                  <input
                                    className="form-check-input inbox-chkbox contact-chkbox"
                                    type="checkbox"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-dark additem">Add Item</button>
                  </div>
                  <div className="invoice-detail-total">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row invoice-created-by">
                          <label
                            htmlFor="payment-method-account"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Account #:
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="payment-method-account"
                              placeholder="Bank Account Number"
                            />
                          </div>
                        </div>
                        <div className="form-group row invoice-created-by">
                          <label
                            htmlFor="payment-method-bank-name"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Bank Name:
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="payment-method-bank-name"
                              placeholder="Insert Bank Name"
                            />
                          </div>
                        </div>
                        <div className="form-group row invoice-created-by">
                          <label
                            htmlFor="payment-method-code"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            SWIFT code:
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              id="payment-method-code"
                              placeholder="Insert Code"
                            />
                          </div>
                        </div>
                        <div className="form-group row invoice-created-by">
                          <label
                            htmlFor="payment-method-country"
                            className="col-sm-3 col-form-label col-form-label-sm"
                          >
                            Country:
                          </label>
                          <div className="col-sm-9">
                            <select
                              name="country_code"
                              className="form-select country_code  form-control-sm"
                              id="payment-method-country"
                            >
                              <option>Choose Country</option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                              <option value="Germany">Germany</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Denmark">Denmark</option>
                              <option value="Norway">Norway</option>
                              <option value="New-Zealand">New Zealand</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American-Samoa">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Antigua Barbuda">
                                Antigua &amp; Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia">
                                Bosnia &amp; Herzegovina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Brazil">Brazil</option>
                              <option value="British">
                                British Virgin Islands
                              </option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Cape">Cape Verde</option>
                              <option value="Cayman">Cayman Islands</option>
                              <option value="Central-African">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Costa-Rica">Costa Rica</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czechia">Czechia</option>
                              <option value="Côte">Côte d’Ivoire</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican">
                                Dominican Republic
                              </option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El-Salvador">El Salvador</option>
                              <option value="Equatorial-Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Greece">Greece</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guernsey">Guernsey</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong-Kong">
                                Hong Kong SAR China
                              </option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macedonia">Macedonia</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Moldova">Moldova</option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montenegro">Montenegro</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar (Burma)</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="North-Korea">North Korea</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Palestinian">
                                Palestinian Territories
                              </option>
                              <option value="Panama">Panama</option>
                              <option value="Papua">Papua New Guinea</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Réunion">Réunion</option>
                              <option value="Samoa">Samoa</option>
                              <option value="San-Marino">San Marino</option>
                              <option value="Saudi-Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra-Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon-Islands">
                                Solomon Islands
                              </option>
                              <option value="Somalia">Somalia</option>
                              <option value="South-Africa">South Africa</option>
                              <option value="South-Korea">South Korea</option>
                              <option value="Spain">Spain</option>
                              <option value="Sri-Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syria">Syria</option>
                              <option value="Sao-Tome-and-Principe">
                                São Tomé &amp; Príncipe
                              </option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania">Tanzania</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Timor-Leste">Timor-Leste</option>
                              <option value="Togo">Togo</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad-and-Tobago">
                                Trinidad &amp; Tobago
                              </option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="UAE">United Arab Emirates</option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="totals-row">
                          <div className="invoice-totals-row invoice-summary-subtotal">
                            <div className="invoice-summary-label">
                              Subtotal
                            </div>
                            <div className="invoice-summary-value">
                              <div className="subtotal-amount">
                                <span className="currency">$</span>
                                <span className="amount">0.00</span>
                              </div>
                            </div>
                          </div>
                          <div className="invoice-totals-row invoice-summary-total">
                            <div className="invoice-summary-label">
                              Discount
                            </div>
                            <div className="invoice-summary-value">
                              <div className="total-amount">
                                <span className="currency">$</span>
                                <span>0.00</span>
                              </div>
                            </div>
                          </div>
                          <div className="invoice-totals-row invoice-summary-tax">
                            <div className="invoice-summary-label">Tax</div>
                            <div className="invoice-summary-value">
                              <div className="tax-amount">
                                <span>0%</span>
                              </div>
                            </div>
                          </div>
                          <div className="invoice-totals-row invoice-summary-balance-due">
                            <div className="invoice-summary-label">Total</div>
                            <div className="invoice-summary-value">
                              <div className="balance-due-amount">
                                <span className="currency">$</span>
                                <span>0.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-detail-note">
                    <div className="row">
                      <div className="col-md-12 align-self-center">
                        <div className="form-group row invoice-note">
                          <label
                            htmlFor="invoice-detail-notes"
                            className="col-sm-12 col-form-label col-form-label-sm"
                          >
                            Notes:
                          </label>
                          <div className="col-sm-12">
                            <textarea
                              className="form-control"
                              id="invoice-detail-notes"
                              placeholder='Notes - For example, "Thank you for doing business with us"'
                              style={{ height: '88px' }}
                              defaultValue={''}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="invoice-actions">
                <div className="invoice-action-currency">
                  <div className="form-group mb-0">
                    <label>Currency</label>
                    <div className="dropdown selectable-dropdown invoice-select">
                      <a
                        id="currencyDropdown"
                        href="#"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="../src/assets/img/flag-us.svg"
                          className="flag-width"
                          alt="flag"
                        />{' '}
                        <span className="selectable-text">USD - US Dollar</span>{' '}
                        <span className="selectable-arrow">
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
                            className="feather feather-chevron-down"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="currencyDropdown"
                      >
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-us.svg"
                          data-value="USD - US Dollar"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-us.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          USD - US Dollar
                        </a>
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-gbp.svg"
                          data-value="GBP - British Pound"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-gbp.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          GBP - British Pound
                        </a>
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-idr.svg"
                          data-value="IDR - Indonesian Rupiah"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-idr.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          IDR - Indonesian Rupiah
                        </a>
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-inr.svg"
                          data-value="INR - Indian Rupee"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-inr.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          INR - Indian Rupee
                        </a>
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-brl.svg"
                          data-value="BRL - Brazilian Real"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-brl.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          BRL - Brazilian Real
                        </a>
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-de.svg"
                          data-value="EUR - Germany (Euro)"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-de.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          EUR - Germany (Euro)
                        </a>
                        <a
                          className="dropdown-item"
                          data-img-value="../src/assets/img/flag-try.svg"
                          data-value="TRY - Turkish Lira"
                          href="#"
                        >
                          <img
                            src="../src/assets/img/flag-try.svg"
                            className="flag-width"
                            alt="flag"
                          />{' '}
                          TRY - Turkish Lira
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-action-tax">
                  <h5>Tax</h5>
                  <div className="invoice-action-tax-fields">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group mb-0">
                          <label>Type</label>
                          <div className="dropdown selectable-dropdown invoice-tax-select">
                            <a
                              id="taxTypeDropdown"
                              href="#"
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {' '}
                              <span className="selectable-text">None</span>{' '}
                              <span className="selectable-arrow">
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
                                  className="feather feather-chevron-down"
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </span>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="taxTypeDropdown"
                            >
                              <a
                                className="dropdown-item"
                                data-value="Deducted"
                                href="#"
                              >
                                Deducted
                              </a>
                              <a
                                className="dropdown-item"
                                data-value="Per Item"
                                href="#"
                              >
                                Per Item
                              </a>
                              <a
                                className="dropdown-item"
                                data-value="On Total"
                                href="#"
                              >
                                On Total
                              </a>
                              <a
                                className="dropdown-item"
                                data-value="None"
                                href="#"
                              >
                                None
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div
                          className="form-group tax-rate-deducted mb-0"
                          style={{ display: 'none' }}
                        >
                          <label htmlFor="rate1">Rate (%)</label>
                          <input
                            type="number"
                            className="form-control input-rate"
                            id="rate1"
                            placeholder="Rate"
                            defaultValue={10}
                          />
                        </div>
                        <div
                          className="form-group tax-rate-per-item mb-0"
                          style={{ display: 'none' }}
                        >
                          <label htmlFor="rate2">Rate (%)</label>
                          <input
                            type="number"
                            className="form-control input-rate"
                            id="rate2"
                            placeholder="Rate"
                            defaultValue={5}
                          />
                        </div>
                        <div
                          className="form-group tax-rate-on-total mb-0"
                          style={{ display: 'none' }}
                        >
                          <label htmlFor="rate3">Rate (%)</label>
                          <input
                            type="number"
                            className="form-control input-rate"
                            id="rate3"
                            placeholder="Rate"
                            defaultValue={25}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-action-discount">
                  <h5>Discount</h5>
                  <div className="invoice-action-discount-fields">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group mb-0">
                          <label>Type</label>
                          <div className="dropdown selectable-dropdown invoice-discount-select">
                            <a
                              id="discountDropdown"
                              href="#"
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {' '}
                              <span className="selectable-text">None</span>{' '}
                              <span className="selectable-arrow">
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
                                  className="feather feather-chevron-down"
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </span>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="discountDropdown"
                            >
                              <a
                                className="dropdown-item"
                                data-value="Percent"
                                href="#"
                              >
                                Percent
                              </a>
                              <a
                                className="dropdown-item"
                                data-value="Flat Amount"
                                href="#"
                              >
                                Flat Amount
                              </a>
                              <a
                                className="dropdown-item"
                                data-value="None"
                                href="#"
                              >
                                None
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div
                          className="form-group discount-amount mb-0"
                          style={{ display: 'none' }}
                        >
                          <label htmlFor="ratet1">Amount</label>
                          <input
                            type="number"
                            className="form-control input-rate"
                            id="ratet1"
                            placeholder="Rate"
                            defaultValue={25}
                          />
                        </div>
                        <div
                          className="form-group discount-percent mb-0"
                          style={{ display: 'none' }}
                        >
                          <label htmlFor="ratet2">Percent</label>
                          <input
                            type="number"
                            className="form-control input-rate"
                            id="ratet2"
                            placeholder="Rate"
                            defaultValue={10}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice-actions-btn">
                <div className="invoice-action-btn">
                  <div className="row">
                    <div className="col-xl-12 col-md-4">
                      <a
                        href="#"
                        className="btn btn-primary btn-send"
                      >
                        Send Invoice
                      </a>
                    </div>
                    <div className="col-xl-12 col-md-4">
                      <a
                        href="./app-invoice-preview.html"
                        className="btn btn-secondary btn-preview"
                      >
                        Preview
                      </a>
                    </div>
                    <div className="col-xl-12 col-md-4">
                      <a
                        href="#"
                        className="btn btn-success btn-download"
                      >
                        Save
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
