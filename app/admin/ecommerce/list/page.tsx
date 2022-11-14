export default function InvoiceList() {
  return (
    <div>
      {/* BREADCRUMB */}
      <div className="page-meta">
        <nav className="breadcrumb-style-one" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">App</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Ecommerce</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              List
            </li>
          </ol>
        </nav>
      </div>
      {/* /BREADCRUMB */}
      <div className="row layout-top-spacing">
        <div className="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
          <div className="widget-content widget-content-area br-8">
            <table
              id="ecommerce-list"
              className="dt-table-hover table"
              style={{ width: '100%' }}
            >
              <thead>
                <tr>
                  <th className="checkbox-column" />
                  <th>Product</th>
                  <th>Added on</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th className="no-content text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-3.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Nike Green Shoes
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/04/25</td>
                  <td>
                    <span className="badge badge-danger">Out of stock</span>
                  </td>
                  <td>$61</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink1"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-8.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Drone</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/07/25</td>
                  <td>
                    <span className="badge badge-warning">Low Stock</span>
                  </td>
                  <td>$63</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink2"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink2"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-13.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Smart Cleaner
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/01/12</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$66</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink3"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-4.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Camera</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/03/29</td>
                  <td>
                    <span className="badge badge-danger">Out of stock</span>
                  </td>
                  <td>$22</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink4"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-5.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Nike Shoes
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/11/28</td>
                  <td>
                    <span className="badge badge-warning">Low Stock</span>
                  </td>
                  <td>$33</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink5"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink5"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-6.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          MicroPhone
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/12/02</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$61</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink6"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink6"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-7.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Monitor</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/08/06</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$59</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink7"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink7"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-1.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Shoes</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/10/14</td>
                  <td>
                    <span className="badge badge-warning">Low Stock</span>
                  </td>
                  <td>$55</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink8"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink8"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-9.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Speakers</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/09/15</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$39</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink9"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink9"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-10.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">XBox</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/12/13</td>
                  <td>
                    <span className="badge badge-danger">Out of stock</span>
                  </td>
                  <td>$23</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink10"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink10"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-11.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Phone</span>
                      </div>
                    </div>
                  </td>
                  <td>2013/03/03</td>
                  <td>
                    <span className="badge badge-danger">Out of stock</span>
                  </td>
                  <td>$22</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink11"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink11"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-12.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Selfi Stick
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/10/16</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$36</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink12"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink12"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-14.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Sunglasses
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/06/09</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$64</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink19"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink19"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-15.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Flashlight
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/04/10</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$59</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink20"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink20"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-16.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Smart Watch
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/09/26</td>
                  <td>
                    <span className="badge badge-danger">Out of stock</span>
                  </td>
                  <td>$35</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink21"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink21"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-17.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Lamp</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/09/03</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$30</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink22"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink22"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-18.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Tablet</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/06/25</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$40</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink23"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink23"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-19.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">Chair</span>
                      </div>
                    </div>
                  </td>
                  <td>2022/12/12</td>
                  <td>
                    <span className="badge badge-success">In Stock</span>
                  </td>
                  <td>$21</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink24"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink24"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>
                    <div className="d-flex justify-content-left align-items-center">
                      <div className="avatar  me-3">
                        <img
                          src="../src/assets/img/product-14.jpg"
                          alt="Avatar"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-truncate fw-bold">
                          Sunglasses
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>2022/12/22</td>
                  <td>
                    <span className="badge badge-danger">Out of stock</span>
                  </td>
                  <td>$42</td>
                  <td className="text-center">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink25"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
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
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink25"
                      >
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                  {/* <td>$92,575</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
