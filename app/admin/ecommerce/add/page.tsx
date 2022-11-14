export default function AddInvoice() {
  return (
   <>
   <div>
  {/* BREADCRUMB */}
  <div className="page-meta">
    <nav className="breadcrumb-style-one" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">App</a></li>
        <li className="breadcrumb-item"><a href="#">Ecommerce</a></li>
        <li className="breadcrumb-item active" aria-current="page">Create</li>
      </ol>
    </nav>
  </div>
  {/* /BREADCRUMB */}
  <div className="row mb-4 layout-spacing layout-top-spacing">
    <div className="col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="widget-content widget-content-area ecommerce-create-section">
        <div className="row mb-4">
          <div className="col-sm-12">
            <input type="text" className="form-control" id="inputEmail3" placeholder="Product Name" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-12">
            <label>Description</label>
            <div id="product-description" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label htmlFor="product-images">Upload Images</label>
            <div className="multiple-file-upload">
              <input type="file" className="filepond file-upload-multiple" name="filepond" id="product-images" multiple data-allow-reorder="true" data-max-file-size="3MB" data-max-files={5} />
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="switch form-switch-custom switch-inline form-switch-primary mt-4">
              <input className="switch-input" type="checkbox" role="switch" id="showPublicly" defaultChecked />
              <label className="switch-label" htmlFor="showPublicly">Display publicly</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="row">
        <div className="col-xxl-12 col-xl-8 col-lg-8 col-md-7 mt-xxl-0 mt-4">
          <div className="widget-content widget-content-area ecommerce-create-section">
            <div className="row">
              <div className="col-xxl-12 mb-4">
                <div className="switch form-switch-custom switch-inline form-switch-secondary">
                  <input className="switch-input" type="checkbox" role="switch" id="in-stock" />
                  <label className="switch-label" htmlFor="in-stock">In Stock</label>
                </div>
              </div>
              <div className="col-xxl-12 col-md-6 mb-4">
                <label htmlFor="proCode">Product Code</label>
                <input type="text" className="form-control" id="proCode"  />
              </div>
              <div className="col-xxl-12 col-md-6 mb-4">
                <label htmlFor="proSKU">Product SKU</label>
                <input type="text" className="form-control" id="proSKU"  />
              </div>
              <div className="col-xxl-12 col-md-6 mb-4">
                <label htmlFor="gender">Gender</label>
                <select className="form-select" id="gender">
                  <option >Choose...</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
              <div className="col-xxl-12 col-md-6 mb-4">
                <label htmlFor="category">Category</label>
                <select className="form-select" id="category">
                  <option >Choose...</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="organic">Organic</option>
                  <option value="apperal">Apperal</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className="col-xxl-12 col-lg-6 col-md-12">
                <label htmlFor="tags">Tags</label>
                <input id="tags" className="product-tags"  />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-xl-4 col-lg-4 col-md-5 mt-4">
          <div className="widget-content widget-content-area ecommerce-create-section">
            <div className="row">
              <div className="col-sm-12 mb-4">
                <label htmlFor="regular-price">Regular Price</label>
                <input type="text" className="form-control" id="regular-price"  />
              </div>
              <div className="col-sm-12 mb-4">
                <label htmlFor="sale-price">Sale Price</label>
                <input type="text" className="form-control" id="sale-price"  />
              </div>
              <div className="col-sm-12 mb-4">
                <div className="switch form-switch-custom switch-inline form-switch-danger">
                  <input className="switch-input" type="checkbox" role="switch" id="pricing-includes-texes" />
                  <label className="switch-label" htmlFor="pricing-includes-texes">Price includes taxes</label>
                </div>
              </div>
              <div className="col-sm-12">
                <button className="btn btn-success w-100">Add Product</button>
              </div>
            </div>                                            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  );
}
