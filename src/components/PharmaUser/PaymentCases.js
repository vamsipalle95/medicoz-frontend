import React, { useState } from "react";
import Wallet from "../../images/wallet.png";
import Debit from "../../images/debit-card.png";
import Credit from "../../images/credit-card.png";
import Upi from "../../images/upi.png";
import NetBank from "../../images/net-banking.png";
import RupeeOrange from "../../images/rupee-orange.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function PaymentCases() {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div
            className="col-12 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="draCard1 p-3">
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={Wallet} className="me-2" />
                <h3 className="mb-0">Select Payment Mode</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <button type="button" className="btn spmBtn w-100 mt-4">
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
              <button type="button" className="btn spmBtn w-100 mt-4">
                <img
                  src={RupeeOrange}
                  className="me-3"
                  width="24px"
                  height="24px"
                />
                Cash On Delivery (COD)
              </button>
            </div>
            {/*draCard1-ends-here*/}
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-ends-here*/}
    </div>
  );
}

export default PaymentCases;
