import React, { useState } from "react";
import Wallet from "../../images/wallet.png";
import Debit from "../../images/debit-card.png";
import Credit from "../../images/credit-card.png";
import Upi from "../../images/upi.png";
import NetBank from "../../images/net-banking.png";
import Signup from "../../images/signup-logo.png";
import SignUpBg from "../../images/signup-bg.png";
import Comment from "../../images/comment.png";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function SelectPaymentMode() {
  const history = useHistory();
  const handlePayment = () => {
    history.push("/Success");
  };
  return (
    <div>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-12 col-lg-6 p-3" style={{ height: "100%" }}>
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 300, marginTop: "15%" }}
            >
              <div className="w-100">
                <img src={Signup} />
              </div>
              <div className="w-100 p18sb mt-4">Select Payment Mode</div>
              <button
                type="button"
                className="btn spmBtn w-100 mt-4"
                onClick={handlePayment}
              >
                <img src={Debit} className="me-3" width="24px" height="24px" />
                Debit card
              </button>
              <button type="button" className="btn spmBtn w-100 mt-4">
                <img src={Credit} className="me-3" width="24px" height="24px" />
                Credit card
              </button>
              <button type="button" className="btn spmBtn w-100 mt-4">
                <img src={Upi} className="me-3" width="24px" height="24px" />
                UPI
              </button>
              <button type="button" className="btn spmBtn w-100 mt-4">
                <img
                  src={NetBank}
                  className="me-3"
                  width="24px"
                  height="24px"
                />
                Net banking
              </button>
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
              <div className="w-100 text-center">
                <img src={SignUpBg} width="250px" />
              </div>
              <div className="w-100 p34sbOrange mt-3">
                Pharmacy’s Love Medicoz
              </div>
              <div className="w-100 mt-3">
                <img src={Comment} />
              </div>
              {/*carousel-starts-here*/}
              <div
                id="testimonials"
                className="carousel slide mt-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently, Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Nice Pharmacy</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                  <div className="carousel-item">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently, Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Nice Pharmacy</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                  <div className="carousel-item">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently, Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Nice Pharmacy</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                </div>
                {/*carousel-inner-ends-here*/}
                <div className="carousel-indicators mx-auto my-3">
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                  />
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={1}
                    className
                  />
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={2}
                    className
                  />
                </div>
              </div>
              {/*carousel-ends-here*/}
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

export default SelectPaymentMode;
