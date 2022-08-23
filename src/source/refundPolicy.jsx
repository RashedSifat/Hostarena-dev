import React, { PureComponent } from "react";

class RefundPolicy extends PureComponent {
  state = {};
  render() {
    return (
      <>
        <section className="bg-half bg-light d-table w-100 d-print-none">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title"> Refund Policy</h4>
                  <ul className="list-unstyled mt-4">
                    <li className="list-inline-item h6 date text-muted">
                      {" "}
                      <span className="text-dark">Last Revised :</span> 21
                      Aug, 2022
                    </li>
                  </ul>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <a href="index.html">Hostarena</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Refund Policy
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
                    <h5 className="card-title">
                      Within 30 Days:
                    </h5>
                    <p className="text-muted">
                      Between 3-30 days, you may request a refund on all hosting 
                      services for new signups only. We are not able to refund 
                      domain registration fees.
                    </p>                
                    <h5 className="card-title">After 30 Days :</h5>
                    <p className="text-muted">
                      Non-refundable, renewals are excluded and are not eligible 
                      for a pro-rated refund. Renewals are only refundable within 
                      the 15 day prebill window.
                    </p>                    
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

export default RefundPolicy;
