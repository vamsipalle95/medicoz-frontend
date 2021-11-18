import React, { Component } from "react";
import Map from "../../images/map.png";
import LocationGreen from "../../images/location-sm-green.png";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import BackBtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";

export default function AddressSetLocation() {
  const history = useHistory();
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 w-100 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="overflow-auto p-md-3 mb-4">
              <div className="draCard2 p-3">
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <h3 className="mb-0">
                    <img
                      onClick={() => history.goBack()}
                      src={BackBtn}
                      alt="backbtn"
                    />{" "}
                    Set Location
                  </h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 mt-3">
                  <img src={Map} alt="map" />
                </div>
                {/*map-ends-here*/}
                <div className="w-100 doaNText d-flex align-items-center mt-3">
                  <img src={LocationGreen} alt="greenloc" className="me-2" />
                  Set your Location Point
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 mpText mt-2">
                  B49, Prakash Nagar,Hyderabad, water tank,Telangana - 500016
                  Mobile: 98483 12345
                </div>
                <div className="w-100 mt-3">
                  <Link to="/DeliveryAddressRural">
                    <button type="button" className="btn doabBtn py-1 px-3">
                      Change
                    </button>
                  </Link>
                </div>
                <div className="w-100 mt-4 text-center">
                  <Link to="/DeliveryAddressRural">
                    <button type="button" className="btn doacBtn py-1 px-3">
                      Confirm Location
                    </button>
                  </Link>
                </div>
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
