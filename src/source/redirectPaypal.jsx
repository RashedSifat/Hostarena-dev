import React, { PureComponent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { server } from "../env";
import axios from "axios";

class PaypalRedirect extends PureComponent {
  state = {
    id: this.props.match.params.id,
  };
  componentDidMount = async () => {
    await axios
      .get(server + "/v1/checkout/read/" + this.state.id)
      .then((rsp) => {
        window.location.href = rsp.data.payload.order.url;
        console.log(rsp.data);
      })
      .catch((err) => {});
  };
  render() {
    return (
      <div className="text-center" style={{ marginTop: "100px" }}>
        <h1 className="my-5">Processing...</h1>
      </div>
    );
  }
}

export default PaypalRedirect;
