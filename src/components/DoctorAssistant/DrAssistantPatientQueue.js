import React from "react";
import CamCordersm from "../../images/camcorder-sm.png";
import Walking from "../../images/walking.png";
import PhoneSm from "../../images/phone-sm.png";
import UserGreensm from "../../images/user-green-sm.png";
import RPIcon from "../../images/rp-icon.png";
import CalOrange from "../../images/calender-orange.png";
import Todo from "../../images/to-do.png";
import Profile1 from "../../images/profile-1-sm.png";
import LocationSmGreen from "../../images/location-sm-green.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Heart from "../../images/heart-in-hand.png";

const DrAssistantPatientQueue = () => {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
          <div className="doaNText me-3">Dr.Name Appointments</div>
          {/*doaNText-ends-here*/}
          <select className="form-select w-auto w300 bg-white">
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
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#pq"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Patient Queue
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#ba"
                type="button"
                role="tab"
                aria-selected="false"
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
            <div className="tab-pane fade show active" id="pq" role="tabpanel">
              <div className="w-100 overflow-auto mt-4">
                <table id="table_id">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Patient Name</th>
                      <th>Gender/Age</th>
                      <th>Location</th>
                      <th>Mobile</th>
                      <th>Follow up</th>
                      <th>Queue Status</th>
                      <th>Vitals &amp; HealTh Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={CamCordersm} alt="camera" className="me-3" />
                        10:30 AM
                      </td>
                      <td>Full Name Goes here</td>
                      <td>M/28</td>
                      <td>Sainikpuri</td>
                      <td>9865682569</td>
                      <td>New</td>
                      <td>Completed</td>
                      <td>
                        <Link to="/HealthConcerns">
                          <a href="#" className="text-decoration-none">
                            Add
                          </a>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={PhoneSm} alt="phonesm" className="me-3" />
                        10:30 AM
                      </td>
                      <td>Full Name Goes here</td>
                      <td>M/28</td>
                      <td>Sainikpuri</td>
                      <td>9865682569</td>
                      <td>New</td>
                      <td>Completed</td>
                      <td>
                        <Link to="/HealthConcerns">
                          <a href="#" className="text-decoration-none">
                            Add
                          </a>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={UserGreensm}
                          alt="usergreen"
                          className="me-3"
                        />
                        10:30 AM
                      </td>
                      <td>Full Name Goes here</td>
                      <td>M/28</td>
                      <td>Sainikpuri</td>
                      <td>9865682569</td>
                      <td>New</td>
                      <td>Completed</td>
                      <td>
                        <Link to="/HealthConcerns">
                          <a href="#" className="text-decoration-none">
                            Add
                          </a>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={Walking} alt="walking" className="me-3" />
                        10:30 AM
                      </td>
                      <td>Full Name Goes here</td>
                      <td>M/28</td>
                      <td>Sainikpuri</td>
                      <td>9865682569</td>
                      <td>New</td>
                      <td>Completed</td>
                      <td>
                        <Link to="/HealthConcerns">
                          <a href="#" className="text-decoration-none">
                            Add
                          </a>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={RPIcon}
                          alt="rpicon"
                          width="16px"
                          className="me-3"
                        />
                        10:30 AM
                      </td>
                      <td>Full Name Goes here</td>
                      <td>M/28</td>
                      <td>Sainikpuri</td>
                      <td>9865682569</td>
                      <td>New</td>
                      <td>Completed</td>
                      <td>
                        <Link to="/HealthConcerns">
                          <a href="#" className="text-decoration-none">
                            Add
                          </a>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*table-ends-here*/}
            </div>
            {/*tabpane-1-ends-here*/}
            <div className="tab-pane fade" id="ba" role="tabpanel">
              <div className="draCard2 p-3 mt-4">
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Todo} alt="todo" className="me-2" />
                  <h3 className="mb-0">Book Video/In-person Appointment</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 doaInfo d-flex align-items-center mt-3 p-3">
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
                        src={LocationSmGreen}
                        alt="location-sm-green"
                        className="me-2"
                      />
                      <h5 className="mb-0">Begumpet, Hyderabad</h5>
                    </div>
                  </div>
                  {/*doaText-ends-here*/}
                </div>
                {/*doaInfo-ends-here*/}
                <div className="w-100 doaSchedule d-flex align-items-center justify-content-evenly mt-3">
                  <div className="pb-1">11 Apr</div>
                  <div className="pb-1 active">12 Apr</div>
                  <div className="pb-1">13 Apr</div>
                  <div className="pb-1">14 Apr</div>
                  <div className="pb-1">15 Apr</div>
                  <div className="pb-1">
                    <img src={CalOrange} alt="calender" />
                  </div>
                </div>
                {/*doaSchedule-ends-here*/}
                <div className="doatHead w-100 mt-3">Select Time</div>
                {/*doatHead-ends-here*/}
                <div className="w-100 doaTabs mt-3">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="morning-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#morning"
                        type="button"
                        role="tab"
                        aria-controls="morning"
                        aria-selected="true"
                      >
                        Morning
                      </button>
                      <button
                        className="nav-link"
                        id="afternoon-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#afternoon"
                        type="button"
                        role="tab"
                        aria-controls="afternoon"
                        aria-selected="false"
                      >
                        Afternoon
                      </button>
                      <button
                        className="nav-link"
                        id="evening-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#evening"
                        type="button"
                        role="tab"
                        aria-controls="evening"
                        aria-selected="false"
                      >
                        Evening
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="morning"
                      role="tabpanel"
                      aria-labelledby="morning-tab"
                    >
                      <form className="mt-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time1"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn" htmlFor="time1">
                          9:00 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time2"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time2">
                          9:15 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time3"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time3">
                          9:30 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time4"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time4">
                          9:45 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time5"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time5">
                          10:00 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time6"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time6">
                          10:15 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time7"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time7">
                          10:45 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time8"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time8">
                          11:00 AM
                        </label>
                      </form>
                      {/*fmbGroup-ends-here*/}
                    </div>
                    {/*tab-pane1-ends-here*/}
                    <div
                      className="tab-pane fade"
                      id="afternoon"
                      role="tabpanel"
                      aria-labelledby="afternoon-tab"
                    >
                      <form className="mt-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time9"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn" htmlFor="time9">
                          9:00 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time10"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time10">
                          9:15 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time11"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time11">
                          9:30 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time12"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time12">
                          9:45 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time13"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time13">
                          10:00 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time14"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time14">
                          10:15 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time15"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time15">
                          10:45 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time16"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time16">
                          11:00 AM
                        </label>
                      </form>
                      {/*fmbGroup-ends-here*/}
                    </div>
                    {/*tab-pane2-ends-here*/}
                    <div
                      className="tab-pane fade"
                      id="evening"
                      role="tabpanel"
                      aria-labelledby="evening-tab"
                    >
                      <form className="mt-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time17"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn" htmlFor="time17">
                          9:00 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time18"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time18">
                          9:15 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time19"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time19">
                          9:30 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time20"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time20">
                          9:45 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time21"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time21">
                          10:00 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time22"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time22">
                          10:15 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time23"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time23">
                          10:45 AM
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="time24"
                          autoComplete="off"
                        />
                        <label className="btn" htmlFor="time24">
                          11:00 AM
                        </label>
                      </form>
                      {/*fmbGroup-ends-here*/}
                    </div>
                    {/*tab-pane3-ends-here*/}
                  </div>
                  {/*tab-content-ends-here*/}
                </div>
                {/*doaTabs-ends-here*/}
                <div className="w-100 doaNText mt-4">
                  Ad Hoc appointment when all slots are full
                </div>
                <div className="w-100 f10m mt-2">
                  Patient is ok to wait till Dr. is free
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="adHoc"
                  />
                  <label className="form-check-label" htmlFor="adHoc">
                    Ad hoc appointment
                  </label>
                </div>
                <div className="w-100 text-end mt-4">
                  <Link to="/SelectThePatient">
                    <button type="button" className="btn doacBtn px-4">
                      Next
                    </button>
                  </Link>
                </div>
                {/*doaConfirm-ends-here*/}
              </div>
            </div>
            {/*tabpane-2-ends-here*/}
            <div className="tab-pane fade" id="gb" role="tabpanel">
              <div>
                <div>
                  <div className="overflow-auto p-md-3 mb-4">
                    <div className="w-100 doacTitle d-flex flex-wrap align-items-center p-3">
                      <div className="my-2 me-3">
                        <h3 className="mb-0">
                          {" "}
                          Generate In-Person Patient Bill
                        </h3>
                      </div>
                      <div className="ms-sm-auto me-3 my-2">
                        <div className="f10m mb-1">Default to Today</div>
                        <div className="f10sbOrange">23 April 2021</div>
                      </div>
                      <div className="my-2">
                        <Link to="/AddPatient">
                          <button type="button" className="btn doaOrangeBtn">
                            + Add New Patient
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/*flexbox-ends-here*/}
                    <div className="w-100 irBtn mt-2 px-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Consultation Bill
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Other Bill
                        </label>
                      </div>
                    </div>
                    {/*inline-radios-ends-here*/}
                    <div className="w-100 row mt-3">
                      <div className="col-md-4 mb-3">
                        <label className="mpText mb-2">
                          * Search by Mobile/ID
                        </label>
                        <input
                          className="form-control w-100"
                          type="search"
                          placeholder="12345454"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="mpText mb-2">
                          * Search by IMR.Number
                        </label>
                        <input
                          className="form-control w-100"
                          type="search"
                          placeholder="IMR.Number"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="mpText mb-2">
                          * Search by Patient Name
                        </label>
                        <input
                          className="form-control w-100"
                          type="search"
                          placeholder="Patient Name"
                        />
                      </div>
                    </div>

                    <div className="w-100 row">
                      <div className="col-md-3 mb-3" style={{ width: 270 }}>
                        <label className="mpText mb-2">Select Dr. Name</label>
                        <select className="form-select">
                          <option selected>Select</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                    {/*flexbox-ends-here*/}
                    <div className="w-100 d-flex flex-wrap align-items-center mt-3 px-3">
                      <div className="mb-3 me-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">* Service Name</label>
                        <input
                          className="form-control w-100"
                          type="text"
                          placeholder
                        />
                      </div>
                      <div className="mb-3 me-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">Nos. or Quantity</label>
                        <input
                          className="form-control w-100"
                          type="text"
                          placeholder
                        />
                      </div>
                      <div className="mb-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">* Amount</label>
                        <input
                          className="form-control w-100"
                          type="text"
                          placeholder
                        />
                      </div>
                    </div>
                    {/*flexbox-ends-here*/}
                    <div
                      className="w-100 text-end mt-3 px-3"
                      style={{ maxWidth: 814 }}
                    >
                      <button type="button" className="btn doaOrangeBtn">
                        + Add More
                      </button>
                    </div>
                    <div className="w-100 d-flex flex-wrap align-items-center mt-3 px-3">
                      <div className="mb-3 me-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">Total (₹)</label>
                        <input
                          className="form-control w-100"
                          type="text"
                          placeholder
                        />
                      </div>
                      <div className="mb-3 me-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">Discount (₹)</label>
                        <input
                          className="form-control w-100"
                          type="text"
                          placeholder
                        />
                      </div>
                      <div className="mb-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">Net Amount (₹)</label>
                        <input
                          className="form-control w-100"
                          type="text"
                          placeholder
                        />
                      </div>
                    </div>
                    {/*flexbox-ends-here*/}
                    <div className="w-100 d-flex flex-wrap align-items-end mt-3 px-3">
                      <div className="mb-3 me-3" style={{ width: 250 }}>
                        <label className="mpText mb-2">* Mode of Payment</label>
                        <select className="form-select">
                          <option selected>Select</option>
                          <option value={1}>Cash</option>
                          <option value={2}>UPI</option>
                          <option value={3}>Credit Card</option>
                          <option value={3}>Debit Card</option>
                          <option value={3}>NetBanking</option>
                        </select>
                      </div>
                      <div
                        className="mb-3"
                        style={{ width: "100%", maxWidth: 516 }}
                      >
                        <button type="button" className="btn doacBtn w-100">
                          Generate Bill
                        </button>
                      </div>
                    </div>
                    {/*flexbox-ends-here*/}
                  </div>
                  {/*myPhoneCardCnt-ends-here*/}
                </div>
              </div>
              {/*tabpane-3-ends-here*/}
            </div>
            {/*tabs-ends-here*/}
          </div>
        </div>

        <div
          className="modal fade"
          id="healthconcerns"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <img src={Heart} alt="heat" className="me-2" /> Patient Name -
                  Add Vitals
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/*doacTitle-ends-here*/}
                <div className="doaNText w-100 mt-3">
                  Share with Dr. Niraj prior to your consultation
                </div>
                {/*doaNText-ends-here*/}

                <form className="form d-flex flex-wrap align-items-flex-start mt-4">
                  <div className="form-check pl-0 mb-3 w-100">
                    <div className="doaNText w-100 ">Brief your Problem</div>
                    {/*doaNText-ends-here*/}
                    <div className="w-100 mt-3">
                      <textarea
                        className="form-control shcTextArea"
                        placeholder="Type here"
                        rows={10}
                        cols={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="doaNText w-100 my-4">Add Vitals</div>
                  {/*doaNText-ends-here*/}
                  <div className="w-100 d-flex align-items-center my-3">
                    <div className="w-auto d-flex flex-wrap me-3">
                      <label className="form-label shcLabel">
                        Height (fts)
                      </label>
                      <input className="form-control shcInput" type="text" />
                    </div>
                    <div className="w-auto">
                      <label className="form-label shcLabel">
                        Weight (Kgs)
                      </label>
                      <input className="form-control shcInput" type="text" />
                    </div>
                  </div>

                  {/*flex-box-ends-here*/}
                  <div className="w-100 d-flex align-items-center mt-3">
                    <div className="w-auto me-3">
                      <label className="form-label shcLabel">
                        Temperature (°F)
                      </label>
                      <input className="form-control shcInput" type="text" />
                    </div>
                    <div className="w-auto">
                      <label className="form-label shcLabel">
                        Blood Pressure
                      </label>
                      <input
                        className="form-control shcInput"
                        placeholder="Fasting / After food"
                        type="text"
                      />
                    </div>
                  </div>
                  {/*flex-box-ends-here*/}
                  <div className="w-100 d-flex align-items-center mt-3">
                    <div className="w-100">
                      <label className="form-label shcLabel">
                        Sugar Levels
                      </label>

                      <input
                        className="form-control shcInput"
                        placeholder="Fasting/After food"
                        type="text"
                      />
                    </div>
                  </div>
                  {/*flex-box-ends-here*/}

                  <div className="doaNText w-100 mt-3">
                    Upload Health Documents
                  </div>
                  {/*doaNText-ends-here*/}
                  <div className="w-100 d-flex align-items-center mt-3">
                    <div className="w-100 me-3">
                      <label className="form-label shcLabel">Photo.png</label>
                      <input type="file" className="form-control" />
                    </div>
                    <div className="w-100">
                      <label className="form-label shcLabel">
                        Document.pdf
                      </label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  {/*flex-box-ends-here*/}

                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#AddpatientProfile"
                    className="doaNText w-100 mt-3"
                  ></div>

                  <Link to="/Videocall">
                    <button
                      type="submit"
                      className="btn doacBtn px-3 mt-1 ms-auto"
                    >
                      Next
                    </button>
                  </Link>
                </form>
                {/*form-ends-here*/}
              </div>
              {/*draCard1-ends-here*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAssistantPatientQueue;
