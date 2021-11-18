import React from "react";
import Signup from "../../images/signup-logo.png";
import { useHistory } from "react-router-dom";

import Subscription from "../../images/subscription.png";
function PharmaSubscription() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/PharmaLogin");
  };
  return (
    <div>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-12 col-lg-6 p-3" style={{ height: "100%" }}>
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 610, marginTop: "15%" }}
            >
              <div className="w-100">
                <img src={Signup} alt="signup" />
              </div>
              <div className="w-100 p20sb mt-5">Get India’s</div>
              <div className="w-100 p32b mt-3">
                Best Pharmacy Online Store Platform
              </div>
              <div className="w-100 p18sb mt-3">
                Take your store online with simple clicks
              </div>
              <ul className="mt-5">
                <li className="p12">Get Instant Online Orders</li>
                <li className="p12 mt-3">amet, consectetur adipiscing elit.</li>
                <li className="p12 mt-3">Aenean euismod bibendum laoreet.</li>
                <li className="p12 mt-3">Proin gravida dolor sit amet lacus</li>
              </ul>
              <div className="w-100 p32bTeal mt-5">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>{" "}
                500/ per month
              </div>
              <div className="w-100 p12 mt-4">As a promotional offer get</div>
              <div className="w-100 mt-4">
                <button
                  type="button"
                  onClick={handleClick}
                  className="btn btnOrange px-4"
                >
                  Ger for FREE Now!
                </button>
              </div>
            </div>
            {/*fixed-width-box-ends-here*/}
          </div>
          {/*col-ends-here*/}
          <div
            className="col-12 col-lg-6 p-3"
            style={{ height: "100%", backgroundColor: "#068975" }}
          >
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 600, marginTop: "15%" }}
            >
              <div className="w-100">
                <img src={Subscription} alt="subscription" />
              </div>
              <div className="w-100 p20sbOrange mt-3">
                Everything you need on a day
              </div>
              <div className="w-100 p14White mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor.
              </div>
            </div>
            {/*fixed-width-ends-here*/}
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-fluid-ends-here*/}
    </div>
  );
}

export default PharmaSubscription;
