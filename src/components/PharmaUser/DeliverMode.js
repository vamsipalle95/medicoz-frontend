import React from "react";
import LocsmGreen from "../../images/location-sm-green.png";
import FilterOrange from "../../images/flite-orange.png";
import PercentOrange from "../../images/percentage-orange.png";
import TagOrange from "../../images/tag-orange.png";
import StarOrange from "../../images/star-orange.png";
import { useHistory } from "react-router-dom";
import Back from "../../images/back-button-new.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DeliverMode() {
  const history = useHistory();
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="w-100 d-flex flex-wrap align-items-center p-3 mb-2 mpGrayBox">
              <div className="mpTitle me-4 mb-2">
                <img src={Back} alt="back" onClick={() => history.goBack()} />
                Balaji Medicals
              </div>
              {/*doaNText-ends-here*/}
              <div className="f10m mb-2">
                <img src={LocsmGreen} alt="loca" className="me-2" />
                Begumpet, Hyderabad
              </div>
            </div>
            {/*graybox-ends-here*/}
            <div
              className="p-3"
              style={{ background: "#F2F7F7", borderRadius: 5 }}
            >
              <div className="w-100 d-flex flex-wrap align-items-center">
                <p className="f12sbTeal mb-2 me-4">
                  <img src={FilterOrange} alt="filter" className="me-2" />
                  Home Delivery Available
                </p>
                <p className="f12sbTeal mb-2 me-4">
                  <img src={PercentOrange} alt="orange" className="me-2" />
                  Discount Upto 20%
                </p>
                <p className="mb-2 me-4">
                  <a href="#" className="f11sbBlue text-decoration-none">
                    <img src={TagOrange} alt="tag" className="me-2" />
                    Offers (2)
                  </a>
                </p>
                <p className="mb-2">
                  <Link
                    to="/PharmaCustomerReivews"
                    className="f11sbBlue text-decoration-none"
                  >
                    <img src={StarOrange} alt="orange" className="me-2" />
                    3/5 Rating
                  </Link>
                </p>
              </div>
              <div className="w-100 d-flex flex-wrap align-items-center">
                <p className="f10m mb-2 me-4">Home Delivery within 3 KM FREE</p>
                <p className="f10m mb-2 me-4">
                  Home Delivery within 8Km:{" "}
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    ₹
                  </span>
                  50/-
                </p>
                <p className="f10m mb-2">
                  Minimum order amount for home delivery:{" "}
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    ₹
                  </span>
                  300/-
                </p>
              </div>
            </div>
            {/*light-green-box-ends-here*/}
            <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
              <nav>
                <div
                  className="nav nav-tabs border-0"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Order Medicines
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#offers"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Offers
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    About the Store
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="order"
                  role="tabpanel"
                >
                  <div className="w-100 doaNText mt-4">
                    Select Delivery Mode
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Home Delivery
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option2"
                      onclick="location.href='pharma-landing-select-delivery-mode-2.html';"
                    />
                    <label className="form-check-label" htmlFor="option2">
                      In Store-Pickup{" "}
                      <Link to="/PaymentModeNow">
                        <span className="blueXt">Dev: Select Now</span>
                      </Link>
                    </label>
                  </div>
                </div>

                <div className="w-100 text-end mt-4">
                  <Link to="/DeliverySetLocation">
                    <button type="button" className="btn doaOrangeBtn">
                      Proceed
                    </button>
                  </Link>
                </div>
                {/*tabpane-1-ends-here*/}
                <div
                  className="tab-pane fade"
                  id="offers"
                  role="tabpanel"
                ></div>
                {/*tabpane-2-ends-here*/}
                <div className="tab-pane fade" id="about" role="tabpanel"></div>
                {/*tabpane-3-ends-here*/}
              </div>
              {/*tabs-ends-here*/}
            </div>
            {/*tabs-container-ends-here*/}
          </div>
          {/*col-ends-here*/}
          <div
            className="col-12 col-lg-2 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <ul className="timeline">
              <li className="active">
                <p className="f10m">Select Full or Partial Prescription</p>
              </li>
              <li>
                <p className="f10m">Upload Prescription</p>
              </li>
              <li>
                <p className="f10m">
                  If Partial Prescription, Enter Drug and Quantity
                </p>
              </li>
              <li>
                <p className="f10m">Select Delivery Mode</p>
              </li>
              <li>
                <p className="f10m">Select Payment Mode</p>
              </li>
              <li>
                <p className="f10m">Place Order</p>
              </li>
              <li>
                <p className="f10m">Receive Medicines</p>
              </li>
            </ul>
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-ends-here*/}
    </div>
  );
}

export default DeliverMode;
