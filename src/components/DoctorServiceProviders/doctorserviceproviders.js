import React, { Component } from "react";
import Subscribe from "../../images/doctoModule/subscribe-remote-partner-icon.png";
import PersonRectangle from "../../images/doctoModule/person-rectangle.png";
import Like from "../../images/doctoModule/like.png";
import Profile1 from "../../images/doctoModule/profile.png";
import EllipseGreen from "../../images/doctoModule/ellipse-green.png";
import LocGreen from "../../images/doctoModule/location-sm-green.png";
import Camcorder from "../../images/doctoModule/camcorder.png";
import yashoda from "../../images/doctoModule/yashoda.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Backbtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import Search from "../../images/search.png";
import Profile from "../../images/doctoModule/profile-1.png";
import EllispeGreen from "../../images/doctoModule/ellipse-green.png";
import LocsmGreen from "../../images/doctoModule/location-sm-green.png";
import UserGreen from "../../images/doctoModule/user-green-sm.png";
import PhoneSm from "../../images/doctoModule/phone-sm.png";
import Rmicon from "../../images/doctoModule/rp-icon.png";
import Walking from "../../images/doctoModule/walking.png";
import "../ConsultRoom/consultroom.css";
import BackBtn from "../../images/back-button-new.png";
import Phi from "../../images/phi.png";
import PdfIcon from "../../images/pdf-icon.png";
import Trashgree from "../../images/trash-green.png";
import TexDocument from "../../images/TextDocument.jpg";
import Person from "../../images/person.png";

export default function Doctorserviceproviders() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto p-md-3 mb-4">
        <div className="w-100 p-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">My Service Providers</div>
          {/*doaNText-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 grayBox d-flex flex-wrap align-items-center mt-3 p-3">
          <div className="my-2 me-2">
            <img src={Subscribe} alt="subscribe" />
          </div>
          <div className="my-2 me-2" style={{ maxWidth: 500 }}>
            <p className="f10bTeal mb-0">
              Bulk Booking Request:{" "}
              <span className="f10m">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                justo commodo
              </span>
            </p>
          </div>
          <div className="my-2">
            <button
              type="button"
              className="btn btnBlue"
              data-bs-toggle="modal"
              data-bs-target="#bulkBookingRequest"
            >
              Subscribe to Bulk Booking Request
            </button>
          </div>
        </div>
        {/*grayBox-ends-here*/}
        <div className="w-100 grayBox d-flex flex-wrap align-items-center justify-content-between mt-3 p-3">
          <div className="my-2 me-2">
            <img src={PersonRectangle} alt="rectangle" />
          </div>
          <div className="my-2 me-2" style={{ maxWidth: 500 }}>
            <p className="f10bTeal mb-0">
              All Service Providers:{" "}
              <span className="f10m">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod Bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan.
              </span>
            </p>
          </div>
          <div className="my-2">
            <Link to="/ServiceProvidersall">
              {" "}
              <button type="button" className="btn btnBlue">
                Subscribe to All Service Providers
              </button>
            </Link>
          </div>
        </div>
        {/*grayBox-ends-here*/}

        <div className="row">
          <div className="col-12 p-3">
            <div
              className="w-100 tabsOrange bg-white p-3"
              style={{ border: "1px solid #eaeaea", borderRadius: 12 }}
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
                    My Builk Slots Providers List
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#vh"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    My Favourite Service Providers
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pd"
                  role="tabpanel"
                >
                  {/*row-ends-here*/}

                  {/*flexbox-ends-here*/}
                  <div className="row">
                    {/*col-ends-here*/}
                    <div className="col-12 mt-3">
                      <div className="w-100 p-3 mt-1 mpGrayBox">
                        <div className="w-100 mpTitle me-3 mb-3 mb-sm-0">
                          My Bulk Appointment Service Providers
                        </div>
                      </div>

                      <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                        <div className="drHospitalCard m-2 p-3">
                          <div className="w-100 doacTitle mb-3 pb-2">
                            <h3 className="mb-0">Hospitals</h3>
                          </div>
                          {/*doacTitle-ends-here*/}
                          <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                            <div className="w-100 f16sb">2</div>
                          </div>
                          {/*circle-ends-here*/}
                          <div className="w-100 text-center mt-3">
                            <Link to="/HospitalPartners">
                              <button type="button" className="btn doacBtn">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                        {/*drHospitalCard-ends-here*/}
                        <div className="drHospitalCard m-2 p-3">
                          <div className="w-100 doacTitle mb-3 pb-2">
                            <h3 className="mb-0">Clinics</h3>
                          </div>
                          {/*doacTitle-ends-here*/}
                          <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                            <div className="w-100 f16sb">1</div>
                          </div>
                          {/*circle-ends-here*/}
                          <div className="w-100 text-center mt-3">
                            <Link to="/ClinicPartners">
                              {" "}
                              <button type="button" className="btn doacBtn">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                        {/*drHospitalCard-ends-here*/}
                        <div className="drHospitalCard m-2 p-3">
                          <div className="w-100 doacTitle mb-3 pb-2">
                            <h3 className="mb-0">Specialist Drs</h3>
                          </div>
                          {/*doacTitle-ends-here*/}
                          <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                            <div className="w-100 f16sb">6</div>
                          </div>
                          {/*circle-ends-here*/}
                          <div className="w-100 text-center mt-3">
                            <Link to="/ViewSpecialistDoctors">
                              <button type="button" className="btn doacBtn">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                        {/*drHospitalCard-ends-here*/}
                      </div>

                      {/*flexbox-ends-here*/}
                    </div>
                    {/*col-ends-here*/}

                    {/*col-ends-here*/}
                  </div>
                  {/*row-ends-here*/}
                </div>
                {/*tabpane-1-ends-here*/}
                <div className="tab-pane fade" id="vh" role="tabpanel">
                  <div className="row">
                    <div className="col-12 mt-3">
                      <div className="w-100 p-3 mt-1 mpGrayBox">
                        <div className="w-100 mpTitle me-3 mb-3 mb-sm-0">
                          My Favourites (Service Providers)
                        </div>
                      </div>

                      <div className="input-group w-100 searchInput searchBtn my-4">
                        <span className="input-group-text">
                          <img src={Search} alt="sarch" />
                        </span>
                        <input type="search" className="form-control" />
                        <button type="button" className="btn ms-3">
                          Search
                        </button>
                      </div>

                      <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                        <div
                          className="drOnlineCard1 m-2 p-3"
                          style={{ background: "#F1F1F1" }}
                        >
                          <div className="text-end w-100 drLike">
                            <a href="/">
                              <img src={Like} alt="Like" />
                            </a>
                          </div>
                          <div className="text-center w-100 drLogo">
                            <img src={Profile} alt="profile" />
                          </div>
                          <div className="text-center w-100 drStatus">
                            <img src={EllispeGreen} alt="greenm" />
                          </div>
                          <div className="text-center w-100 mb-3">
                            <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
                            <h4 className="mb-0 f10m">At Hospital</h4>
                            <h4>&nbsp;&nbsp;</h4>
                          </div>
                          <div className="w-100 mb-2 drName">
                            <a href="/">
                              <h3 className="mb-0">Doctor name</h3>
                            </a>
                            <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
                          </div>
                          <div className="w-100 mb-2 drSp">
                            <h3 className="mb-0">General Physician</h3>
                            <h4 className="mb-0">Experience: 12 Years</h4>
                          </div>
                          <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
                            <img
                              src={LocsmGreen}
                              alt="green"
                              className="me-2"
                            />
                            <h3 className="mb-0">Begumpet, Hyderabad</h3>
                          </div>

                          <div className="text-center w-100 drcHead1 mb-3">
                            <h3>Book Appointment</h3>
                          </div>

                          <div className="w-100 d-flex justify-content-between align-items-center mt-3">
                            <div className="text-center me-2">
                              <h3 className="f10m">Single Slot</h3>
                              <img
                                src={Camcorder}
                                alt="camcorder"
                                data-bs-toggle="modal"
                                data-bs-target="#selectDr"
                              />
                              <p className="mb-0 f10m">₹500</p>
                            </div>

                            <button
                              type="button"
                              className="btn txt-fnt"
                              data-bs-toggle="modal"
                              data-bs-target="#viewSlots"
                            >
                              Book Bulk Slots
                            </button>
                          </div>

                          <p data-bs-toggle="modal" data-bs-target="#selectDr">
                            Dev:clickhere
                          </p>
                        </div>
                        {/*drOnlineCard-ends-here*/}
                        <div className="drOnlineCard1 m-2 p-3">
                          <div className="text-end w-100 drLike">
                            <a href="/">
                              <img src={Like} alt="Like" />
                            </a>
                          </div>
                          <div className="mb-3">
                            <img src={yashoda} alt="yashoda" />
                          </div>
                          <div className="w-100 drName">
                            <a href="/">
                              <h3 className="mb-0">Hospital Name</h3>
                            </a>
                          </div>
                          <div className="w-100 drSp">
                            <h3 className="mb-0">Multi-Speciality</h3>
                          </div>
                          <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
                            <img
                              src={LocGreen}
                              alt="LocGreen"
                              className="me-2"
                            />
                            <h3 className="mb-0">Begumpet, Hyderabad</h3>
                          </div>
                          <Link to="/HospitalNameDoctorsList">
                            <button
                              type="button"
                              className="btn doacBtn d-block mx-auto mt-4"
                            >
                              View Doctor Slots
                            </button>
                          </Link>
                        </div>
                        <div className="drOnlineCard1 m-2 p-3">
                          <div className="text-end w-100 drLike">
                            <a href="/">
                              <img src={Like} alt="like" />
                            </a>
                          </div>
                          <div className="mb-3">
                            <img src={yashoda} alt="yashoda" />
                          </div>
                          <div className="w-100 drName">
                            <a href="/">
                              <h3 className="mb-0">Clinic Name</h3>
                            </a>
                          </div>
                          <div className="w-100 drSp">
                            <h3 className="mb-0">Multi-Speciality</h3>
                          </div>
                          <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
                            <img src={LocGreen} alt="green" className="me-2" />
                            <h3 className="mb-0">Begumpet, Hyderabad</h3>
                          </div>
                          <Link to="/ClinicNameDoctorSlots">
                            <button
                              type="button"
                              className="btn doacBtn d-block mx-auto mt-4"
                            >
                              View Doctor Slots
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*tabpane-2-ends-here*/}
                </div>
                {/*tabs-ends-here*/}
              </div>
              {/*tabs-container-ends-here*/}
            </div>
            {/*col-ends-here*/}
          </div>
          {/*row-ends-here*/}

          <div
            className="modal fade"
            id="selectDr"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="bi bi-chevron-left me-2" />
                    Assign This Appointment/s to Dr.
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
                    <div className="doaNText me-3 mb-2">Select Doctor:</div>
                    <select className="form-select w-auto w300 bg-white">
                      <option value={0} selected>
                        Select Doctor
                      </option>
                      <option value={1}>Dr.Laxman (GP)</option>
                      <option value={2}>Dr.Raju (GP)</option>
                      <option value={3}>Dr.Kumar (GP)</option>
                      <option value={1}>Dr.Laxman (GP)</option>
                      <option value={2}>Dr.Raju (GP)</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-end justify-content-end">
                    <button
                      type="button"
                      className="btn mt-3 mb-2 doacBtn px-4"
                      onClick={() => history.push("/SingleSlotBookingByRp")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="selectDr1"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="bi bi-chevron-left me-2" />
                    Assign This Appointment/s to Dr.
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
                    <div className="doaNText me-3 mb-2">Select Doctor:</div>
                    <select className="form-select w-auto w300 bg-white">
                      <option value={0} selected>
                        Select Doctor
                      </option>
                      <option value={1}>Dr.Laxman (GP)</option>
                      <option value={2}>Dr.Raju (GP)</option>
                      <option value={3}>Dr.Kumar (GP)</option>
                      <option value={1}>Dr.Laxman (GP)</option>
                      <option value={2}>Dr.Raju (GP)</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-end justify-content-end">
                    <button
                      type="button"
                      className="btn mt-3 mb-2 doacBtn px-4"
                      onClick={() => history.push("/")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="bulkBookingRequest"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="bi bi-chevron-left me-2" />
                    Bulk Booking Requirements
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form className="w-100">
                    <div className="mpText w-100 mb-2">
                      Expand Minimum Patients Per Day
                    </div>
                    <input className="form-control w-100" type="text" />
                    <div className="mpText w-100 mt-3 mb-2">
                      Dr. Speciality Required
                    </div>
                    <input className="form-control w-100" type="text" />
                    <div className="mpText w-100 mt-3 mb-2">City/District</div>
                    <input className="form-control w-100" type="text" />
                    <div className="mpText w-100 mt-3 mb-2">Mandal/Village</div>
                    <input className="form-control w-100" type="text" />
                    <div className="mpText w-100 mt-3 mb-2">Locality</div>
                    <input className="form-control w-100" type="text" />
                    <div className="mpText w-100 mt-3 mb-2">Mobile</div>
                    <input className="form-control w-100" type="text" />
                    <button
                      type="submit"
                      className="d-block btn doacBtn px-4 mt-4 mx-auto"
                    >
                      View Matching Dr's
                    </button>
                  </form>
                  {/*form-ends-here*/}
                </div>
                {/*modal-body-ends-here*/}
              </div>
            </div>
          </div>

          {/*modal-bulkUpload-starts-here*/}
          <div
            className="modal fade"
            id="viewslots"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title">View allotted Slots</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="drName">
                    <h3 className="mpText w-100 mb-2">
                      Doctor name will go here
                    </h3>
                    <h4 className="mb-0">MBBS, MS, MNAMS , FALS, FMAS...</h4>
                  </div>

                  <div className="drSp">
                    <h3 className="mb-0">General Physician</h3>
                    <h4 className="mb-0">Experience: 12 Years</h4>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div className="scheduletx">
                    <div className="d-flex flex-wrap">
                      <div className="abWhite d-flex align-items-center m-1 p-1">
                        <div className="f8m">Apr 5</div>
                      </div>
                      <div className="drName">
                        <h3>10:00AM to 5:00PM</h3>
                      </div>
                    </div>

                    <div className="d-flex flex-wrap">
                      <div className="abWhite d-flex align-items-center m-1 p-1">
                        <div className="f8m">Apr 8</div>
                      </div>
                      <div className="drName">
                        <h3>10:00AM to 5:00PM</h3>
                      </div>
                    </div>

                    <div className="d-flex flex-wrap">
                      <div className="abWhite d-flex align-items-center m-1 p-1">
                        <div className="f8m">Apr 10</div>
                      </div>
                      <div className="drName">
                        <h3>10:00AM to 5:00PM</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/*modal-body-ends-here*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
