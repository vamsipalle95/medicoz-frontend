import React, { Component } from "react";
import MP from "../../images/mp1.png";
import EllipseGreen from "../../images/ellipse-green-xs.png";
import Camcorder from "../../images/camcorder.png";
import Phone from "../../images/phone.png";
import Locsmgreen from "../../images/location-sm-green.png";
import UserGreen from "../../images/user-green.png";
import Badge from "../../images/badge.png";
import UserGreenSm from "../../images/user-green-sm.png";
import CerBadge from "../../images/certificate-badge.png";
import OrangeShield from "../../images/shield-orange.png";
import Membership from "../../images/membership-pad.png";
import Yashoda from "../../images/yashoda.jpg";
import Backbtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import TexDocument from "../../images/TextDocument.jpg";
import HospitalCertificate from "../../images/hospital-certificate.png";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function DrPatientProfileView() {
  const history = useHistory();
  return (
    <div>
      <div
        className="container bg-white my-4"
        style={{
          border: "1px solid #EAEAEA",
          borderRadius: "8px !important",
          maxWidth: 1000,
        }}
      >
        <div className="myPhoneCardCnt03 w-100 d-flex flex-wrap align-items-flex-start mt-4">
          <div className=" w-100 d-flex flex-wrap align-items-baseline px-3 py-3 m-3 p-md-0">
            <img src={Backbtn} alt="btn" onClick={() => history.goBack()} />
            <h1 className="mpTitle18 me-4"> Doctor Name - Profile</h1>
          </div>

          <div className="p-3 me-3 mb-3">
            <div className="d-flex flex-wrap align-items-center">
              <div className="me-3 mb-2">
                <img src={MP} alt="mp" />
              </div>
              {/*image-ends-here*/}
              <div className="mb-2">
                <div className="f12sbOrange">Dr.Srinivas</div>
                <div className="mpText">MBBS, MS, MNAMS, FALS</div>
                <div className="mpText">General Physician</div>
                <div className="mpText">Experience: 12 Years</div>
                <div className="mpText">Languages Spoken:</div>
                <div className="mpText">English Telugu Hindi Kannada</div>
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>

          {/*==============================================================================================*/}
          <div
            className="flex-shrink-0 p-3 mb-3"
            style={{
              background: "#f1f1f1",
              border: "1px solid #eaeaea",
              borderRadius: 5,
              width: 210,
            }}
          >
            <div className="w-100 f12sbOrange">
              <img src={EllipseGreen} alt="ellipsegreen" className="me-2" />
              Dr.Online <span className="f10mTeal">- Available Now</span>
            </div>
            <div
              className="w-100 mt-2"
              style={{ borderBottom: "1px solid #cecece" }}
            >
              <div
                className="mpText text-center mx-auto"
                style={{
                  width: 60,
                  marginBottom: "-8px",
                  background: "#f1f1f1",
                }}
              >
                Call Now
              </div>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center mt-3">
              <Link to="LoginOtp" className="text-decoration-none">
                <div className="text-center me-2">
                  <img src={Camcorder} alt="camcorder" />
                  <p className="mt-2 mb-0 mpText">
                    <span
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      ₹
                    </span>
                    500
                  </p>
                </div>
              </Link>
              <Link to="LoginOtp" className="text-decoration-none">
                <div className="text-center">
                  <img src={Phone} alt="phone" />
                  <p className="mt-2 mb-0 mpText">
                    <span
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      ₹
                    </span>
                    400
                  </p>
                </div>
              </Link>
            </div>
            {/*flexbox-ends-here*/}
          </div>

          {/*==============================================================================================*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="myPhoneCardCnt03 my-3 mx-0 row">
          <div className="col-12 p-4 m-2">
            <div className="w-100 tabsOrange">
              <nav>
                <div
                  className="nav nav-tabs border-0"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#ma"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    My Availability Places &amp; Timing
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#am"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    About Me
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#ahf"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Articles &amp; Health Feeds
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="ma"
                  role="tabpanel"
                >
                  <div className="w-100 f16sbTeal font-weight-bold mt-4">
                    My Places &amp; Timings
                  </div>
                  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-2">
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 f12sbOrange">
                        <img
                          src={EllipseGreen}
                          alt="ellipsegreen"
                          className="me-2"
                        />
                        Dr.IN
                      </div>
                      <div className="w-100 doaNText16 mt-2">Krupa Clinic</div>
                      <div className="w-100 mpText mt-2">
                        <img
                          src={Locsmgreen}
                          alt="locsmgreen"
                          className="me-2"
                        />
                        Begumpet, Hyderabad
                      </div>
                      <div className="w-100 overflow-auto mt-2">
                        <table>
                          <tbody>
                            <tr>
                              <td className="mpText">Mon</td>
                              <td className="mpText" />
                              <td className="mpText">Sat</td>
                            </tr>
                            <tr>
                              <td className="mpText">7:00 AM</td>
                              <td className="mpText">-</td>
                              <td className="mpText">9:00 AM</td>
                            </tr>
                            <tr>
                              <td className="mpText">5:00 PM</td>
                              <td className="mpText">-</td>
                              <td className="mpText">8:30 PM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="w-100 mt-2"
                        style={{ borderBottom: "1px solid #cecece" }}
                      >
                        <div
                          className="mpText text-center mx-auto"
                          style={{
                            width: 60,
                            marginBottom: "-8px",
                            background: "#f1f1f1",
                          }}
                        >
                          Book Appointment
                        </div>
                      </div>
                      <div className="w-100 d-flex justify-content-evenly align-items-center mt-3">
                        <Link
                          to="/BookVideoAppoinment"
                          className="text-decoration-none"
                        >
                          <div className="text-center me-2">
                            <img src={Camcorder} alt="camcorder" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              500
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/BookAudioAppointment"
                          className="text-decoration-none"
                        >
                          <div className="text-center">
                            <img src={Phone} alt="phone" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              400
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/BookInPersonAppointment"
                          className="text-decoration-none"
                        >
                          <div className="text-center">
                            <img src={UserGreen} alt="usergreen" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              400
                            </p>
                          </div>
                        </Link>
                      </div>
                      {/*flexbox-ends-here*/}
                    </div>
                    {/*====================================================================================*/}
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 f12sbOrange">
                        <img
                          src={EllipseGreen}
                          alt="ellipsegreen"
                          className="me-2"
                        />
                        Dr.IN
                      </div>
                      <div className="w-100 doaNText16 mt-2">
                        Balaji Hospital
                      </div>
                      <div className="w-100 mpText mt-2">
                        <img
                          src={Locsmgreen}
                          alt="locsmgreen"
                          className="me-2"
                        />
                        Begumpet, Hyderabad
                      </div>
                      <div className="w-100 overflow-auto mt-2">
                        <table>
                          <tbody>
                            <tr>
                              <td className="mpText">Mon</td>
                              <td className="mpText" />
                              <td className="mpText">Sat</td>
                            </tr>
                            <tr>
                              <td className="mpText">10:00 AM</td>
                              <td className="mpText">-</td>
                              <td className="mpText">1:00 PM</td>
                            </tr>
                            <tr style={{ visibility: "hidden" }}>
                              <td className="mpText">5:00 PM</td>
                              <td className="mpText">-</td>
                              <td className="mpText">8:30 PM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="w-100 mt-2"
                        style={{ borderBottom: "1px solid #cecece" }}
                      >
                        <div
                          className="mpText text-center mx-auto"
                          style={{
                            width: 110,
                            marginBottom: "-8px",
                            background: "#f1f1f1",
                          }}
                        >
                          Book Appointment
                        </div>
                      </div>
                      <div className="w-100 d-flex justify-content-evenly align-items-center mt-3">
                        <Link
                          to="/BookVideoAppoinment"
                          className="text-decoration-none"
                        >
                          <div className="text-center me-2">
                            <img src={Camcorder} alt="camcorder" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              500
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/BookAudioAppointment"
                          className="text-decoration-none"
                        >
                          <div className="text-center">
                            <img src={Phone} alt="phone" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              400
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/BookInPersonAppointment"
                          className="text-decoration-none"
                        >
                          <div className="text-center">
                            <img src={UserGreen} alt="usergreen" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              400
                            </p>
                          </div>
                        </Link>
                      </div>
                      {/*flexbox-ends-here*/}
                    </div>
                    {/*====================================================================================*/}
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 f12sbOrange">
                        <img
                          src={EllipseGreen}
                          alt="ellipsegreen"
                          className="me-2"
                        />
                        Dr.IN
                      </div>
                      <div className="w-100 doaNText16 mt-2">
                        Rainbow Poly Clinic
                      </div>
                      <div className="w-100 mpText mt-2">
                        <img
                          src={Locsmgreen}
                          alt="locsmgreen"
                          className="me-2"
                        />
                        Begumpet, Hyderabad
                      </div>
                      <div className="w-100 overflow-auto mt-2">
                        <table>
                          <tbody>
                            <tr>
                              <td className="mpText">Mon</td>
                              <td className="mpText" />
                              <td className="mpText">Sat</td>
                            </tr>
                            <tr>
                              <td className="mpText">2:00 PM</td>
                              <td className="mpText">-</td>
                              <td className="mpText">4:00 PM</td>
                            </tr>

                            <tr style={{ visibility: "hidden" }}>
                              <td className="mpText">5:00 PM</td>
                              <td className="mpText">-</td>
                              <td className="mpText">8:30 PM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="w-100 mt-2"
                        style={{ borderBottom: "1px solid #cecece" }}
                      >
                        <div
                          className="mpText text-center mx-auto"
                          style={{
                            width: 110,
                            marginBottom: "-8px",
                            background: "#f1f1f1",
                          }}
                        >
                          Book Appointment
                        </div>
                      </div>
                      <div className="w-100 d-flex justify-content-evenly align-items-center mt-3">
                        <Link
                          to="/BookVideoAppoinment"
                          className="text-decoration-none"
                        >
                          <div className="text-center me-2">
                            <img src={Camcorder} alt="camcorder" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              500
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/BookAudioAppointment"
                          className="text-decoration-none"
                        >
                          <div className="text-center">
                            <img src={Phone} alt="phone" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              400
                            </p>
                          </div>
                        </Link>
                        <Link
                          to="/BookInPersonAppointment"
                          className="text-decoration-none"
                        >
                          <div className="text-center">
                            <img src={UserGreen} alt="usergreen" />
                            <p className="mt-2 mb-0 mpText">
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                ₹
                              </span>
                              400
                            </p>
                          </div>
                        </Link>
                      </div>
                      {/*flexbox-ends-here*/}
                    </div>
                    {/*====================================================================================*/}
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-1-ends-here*/}
                <div className="tab-pane fade" id="am" role="tabpanel">
                  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle pb-2">
                        <h3 className="mb-0">
                          <img
                            src={UserGreenSm}
                            alt="usergsm"
                            className="me-2"
                          />
                          About Me
                        </h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mpText mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacusaccumsa et viverra justo commodo. Proin
                        sodales pulvinar sic tempor. Sociis natoque penatibus et
                        magnis dis parturient montesnascetur ridiculus mus. Nam
                        fermentum…
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
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          <img
                            src={OrangeShield}
                            alt="orange"
                            className="me-2"
                          />
                          Award or achievement goes here
                        </div>
                      </div>
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          <img
                            src={OrangeShield}
                            alt="orange"
                            className="me-2"
                          />
                          Award or achievement goes here
                        </div>
                      </div>
                      {/* <div className="w-100 text-center mt-4">
                          <button type="button" className="btn doaOrangeBtn">Add/E­­­­dit</button>
                        </div> */}
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle pb-2">
                        <h3 className="mb-0">
                          <img src={Membership} alt="member" className="me-2" />
                          Memberships
                        </h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          <img src={Membership} alt="member" className="me-2" />
                          Membership name goes here
                        </div>
                      </div>
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          <img src={Membership} alt="member" className="me-2" />
                          Membership name goes here
                        </div>
                      </div>
                      {/* <div className="w-100 text-center mt-4">
                        <button type="button" className="btn doaOrangeBtn">
                          Add/E­­­­dit
                        </button>
                      </div> */}
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle pb-2">
                        <h3 className="mb-0">
                          <img src={CerBadge} alt="badge" className="me-2" />
                          Medical Registration
                        </h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mt-3">
                        <img src={Membership} alt="member" />
                      </div>
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          Doctor Type: Allopathy
                        </div>
                      </div>
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          Registration No. 12345 67890
                        </div>
                      </div>
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          State Medical Council
                          <br />
                          Telangana Medical Council
                        </div>
                      </div>
                      <div
                        className="w-100 py-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="mpText mt-1">
                          Registration Year: 2000
                        </div>
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}

                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <h3 className="mb-0">Registration Certificate</h3>
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
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-2-ends-here*/}
                <div className="tab-pane fade" id="ahf" role="tabpanel">
                  <div className="w-100 f16sbTeal mt-4">My Articles</div>
                  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-2">
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 mpText">
                        Title of the link goes here
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        aliqua. Habitant morbi tristique senectus et netus et
                        malesuada. Elit at imperdiet dui accumsan sit.
                      </div>
                    </div>
                    {/*====================================================================================*/}
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 mpText">
                        Title of the link goes here
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        aliqua. Habitant morbi tristique senectus et netus et
                        malesuada. Elit at imperdiet dui accumsan sit.
                      </div>
                    </div>
                    {/*====================================================================================*/}
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 mpText">
                        Title of the link goes here
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        aliqua. Habitant morbi tristique senectus et netus et
                        malesuada. Elit at imperdiet dui accumsan sit.
                      </div>
                    </div>
                    {/*====================================================================================*/}
                  </div>
                  {/*flexbox-ends-here*/}
                  <div className="w-100 f16sbTeal mt-4">My Health Feeds</div>
                  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-2">
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 f12sbOrange">
                        Title and content goes here
                      </div>
                      <div className="w-100 mpText mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        . Aenean euismod bibendum
                      </div>
                      <div className="w-100 mt-3">
                        <img src={Yashoda} alt="yashoada" />
                      </div>
                    </div>
                    {/*====================================================================================*/}
                    <div
                      className="flex-shrink-0 p-3 m-2"
                      style={{
                        background: "#f1f1f1",
                        border: "1px solid #eaeaea",
                        borderRadius: 5,
                        width: 250,
                      }}
                    >
                      <div className="w-100 f12sbOrange">
                        Title and content goes here
                      </div>
                      <div className="w-100 mpText mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        . Aenean euismod bibendum
                      </div>
                      <div className="w-100 mt-3">
                        <img src={Yashoda} alt="yashoada" />
                      </div>
                    </div>
                    {/*====================================================================================*/}
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-3-ends-here*/}
              </div>
              {/*tabs-ends-here*/}
            </div>
            {/*tabs-container-ends-here*/}
          </div>
          {/*col-ends-here*/}

          <div
            className="modal fade"
            id="view"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="filterModalLabel">
                    Doctor Registration Certificate
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
        {/*row-ends-here*/}
      </div>
    </div>
  );
}
