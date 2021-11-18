import React, { Component } from "react";
import SearchGreen from "../../images/search-green.png";
import Gps from "../../images/gps.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeliveryAddressRural from "../AddressBook/deliveryAddressRural";
import DeliveryAddressUrban from "../AddressBook/deliveryAddressUrban";
import BackBtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";

export default function SetLocation() {
  const history = useHistory();

  return (
    <div>
      <div className="overflow-auto p-md-3 mb-4">
        <div className="draCard1 p-3">
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
          <div className="input-group w-100 mt-4"></div>
          <Link to="/AddressSetLocation" className="dector">
            <div className="w-100 d-flex align-items-center my-2">
              <div className="me-2">
                <img src={Gps} alt="Gps" />
              </div>
              <div>
                <p className="doaNText mb-0">Set your Location Point</p>
                <p className="mpText mb-0">Using GPS</p>
              </div>
            </div>
          </Link>
          {/*flexbox-ends-here*/}
        </div>
        {/*draCard1-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}
      {/*container-ends-here*/}
    </div>
  );
}
