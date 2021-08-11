import React, { PureComponent } from "react";
import axios from "axios";
import { server } from "../env";
import Loader from "../components/Loader";

class Paypal extends PureComponent {
  state = {};
  componentDidMount = async () => {
    const url = new URL(window.location.href);
    const PayerID = url.searchParams.get("PayerID");
    const paymentId = url.searchParams.get("paymentId");
    const token = url.searchParams.get("token");

    const params = {
      PayerID,
      paymentId,
      token,
    };

    axios.post(server + "/v1/webhook/paypal", params).then((rsp) => {
      window.location.href = rsp.data.payload.url;
    });
  };
  render() {
    return (
      <div className="text-center mb-5" style={{ marginTop: "8rem" }}>
        <h1>Processing...</h1>
      </div>
    );
  }
}

export default Paypal;
