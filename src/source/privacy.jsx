import React, { PureComponent } from "react";

class Privacy extends PureComponent {
  state = {};
  render() {
    return (
      <>
        <section className="bg-half bg-light d-table w-100 d-print-none">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title"> Privacy Policy</h4>
                  <ul className="list-unstyled mt-4">
                    <li className="list-inline-item h6 date text-muted">
                      {" "}
                      <span className="text-dark">Last Revised :</span> 23th
                      Sep, 2019
                    </li>
                  </ul>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <a href="index.html">Landrick</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Page</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Utility</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Privacy
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="card shadow rounded border-0">
                  <div className="card-body">
                    <h5 className="card-title">Overview :</h5>
                    <p className="text-muted">
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. One may speculate
                      that over the course of time certain letters were added or
                      deleted at various positions within the text.
                    </p>
                    <p className="text-muted">
                      In the 1960s, the text suddenly became known beyond the
                      professional circle of typesetters and layout designers
                      when it was used for Letraset sheets (adhesive letters on
                      transparent film, popular until the 1980s) Versions of the
                      text were subsequently included in DTP programmes such as
                      PageMaker etc.
                    </p>
                    <p className="text-muted">
                      There is now an abundance of readable dummy texts. These
                      are usually used when a text is required purely to fill a
                      space. These alternatives to the classic Lorem Ipsum texts
                      are often amusing and tell short, funny or nonsensical
                      stories.
                    </p>
                    <h5 className="card-title">We use your information to :</h5>
                    <ul className="list-unstyled text-muted">
                      <li>
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm me-2"
                        ></i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm me-2"
                        ></i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm me-2"
                        ></i>
                        Create your own skin to match your brand
                      </li>
                      <li>
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm me-2"
                        ></i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm me-2"
                        ></i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i
                          data-feather="arrow-right"
                          className="fea icon-sm me-2"
                        ></i>
                        Create your own skin to match your brand
                      </li>
                    </ul>
                    <h5 className="card-title">
                      Information Provided Voluntarily :
                    </h5>
                    <p className="text-muted">
                      In the 1960s, the text suddenly became known beyond the
                      professional circle of typesetters and layout designers
                      when it was used for Letraset sheets (adhesive letters on
                      transparent film, popular until the 1980s) Versions of the
                      text were subsequently included in DTP programmes such as
                      PageMaker etc.
                    </p>{" "}
                    <a
                      href="javascript:window.print()"
                      className="btn btn-soft-primary d-print-none"
                    >
                      Print
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Privacy;
