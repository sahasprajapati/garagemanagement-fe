export default function SignUp() {
  return (
    <div className="form">
      <div className="auth-container d-flex">
        <div className="align-self-center container mx-auto">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-12 d-flex flex-column align-self-center mx-auto">
              <div className="card mt-3 mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <h2>Sign Up</h2>
                      <p>Enter your email and password to register</p>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control add-billing-address-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <div className="form-check form-check-primary form-check-inline">
                          <input
                            className="form-check-input me-3"
                            type="checkbox"
                            id="form-check-default"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form-check-default"
                          >
                            I agree the{' '}
                            <a
                              href="#"
                              className="text-primary"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-4">
                        <button className="btn btn-secondary w-100">
                          SIGN UP
                        </button>
                      </div>
                    </div>

                    <div className="col-12 mb-4">
                      <div className="">
                        <div className="seperator">
                          <hr />
                          <div className="seperator-text">
                            {' '}
                            <span>Or continue with</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4 col-12">
                      <div className="mb-4">
                        <button className="btn  btn-social-login w-100 ">
                          <img
                            src="../src/assets/img/google-gmail.svg"
                            alt=""
                            className="img-fluid"
                          />
                          <span className="btn-text-inner">Google</span>
                        </button>
                      </div>
                    </div>

                    <div className="col-sm-4 col-12">
                      <div className="mb-4">
                        <button className="btn  btn-social-login w-100">
                          <img
                            src="../src/assets/img/github-icon.svg"
                            alt=""
                            className="img-fluid"
                          />
                          <span className="btn-text-inner">Github</span>
                        </button>
                      </div>
                    </div>

                    <div className="col-sm-4 col-12">
                      <div className="mb-4">
                        <button className="btn  btn-social-login w-100">
                          <img
                            src="../src/assets/img/twitter.svg"
                            alt=""
                            className="img-fluid"
                          />
                          <span className="btn-text-inner">Twitter</span>
                        </button>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="text-center">
                        <p className="mb-0">
                          Already have an account ?{' '}
                          <a
                            href="#"
                            className="text-warning"
                          >
                            Sign in
                          </a>
                        </p>
                      </div>
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
