import React, { PureComponent } from "react";
class Footer extends PureComponent {
  state = {};
  render() {
    return (
      <>
        {/* <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" className="logo-footer">
                  <img src="images/logo-light.png" height="24" alt="" />
                </a>
                <p className="mt-4">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i
                        data-feather="facebook"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i
                        data-feather="instagram"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i
                        data-feather="twitter"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i
                        data-feather="linkedin"
                        className="fea icon-sm fea-social"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">Company</h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="page-aboutus.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> About us
                    </a>
                  </li>
                  <li>
                    <a href="page-services.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Services
                    </a>
                  </li>
                  <li>
                    <a href="page-team.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Team
                    </a>
                  </li>
                  <li>
                    <a href="page-pricing.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Pricing
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-modern-three.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Project
                    </a>
                  </li>
                  <li>
                    <a href="page-jobs.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Careers
                    </a>
                  </li>
                  <li>
                    <a href="page-blog-grid.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Blog
                    </a>
                  </li>
                  <li>
                    <a href="auth-cover-login.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">Usefull Links</h5>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="page-terms.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Terms of
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="page-privacy.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="documentation.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Documentation
                    </a>
                  </li>
                  <li>
                    <a href="changelog.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Changelog
                    </a>
                  </li>
                  <li>
                    <a href="components.html" className="text-foot">
                      <i className="uil uil-angle-right-b me-1"></i> Components
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">Newsletter</h5>
                <p className="mt-4">
                  Sign up and receive the latest tips via email.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="foot-subscribe mb-3">
                        <label className="form-label">
                          Write your email <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          {" "}
                          <i data-feather="mail" className="fea icon-sm icons"></i>
                          <input
                            type="email"
                            name="email"
                            id="emailsubscribe"
                            className="form-control ps-5 rounded"
                            placeholder="Your email : "
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-grid">
                        <input
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="btn btn-soft-primary"
                          value="Subscribe"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer> */}
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    ©{new Date().getFullYear()}
                    Hostarena. Design with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by{" "}
                    <a href="#" target="_blank" className="text-reset">
                      Hostarena.org
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/american-ex.png"
                        className="avatar avatar-ex-sm"
                        title="American Express"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/discover.png"
                        className="avatar avatar-ex-sm"
                        title="Discover"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/master-card.png"
                        className="avatar avatar-ex-sm"
                        title="Master Card"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/paypal.png"
                        className="avatar avatar-ex-sm"
                        title="Paypal"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/visa.png"
                        className="avatar avatar-ex-sm"
                        title="Visa"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
