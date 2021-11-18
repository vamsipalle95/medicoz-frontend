import React, { Component } from "react";
import Height from "../../images/height.png";
import Weight from "../../images/weight.png";
import BloodGroup from "../../images/blood-group.png";
import Gender from "../../images/gender.png";
import Age from "../../images/age.png";
import HealthCond from "../../images/health-condition.png";
import Prescription from "../../images/prescriptions.png";
import TestRecords from "../../images/test-records.png";
import HospRecords from "../../images/hospital-records.png";
import Heightgreen from "../../images/height-green.png";
import Weightgreen from "../../images/weight-green.png";
import Bloodgreen from "../../images/blood-group-green.png";
import GenderGreen from "../../images/gender-green.png";
import AgeGreen from "../../images/age-green.png";
import Backbtn from "../../images/back-button-new.png";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class myhealthrecords extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
              <h1 className="mpTitle me-3">My Health Records</h1>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
              <div className="doaNText me-3">Select Member</div>
              {/*doaNText-ends-here*/}
              <select className="form-select w-auto obSelect">
                <option selected>Srinivas</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              {/*select-ends-here*/}
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 doaNText mt-4">
              Health Profile :-Last Updated By:Patient Name or RP Name -
              Date/Time (Dev Notes)
            </div>
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
                <img src={BloodGroup} alt="bloodgroup" className="me-2" />
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
                <img src={HealthCond} alt="healthcond" className="me-2" />
                Health Conditions
              </button>

              <Link to="/CurrentMedicationRecords">
                <button type="button" className="btn hrBtn py-1 px-3 m-2">
                  <img src={Prescription} alt="prescription" className="me-2" />
                  Current Medications List
                </button>
              </Link>
            </div>
            <div className="w-100 doaNText mt-4">Health Records</div>

            <div className="w-100 mt-2">
              <Link to="/myhealthrecordprescription">
                <button type="button" className="btn hrBtn py-1 px-3 m-2">
                  <img src={Prescription} alt="prescription" className="me-2" />
                  Prescriptions
                </button>
              </Link>
              <Link to="/TestRecords">
                <button type="button" className="btn hrBtn py-1 px-3 m-2">
                  <img src={TestRecords} alt="testrecords" className="me-2" />
                  Test Reports
                </button>
              </Link>
              <Link to="/HospitalSummary">
                <button type="button" className="btn hrBtn py-1 px-3 m-2">
                  <img src={HospRecords} alt="hospitalrecod" className="me-2" />
                  Hospital Records
                </button>
              </Link>
            </div>

            <div className="w-100 d-flex flex-wrap">
              <div class="div1">
                <div className="w-100 doaNText mt-4">My Insurance Details</div>

                <div className="w-100 mt-2">
                  <Link to="/MyInsuranceDetails">
                    <button type="button" className="btn hrBtn py-1 px-3 m-2">
                      <img
                        src={Prescription}
                        alt="prescription"
                        className="me-2"
                      />
                      My Insurance Details
                    </button>
                  </Link>
                </div>
              </div>

              <div class="div1">
                <div className="w-100 doaNText mt-4">
                  My Vaccination Details
                </div>

                <div className="w-100 mt-2">
                  <Link to="/MyVaccinatation">
                    <button type="button" className="btn hrBtn py-1 px-3 m-2">
                      <img
                        src={Prescription}
                        alt="prescription"
                        className="me-2"
                      />
                      My Vaccination Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/*modals-starts-here*/}
            {/*modal-height-starts-here*/}
            <div
              className="modal fade"
              id="height"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content border-0">
                  <div className="modal-header">
                    <h5 className="modal-title" id="filterModalLabel">
                      <img src={Heightgreen} alt="hggree" className="me-2" />
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
            {/*modal-weight-starts-here*/}
            <div
              className="modal fade"
              id="weight"
              tabIndex={-1}
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
            {/*modal-bg-starts-here*/}
            <div
              className="modal fade"
              id="bg"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content border-0">
                  <div className="modal-header">
                    <h5 className="modal-title" id="filterModalLabel">
                      <img src={Bloodgreen} alt="greeblood" className="me-2" />
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
            {/*modal-gender-starts-here*/}
            <div
              className="modal fade"
              id="gender"
              tabIndex={-1}
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
                      <label className="btn py-1 px-3 m-1" htmlFor="gender1">
                        Male
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="gender2"
                        autoComplete="off"
                      />
                      <label className="btn py-1 px-3 m-1" htmlFor="gender2">
                        Female
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="gender3"
                        autoComplete="off"
                      />
                      <label className="btn py-1 px-3 m-1" htmlFor="gender3">
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
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content border-0">
                  <div className="modal-header">
                    <h5 className="modal-title" id="filterModalLabel">
                      <img src={AgeGreen} alt="greenage" className="me-2" />
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
                    <div className="doaNText w-100">Record for Srinivas</div>
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
                        <label className="form-check-label" htmlFor="option1">
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
                        <label className="form-check-label" htmlFor="option2">
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
                        <label className="form-check-label" htmlFor="option3">
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
                        <label className="form-check-label" htmlFor="option4">
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
                        <label className="form-check-label" htmlFor="option5">
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
                        <label className="form-check-label" htmlFor="option6">
                          Lever problem
                        </label>
                      </div>
                      <div className="doaNText w-100 mt-4 mb-2">Allergies</div>
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
                      <div className="doaNText w-100 mt-3 mb-2">Aliments</div>
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
                      <div className="doaNText w-100 mt-3 mb-2">Surgeries</div>
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
                        <label className="form-check-label" htmlFor="option7">
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
                        <label className="form-check-label" htmlFor="option8">
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
                        <label className="form-check-label" htmlFor="option9">
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
                        <label className="form-check-label" htmlFor="option10">
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
                        <label className="form-check-label" htmlFor="option11">
                          Junk food
                        </label>
                      </div>
                      <div className="doaNText w-100 mt-4">Family History</div>
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
                    <button type="submit" className="btn fmaBtn mx-auto">
                      Save Health Concerns
                    </button>
                  </div>
                  {/*modal-footer-ends-here*/}
                </div>
              </div>
            </div>
            {/*modal-hc-ends-here*/}
            {/*modals-ends-here*/}
          </div>

          {/*myPhoneCardCnt-ends-here*/}
          {/*container-ends-here*/}
        </div>
      </>
    );
  }
}

export default myhealthrecords;
