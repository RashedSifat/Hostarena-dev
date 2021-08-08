import React, { PureComponent } from "react";
import { server } from "../env";
import axios from "axios";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import Modal from "../components/modal";
import { loadStripe } from "@stripe/stripe-js";

class Home extends PureComponent {
  state = {
    plans: [],
    payment_methods: [],
    creds: [],

    loader: "",
    message: "",
    plan_id: "",
  };

  componentDidMount = () => {
    axios
      .get(server + "/v1/plan/read")
      .then((rsp) => {
        this.setState({
          plans: rsp.data.payload,
        });
      })
      .catch((err) => {});

    axios
      .get(server + "/v1/payment_method/read-public")
      .then((rsp) => {
        this.setState({
          payment_methods: rsp.data.payload.payment_methods,
          creds: rsp.data.payload.payment_creds,
        });
      })
      .catch((err) => {});
  };

  checkout = async (e) => {
    e.preventDefault();

    const params = {
      payment_method: e.target.payment_method.value,
      plan: this.state.plan_id,
    };

    this.setState({
      loader: <Loader />,
      message: "",
    });

    var payment_method = e.target.payment_method.value;

    payment_method = this.state.payment_methods.filter(
      (data) => data.id === parseInt(payment_method)
    )[0];

    await axios
      .post(server + "/v1/checkout/plan", params)
      .then(async (rsp) => {
        if (payment_method.code === "stripe") {
          var stripe_creds = this.state.creds.filter(
            (data) => data.key === "STRIPE_PUBLIC_KEY"
          )[0];

          const stripePromise = loadStripe(stripe_creds.value);
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({
            sessionId: rsp.data.payload.url,
          });
        } else {
          window.location.href = rsp.data.payload.url;
        }

        this.setState({
          loader: "",
          message: <Alert className="success" message={rsp.data.detail} />,
        });
      })
      .catch((err) => {
        if (err.response) {
          this.setState({
            message: (
              <Alert className="danger" message={err.response.data.detail} />
            ),
          });
        }
        this.setState({
          loader: "",
        });
      });
  };

  render() {
    const { plans, payment_methods, loader, message } = this.state;

    return (
      <>
        <section
          className="bg-half-260 bg-primary d-table w-100"
          style={{ background: "url('images/hosting/bg.png') center center" }}
          id="home"
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-lg-12">
                <div className="title-heading text-center">
                  <h1 className="heading title-dark text-white mb-3">
                    Cloud Services & Web Hosting Solution
                  </h1>
                  <p className="para-desc para-dark mx-auto text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4 pt-2">
                    {" "}
                    <a href="javascript:void(0)" className="btn btn-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
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
        <section className="section-two bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <form className="p-4 shadow bg-white rounded">
                  <h4 className="mb-3">Search Your Domain Now</h4>
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group mb-3">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control rounded-left"
                          placeholder="Your domain name :"
                        />
                        <div className="input-group-append" id="button-addon4">
                          <select
                            className="form-control rounded-0"
                            id="domain_list"
                          >
                            <option>.in</option>
                            <option>.com</option>
                            <option>.org</option>
                            <option>.net</option>
                            <option>.info</option>
                            <option>.me</option>
                          </select>
                        </div>
                        <input
                          type="submit"
                          id="search"
                          name="search"
                          className="searchbtn btn btn-primary"
                          value="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-6 mt-4">
                      <a href="javascript:void(0)" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            .in <br />
                            <span className="text-primary">$4.99</span>/year
                          </h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4">
                      <a href="javascript:void(0)" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            .com <br />
                            <span className="text-primary">$5.99</span>/year
                          </h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4">
                      <a href="javascript:void(0)" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            .org <br />
                            <span className="text-primary">$6.99</span>/year
                          </h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4">
                      <a href="javascript:void(0)" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            .net <br />
                            <span className="text-primary">$7.99</span>/year
                          </h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4">
                      <a href="javascript:void(0)" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            .info <br />
                            <span className="text-primary">$3.99</span>/year
                          </h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mt-4">
                      <a href="javascript:void(0)" className="text-dark">
                        <div className="rounded shadow bg-white p-1 text-center">
                          <h6 className="mb-0">
                            .me <br />
                            <span className="text-primary">$2.99</span>/year
                          </h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container pb-lg-4 mb-md-5 mb-4">
            <div className="row align-items-center mb-4">
              <div className="col-lg-9 col-md-8 text-sm-start">
                <div className="section-title">
                  <h4 className="title mb-4">Cloud Hosting Services</h4>
                  <p className="text-muted para-desc mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 text-sm-end pt-2 pt-sm-0">
                {" "}
                <a
                  href="javascript:void(0)"
                  className="btn btn-outline-primary"
                >
                  Read more <i className="uil uil-angle-right-b"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    {" "}
                    <i className="uil uil-browser h1 text-primary"></i>
                  </div>
                  <div className="content mt-4">
                    <h5>Domain Name</h5>
                    <p className="text-muted">
                      Nisi aenean vulputate eleifend tellus vitae eleifend enim
                      a Aliquam eleifend aenean elementum semper.
                    </p>{" "}
                    <a href="javascript:void(0)" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    {" "}
                    <i className="uil uil-cloud-computing h1 text-primary"></i>
                  </div>
                  <div className="content mt-4">
                    <h5>Cloud Hosting</h5>
                    <p className="text-muted">
                      Allegedly, a Latin scholar established the origin of the
                      established text by compiling unusual word.
                    </p>{" "}
                    <a href="javascript:void(0)" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    {" "}
                    <i className="uil uil-server h1 text-primary"></i>
                  </div>
                  <div className="content mt-4">
                    <h5>Shared Hosting</h5>
                    <p className="text-muted">
                      It seems that only fragments of the original text remain
                      in only fragments the Lorem Ipsum texts used today.
                    </p>{" "}
                    <a href="javascript:void(0)" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    {" "}
                    <i className="uil uil-server-network h1 text-primary"></i>
                  </div>
                  <div className="content mt-4">
                    <h5>VPS Hosting</h5>
                    <p className="text-muted">
                      Nisi aenean vulputate eleifend tellus vitae eleifend enim
                      a Aliquam eleifend aenean elementum semper.
                    </p>{" "}
                    <a href="javascript:void(0)" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    {" "}
                    <i className="uil uil-database-alt h1 text-primary"></i>
                  </div>
                  <div className="content mt-4">
                    <h5>Reseller Hosting</h5>
                    <p className="text-muted">
                      Allegedly, a Latin scholar established the origin of the
                      established text by compiling unusual word.
                    </p>{" "}
                    <a href="javascript:void(0)" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-5 pt-3">
                <div className="features">
                  <div className="image position-relative d-inline-block">
                    {" "}
                    <i className="uil uil-code-branch h1 text-primary"></i>
                  </div>
                  <div className="content mt-4">
                    <h5>Web Hosting</h5>
                    <p className="text-muted">
                      It seems that only fragments of the original text remain
                      in only fragments the Lorem Ipsum texts used today.
                    </p>{" "}
                    <a href="javascript:void(0)" className="text-primary">
                      Read more <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <img src="images/hosting/1.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    Get best plan for more power with cloud Hosting
                  </h4>
                  <p className="text-muted">
                    You can combine all the Landrick templates into a single
                    one, you can take a component from the Application theme and
                    use it in the Website.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>{" "}
                  <a href="javascript:void(0)" className="btn btn-primary mt-3">
                    Get Started <i className="uil uil-angle-right-b"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title">
                  <h4 className="title mb-4">
                    Don't Compromise with the best web hosting solutions
                  </h4>
                  <p className="text-muted">
                    Using Landrick to build your site means never worrying about
                    designing another page or cross browser compatibility. Our
                    ever-growing library of components and pre-designed layouts
                    will make your life easier.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>{" "}
                  <a href="javascript:void(0)" className="btn btn-primary mt-3">
                    Get Started <i className="uil uil-angle-right-b"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                <img
                  src="images/hosting/deal-hend.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <img src="images/hosting/2.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    Powerful Server & Web Hosting Plateform
                  </h4>
                  <p className="text-muted">
                    You can combine all the Landrick templates into a single
                    one, you can take a component from the Application theme and
                    use it in the Website.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Create your own skin to match your brand
                    </li>
                  </ul>{" "}
                  <a href="javascript:void(0)" className="btn btn-primary mt-3">
                    Get Started <i className="uil uil-angle-right-b"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4" id="plans">
                    Our Hosting Rates
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 mt-4 pt-2">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="Month"
                    role="tabpanel"
                    aria-labelledby="Monthly"
                  >
                    <div className="row">
                      {plans.map((plan, index) => (
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                          <div className="card pricing-rates bg-light rounded border-0">
                            <div className="card-body py-5">
                              <h6 className="title text-uppercase fw-bold mb-4">
                                Cloud Hosting
                              </h6>
                              <div className="d-flex mb-4">
                                {" "}
                                <span className="h4 mb-0 mt-2">$</span>{" "}
                                <span className="price h1 mb-0">
                                  {plan.price.toFixed(2)}
                                </span>{" "}
                                <span className="h4 align-self-end mb-1">
                                  /mo
                                </span>
                              </div>
                              <ul className="list-unstyled mb-0 ps-0">
                                <li className="text-muted mb-0">
                                  <span className="text-primary h5 me-2">
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {plan.description}
                                </li>
                              </ul>{" "}
                              <a
                                href="javascript:void(0)"
                                className="btn btn-primary mt-4"
                                onClick={this.setState({
                                  plan_id: plan.id,
                                })}
                                data-bs-toggle="modal"
                                data-bs-target="#checkout"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section pt-md-4 pt-5 pt-sm-0 bg-light">
          <div className="container pb-lg-4 mb-md-5 mb-4">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Client Reviews</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{" "}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12 mt-4">
                <div className="tiny-three-item">
                  <div className="tiny-slide">
                    <div className="d-flex client-testi m-2">
                      <img
                        src="images/client/01.jpg"
                        className="avatar avatar-small client-image rounded shadow"
                        alt=""
                      />
                      <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " It seems that only fragments of the original text
                          remain in the Lorem Ipsum texts used today. "
                        </p>
                        <h6 className="text-primary">
                          - Thomas Israel{" "}
                          <small className="text-muted">C.E.O</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="tiny-slide">
                    <div className="d-flex client-testi m-2">
                      <img
                        src="images/client/02.jpg"
                        className="avatar avatar-small client-image rounded shadow"
                        alt=""
                      />
                      <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star-half text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " One disadvantage of Lorum Ipsum is that in Latin
                          certain letters appear more frequently than others. "
                        </p>
                        <h6 className="text-primary">
                          - Barbara McIntosh{" "}
                          <small className="text-muted">M.D</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="tiny-slide">
                    <div className="d-flex client-testi m-2">
                      <img
                        src="images/client/03.jpg"
                        className="avatar avatar-small client-image rounded shadow"
                        alt=""
                      />
                      <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " The most well-known dummy text is the 'Lorem Ipsum',
                          which is said to have originated in the 16th century.
                          "
                        </p>
                        <h6 className="text-primary">
                          - Carl Oliver{" "}
                          <small className="text-muted">P.A</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="tiny-slide">
                    <div className="d-flex client-testi m-2">
                      <img
                        src="images/client/04.jpg"
                        className="avatar avatar-small client-image rounded shadow"
                        alt=""
                      />
                      <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " According to most sources, Lorum Ipsum can be traced
                          back to a text composed by Cicero. "
                        </p>
                        <h6 className="text-primary">
                          - Christa Smith{" "}
                          <small className="text-muted">Manager</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="tiny-slide">
                    <div className="d-flex client-testi m-2">
                      <img
                        src="images/client/05.jpg"
                        className="avatar avatar-small client-image rounded shadow"
                        alt=""
                      />
                      <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " There is now an abundance of readable dummy texts.
                          These are usually used when a text is required. "
                        </p>
                        <h6 className="text-primary">
                          - Dean Tolle{" "}
                          <small className="text-muted">Developer</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="tiny-slide">
                    <div className="d-flex client-testi m-2">
                      <img
                        src="images/client/06.jpg"
                        className="avatar avatar-small client-image rounded shadow"
                        alt=""
                      />
                      <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-muted mt-2">
                          " Thus, Lorem Ipsum has only limited suitability as a
                          visual filler for German texts. "
                        </p>
                        <h6 className="text-primary">
                          - Jill Webb{" "}
                          <small className="text-muted">Designer</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        {/* checkout modal */}
        <Modal id="checkout" title="Purchase">
          <div className="modal-body">
            <form onSubmit={this.checkout}>
              {message}
              <div className="form-group">
                <label htmlFor="payment">Select Payment Method</label>
                <select
                  name="payment_method"
                  id="method"
                  className="form-control"
                  required
                >
                  {payment_methods.map((pm, index) => (
                    <option value={pm.id}>{pm.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary w-100">
                  Checkout {loader}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default Home;
