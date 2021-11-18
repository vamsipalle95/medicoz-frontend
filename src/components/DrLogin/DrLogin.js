import React, { Component } from "react";
import SignUpLogo from "../../images/signup-logo.png";
import DrLogin1 from "../../images/dr-login.png";
import Doctor from "../Doctor/Doctor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function DrLogin() {
  return (
    <div>
      <div className="container-fluid px-0" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-12 col-lg-6 p-3" style={{ height: "100%" }}>
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 450, marginTop: "2%" }}
            >
              <div className="w-100">
                <img src={SignUpLogo} alt="SignUpLogo" />
              </div>
              <div className="w-100 p12 my-4">
                No Account? No problem.&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/DrSignUp" className="p12Orange text-decoration-none">
                  Sign Up Here.
                </Link>
              </div>
              <div className="w-100 mb-3">
                <label className="p18sb">EMAIL ADDRESS</label>
                <input type="email" className="form-control mt-2" required />
              </div>
              <div className="w-100 form-group mb-3">
                <label className="p18sb">PASSWORD</label>
                <div className="input-group mt-2" id="show_hide_password">
                  <input className="form-control" type="password" required />
                  <span className="input-group-text">
                    <a href="" style={{ color: "#F18F01" }}>
                      <i className="bi bi-eye ms-2 mt-2" aria-hidden="true" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="w-100 d-flex flex-wrap justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label p14"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="p14Orange text-decoration-none">
                  Forgot Password?
                </a>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 text-center mt-4">
                <Link to="/Doctor">
                  <button type="button" className="btn btnOrangePill px-4">
                    Login
                  </button>
                </Link>
              </div>
              <div className="w-100 p12 mt-5">
                By clicking Start Now, you agree to our{" "}
                <a href="#" className="p12Orange text-decoration-none">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="p12Orange text-decoration-none">
                  Privacy Policy
                </a>
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
              <div className="w-100 text-center">
                <img src={DrLogin1} alt="drLogin" />
              </div>
              <div className="w-100 p20sbOrange text-center mt-3">
                Everything you need on a day
              </div>
              <div className="w-100 p14White text-center mt-3">
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
