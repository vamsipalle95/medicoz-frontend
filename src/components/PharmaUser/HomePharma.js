import React, { Component } from "react";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function HomePharma() {
  let history = useHistory();
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-3">
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              <div className="card">
                <div className="card-body">
                  <div className="docHospitals">
                    <h3>Doctors Online Now</h3>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="col-md-3">
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              <div className="card">
                <div className="card-body">
                  <div className="docHospitals">
                    <h3>Book Appoinments</h3>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="docHospitals">
                  <h3 onClick={() => history.push("/PharmaSelectByLocation")}>
                    Buy Medicines from NEARBY PHARMACY
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="docHospitals">
                  <h3>Book Lab Tests from NEARBY DIAGNOSTIC LAB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
