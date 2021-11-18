import React from "react";
import Confirm from "../../images/confirm.png";
import Profile1 from "../../images/profile-1-sm.png";
import locGreenSm from "../../images/location-sm-green.png";
import SmallImage from "../../images/small-image.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ConfirmAppointment() {
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

          {/*tabpane-1-ends-here*/}

          <div className="draCard2 mt-4 p-3">
            <div className="w-100 doacTitle pb-2">
              <h3 className="mb-0">
                <img src={Confirm} alt="confirm" className="me-2" />
                Confirm Appointment
              </h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaNText mt-4">
              Audio/In-Person/ Appointment with
            </div>
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile1" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <a href="#" className="text-decoration-none">
                  <h2 className="mb-0">Hospital/Clinic Name</h2>
                </a>
                <a href="#" className="text-decoration-none">
                  <h3 className="mb-0">Dr. Niraj</h3>
                </a>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img
                    src={locGreenSm}
                    alt="locationsmgreen"
                    className="me-2"
                  />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
            </div>
            {/*doaInfo-ends-here*/}
            <div className="w-100 doaInfo d-flex align-items-center justify-content-evenly mt-2 p-3">
              <div className="doaDay">11 April</div>
              <div className="doaDay">SUN</div>
              <div className="doaDay">10:30 PM</div>
            </div>
            {/*doaInfo-ends-here*/}
            <div className="doaDuration w-100 mt-3">
              Duration of appointment 15 mins
            </div>
            <div className="doaDuration w-100 mt-2">
              Fees: <span>₹</span>800
            </div>
            <div
              className="doaDuration w-100 mt-2 pb-2"
              style={{ borderBottom: "1px solid #B5B5B5 !important" }}
            >
              Total Fees: <span>₹</span>950
            </div>
            <div className="doaDuration w-100 mt-3">Patient Name</div>
            <div
              className="w-100 d-flex align-items-center mt-3 pb-2"
              style={{ borderBottom: "1px solid #B5B5B5 !important" }}
            >
              <div className="me-2">
                <img src={SmallImage} alt="small" />
              </div>
              <div>
                <div className="doaNText">Vinod</div>
                <div className="doaDuration mt-1">Male, 24 Years</div>
              </div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 text-end mt-4">
              <button type="button" className="btn doabBtn me-2">
                Back
              </button>
              <Link to="/SelectPayment">
                <button type="button" className="btn doacBtn">
                  Confirm
                </button>
              </Link>
            </div>
          </div>
          {/*card-ends-here*/}
        </div>
        {/*tabs-ends-here*/}
      </div>

      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}
