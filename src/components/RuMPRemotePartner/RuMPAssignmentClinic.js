import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Anitha from "../../images/doctoModule/anitha-sm.png";
import Trash from "../../images/doctoModule/trash-green.png";
import profile from "../../images/doctoModule/profile-1-sm.png";
import Backbtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import clinic from "../../images/doctoModule/clinic.jpg";
import LocGreen from "../../images/doctoModule/location-sm-green.png";

export default function AddAssignmentClinic() {
  const history = useHistory();
  return (
    <div>
      <div className="d-flex flex-wrap overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="draCard2 p-3">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">Set Clinic Details</h3>
          </div>
          {/*doacTitle-ends-here*/}
          <form className="w-100 mt-4">
            <input
              className="form-control w-100"
              type="text"
              placeholder="Clinic Name"
              required
            />
            <input type="file" className="form-control mt-2" />
            <div className="w-100 d-flex align-items-center mt-2">
              <input
                type="text"
                className="form-control me-3"
                placeholder="From"
              />
              <select className="form-select" style={{ width: "40%" }}>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center mt-2">
              <input
                type="text"
                className="form-control me-3"
                placeholder="From"
              />
              <select className="form-select" style={{ width: "40%" }}>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 text-end mt-3">
              <button type="button" className="btn doaOrangeBtn">
                + Add More
              </button>
            </div>
            <Link to="/AddSelfClinic">
              <button type="button" className="btn doacBtn w-100 mt-4">
                Proceed to Add Address
              </button>
            </Link>
          </form>
          {/*form-ends-here*/}
        </div>
      </div>

      <div className="d-flex flex-wrap overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="draCard2 p-3">
          <div className="w-100 doacTitle d-flex align-items-center mb-3 pb-2">
            <h3 className="mb-0">
              {" "}
              <img src={Backbtn} alt="back" onClick={() => history.goBack()} />
              Clinic Address
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <div className="w-100 mb-3">
            <img src={clinic} alt="clinic" />
          </div>
          <div className="w-100 mb-2">
            <a href="/" className="text-decoration-none f12sbOrange">
              Clinic name
            </a>
          </div>
          <div className="f10m mb-1">Timings:</div>
          <div className="f10m mb-1">7 to 9 AM</div>
          <div className="f10m">6 to 9 PM</div>
          <div
            className="pb-2"
            style={{ borderBottom: "1px solid #cecece !important" }}
          >
            <a href className="f10mBlue text-decoration-none">
              Edit
            </a>
          </div>
          <div
            className="w-100 d-flex align-items-end pb-2"
            style={{ borderBottom: "1px solid #cecece !important" }}
          >
            <div className="text-center me-3">
              <img src={LocGreen} alt="location" />
              <Link
                to="/EditAddress"
                className="f10mBlue text-decoration-none d-block"
              >
                Edit
              </Link>
            </div>
            <div className="f10m">
              B49, Prakash Nagar,Hyderabad, water tank Telangana - 500016
            </div>
          </div>
        </div>

        <div className="draCard2 m-2 p-3">
          <div className="w-100 doacTitle d-flex align-items-center mb-3 pb-2">
            <h3 className="mb-0">
              <img src={Backbtn} alt="back" onClick={() => history.goBack()} />{" "}
              Clinic RuMP
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <div className="w-100 text-center">
            <img src={profile} alt="profile" />
          </div>
          <div className="mpGrayBox w-100 p-3">
            <div className="w-100">
              <a href="/" className="text-decoration-none f12sbOrange">
                Mr.Prasad
              </a>
            </div>
            <div className="doaNText mb-1">Rural Medical Practioner(RuMP)</div>
          </div>
        </div>
        {/*draCard1-ends-here*/}
      </div>
    </div>
  );
}
