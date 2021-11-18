import React, { Component } from "react";
import Camcorder from "../../images/doctoModule/camcorder-sm.png";
import UserGreen from "../../images/doctoModule/user-green-sm.png";
import PhoneSm from "../../images/doctoModule/phone-sm.png";
import Rmicon from "../../images/doctoModule/rp-icon.png";
import Walking from "../../images/doctoModule/walking.png";
import "../ConsultRoom/consultroom.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BackBtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import PdfIcon from "../../images/pdf-icon.png";
import Trashgree from "../../images/trash-green.png";
import TexDocument from "../../images/TextDocument.jpg";
import Person from "../../images/person.png";
import Heart from "../../images/heart-in-hand.png";
import Height from "../../images/height.png";
import Weight from "../../images/weight.png";
import BloodGroup from "../../images/blood-group.png";
import Gender from "../../images/gender.png";
import Age from "../../images/age.png";
import { Row, Col } from "react-bootstrap";
import HealthCond from "../../images/health-condition.png";
import Prescription from "../../images/prescriptions.png";
import Heightgreen from "../../images/height-green.png";
import Weightgreen from "../../images/weight-green.png";
import Bloodgreen from "../../images/blood-group-green.png";
import GenderGreen from "../../images/gender-green.png";
import AgeGreen from "../../images/age-green.png";
import Backbtn from "../../images/back-button-new.png";
import ReceiveCall from "../../images/doctoModule/telephone_gif.gif";

export default function DrRoomRP() {
  const history = useHistory();
  return (
    <div>
      {/*modal-patientProfile-starts-here*/}
      <div
        className="modal fade"
        id="patientProfile"
        tabindex="-1"
        role="dialog"
        aria-labelledby="patientProfile"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">
                <img src={Person} alt="person" className="me-2" />
                Doctor Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">UID</div>
                <div className="f10m w-50">123456789</div>
              </div>

              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">IMR No</div>
                <div className="f10m w-50">MED13547C</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">First Name</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Last Name</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Gender</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Age</div>
                <div className="f10m w-50">24</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Mobile</div>
                <div className="f10m w-50">12345 12345</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">City/Town//Dist</div>
                <div className="f10m w-50">Hyderabad</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Mandal/village</div>
                <div className="f10m w-50" />
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Locality</div>
                <div className="f10m w-50">Begumpet</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Last Visit</div>
                <div className="f10m w-50">22 April 2021</div>
              </div>
              {/*flexbox-ends-here*/}
              <button
                type="button"
                className="btn d-block ms-auto mt-4 doacBtn"
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-patientProfile-ends-here*/}
      <div className="overflow-auto p-md-3 mb-4">
        <div className="w-100 p-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0 txtNow">
            <img onClick={() => history.goBack()} src={BackBtn} alt="backbtn" />{" "}
            RP Room
            <span className="mx-2 pl-5l">
              <img src={Camcorder} className="mr-2" alt="video" />
              <span>(12) </span>
            </span>
          </div>
          {/*doaNText-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id" className="overflow_tb1">
            <thead>
              <tr>
                <th>Token No.</th>
                <th>Time</th>
                <th>Dr.Name</th>
                <th>Pt.Name</th>
                <th>Gender/Age</th>
                <th>Add Vitals</th>
                <th>Queue Status</th>
                <th>Receive Call</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={Camcorder}
                    alt="camcorder"
                    className="me-3 w-16w"
                    style={{ width: 16 }}
                  />
                  10:30 AM
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#patientProfile"
                  >
                    Dr.Vinod Kumar
                  </a>
                </td>
                <td>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal1">
                    Narsimha
                  </a>
                </td>
                <td>M/28</td>

                <td>
                  <Link to="/HealthConcerns">
                    <a href="#">Add Vitals</a>
                  </Link>
                </td>
                <td>
                  <select className="form-select">
                    <option>Not Started</option>
                    <option>No Show</option>
                    <option>Completed</option>
                  </select>
                </td>

                <td>
                  <Link to="/VideoScreen">
                    <img
                      src={ReceiveCall}
                      className="call2"
                      alt="receivecall"
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img
                    src={Camcorder}
                    alt="camcorder"
                    className="me-3 w-16w"
                    style={{ width: 16 }}
                  />
                  10:30 AM
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#patientProfile"
                  >
                    Dr.Vinod Kumar
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#RPProfile1"
                  >
                    Narsimha
                  </a>
                </td>
                <td>M/28</td>

                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#AddVitals"
                  >
                    Add Vitals
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option>Not Started</option>
                    <option>No Show</option>
                    <option>Completed</option>
                  </select>
                </td>

                <td>
                  <img src={ReceiveCall} className="call2" alt="receivecall" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img
                    src={Camcorder}
                    alt="camcorder"
                    className="me-3 w-16w"
                    style={{ width: 16 }}
                  />
                  10:30 AM
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#patientProfile"
                  >
                    Dr.Vinod Kumar
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#RPProfile1"
                  >
                    Narsimha
                  </a>
                </td>
                <td>M/28</td>

                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#AddVitals"
                  >
                    Add Vitals
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option>Not Started</option>
                    <option>No Show</option>
                    <option>Completed</option>
                  </select>
                </td>

                <td>
                  <img src={ReceiveCall} className="call2" alt="receivecall" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img
                    src={Camcorder}
                    alt="camcorder"
                    className="me-3 w-16w"
                    style={{ width: 16 }}
                  />
                  10:30 AM
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#patientProfile"
                  >
                    Dr.Vinod Kumar
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#RPProfile1"
                  >
                    Narsimha
                  </a>
                </td>
                <td>M/28</td>

                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#AddVitals"
                  >
                    Add Vitals
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option>Not Started</option>
                    <option>No Show</option>
                    <option>Completed</option>
                  </select>
                </td>

                <td>
                  <img src={ReceiveCall} className="call2" alt="receivecall" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img
                    src={Camcorder}
                    alt="camcorder"
                    className="me-3 w-16w"
                    style={{ width: 16 }}
                  />
                  10:30 AM
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#patientProfile"
                  >
                    Dr.Vinod Kumar
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#RPProfile1"
                  >
                    Narsimha
                  </a>
                </td>
                <td>M/28</td>

                <td>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#AddVitals"
                  >
                    Add Vitals
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option>Not Started</option>
                    <option>No Show</option>
                    <option>Completed</option>
                  </select>
                </td>

                <td>
                  <img src={ReceiveCall} className="call2" alt="receivecall" />
                </td>
              </tr>
            </tbody>
          </table>

          {/*modals-starts-here*/}

          {/*modal-bulkUpload-starts-here*/}
          <div
            className="modal fade"
            id="modal1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="modal1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal_dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">Upcoming Consulation</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 p-3">
                        <div
                          className="w-100 tabsOrange bg-white p-3"
                          style={{
                            border: "1px solid #eaeaea",
                            borderRadius: 12,
                          }}
                        >
                          <nav>
                            <div
                              className="nav nav-tabs border-0"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#pd"
                                type="button"
                                role="tab"
                                aria-selected="true"
                              >
                                Patient Details
                              </button>
                              <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#vh"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                Visit History
                              </button>
                              <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#pdg"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                Patient Diagnosis
                              </button>
                            </div>
                          </nav>
                          <div className="tab-content" id="nav-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pd"
                              role="tabpanel"
                            >
                              <div
                                className="row pb-2"
                                style={{ borderBottom: "1px solid #cecece" }}
                              >
                                <div className="col-12 col-md-4 mt-4">
                                  <div className="w-100 doaNText mb-3">
                                    J. Srinidhi
                                  </div>
                                  <div className="f10m mb-1">PT48369</div>
                                  <div className="f10m mb-1">Male / 38</div>
                                  <div className="f10m mb-1">
                                    Hyderabad, Begumpet
                                  </div>
                                  <div className="f10m mb-1">
                                    Nizamabad, Pendur, Gollapalli
                                  </div>
                                </div>
                                {/*col-ends-here*/}
                                <div className="col-12 col-md-8 mt-4">
                                  <div className="f10m mb-1">
                                    Appointment Type: Video Call
                                  </div>
                                  <div className="f10m mb-1">
                                    New / Follow up: New
                                  </div>
                                  <div className="f10m mb-1">
                                    Mobile: 12345 12345
                                  </div>
                                </div>
                                {/*col-ends-here*/}
                              </div>
                              {/*row-ends-here*/}
                              <div className="w-100 f10sbTeal mt-3">
                                View Documents Uploaded by Patient
                              </div>
                              <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                                <img
                                  src={PdfIcon}
                                  alt="pdffile"
                                  data-bs-toggle="modal"
                                  data-bs-target="#NewPopup"
                                  className="m-1 w-small"
                                />
                                <img
                                  src={PdfIcon}
                                  alt="pdffile"
                                  data-bs-toggle="modal"
                                  data-bs-target="#NewPopup"
                                  className="m-1 w-small"
                                />
                                <img
                                  src={PdfIcon}
                                  alt="pdffile"
                                  data-bs-toggle="modal"
                                  data-bs-target="#NewPopup"
                                  className="m-1 w-small"
                                />
                              </div>
                              {/*flexbox-ends-here*/}
                              <div className="row">
                                <div className="col-12 col-md-4 mt-3">
                                  <div className="w-100 f10sbTeal mb-3">
                                    Medical Conditions
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc1"
                                    >
                                      I am Diabetic
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc2"
                                    >
                                      I have Arthritis
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc3"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc3"
                                    >
                                      Kidney problem
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc4"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc4"
                                    >
                                      I have Hypertension (BP)
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc5"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc5"
                                    >
                                      I have Asthma
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc6"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc6"
                                    >
                                      Lever problem
                                    </label>
                                  </div>
                                  <div className="w-100 f10sbTeal my-3">
                                    Allergies
                                  </div>
                                  <div className="w-100 d-flex align-items-center mb-3">
                                    <input
                                      type="text"
                                      className="form-control me-3"
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-sm doacBtn"
                                    >
                                      +
                                    </button>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div className="f10m mb-2">
                                    Allergy one goes here
                                  </div>
                                  <div className="f10m mb-2">
                                    Allergy one goes here
                                  </div>
                                  <div className="f10m mb-2">
                                    Allergy one goes here
                                  </div>
                                  <div className="f10m mb-2">
                                    Allergy one goes here
                                  </div>
                                  <div className="mt-3">
                                    <a
                                      href
                                      className="f11sbBlue text-decoration-none"
                                    >
                                      Add Prescription
                                    </a>
                                  </div>
                                </div>
                                {/*col-ends-here*/}
                                <div className="col-12 col-md-4 mt-3">
                                  <div className="w-100 f10sbTeal mb-3">
                                    Habits
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="hb1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="hb1"
                                    >
                                      Smoking
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="hb2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="hb2"
                                    >
                                      Pan Masala
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="hb3"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="hb3"
                                    >
                                      Alcohol drinking
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="hb4"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="hb4"
                                    >
                                      Tobacco
                                    </label>
                                  </div>
                                  <div className="form-check w-100 mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="mc6"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="mc6"
                                    >
                                      Junk food
                                    </label>
                                  </div>
                                  <div className="w-100 f10sbTeal my-3">
                                    Surgeries
                                  </div>
                                  <div className="w-100 d-flex align-items-center mb-3">
                                    <input
                                      type="text"
                                      className="form-control me-3"
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-sm doacBtn"
                                    >
                                      +
                                    </button>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div className="f10m mb-2">Knee Surgery</div>
                                  <div className="f10m mb-2">
                                    Kidney surgery
                                  </div>
                                  <div className="f10m mb-2">
                                    Spinal surgery
                                  </div>
                                </div>
                                {/*col-ends-here*/}
                                <div className="col-12 col-md-4 mt-3">
                                  <div className="w-100 f10sbTeal mb-3">
                                    Current Medication List
                                  </div>
                                  <div className="f10sbOrange mb-2">
                                    Morning
                                  </div>
                                  <div className="f10m mb-2">
                                    zincovit (Syrup) - Before Food
                                  </div>
                                  <div className="f10m mb-4">
                                    zincovit (Syrup) - After Food
                                  </div>
                                  <div className="f10sbOrange mb-2">
                                    Afternoon
                                  </div>
                                  <div className="f10m mb-2">
                                    zincovit (Syrup) - Before Food
                                  </div>
                                  <div className="f10m mb-4">
                                    zincovit (Syrup) - After Food
                                  </div>
                                  <div className="f10sbOrange mb-2">Night</div>
                                  <div className="f10m mb-2">
                                    zincovit (Syrup) - Before Food
                                  </div>
                                  <div className="f10m mb-2">
                                    zincovit (Syrup) - After Food
                                  </div>
                                </div>
                                {/*col-ends-here*/}
                              </div>
                              {/*row-ends-here*/}
                            </div>
                            {/*tabpane-1-ends-here*/}
                            <div
                              className="tab-pane fade"
                              id="vh"
                              role="tabpanel"
                            >
                              <div className="w-100 d-flex align-items-center p-2 mpGrayBox mt-5">
                                <div className="f10m w-50">Total Visits: 3</div>
                                <div className="w-50">
                                  <a
                                    href
                                    className="f10mBlue text-decoration-none"
                                  >
                                    Select Visit Date
                                  </a>
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  Consult Date/Time
                                </div>
                                <div className="f10m w-50">Apr 4, 2021</div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  Consult Type:
                                </div>
                                <div className="f10m w-50">
                                  In-Person/Video/Audio/RP-Video
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  New/Follow-Up:
                                </div>
                                <div className="f10m w-50">New</div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  Place of Appointment:
                                </div>
                                <div className="f10m w-50">
                                  Krupa Clinic/ Balaji Hospital
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">Diagnosis:</div>
                                <div className="f10m w-50">Urine Infection</div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  Given Medication:
                                </div>
                                <div className="f10m w-50">
                                  Tab:Cefixime-200 Syp: Citralka
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  Investigations Suggested:
                                </div>
                                <div className="f10m w-50">
                                  CBP, Urine Test, Something, LFT
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  View Given Advices:
                                </div>
                                <div className="f10m w-50">
                                  Drink 3 Liters of Water, 2 Coconuts per day
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  View Prescription:
                                </div>
                                <div className="w-50">
                                  <img src={PdfIcon} />
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10mTeal w-50">
                                  View Test Reports:
                                </div>
                                <div className="w-50 d-flex flex-wrap align-items-center">
                                  <img src={PdfIcon} className="me-2" />
                                  <img src={PdfIcon} />
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div className="w-100 mt-4 text-end">
                                <button
                                  type="button"
                                  className="btn btn-sm pnBtn me-2"
                                >
                                  <i className="bi bi-chevron-left" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm pnBtn"
                                >
                                  <i className="bi bi-chevron-right" />
                                </button>
                              </div>
                            </div>
                            {/*tabpane-2-ends-here*/}
                            <div
                              className="tab-pane fade"
                              id="pdg"
                              role="tabpanel"
                            >
                              <div className="w-100 f10sbTeal mt-3">Vitals</div>
                              <div className="row">
                                <div className="col-12 col-md-4">
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">Ht (fts):</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        5' 7" fts
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">Wt (Kgs):</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        72 kgs
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">Temp (f):</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        102 f
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                </div>
                                {/*col-ends-here*/}
                                <div className="col-12 col-md-4">
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">BP:</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        120 / 80
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">Blood Sugar:</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        220 / 110
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">Blood Group:</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        AB +ve
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                </div>
                                {/*col-ends-here*/}
                                <div className="col-12 col-md-4">
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">SpO2:</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        98
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">Heart Rate:</div>
                                    <div className="ms-auto">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        85
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                </div>
                                {/*col-ends-here*/}
                              </div>
                              {/*row-ends-here*/}
                              <div className="w-100 f10sbTeal mt-4">
                                Chief Complaint
                              </div>
                              <textarea
                                className="form-control w-100 mt-2"
                                rows={5}
                                defaultValue={""}
                              />
                              <div className="w-100 f10sbTeal mt-4">
                                Provisional Diagnosis
                              </div>
                              <div
                                className="w-100 d-flex align-items-center py-2"
                                style={{ borderBottom: "1px solid #B5B5B5" }}
                              >
                                <div className="f10m">some diagnosis</div>
                                <div className="ms-auto">
                                  <a href>
                                    <img src={Trashgree} />
                                  </a>
                                </div>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div className="w-100 d-flex align-items-center mt-4">
                                <input
                                  type="text"
                                  className="form-control me-3"
                                />
                                <button
                                  type="button"
                                  className="btn btn-sm doaOrangeBtn px-4"
                                >
                                  +Add
                                </button>
                              </div>
                              {/*flexbox-ends-here*/}
                              <div className="w-100 f10sbTeal mt-4">
                                RP.Notes
                              </div>
                              <textarea
                                className="form-control w-100 mt-2"
                                rows={5}
                                defaultValue={""}
                              />
                            </div>
                            {/*tabpane-3-ends-here*/}
                          </div>
                          {/*tabs-ends-here*/}
                        </div>
                        {/*tabs-container-ends-here*/}
                      </div>
                      {/*col-ends-here*/}
                    </div>
                    {/*row-ends-here*/}
                  </div>
                  {/*container-fluid-ends-here*/}
                </div>
                {/*modal-body-ends-here*/}
              </div>
            </div>
          </div>
          {/*modal-bulkUpload-ends-here*/}

          <div
            className="modal fade"
            id="AddpatientProfile"
            tabindex="-1"
            role="dialog"
            aria-labelledby="patientProfile1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <img src={Person} alt="person" className="me-2" />
                    Add Patient Health Profile
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="w-100 doaNText mt-4">Health Profile</div>
                  {/*doaNText-ends-here*/}
                  <div className="w-100 mt-2">
                    <button
                      type="button"
                      className="btn hrBtn py-1 px-3 m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#height"
                    >
                      <img src={Height} alt="height" className="me-2" />
                      Height <span>5.11 ft</span>
                      {/*modal-height-starts-here*/}
                      <div
                        className="modal fade"
                        id="height"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="height"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="filterModalLabel">
                                <img
                                  src={Heightgreen}
                                  alt="hggree"
                                  className="me-2"
                                />
                                Height
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <input
                                  className="form-control py-2"
                                  type="text"
                                  placeholder="Height (fts)"
                                />
                              </form>
                              {/*form-ends-here*/}
                            </div>
                            {/*modal-body-ends-here*/}
                            <div className="modal-footer border-0">
                              <button type="submit" className="btn fmaBtn">
                                Save
                              </button>
                            </div>
                            {/*modal-footer-ends-here*/}
                          </div>
                        </div>
                      </div>
                      {/*modal-height-ends-here*/}
                    </button>
                    <button
                      type="button"
                      className="btn hrBtn py-1 px-3 m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#weight"
                    >
                      <img src={Weight} alt="weight" className="me-2" />
                      Weight <span>92 Kgs</span>
                      {/*modal-weight-starts-here*/}
                      <div
                        className="modal fade"
                        id="weight"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="weight"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="filterModalLabel">
                                <img
                                  src={Weightgreen}
                                  alt="weightgreen"
                                  className="me-2"
                                />
                                Weight
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <input
                                  className="form-control py-2"
                                  type="text"
                                  placeholder="Weight (Kgs)"
                                />
                              </form>
                              {/*form-ends-here*/}
                            </div>
                            {/*modal-body-ends-here*/}
                            <div className="modal-footer border-0">
                              <button type="submit" className="btn fmaBtn">
                                Save
                              </button>
                            </div>
                            {/*modal-footer-ends-here*/}
                          </div>
                        </div>
                      </div>
                      {/*modal-weight-ends-here*/}
                    </button>
                    <button
                      type="button"
                      className="btn hrBtn py-1 px-3 m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#bg"
                    >
                      <img src={BloodGroup} alt="bloodgroup" className="me-2" />
                      Blood Group <span>A+</span>
                      {/*modal-bg-starts-here*/}
                      <div
                        className="modal fade"
                        id="bg"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="bg"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="filterModalLabel">
                                <img
                                  src={Bloodgreen}
                                  alt="greeblood"
                                  className="me-2"
                                />
                                Blood Group
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <select className="form-select py-2">
                                  <option selected>Select Blood Group</option>
                                  <option value={1}>A+ve</option>
                                  <option value={2}>A-ve</option>
                                  <option value={1}>B+ve</option>
                                  <option value={2}>B-ve</option>
                                  <option value={1}>AB+ve</option>
                                  <option value={2}>AB-ve</option>
                                  <option value={1}>O+ve</option>
                                  <option value={2}>O-ve</option>
                                </select>
                              </form>
                              {/*form-ends-here*/}
                            </div>
                            {/*modal-body-ends-here*/}
                            <div className="modal-footer border-0">
                              <button type="submit" className="btn fmaBtn">
                                Save
                              </button>
                            </div>
                            {/*modal-footer-ends-here*/}
                          </div>
                        </div>
                      </div>
                      {/*modal-bg-ends-here*/}
                    </button>
                    <button
                      type="button"
                      className="btn hrBtn py-1 px-3 m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#gender"
                    >
                      <img src={Gender} alt="gender" className="me-2" />
                      Gender <span>Male</span>
                      {/*modal-gender-starts-here*/}
                      <div
                        className="modal fade"
                        id="gender"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="gender"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="filterModalLabel">
                                <img
                                  src={GenderGreen}
                                  alt="gendergreen"
                                  className="me-2"
                                />
                                Gender
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form className="abFormGroup">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="gender1"
                                  autoComplete="off"
                                  defaultChecked
                                />
                                <label
                                  className="btn py-1 px-3 m-1"
                                  htmlFor="gender1"
                                >
                                  Male
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="gender2"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn py-1 px-3 m-1"
                                  htmlFor="gender2"
                                >
                                  Female
                                </label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="gender3"
                                  autoComplete="off"
                                />
                                <label
                                  className="btn py-1 px-3 m-1"
                                  htmlFor="gender3"
                                >
                                  Others
                                </label>
                              </form>
                              {/*form-ends-here*/}
                            </div>
                            {/*modal-body-ends-here*/}
                            <div className="modal-footer border-0">
                              <button type="submit" className="btn fmaBtn">
                                Save
                              </button>
                            </div>
                            {/*modal-footer-ends-here*/}
                          </div>
                        </div>
                      </div>
                      {/*modal-gender-ends-here*/}
                      {/*modal-age-starts-here*/}
                      <div
                        className="modal fade"
                        id="age"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="age"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="filterModalLabel">
                                <img
                                  src={AgeGreen}
                                  alt="greenage"
                                  className="me-2"
                                />
                                Age
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <Row>
                                  <Col xs={6}>
                                    <input
                                      className="form-control py-2"
                                      type="date"
                                      placeholder="Enter Date Of Birth"
                                    />
                                  </Col>
                                  <Col xs={6}>
                                    <input
                                      type="text"
                                      className="form-control py-2"
                                      placeholder="Enter your age"
                                    ></input>
                                  </Col>
                                </Row>
                              </form>
                              {/*form-ends-here*/}
                            </div>
                            {/*modal-body-ends-here*/}
                            <div className="modal-footer border-0">
                              <button type="submit" className="btn fmaBtn">
                                Save
                              </button>
                            </div>
                            {/*modal-footer-ends-here*/}
                          </div>
                        </div>
                      </div>
                      {/*modal-age-ends-here*/}
                      {/*modal-hc-starts-here*/}
                    </button>
                    <button
                      type="button"
                      className="btn hrBtn py-1 px-3 m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#age"
                    >
                      <img src={Age} alt="age" className="me-2" />
                      Age <span>02 Mar 1978</span>
                    </button>
                    <button
                      type="button"
                      className="btn hrBtn py-1 px-3 m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#hc"
                    >
                      <img src={HealthCond} alt="healthcond" className="me-2" />
                      Health Conditions
                      {/*modal-hc-starts-here*/}
                      <div
                        className="modal fade"
                        id="hc"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content border-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="filterModalLabel">
                                <img src={Backbtn} alt="backbtn" />
                                Add/Edit Health Conditions
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="doaNText w-100">
                                Record for Srinivas
                              </div>
                              {/*doaNText-ends-here*/}
                              <form className="form d-flex flex-wrap align-items-flex-start mt-3">
                                <div className="fmiTitle mb-2 w-100">
                                  Medical conditions
                                </div>
                                <div className="form-check w-50">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option1"
                                  >
                                    I am Diabetic
                                  </label>
                                </div>
                                <div className="form-check w-50">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option2"
                                  >
                                    I have Hypertension (BP)
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option3"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option3"
                                  >
                                    I have Arthritis
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option4"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option4"
                                  >
                                    I have Asthma
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option5"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option5"
                                  >
                                    Kidney problem
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option6"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option6"
                                  >
                                    Lever problem
                                  </label>
                                </div>
                                <div className="doaNText w-100 mt-4 mb-2">
                                  Allergies
                                </div>
                                <div className="w-100 d-flex align-items-center">
                                  <input className="form-control" type="text" />
                                  <button
                                    type="button"
                                    className="btn btn-sm ms-2 w-25 doaOrangeBtn"
                                  >
                                    + Add
                                  </button>
                                </div>
                                {/*flexbox-ends-here*/}
                                <div className="doaNText w-100 mt-3 mb-2">
                                  Aliments
                                </div>
                                <div className="w-100 d-flex align-items-center">
                                  <input className="form-control" type="text" />
                                  <button
                                    type="button"
                                    className="btn btn-sm ms-2 w-25 doaOrangeBtn"
                                  >
                                    + Add
                                  </button>
                                </div>
                                {/*flexbox-ends-here*/}
                                <div className="doaNText w-100 mt-3 mb-2">
                                  Surgeries
                                </div>
                                <div className="w-100 d-flex align-items-center">
                                  <input className="form-control" type="text" />
                                  <button
                                    type="button"
                                    className="btn btn-sm ms-2 w-25 doaOrangeBtn"
                                  >
                                    + Add
                                  </button>
                                </div>
                                {/*flexbox-ends-here*/}
                                <div className="doaNText w-100 mt-4 mb-3">
                                  Social History &amp; Habits
                                </div>
                                <div className="form-check w-50">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option7"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option7"
                                  >
                                    Smoking
                                  </label>
                                </div>
                                <div className="form-check w-50">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option8"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option8"
                                  >
                                    Alcohol drinking
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option9"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option9"
                                  >
                                    Pan Masala
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option10"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option10"
                                  >
                                    Tobacco
                                  </label>
                                </div>
                                <div className="form-check w-50 mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="option11"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="option11"
                                  >
                                    Junk food
                                  </label>
                                </div>
                                <div className="doaNText w-100 mt-4">
                                  Family History
                                </div>
                                {/*doaNText-ends-here*/}
                                <div className="w-100 mt-3">
                                  <textarea
                                    className="form-control shcTextArea"
                                    placeholder="Type here"
                                    rows={3}
                                    defaultValue={""}
                                  />
                                </div>
                              </form>
                              {/*form-ends-here*/}
                            </div>
                            {/*modal-body-ends-here*/}
                            <div className="modal-footer border-0">
                              <button
                                type="submit"
                                className="btn fmaBtn mx-auto"
                              >
                                Save Health Concerns
                              </button>
                            </div>
                            {/*modal-footer-ends-here*/}
                          </div>
                        </div>
                      </div>
                      {/*modal-hc-ends-here*/}
                      {/*modals-ends-here*/}
                    </button>

                    <Link to="/CurrentMedicationRecords">
                      <button type="button" className="btn hrBtn py-1 px-3 m-2">
                        <img
                          src={Prescription}
                          alt="prescription"
                          className="me-2"
                        />
                        Current Medications List
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn d-block ms-auto mt-4 doacBtn"
                    >
                      Submit
                    </button>
                  </div>
                  {/*modal-body-ends-here*/}
                </div>
              </div>
            </div>
          </div>
          {/*modal-patientProfile-ends-here*/}

          <div
            className="modal fade"
            id="RPProfile1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="patientProfile"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <img src={Person} alt="person" className="me-2" />
                    RP Profile{" "}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">UID</div>
                    <div className="f10m w-50">123456789</div>
                  </div>

                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">IMR No</div>
                    <div className="f10m w-50">MED13547C</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">First Name</div>
                    <div className="f10m w-50">Lorem ipsum</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Last Name</div>
                    <div className="f10m w-50">Lorem ipsum</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Gender</div>
                    <div className="f10m w-50">Lorem ipsum</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Age</div>
                    <div className="f10m w-50">24</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Mobile</div>
                    <div className="f10m w-50">12345 12345</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">City/Town//Dist</div>
                    <div className="f10m w-50">Hyderabad</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Mandal/village</div>
                    <div className="f10m w-50" />
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Locality</div>
                    <div className="f10m w-50">Begumpet</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div
                    className="w-100 d-flex align-items-center py-2"
                    style={{ borderBottom: "1px solid #B5B5B5" }}
                  >
                    <div className="f10mTeal w-50">Last Visit</div>
                    <div className="f10m w-50">22 April 2021</div>
                  </div>
                  {/*flexbox-ends-here*/}
                  <button
                    type="button"
                    className="btn d-block ms-auto mt-4 doacBtn"
                    data-bs-dismiss="modal"
                  >
                    close
                  </button>
                </div>
                {/*modal-body-ends-here*/}
              </div>
            </div>
          </div>
          {/*modal-patientProfile-ends-here*/}

          <div
            className="modal fade"
            id="AddVitals"
            tabindex="-1"
            role="dialog"
            aria-labelledby="AddVitals"
            aria-hidden="true"
          >
            <div className="modal-dialog box_size modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">Upcoming Consulation</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="draCard4 ms-auto me-auto p-3">
                    <div className="w-100 doacTitle d-flex align-items-center pb-2">
                      <img src={Heart} alt="heat" className="me-2" />
                      <h3 className="mb-0">Add Vitals</h3>
                    </div>

                    <form className="form d-flex flex-wrap align-items-flex-start mt-1">
                      <div className="doaNText w-100 mt-4">Add Vitals</div>
                      {/*doaNText-ends-here*/}
                      <div className="w-100 d-flex align-items-center mt-3">
                        <div className="w-auto me-3">
                          <label className="form-label shcLabel">
                            Height (fts)
                          </label>
                          <input
                            className="form-control shcInput"
                            type="text"
                          />
                        </div>
                        <div className="w-auto">
                          <label className="form-label shcLabel">
                            Weight (Kgs)
                          </label>
                          <input
                            className="form-control shcInput"
                            type="text"
                          />
                        </div>
                      </div>
                      {/*flex-box-ends-here*/}
                      <div className="w-100 d-flex align-items-center mt-3">
                        <div className="w-auto me-3">
                          <label className="form-label shcLabel">
                            Temperature (°F)
                          </label>
                          <input
                            className="form-control shcInput"
                            type="text"
                          />
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
                            placeholder="Fasting / After food"
                            type="text"
                          />
                        </div>
                      </div>
                      {/*flex-box-ends-here*/}
                      <div className="doaNText w-100 mt-4">
                        Brief Patient Problem
                      </div>
                      {/*doaNText-ends-here*/}
                      <div className="w-100 mt-3">
                        <textarea
                          className="form-control shcTextArea"
                          placeholder="Type here"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <div className="doaNText w-100 mt-3">
                        Upload Health Documents
                      </div>
                      {/*doaNText-ends-here*/}
                      <div className="w-100 d-flex align-items-center mt-3">
                        <div className="w-100 me-3">
                          <label className="form-label shcLabel">
                            Photo.png
                          </label>
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
                      <Link to="/Videocall">
                        <button
                          type="submit"
                          className="btn doacBtn px-3 mt-5 ms-auto"
                        >
                          Submit
                        </button>
                      </Link>
                    </form>
                    {/*form-ends-here*/}
                  </div>
                  {/*draCard1-ends-here*/}
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="AddpatientProfile"
              tabindex="-1"
              role="dialog"
              aria-labelledby="patientProfile1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content border-0">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      <img src={Person} alt="person" className="me-2" />
                      Add Patient Health Profile
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="w-100 doaNText mt-4">Health Profile</div>
                    {/*doaNText-ends-here*/}
                    <div className="w-100 mt-2">
                      <button
                        type="button"
                        className="btn hrBtn py-1 px-3 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#height"
                      >
                        <img src={Height} alt="height" className="me-2" />
                        Height <span>5.11 ft</span>
                      </button>
                      <button
                        type="button"
                        className="btn hrBtn py-1 px-3 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#weight"
                      >
                        <img src={Weight} alt="weight" className="me-2" />
                        Weight <span>92 Kgs</span>
                      </button>
                      <button
                        type="button"
                        className="btn hrBtn py-1 px-3 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#bg"
                      >
                        <img
                          src={BloodGroup}
                          alt="bloodgroup"
                          className="me-2"
                        />
                        Blood Group <span>A+</span>
                      </button>
                      <button
                        type="button"
                        className="btn hrBtn py-1 px-3 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#gender"
                      >
                        <img src={Gender} alt="gender" className="me-2" />
                        Gender <span>Male</span>
                      </button>
                      <button
                        type="button"
                        className="btn hrBtn py-1 px-3 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#age"
                      >
                        <img src={Age} alt="age" className="me-2" />
                        Age <span>02 Mar 1978</span>
                      </button>
                      <button
                        type="button"
                        className="btn hrBtn py-1 px-3 m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#hc"
                      >
                        <img
                          src={HealthCond}
                          alt="healthcond"
                          className="me-2"
                        />
                        Health Conditions
                      </button>

                      <Link to="/CurrentMedicationRecords">
                        <button
                          type="button"
                          className="btn hrBtn py-1 px-3 m-2"
                        >
                          <img
                            src={Prescription}
                            alt="prescription"
                            className="me-2"
                          />
                          Current Medications List(dev Notes)
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn d-block ms-auto mt-4 doacBtn"
                      >
                        Submit
                      </button>
                    </div>
                    {/*modal-body-ends-here*/}
                  </div>
                </div>
              </div>
              {/*modal-patientProfile-ends-here*/}

              {/*modal-view-starts-here*/}
              <div
                className="modal fade"
                id="NewPopup"
                tabindex="-1"
                role="dialog"
                aria-labelledby="NewPopup"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content border-0">
                    <div className="modal-header">
                      <h5 className="modal-title" id="filterModalLabel">
                        Documents Uploaded by Patient
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="mpText w-100 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus
                      </div>
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval={1500}
                          >
                            <img
                              src={TexDocument}
                              alt="txtdoc"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval={1500}
                          >
                            <img
                              src={TexDocument}
                              alt="txtdoc"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval={1500}
                          >
                            <img
                              src={TexDocument}
                              alt="txtdoc"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    {/*modal-body-ends-here*/}
                  </div>
                  {/*modal-content-ends-here*/}
                </div>
              </div>
              {/*modal-view-ends-here*/}

              {/*modal-patientProfile-starts-here*/}

              {/*modal-patientProfile-starts-here*/}
              <div
                className="modal fade"
                id="RpPopup"
                tabindex="-1"
                role="dialog"
                aria-labelledby="RpPopup1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content border-0">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        <img src={Person} alt="person" className="me-2" />
                        RP Details
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">UID</div>
                        <div className="f10m w-50">123456789</div>
                      </div>

                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">First Name</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Last Name</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Gender</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Age</div>
                        <div className="f10m w-50">24</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Mobile</div>
                        <div className="f10m w-50">12345 12345</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">City/Town//Dist</div>
                        <div className="f10m w-50">Hyderabad</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Mandal/village</div>
                        <div className="f10m w-50">Hyderabad</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Locality</div>
                        <div className="f10m w-50">Begumpet</div>
                      </div>

                      <button
                        type="button"
                        className="btn d-block ms-auto mt-4 doacBtn"
                        data-bs-dismiss="modal"
                      >
                        close
                      </button>
                    </div>
                    {/*modal-body-ends-here*/}
                  </div>
                </div>
              </div>

              {/*modal-bulkUpload-starts-here*/}
              <div
                className="modal fade"
                id="extraPopup"
                tabindex="-1"
                role="dialog"
                aria-labelledby="extraPopup"
                aria-hidden="true"
              >
                <div className="modal-dialog modal_dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content border-0">
                    <div className="modal-header">
                      <h5 className="modal-title">Upcoming Consulation</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-12 p-3">
                            <div
                              className="w-100 tabsOrange bg-white p-3"
                              style={{
                                border: "1px solid #eaeaea",
                                borderRadius: 12,
                              }}
                            >
                              <nav>
                                <div
                                  className="nav nav-tabs border-0"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    data-bs-target="#one"
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                  >
                                    Patient Details
                                  </button>
                                  <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#two"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Visit History
                                  </button>
                                  <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#three"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                  >
                                    Patient Diagnosis
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="one"
                                  role="tabpanel"
                                >
                                  <div
                                    className="row pb-2"
                                    style={{
                                      borderBottom: "1px solid #cecece",
                                    }}
                                  >
                                    <div className="col-12 col-md-4 mt-4">
                                      <div className="w-100 doaNText mb-3">
                                        J. Srinidhi
                                      </div>
                                      <div className="f10m mb-1">PT48369</div>
                                      <div className="f10m mb-1">Male / 38</div>
                                      <div className="f10m mb-1">
                                        Hyderabad, Begumpet
                                      </div>
                                      <div className="f10m mb-1">
                                        Nizamabad, Pendur, Gollapalli
                                      </div>
                                    </div>
                                    {/*col-ends-here*/}
                                    <div className="col-12 col-md-8 mt-4">
                                      <div className="f10m mb-1">
                                        Appointment Type: Video Call
                                      </div>
                                      <div className="f10m mb-1">
                                        New / Follow up: New
                                      </div>
                                      <div className="f10m mb-1">
                                        Mobile: 12345 12345
                                      </div>
                                    </div>
                                    {/*col-ends-here*/}
                                  </div>
                                  {/*row-ends-here*/}
                                  <div className="w-100 f10sbTeal mt-3">
                                    View Documents Uploaded by Patient
                                  </div>
                                  <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                                    <img
                                      src={PdfIcon}
                                      alt="pdffile"
                                      data-bs-toggle="modal"
                                      data-bs-target="#NewPopup"
                                      className="m-1 w-small"
                                    />
                                    <img
                                      src={PdfIcon}
                                      alt="pdffile"
                                      data-bs-toggle="modal"
                                      data-bs-target="#NewPopup"
                                      className="m-1 w-small"
                                    />
                                    <img
                                      src={PdfIcon}
                                      alt="pdffile"
                                      data-bs-toggle="modal"
                                      data-bs-target="#NewPopup"
                                      className="m-1 w-small"
                                    />
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div className="row">
                                    <div className="col-12 col-md-4 mt-3">
                                      <div className="w-100 f10sbTeal mb-3">
                                        Medical Conditions
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc1"
                                        >
                                          I am Diabetic
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc2"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc2"
                                        >
                                          I have Arthritis
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc3"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc3"
                                        >
                                          Kidney problem
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc4"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc4"
                                        >
                                          I have Hypertension (BP)
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc5"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc5"
                                        >
                                          I have Asthma
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc6"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc6"
                                        >
                                          Lever problem
                                        </label>
                                      </div>
                                      <div className="w-100 f10sbTeal my-3">
                                        Allergies
                                      </div>
                                      <div className="w-100 d-flex align-items-center mb-3">
                                        <input
                                          type="text"
                                          className="form-control me-3"
                                        />
                                        <button
                                          type="button"
                                          className="btn btn-sm doacBtn"
                                        >
                                          +
                                        </button>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div className="f10m mb-2">
                                        Allergy one goes here
                                      </div>
                                      <div className="f10m mb-2">
                                        Allergy one goes here
                                      </div>
                                      <div className="f10m mb-2">
                                        Allergy one goes here
                                      </div>
                                      <div className="f10m mb-2">
                                        Allergy one goes here
                                      </div>
                                    </div>
                                    {/*col-ends-here*/}
                                    <div className="col-12 col-md-4 mt-3">
                                      <div className="w-100 f10sbTeal mb-3">
                                        Habits
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="hb1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="hb1"
                                        >
                                          Smoking
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="hb2"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="hb2"
                                        >
                                          Pan Masala
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="hb3"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="hb3"
                                        >
                                          Alcohol drinking
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="hb4"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="hb4"
                                        >
                                          Tobacco
                                        </label>
                                      </div>
                                      <div className="form-check w-100 mt-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="mc6"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="mc6"
                                        >
                                          Junk food
                                        </label>
                                      </div>
                                      <div className="w-100 f10sbTeal my-3">
                                        Surgeries
                                      </div>
                                      <div className="w-100 d-flex align-items-center mb-3">
                                        <input
                                          type="text"
                                          className="form-control me-3"
                                        />
                                        <button
                                          type="button"
                                          className="btn btn-sm doacBtn"
                                        >
                                          +
                                        </button>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div className="f10m mb-2">
                                        Knee Surgery
                                      </div>
                                      <div className="f10m mb-2">
                                        Kidney surgery
                                      </div>
                                      <div className="f10m mb-2">
                                        Spinal surgery
                                      </div>
                                    </div>
                                    {/*col-ends-here*/}
                                    <div className="col-12 col-md-4 mt-3">
                                      <div className="w-100 f10sbTeal mb-3">
                                        Current Medication List
                                      </div>
                                      <div className="f10sbOrange mb-2">
                                        Morning
                                      </div>
                                      <div className="f10m mb-2">
                                        zincovit (Syrup) - Before Food
                                      </div>
                                      <div className="f10m mb-4">
                                        zincovit (Syrup) - After Food
                                      </div>
                                      <div className="f10sbOrange mb-2">
                                        Afternoon
                                      </div>
                                      <div className="f10m mb-2">
                                        zincovit (Syrup) - Before Food
                                      </div>
                                      <div className="f10m mb-4">
                                        zincovit (Syrup) - After Food
                                      </div>
                                      <div className="f10sbOrange mb-2">
                                        Night
                                      </div>
                                      <div className="f10m mb-2">
                                        zincovit (Syrup) - Before Food
                                      </div>
                                      <div className="f10m mb-2">
                                        zincovit (Syrup) - After Food
                                      </div>
                                    </div>
                                    {/*col-ends-here*/}
                                  </div>
                                  {/*row-ends-here*/}
                                </div>
                                {/*tabpane-1-ends-here*/}
                                <div
                                  className="tab-pane fade"
                                  id="two"
                                  role="tabpanel"
                                >
                                  <div className="w-100 d-flex align-items-center p-2 mpGrayBox mt-5">
                                    <div className="f10m w-50">
                                      Total Visits: 3
                                    </div>
                                    <div className="w-50">
                                      <a
                                        href
                                        className="f10mBlue text-decoration-none"
                                      >
                                        Select Visit Date
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      Consult Date/Time
                                    </div>
                                    <div className="f10m w-50">Apr 4, 2021</div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      Consult Type:
                                    </div>
                                    <div className="f10m w-50">
                                      In-Person/Video/Audio/RP-Video
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      New/Follow-Up:
                                    </div>
                                    <div className="f10m w-50">New</div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      Place of Appointment:
                                    </div>
                                    <div className="f10m w-50">
                                      Krupa Clinic/ Balaji Hospital
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      Diagnosis:
                                    </div>
                                    <div className="f10m w-50">
                                      Urine Infection
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      Given Medication:
                                    </div>
                                    <div className="f10m w-50">
                                      Tab:Cefixime-200 Syp: Citralka
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      Investigations Suggested:
                                    </div>
                                    <div className="f10m w-50">
                                      CBP, Urine Test, Something, LFT
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      View Given Advices:
                                    </div>
                                    <div className="f10m w-50">
                                      Drink 3 Liters of Water, 2 Coconuts per
                                      day
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      View Prescription:
                                    </div>
                                    <div className="w-50">
                                      <img src={PdfIcon} />
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10mTeal w-50">
                                      View Test Reports:
                                    </div>
                                    <div className="w-50 d-flex flex-wrap align-items-center">
                                      <img src={PdfIcon} className="me-2" />
                                      <img src={PdfIcon} />
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div className="w-100 mt-4 text-end">
                                    <button
                                      type="button"
                                      className="btn btn-sm pnBtn me-2"
                                    >
                                      <i className="bi bi-chevron-left" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-sm pnBtn"
                                    >
                                      <i className="bi bi-chevron-right" />
                                    </button>
                                  </div>
                                </div>
                                {/*tabpane-2-ends-here*/}
                                <div
                                  className="tab-pane fade"
                                  id="three"
                                  role="tabpanel"
                                >
                                  <div className="w-100 f10sbTeal mt-3">
                                    Vitals
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-md-4">
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">Ht (fts):</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            5' 7" fts
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">Wt (Kgs):</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            72 kgs
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">Temp (f):</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            102 f
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                    </div>
                                    {/*col-ends-here*/}
                                    <div className="col-12 col-md-4">
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">BP:</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            120 / 80
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">Blood Sugar:</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            220 / 110
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">Blood Group:</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            AB +ve
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                    </div>
                                    {/*col-ends-here*/}
                                    <div className="col-12 col-md-4">
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">SpO2:</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            98
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                      <div
                                        className="w-100 d-flex align-items-center py-2"
                                        style={{
                                          borderBottom: "1px solid #B5B5B5",
                                        }}
                                      >
                                        <div className="f10m">Heart Rate:</div>
                                        <div className="ms-auto">
                                          <a
                                            href
                                            className="f10mBlue text-decoration-none"
                                          >
                                            85
                                          </a>
                                        </div>
                                      </div>
                                      {/*flexbox-ends-here*/}
                                    </div>
                                    {/*col-ends-here*/}
                                  </div>
                                  {/*row-ends-here*/}
                                  <div className="w-100 f10sbTeal mt-4">
                                    Chief Complaint
                                  </div>
                                  <textarea
                                    className="form-control w-100 mt-2"
                                    rows={5}
                                    defaultValue={""}
                                  />
                                  <div className="w-100 f10sbTeal mt-4">
                                    Provisional Diagnosis
                                  </div>
                                  <div
                                    className="w-100 d-flex align-items-center py-2"
                                    style={{
                                      borderBottom: "1px solid #B5B5B5",
                                    }}
                                  >
                                    <div className="f10m">some diagnosis</div>
                                    <div className="ms-auto">
                                      <a href>
                                        <img src={Trashgree} />
                                      </a>
                                    </div>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div className="w-100 d-flex align-items-center mt-4">
                                    <input
                                      type="text"
                                      className="form-control me-3"
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-sm doaOrangeBtn px-4"
                                    >
                                      +Add
                                    </button>
                                  </div>
                                  {/*flexbox-ends-here*/}
                                  <div className="w-100 f10sbTeal mt-4">
                                    RP Notes
                                  </div>
                                  <textarea
                                    className="form-control w-100 mt-2"
                                    rows={5}
                                    defaultValue={""}
                                  />
                                </div>
                                {/*tabpane-3-ends-here*/}
                              </div>
                              {/*tabs-ends-here*/}
                            </div>
                            {/*tabs-container-ends-here*/}
                          </div>
                          {/*col-ends-here*/}
                        </div>
                        {/*row-ends-here*/}
                      </div>
                      {/*container-fluid-ends-here*/}
                    </div>
                    {/*modal-body-ends-here*/}
                  </div>
                </div>
              </div>
              {/*modal-bulkUpload-ends-here*/}

              <div
                className="modal fade"
                id="NewOne"
                tabindex="-1"
                role="dialog"
                aria-labelledby="NewOne"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content border-0">
                    <div className="modal-header">
                      <h5 className="modal-title">Visit History</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">dskfjsdlkfjsdlkfjsdkfjsdkl</div>
                  </div>
                </div>
              </div>

              {/*modal-patientProfile-starts-here*/}
              <div
                className="modal fade"
                id="patientProfile1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="patientProfile1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content border-0">
                    <div className="modal-header">
                      <h5 className="modal-title">Patient Profile</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">UID</div>
                        <div className="f10m w-50">123456789</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">First Name</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Last Name</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Gender</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Age</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Mobile</div>
                        <div className="f10m w-50">12345 12345</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">City/Town//Dist</div>
                        <div className="f10m w-50">Hyderabad</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Mandal/village</div>
                        <div className="f10m w-50">Lorem ipsum</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Locality</div>
                        <div className="f10m w-50">Begumpet</div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center py-2"
                        style={{ borderBottom: "1px solid #B5B5B5" }}
                      >
                        <div className="f10mTeal w-50">Last Visit</div>
                        <div className="f10m w-50">22 April 2021</div>
                      </div>

                      <div className="modal-footer border-0">
                        <button type="submit" className="btn fmaBtn">
                          Submit
                        </button>
                      </div>
                      {/*flexbox-ends-here*/}
                      <button
                        type="button"
                        className="btn d-block ms-auto mt-4 doacBtn"
                        data-bs-dismiss="modal"
                      >
                        close
                      </button>
                    </div>
                    {/*modal-body-ends-here*/}
                  </div>
                </div>
              </div>
              {/*modal-patientProfile-ends-here*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
