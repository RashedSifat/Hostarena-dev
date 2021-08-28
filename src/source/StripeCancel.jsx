import React, { PureComponent } from "react";
import { CLOUD_COUPON_DOMAIN } from "../env";

class PaypalRedirect extends PureComponent {
  componentDidMount = async () => {
    window.location.href = "/";
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
