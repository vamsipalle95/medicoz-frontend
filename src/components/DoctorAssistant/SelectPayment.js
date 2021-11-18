import React from "react";
import DebitCard from "../../images/debit-card.png";
import CreditCard from "../../images/credit-card.png";
import Upi from "../../images/upi.png";
import NetBank from "../../images/net-banking.png";
import Wallet from "../../images/wallet.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SelectPayment() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
          <div className="doaNText me-3">Dr.Name Appointments</div>
          {/*doaNText-ends-here*/}
          <select className="form-select w-auto bg-white">
            <option selected>Dr.Prasad (GP)</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          {/*select-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 tabsOrange mt-4">
          <nav>
            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#pq"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Patient Que
              </button>
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#ba"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Book Appointment
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#gb"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Generate Bill
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade" id="pq" role="tabpanel"></div>
            {/*tabpane-1-ends-here*/}
            <div className="tab-pane fade show active" id="ba" role="tabpanel">
              <div className="draCard2 p-3 mt-4">
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Wallet} className="me-2" />
                  <h3 className="mb-0">Select Payment Mode</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <Link to="/AddHealthConcerns">
                  <button type="button" className="btn spmBtn w-100 mt-4">
                    <img
                      src={DebitCard}
                      className="me-3"
                      width="24px"
                      height="24px"
                    />
                    Debit card
                  </button>
                </Link>
                <button type="button" className="btn spmBtn w-100 mt-4">
                  <img
                    src={CreditCard}
                    className="me-3"
                    width="24px"
                    height="24px"
                  />
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
                  Cash
                </button>
              </div>
              {/*card-ends-here*/}
            </div>
            {/*tabpane-2-ends-here*/}
            <div className="tab-pane fade" id="gb" role="tabpanel"></div>
            {/*tabpane-3-ends-here*/}
          </div>
          {/*tabs-ends-here*/}
        </div>
      </div>
      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}
