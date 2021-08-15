import React, { PureComponent } from "react";
import axios from "axios";
import { server } from "../env";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "../components/Loader";

class Checkout extends PureComponent {
  state = {
    id: this.props.match.params.id,
    isLoaded: true,
    message: "",
    payment_methods: [],
    creds: {},
    checkout: {},
  };

  componentDidMount = async () => {
    await axios
      .get(server + "/v1/payment_method/read-public")
      .then((rsp) => {
        this.setState({
          payment_methods: rsp.data.payload.payment_methods,
          creds: rsp.data.payload.payment_creds,
        });
      })
      .catch((err) => {});

    await axios
      .get(server + "/v1/checkout/read/" + this.state.id)
      .then((rsp) => {
        this.setState({
          checkout: rsp.data.payload.order,
        });
      })
      .catch((err) => {});
  };

  paypal = async () => {
    this.setState({
      isLoaded: false,
    });
    const params = {
      checkout_id: this.state.id,
    };
    await axios
      .post(server + "/v1/checkout/checkout-paypal", params)
      .then((rsp) => {
        window.location.href = rsp.data.payload.url;
      })
      .catch((err) => {});
    this.setState({
      isLoaded: true,
    });
  };

  stripe = async () => {
    this.setState({
      isLoaded: false,
    });
    const params = {
      checkout_id: this.state.id,
    };
    await axios
      .post(server + "/v1/checkout/checkout-stripe", params)
      .then(async (rsp) => {
        var stripe_creds = this.state.creds.filter(
          (data) => data.key === "STRIPE_PUBLIC_KEY"
        )[0];

        const stripePromise = loadStripe(stripe_creds.value);
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({
          sessionId: rsp.data.payload.url,
        });
      })
      .catch((err) => {});
    this.setState({
      isLoaded: true,
    });
  };

  render() {
    const { payment_methods, checkout, isLoaded } = this.state;
    return (
      <div id="order" style={{ marginTop: "8rem" }}>
        <div className="container">
          <div className="row justify-content-center my-5">
            {isLoaded ? (
              <div className="col-md-8 col-md-offset-2">
                <div className="card">
                  <div className="header">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="brand">Checkout</div>
                      </div>
                      <div className="col-md-6">
                        <div className="total" style={{ textAlign: "right" }}>
                          ${checkout.amount}
                          <span>USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="select-payment">
                      Select one of the available payment methods.
                    </div>
                    <br />
                    <div className="row">
                      {payment_methods.map((pm, index) =>
                        pm.code === "paypal" ? (
                          <div className="col-md-3">
                            <a href="#" id="paypal" onClick={this.paypal}>
                              <div className="box">
                                <div className="logo-container">
                                  <img
                                    src="/images/paypal.png"
                                    className="payment-option"
                                  />
                                </div>
                                <div className="title">Paypal Express</div>
                              </div>
                            </a>
                          </div>
                        ) : pm.code === "stripe" ? (
                          <div className="col-md-3">
                            <a href="#" id="paypal" onClick={this.stripe}>
                              <div className="box">
                                <div className="logo-container">
                                  <img
                                    src="/images/stripe.png"
                                    className="payment-option"
                                  />
                                </div>
                                <div className="title">Credit/Debit Card</div>
                              </div>
                            </a>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                  <div className="footer">
                    <div className="txt">
                      Please Read all the Terms and Conditions before
                      proceeding.
                    </div>
                    <div className="txt">&copy; 2021. All Rights Reserved.</div>
                  </div>
                </div>
              </div>
            ) : (
              <Loader className="spinner-border-lg" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
