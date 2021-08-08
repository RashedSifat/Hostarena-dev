import React, { PureComponent } from "react";
import axios from "axios";
import { server } from "../env";

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
    return <></>;
  }
}

export default Paypal;
