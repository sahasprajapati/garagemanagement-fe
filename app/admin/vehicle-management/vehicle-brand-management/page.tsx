import ClientVehicleBrandList from './ClientPage';

export default function AddInvoice() {
  return (
    <>
      <div>
        {/* BREADCRUMB */}
        <div className="page-meta">
          <nav className="breadcrumb-style-one" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">App</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Settings</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Vehicle
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Type
              </li>
            </ol>
          </nav>
        </div>
        {/* /BREADCRUMB */}
        <div className="row layout-spacing layout-top-spacing mb-4">
          <ClientVehicleBrandList />
        </div>
      </div>
    </>
  );
}
