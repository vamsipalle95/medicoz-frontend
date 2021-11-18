import React, { Component } from "react";
import Heart from "../../images/heart-in-hand.png";
import Pencil from "../../images/pencil.png";
import Trash from "../../images/trash.png";
import Backbtn from "../../images/back-button-new.png";
import { BrowserRouter as Link } from "react-router-dom";
import Person from "../../images/person.png";
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
import HlthCondition from "../../images/health-condition.png";

class HealthConcerns extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="AddHealthConcern"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal650 modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-chevron-left me-2" />
                  Add Health Concern
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
                  <div className="d-flex flex-wrap justify-content-between ">
                    <nav>
                      <div
                        className="nav nav-tabs border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#tab1"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Current Medication List
                        </button>
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#tab3"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Health Conditions
                        </button>
                      </div>
                    </nav>

                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tab1"
                        role="tabpanel"
                      >
                        {/*flexbox-ends-here*/}
                        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
                          {/*tab1-ends-here*/}

                          <div className="w-100 d-flex align-items-center mt-3">
                            <div className="doaNText me-2">Record for</div>
                            <div className="grayTextBox">Srinivas</div>

                            {/* <div className="previewCls mt-3 mx-3">
                                  <p className="doaNText1" data-bs-toggle="modal" data-bs-target="#ViewPopUp">View List</p>
                                </div> */}
                          </div>

                          <form className="w-100 mt-4">
                            <div
                              className="doaNText w-100 pb-2 mb-2"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              Morning
                            </div>
                            <div
                              className="w-100 d-flex align-items-center"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              <div className="mpText">
                                zincovit (Syrup) - Before Food
                              </div>
                              <div className="ms-auto me-3">
                                <a href="/">
                                  <img src={Pencil} alt="pencil" />
                                </a>
                              </div>
                              <div>
                                <a href="/">
                                  <img src={Trash} alt="trash" />
                                </a>
                              </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div
                              className="w-100 d-flex align-items-center"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              <div className="mpText">
                                zincovit (Syrup) - After Food
                              </div>
                              <div className="ms-auto me-3">
                                <a href="/">
                                  <img src={Pencil} alt="pencil" />
                                </a>
                              </div>
                              <div>
                                <a href="/">
                                  <img src={Trash} alt="trash" />
                                </a>
                              </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex flex-wrap align-items-center mt-4">
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Select Type</option>
                                <option>Tablet</option>
                                <option>Capsule</option>
                                <option>Syrup</option>
                                <option>Injection</option>
                                <option>Ointment</option>
                                <option>Cream</option>
                                <option>Drops</option>
                                <option>Sachet</option>
                              </select>
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Select Time</option>
                                <option>on Empty Stomach</option>
                                <option>Before Food</option>
                                <option>After Food</option>
                                <option>SOS</option>
                              </select>
                              <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Enter Medicine"
                                style={{ width: "47%" }}
                              />
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Since</option>
                                <option>Days</option>
                                <option>Weeks</option>
                                <option>Months</option>
                              </select>
                              <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Enter Days"
                                style={{ width: "47%" }}
                              />
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 text-end mt-3">
                              <button
                                type="button"
                                className="btn doaOrangeBtn"
                              >
                                + Add New
                              </button>
                            </div>
                            <div
                              className="doaNText w-100 pb-2 mt-3 mb-2"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              Afternoon
                            </div>
                            <div
                              className="w-100 d-flex align-items-center"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              <div className="mpText">
                                zincovit (Syrup) - Before Food
                              </div>
                              <div className="ms-auto me-3">
                                <a href="/">
                                  <img src={Pencil} alt="pencil" />
                                </a>
                              </div>
                              <div>
                                <a href="/">
                                  <img src={Trash} alt="trash" />
                                </a>
                              </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex flex-wrap align-items-center mt-4">
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Select Type</option>
                                <option>Tablet</option>
                                <option>Capsule</option>
                                <option>Syrup</option>
                                <option>Injection</option>
                                <option>Ointment</option>
                                <option>Cream</option>
                                <option>Drops</option>
                                <option>Sachet</option>
                              </select>
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Select Time</option>
                                <option>on Empty Stomach</option>
                                <option>Before Food</option>
                                <option>After Food</option>
                                <option>SOS</option>
                              </select>
                              <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Enter Medicine"
                                style={{ width: "47%" }}
                              />
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Since</option>
                                <option>Days</option>
                                <option>Weeks</option>
                                <option>Months</option>
                              </select>
                              <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Enter Days"
                                style={{ width: "47%" }}
                              />
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 text-end mt-3">
                              <button
                                type="button"
                                className="btn doaOrangeBtn"
                              >
                                + Add New
                              </button>
                            </div>
                            <div
                              className="doaNText w-100 pb-2 mt-3 mb-2"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              Night
                            </div>
                            <div
                              className="w-100 d-flex align-items-center"
                              style={{
                                borderBottom: "1px solid #B5B5B5 !important",
                              }}
                            >
                              <div className="mpText">
                                zincovit (Syrup) - After Food
                              </div>
                              <div className="ms-auto me-3">
                                <a href="/">
                                  <img src={Pencil} alt="pencil" />
                                </a>
                              </div>
                              <div>
                                <a href="/">
                                  <img src={Trash} alt="trash" />
                                </a>
                              </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex flex-wrap align-items-center mt-4">
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Select Type</option>
                                <option>Tablet</option>
                                <option>Capsule</option>
                                <option>Syrup</option>
                                <option>Injection</option>
                                <option>Ointment</option>
                                <option>Cream</option>
                                <option>Drops</option>
                                <option>Sachet</option>
                              </select>
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Select Time</option>
                                <option>on Empty Stomach</option>
                                <option>Before Food</option>
                                <option>After Food</option>
                                <option>SOS</option>
                              </select>
                              <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Enter Medicine"
                                style={{ width: "47%" }}
                              />
                              <select
                                className="form-select m-1"
                                style={{ width: "47%" }}
                              >
                                <option selected>Since</option>
                                <option>Days</option>
                                <option>Weeks</option>
                                <option>Months</option>
                              </select>
                              <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Enter Days"
                                style={{ width: "47%" }}
                              />
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 text-end mt-3">
                              <button
                                type="button"
                                className="btn doaOrangeBtn"
                              >
                                + Add New
                              </button>
                            </div>
                            <button
                              type="submit"
                              className="d-block btn doacBtn px-5 mt-4 mx-auto"
                            >
                              Save
                            </button>
                          </form>
                          {/*form-ends-here*/}

                          {/*tab1-ends-here*/}
                        </div>
                      </div>

                      <div
                        className="tab-pane fade show "
                        id="tab2"
                        role="tabpanel"
                      >
                        {/*flexbox-ends-here*/}
                        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
                          <div>
                            <div className="w-100 doaNText mt-4">
                              Health Profile
                            </div>
                            {/*doaNText-ends-here*/}
                            <div className="w-100 mt-2">
                              <button
                                type="button"
                                className="btn hrBtn py-1 px-3 m-2"
                                data-bs-toggle="modal"
                                data-bs-target="#height"
                              >
                                <img
                                  src={Height}
                                  alt="height"
                                  className="me-2"
                                />
                                Height <span>5.11 ft</span>
                              </button>
                              <button
                                type="button"
                                className="btn hrBtn py-1 px-3 m-2"
                                data-bs-toggle="modal"
                                data-bs-target="#weight"
                              >
                                <img
                                  src={Weight}
                                  alt="weight"
                                  className="me-2"
                                />
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
                                  alt="blodgp"
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
                                <img
                                  src={Gender}
                                  alt="gennder"
                                  className="me-2"
                                />
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
                                  src={HlthCondition}
                                  alt="health"
                                  className="me-2"
                                />
                                Health Conditions
                              </button>

                              <button
                                type="submit"
                                className="d-block btn doacBtn px-5 mt-4 mx-auto"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade show"
                        id="tab3"
                        role="tabpanel"
                      >
                        {/*flexbox-ends-here*/}
                        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
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

                            <button
                              type="submit"
                              className="d-block btn doacBtn px-5 mt-4 mx-auto"
                            >
                              Save
                            </button>
                          </form>
                          {/*form-ends-here*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*modal-body-ends-here*/}
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

        <div className="container px-2 py-5">
          <div className="draCard3 ms-auto me-auto p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Heart} alt="heat" className="me-2" />
              <h3 className="mb-0">Share your Health Concern</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="doaNText w-100 mt-3">
              Share with Dr. Niraj prior to your consultation
            </div>
            {/*doaNText-ends-here*/}

            <form className="form d-flex flex-wrap align-items-flex-start mt-4">
              <div className="form-check pl-0 mb-3 w-100">
                <div className="text_width2 w-100 ">Brief your Problem</div>
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

              <div className="d-flex flex-row border-bottom pb-3 w-100">
                <div className="leftcls mr-2 d-flex w-60 px-2 flex-row">
                  <span className="text_width my-2">Gender: </span>
                  <span className="px-2 w162px">
                    <select className="form-select">
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                      <option value={2}>Others</option>
                    </select>
                  </span>
                </div>

                <div className="leftcls d-flex w-25  px-2 flex-row">
                  <span className="text_width my-2">Age:</span>
                  <span className="px-2">
                    <input type="text" className="form-control shcInput" />
                  </span>
                </div>
              </div>

              <div className="text_width my-2">Add Vitals</div>
              {/*doaNText-ends-here*/}
              <div className="row">
                <form className="form">
                  {/*doaNText-ends-here*/}
                  <div className="w-100 mt-2">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              Height (fts):
                            </label>
                            <input
                              className="form-control shcInput"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              Weight (Kgs):
                            </label>
                            <input
                              className="form-control shcInput"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              Temp (°F):
                            </label>
                            <input
                              className="form-control shcInput"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              BP:
                            </label>
                            <input
                              className="form-control shcInput"
                              placeholder=""
                              type="text"
                            />
                            /
                            <input
                              className="form-control shcInput"
                              placeholder=""
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              Sugar Levels:
                            </label>
                            <input
                              className="form-control shcInput"
                              placeholder="Fasting"
                              type="text"
                            />
                            /
                            <input
                              className="form-control shcInput"
                              placeholder="After food"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              SPO<sub>2</sub>:
                            </label>
                            <input
                              className="form-control shcInput"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex align-items-end">
                            <label
                              className="form-label flex-shrink-0 mb-0 shcLabel"
                              style={{ flexBasis: "33%" }}
                            >
                              Heart Rate:
                            </label>
                            <input
                              className="form-control shcInput"
                              type="text"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*table-ends-here*/}

                  {/*flex-box-ends-here*/}

                  {/*doaNText-ends-here*/}
                </form>
                {/*form-ends-here*/}
              </div>

              {/*flex-box-ends-here*/}

              <div className="text_width w-58 mt-3">
                Upload Health Documents
              </div>
              {/*doaNText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-3">
                <div className="w-100 me-3">
                  <label className="form-label shcLabel">Photo.png</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="w-100">
                  <label className="form-label shcLabel">Document.pdf</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              {/*flex-box-ends-here*/}

              <div className="doaNText mt-3">
                <p
                  className="doaNText1 doaOrangeBtn p-2 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#AddHealthConcern"
                >
                  Add Health Profile
                </p>
              </div>

              <div className="doaNText float-right text-right wl-65 mt-56">
                <Link to="/Videocall">
                  <button
                    type="submit"
                    className="btn doacBtn px-3 mt-1 ms-auto"
                  >
                    Next
                  </button>
                </Link>
              </div>
            </form>
            {/*form-ends-here*/}
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*container-ends-here*/}

        <div
          className="modal fade"
          id="currentMed"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-chevron-left me-2" />
                  Current Medication List
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="overflow-auto p-md-3 mb-4">
                  <div className="p-3">
                    {/*doacTitle-ends-here*/}
                    <div className="w-100 d-flex align-items-center mt-3">
                      <div className="doaNText me-2">Record for</div>
                      <div className="grayTextBox">Srinivas</div>

                      <div className="previewCls mt-3 mx-3">
                        <p
                          className="doaNText1"
                          data-bs-toggle="modal"
                          data-bs-target="#ViewPopUp"
                        >
                          View List
                        </p>
                      </div>
                    </div>
                    {/*flexbox-ends-here*/}
                    <form className="w-100 mt-4">
                      <div
                        className="doaNText w-100 pb-2 mb-2"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        Morning
                      </div>
                      <div
                        className="w-100 d-flex align-items-center"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        <div className="mpText">
                          zincovit (Syrup) - Before Food
                        </div>
                        <div className="ms-auto me-3">
                          <a href="/">
                            <img src={Pencil} alt="pencil" />
                          </a>
                        </div>
                        <div>
                          <a href="/">
                            <img src={Trash} alt="trash" />
                          </a>
                        </div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div
                        className="w-100 d-flex align-items-center"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        <div className="mpText">
                          zincovit (Syrup) - After Food
                        </div>
                        <div className="ms-auto me-3">
                          <a href="/">
                            <img src={Pencil} alt="pencil" />
                          </a>
                        </div>
                        <div>
                          <a href="/">
                            <img src={Trash} alt="trash" />
                          </a>
                        </div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div className="w-100 d-flex flex-wrap align-items-center mt-4">
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Select Type</option>
                          <option>Tablet</option>
                          <option>Capsule</option>
                          <option>Syrup</option>
                          <option>Injection</option>
                          <option>Ointment</option>
                          <option>Cream</option>
                          <option>Drops</option>
                          <option>Sachet</option>
                        </select>
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Select Time</option>
                          <option>on Empty Stomach</option>
                          <option>Before Food</option>
                          <option>After Food</option>
                          <option>SOS</option>
                        </select>
                        <input
                          type="text"
                          className="form-control m-1"
                          placeholder="Enter Medicine"
                          style={{ width: "47%" }}
                        />
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Since</option>
                          <option>Days</option>
                          <option>Weeks</option>
                          <option>Months</option>
                        </select>
                        <input
                          type="text"
                          className="form-control m-1"
                          placeholder="Enter Days"
                          style={{ width: "47%" }}
                        />
                      </div>
                      {/*flexbox-ends-here*/}
                      <div className="w-100 text-end mt-3">
                        <button type="button" className="btn doaOrangeBtn">
                          + Add New
                        </button>
                      </div>
                      <div
                        className="doaNText w-100 pb-2 mt-3 mb-2"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        Afternoon
                      </div>
                      <div
                        className="w-100 d-flex align-items-center"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        <div className="mpText">
                          zincovit (Syrup) - Before Food
                        </div>
                        <div className="ms-auto me-3">
                          <a href="/">
                            <img src={Pencil} alt="pencil" />
                          </a>
                        </div>
                        <div>
                          <a href="/">
                            <img src={Trash} alt="trash" />
                          </a>
                        </div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div className="w-100 d-flex flex-wrap align-items-center mt-4">
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Select Type</option>
                          <option>Tablet</option>
                          <option>Capsule</option>
                          <option>Syrup</option>
                          <option>Injection</option>
                          <option>Ointment</option>
                          <option>Cream</option>
                          <option>Drops</option>
                          <option>Sachet</option>
                        </select>
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Select Time</option>
                          <option>on Empty Stomach</option>
                          <option>Before Food</option>
                          <option>After Food</option>
                          <option>SOS</option>
                        </select>
                        <input
                          type="text"
                          className="form-control m-1"
                          placeholder="Enter Medicine"
                          style={{ width: "47%" }}
                        />
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Since</option>
                          <option>Days</option>
                          <option>Weeks</option>
                          <option>Months</option>
                        </select>
                        <input
                          type="text"
                          className="form-control m-1"
                          placeholder="Enter Days"
                          style={{ width: "47%" }}
                        />
                      </div>
                      {/*flexbox-ends-here*/}
                      <div className="w-100 text-end mt-3">
                        <button type="button" className="btn doaOrangeBtn">
                          + Add New
                        </button>
                      </div>
                      <div
                        className="doaNText w-100 pb-2 mt-3 mb-2"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        Night
                      </div>
                      <div
                        className="w-100 d-flex align-items-center"
                        style={{ borderBottom: "1px solid #B5B5B5 !important" }}
                      >
                        <div className="mpText">
                          zincovit (Syrup) - After Food
                        </div>
                        <div className="ms-auto me-3">
                          <a href="/">
                            <img src={Pencil} alt="pencil" />
                          </a>
                        </div>
                        <div>
                          <a href="/">
                            <img src={Trash} alt="trash" />
                          </a>
                        </div>
                      </div>
                      {/*flexbox-ends-here*/}
                      <div className="w-100 d-flex flex-wrap align-items-center mt-4">
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Select Type</option>
                          <option>Tablet</option>
                          <option>Capsule</option>
                          <option>Syrup</option>
                          <option>Injection</option>
                          <option>Ointment</option>
                          <option>Cream</option>
                          <option>Drops</option>
                          <option>Sachet</option>
                        </select>
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Select Time</option>
                          <option>on Empty Stomach</option>
                          <option>Before Food</option>
                          <option>After Food</option>
                          <option>SOS</option>
                        </select>
                        <input
                          type="text"
                          className="form-control m-1"
                          placeholder="Enter Medicine"
                          style={{ width: "47%" }}
                        />
                        <select
                          className="form-select m-1"
                          style={{ width: "47%" }}
                        >
                          <option selected>Since</option>
                          <option>Days</option>
                          <option>Weeks</option>
                          <option>Months</option>
                        </select>
                        <input
                          type="text"
                          className="form-control m-1"
                          placeholder="Enter Days"
                          style={{ width: "47%" }}
                        />
                      </div>
                      {/*flexbox-ends-here*/}
                      <div className="w-100 text-end mt-3">
                        <button type="button" className="btn doaOrangeBtn">
                          + Add New
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="d-block btn doacBtn px-5 mt-4 mx-auto"
                      >
                        Save
                      </button>
                    </form>
                    {/*form-ends-here*/}
                  </div>
                  {/*draCard1-ends-here*/}
                </div>

                <div
                  className="modal fade"
                  id="ViewPopup"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          <i className="bi bi-chevron-left me-2" />
                          Current Medication List
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="w-100 f12sbTeal">Morning</div>
                        <div
                          className="f10m w-100 py-2"
                          style={{ borderBottom: "1px solid #B5B5B5" }}
                        >
                          Zincovit (syrup) 20 ML-Before Food-2 Days
                        </div>
                        <div
                          className="f10m w-100 py-2"
                          style={{ borderBottom: "1px solid #B5B5B5" }}
                        >
                          Zincovit (syrup) 30 ML-After Food-3 Days
                        </div>
                        <div className="w-100 f12sbTeal mt-3">Afternoon</div>
                        <div
                          className="f10m w-100 py-2"
                          style={{ borderBottom: "1px solid #B5B5B5" }}
                        >
                          Zincovit (syrup) 20 ML-Before Food-2 Days
                        </div>
                        <div
                          className="f10m w-100 py-2"
                          style={{ borderBottom: "1px solid #B5B5B5" }}
                        >
                          Zincovit (syrup) 30 ML-After Food-3 Days
                        </div>
                        <div className="w-100 f12sbTeal mt-3">Night</div>
                        <div
                          className="f10m w-100 py-2"
                          style={{ borderBottom: "1px solid #B5B5B5" }}
                        >
                          Zincovit (syrup) 20 ML-Before Food-2 Days
                        </div>
                        <div
                          className="f10m w-100 py-2"
                          style={{ borderBottom: "1px solid #B5B5B5" }}
                        >
                          Zincovit (syrup) 30 ML-After Food-3 Days
                        </div>
                        <div className="w-100 text-end mt-4">
                          <button
                            type="button"
                            className="btn doacBtn px-4"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      {/*modal-body-ends-here*/}
                    </div>
                  </div>
                </div>

                {/*myPhoneCardCnt-ends-here*/}
                {/*container-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthConcerns;
