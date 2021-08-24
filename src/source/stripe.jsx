import axios from "axios";
import React, { useEffect } from "react";
import { server } from "../env";

function Stripe(props) {
  //   window.location.href = props.match.params.url;
  console.log(props.match.params.url);
  const sid = localStorage.getItem("sid");

  useEffect(() => {
    axios
      .get(server + "/v1/checkout/read/" + sid)
      .then((rsp) => {
        window.location.href = rsp.data.payload.return_url;
      })
      .catch((err) => {
        window.location.href = "/";
      });
  });

  return (
    <div className="text-center" style={{ marginTop: "100px" }}>
      <h1 className="mt-5">Processing...</h1>
    </div>
  );
}

export default Stripe;
