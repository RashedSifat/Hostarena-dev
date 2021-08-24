import React, { PureComponent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { server } from "../env";
import axios from "axios";

class StripeCheckout extends PureComponent {
  state = {
    creds: [],
    sid: this.props.match.params.sid,
  };
  componentDidMount = async () => {
    localStorage.setItem("sid", this.state.sid);
    await axios
      .get(server + "/v1/payment_method/read-public")
      .then((rsp) => {
        this.setState({
          payment_methods: rsp.data.payload.payment_methods,
          creds: rsp.data.payload.payment_creds,
        });
      })
      .catch((err) => {});

    var stripe_creds = this.state.creds.filter(
      (data) => data.key === "STRIPE_PUBLIC_KEY"
    )[0];

    const stripePromise = loadStripe(stripe_creds.value);
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      sessionId: this.state.sid,
    });
  };
  render() {
    return <></>;
  }
}

export default StripeCheckout;
