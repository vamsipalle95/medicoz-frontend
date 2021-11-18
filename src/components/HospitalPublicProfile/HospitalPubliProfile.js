import React, { Component } from "react";
import LocGreen from "../../images/location-sm-green.png";
import Hospital from "../../images/hopital-image2.jpg";
import HospitalCertificate from "../../images/hospital-certificate.png";
import HospitalSm from "../../images/hospital-sm.jpg";
import EllipseGreen from "../../images/ellipse-green.png";
import EllipseRed from "../../images/ellipse-red.png";
import Badge from "../../images/badge.png";
import OrangeShield from "../../images/shield-orange.png";
import FBornage from "../../images/fb.png";
import TwitterOrange from "../../images/twitter-orange.png";
import LinkedIn from "../../images/linkedin-orange.png";
import Backbtn from "../../images/back-button-new.png";
import TexDocument from "../../images/TextDocument.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function HospitalPubliProfile() {
  const history = useHistory(true);
  return (
    <div>
      <div
        className="container bg-white my-4"
        style={{
          border: "1px solid #EAEAEA",
          borderRadius: "8px !important",
          maxWidth: "1000px !important",
        }}
      >
        <div className="myPhoneCardCnt03 px-5 py-2 w-80 mx-auto">
          <div className="w-100 d-flex flex-wrap align-items-center mt-4">
            <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
              <img src={Backbtn} alt="btn" onClick={() => history.goBack()} />
              <h1 className="mpTitle18 me-4">Hospital Name - Profile</h1>
            </div>

            <div className="mpText mb-2">
              <img src={LocGreen} alt="locgm" className="me-2" />
              Begumpet, Hyderabad
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="row">
            <div className="col-12 col-md-auto p-3">
              <img src={Hospital} alt="hosp" />
            </div>
            {/*col-ends-here*/}
            <div className="col-12 p-3">
              <div className="w-100 mpText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum…
              </div>
            </div>
            {/*col-ends-here*/}
          </div>
        </div>

        <div className="myPhoneCardCnt03 my-3 px-5 py-2 w-80 mx-auto">
          {/*row-ends-here*/}
          <div className="row">
            <div className="col-12 p-3">
              <div className="w-100 tabsOrange">
                <nav>
                  <div
                    className="nav nav-tabs border-0"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#ah"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      About Hospital
                    </button>
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#ood"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Our OPD Doctors
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id="ah" role="tabpanel">
                    <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle pb-2">
                          <h3 className="mb-0">Hospital Details</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <a
                          href="#"
                          className="w-100 d-block text-decoration-none f12sbOrange mt-3"
                        >
                          Hospital name
                        </a>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            Renevo Hospitals
                            <br />
                            Hospital Registration No: 12345 6789
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            Phone 1: 12345 67890
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            Phone 2: 12345 67890
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            Email: info@renevo.com
                          </div>
                        </div>
                      </div>
                      {/*draCard1-ends-here*/}
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle d-flex align-items-center pb-2">
                          <h3 className="mb-0">Hospital Certificate</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div className="w-100 mt-3">
                          <img src={HospitalCertificate} alt="hopcertificate" />
                        </div>

                        <div className="w-100 text-center mt-4">
                          <button
                            type="button"
                            className="btn doacBtn px-3 py-1"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                          >
                            View Certificate
                          </button>
                        </div>
                      </div>
                      {/*draCard1-ends-here*/}
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle d-flex align-items-center pb-2">
                          <h3 className="mb-0">Hospital Address</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div className="w-100 mt-3">
                          <img src={HospitalSm} alt="hospitalsm" />
                        </div>
                        <div className="w-100 mpText mt-2">
                          A49, First Floor, IndianAirlines Colony,Begumpet,
                          Hyderabad - 13
                        </div>
                      </div>
                      {/*draCard1-ends-here*/}
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle d-flex align-items-center pb-2">
                          <h3 className="mb-0">OPD Timings</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div className="w-100 mt-2 overflow-auto">
                          <table className="w-100">
                            <tbody>
                              <tr
                                style={{
                                  borderBottom: "1px solid #cecece !important",
                                }}
                              >
                                <td className="mpText pe-2 py-2">9:30 AM</td>
                                <td className="mpText py-2">12:30 PM</td>
                              </tr>
                              <tr
                                style={{
                                  borderBottom: "1px solid #cecece !important",
                                }}
                              >
                                <td className="mpText pe-2 py-2">1:30 AM</td>
                                <td className="mpText py-2">8:30 PM</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*table-ends-here*/}
                      </div>
                      {/*draCard1-ends-here*/}
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle pb-2">
                          <h3 className="mb-0">Emergency Contacts</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div
                          className="w-100 pt-3 pb-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            Ambulance: 12345 12345
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            Emergency: 12345 12345
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            General enquiry: 12345 12345
                          </div>
                        </div>
                      </div>
                      {/*draCard1-ends-here*/}
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle pb-2">
                          <h3 className="mb-0">
                            <img src={Badge} alt="badge" className="me-2" />
                            Achievements &amp; Awards
                          </h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            <img
                              src={OrangeShield}
                              alt="shield"
                              className="me-2"
                            />
                            Award or achievement goes here
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            <img
                              src={OrangeShield}
                              alt="shield"
                              className="me-2"
                            />
                            Award or achievement goes here
                          </div>
                        </div>
                      </div>
                      {/*draCard1-ends-here*/}
                      <div className="draCard1 p-3 m-2">
                        <div className="w-100 doacTitle pb-2">
                          <h3 className="mb-0">Social Links</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            <img src={FBornage} alt="fb" className="me-2" />
                            facebook.com/venu-prisup
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            <img
                              src={TwitterOrange}
                              alt="twitter"
                              className="me-2"
                            />
                            twitter.com/venu123
                          </div>
                        </div>
                        <div
                          className="w-100 py-2"
                          style={{
                            borderBottom: "1px solid #D4D5D5 !important",
                          }}
                        >
                          <div className="mpText mt-1">
                            <img src={LinkedIn} alt="linked" className="me-2" />
                            Linkedin.com/profile/ven…
                          </div>
                        </div>
                      </div>
                      {/*draCard1-ends-here*/}
                    </div>
                    {/*flexbox-ends-here*/}
                  </div>
                  {/*tabpane-1-ends-here*/}
                  <div
                    className="tab-pane fade show active"
                    id="ood"
                    role="tabpanel"
                  >
                    <div className="w-100 d-flex flex-wrap align-items-center">
                      <div className="mpText me-3 mt-4">View by Speciality</div>
                      <select
                        className="form-select mt-4"
                        style={{ width: 200 }}
                      >
                        <option selected>Select Speciality</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                    {/*flexbox-ends-here*/}
                    <div className="w-100 overflow-auto mt-4">
                      <table id="table_id">
                        <thead>
                          <tr>
                            <th>Speciality</th>
                            <th>Doctor Name</th>
                            <th>Dr.IN/Out</th>
                            <th>Dr. Available timings</th>
                            <th>Book Appointment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>General Physician</td>
                            <td>Dr.Kulkarn</td>
                            <td className="text-nowrap">
                              <img
                                src={EllipseGreen}
                                alt="ellipsegreen"
                                className="me-2"
                              />
                              DR.IN
                            </td>
                            <td>2.00PM-4.00PM</td>
                            <td>
                              <Link
                                to="/BookAppointmentHospDr"
                                className="text-decoration-none"
                                style={{ color: "#F98F45 !important" }}
                              >
                                Book Appointment
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>General Physician</td>
                            <td>Dr.Vijay Kumar</td>
                            <td className="text-nowrap">
                              <img
                                src={EllipseRed}
                                alt="ellipsegreen"
                                className="me-2"
                              />
                              DR.OUT
                            </td>
                            <td>2.00PM-4.00PM</td>
                            <td>
                              <Link
                                to="/BookAppointmentHospDr"
                                className="text-decoration-none"
                                style={{ color: "#F98F45 !important" }}
                              >
                                Book Appointment
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>General Physician</td>
                            <td>Dr. Lalith</td>
                            <td className="text-nowrap">
                              <img
                                src={EllipseGreen}
                                alt="ellipsegreen"
                                className="me-2"
                              />
                              DR.IN
                            </td>
                            <td>2.00PM-4.00PM</td>
                            <td>
                              <Link
                                to="/BookAppointmentHospDr"
                                className="text-decoration-none"
                                style={{ color: "#F98F45 !important" }}
                              >
                                Book Appointment
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>General Physician</td>
                            <td>Dr.Arun Kumar</td>
                            <td className="text-nowrap">
                              <img
                                src={EllipseRed}
                                alt="ellipsegreen"
                                className="me-2"
                              />
                              DR.OUT
                            </td>
                            <td>2.00PM-4.00PM</td>
                            <td>
                              <Link
                                to="/BookAppointmentHospDr"
                                className="text-decoration-none"
                                style={{ color: "#F98F45 !important" }}
                              >
                                Book Appointment
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*table-ends-here*/}
                  </div>
                  {/*tabpane-2-ends-here*/}
                </div>
                {/*tabs-ends-here*/}
              </div>
              {/*tabs-container-ends-here*/}
            </div>
            {/*col-ends-here*/}
          </div>
        </div>
        {/*row-ends-here*/}
      </div>

      <div className="modal fade" id="view" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Hospital Certificate
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={1500}>
                    <img
                      src={TexDocument}
                      alt="txtdoc"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval={1500}>
                    <img
                      src={TexDocument}
                      alt="txtdoc"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval={1500}>
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
      {/*modals-ends-here*/}
      {/*container-ends-here*/}
    </div>
  );
}
