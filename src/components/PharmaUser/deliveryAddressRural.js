import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackBtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";

export default function DeliveryAddressRural() {
  const history = useHistory(true);

  return (
    <div className="container my-4">
      <div className="row">
        <div
          className="col-12 col-lg-9 w-100 mb-3 mx-lg-2 bg-white p-3"
          style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
        >
          <div>
            <div className="overflow-auto p-md-3 mb-4">
              <div className="draCard2 p-3">
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <h3 className="mb-0">
                    <img
                      onClick={() => history.goBack()}
                      src={BackBtn}
                      alt="backbtn"
                    />{" "}
                    Add/Edit Delivery Address
                  </h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="doaNText w-100 mt-3">Select</div>
                <div className="w-100 irBtn mt-2">
                  <div className="form-check form-check-inline">
                    <Link to="/DeliveryAddressUrban">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                        defaultChecked
                      />
                    </Link>
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Urban
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Link to="/DeliveryAddressRural">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                    </Link>
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Rural
                    </label>
                  </div>
                </div>
                {/*inline-radios-ends-here*/}
                <form className="w-100 mt-4">
                  <div className="mpText w-100 mb-2">* Select State</div>
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Telangana"
                    required
                  />
                  <div className="mpText w-100 mt-3 mb-2">
                    * Select District
                  </div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Select Mandal</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">Enter Village</div>
                  <input className="form-control w-100" type="text" />
                  <div className="mpText w-100 mt-3 mb-2">* Enter Locality</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Enter Pincode</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">House/Flat No.</div>
                  <input className="form-control w-100" type="text" />
                  <div className="mpText w-100 mt-3 mb-2">
                    Apartment/Society Name
                  </div>
                  <input className="form-control w-100" type="text" />
                  <div className="mpText w-100 mt-3 mb-2">Street Name</div>
                  <input className="form-control w-100" type="text" />
                  <div className="mpText w-100 mt-3 mb-2">Landmark</div>
                  <input className="form-control w-100" type="text" />
                  <div className="mpText w-100 mt-3 mb-2">
                    Choose a name for the address
                  </div>
                  <div className="abFormGroup">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="home"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label className="btn py-1 px-3 m-1" htmlFor="home">
                      Home
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="office"
                      autoComplete="off"
                    />
                    <label className="btn py-1 px-3 m-1" htmlFor="office">
                      Office
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="others"
                      autoComplete="off"
                    />
                    <label className="btn py-1 px-3 m-1" htmlFor="others">
                      Others
                    </label>
                  </div>
                  <div className="mpText w-100 mt-3 mb-2">* Bill To</div>
                  <input className="form-control w-100" type="text" required />
                  <p
                    className="mt-1 mb-0"
                    style={{ fontSize: 8, fontWeight: 500, color: "#323857" }}
                  >
                    This bill will be prepared against this name
                  </p>
                  <div className="mpText w-100 mt-3 mb-2">* Mobile Number</div>
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder={231123544222}
                    required
                  />
                  <Link to="/PaymentModeNow">
                    <button
                      type="submit"
                      className="d-block btn doacBtn px-4 mt-4 mx-auto"
                    >
                      Place Order Now
                    </button>
                  </Link>
                </form>
                {/*form-ends-here*/}
              </div>
              {/*draCard1-ends-here*/}
            </div>
            {/*myPhoneCardCnt-ends-here*/}
            {/*container-ends-here*/}
          </div>
        </div>
      </div>
    </div>
  );
}
