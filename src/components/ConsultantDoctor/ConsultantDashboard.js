import React, { Component } from "react";
import Dashboard from "../../images/doctoModule/dashboard.png";
import SubscribeRemote from "../../images/subscribe-remote-partner-icon.png";
import SmallImage from "../../images/small-image.png";
import CamcorderRect from "../../images/camcorder-rectangle.png";
import CamcorderSm from "../../images/camcorder-sm.png";
import PhoneSm from "../../images/phone-sm.png";
import UserGreen from "../../images/user-green-sm.png";
import RpIcon from "../../images/rp-icon.png";

class ConsultantDashboard extends Component {
  render() {
    return (
      <div>
        <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
          <h1 className="w-100 mpTitle mb-4">Krupa Clinic (My Clinic)</h1>
          <div className="w-100 p-3 mpGrayBox">
            <div className="mpTitle me-3 mb-3 mb-sm-0">
              You are currently using FREE Package
            </div>
            {/*doaNText-ends-here*/}
          </div>
          {/*=======================================================================================================================*/}
          <div className="w-100 grayBox d-flex flex-wrap align-items-center mt-3 p-3">
            <div className="my-2 me-3">
              <img src={SubscribeRemote} alt="subscribe" />
            </div>
            <div className="my-2 me-3" style={{ maxWidth: 320 }}>
              <p className="f10m mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
            <div className="my-2 ms-auto">
              <button type="button" className="btn btnBlue">
                Upgrade to Gold
              </button>
            </div>
          </div>
          {/*=====================================================grayBox-ends-here=================================================*/}
          <div className="w-100 grayBox d-flex flex-wrap align-items-center mt-3 p-3">
            <div className="my-2 me-3">
              <img src={SubscribeRemote} alt="subscribe" />
            </div>
            <div className="my-2 me-3" style={{ maxWidth: 320 }}>
              <p className="f10m mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
            <div className="my-2 ms-auto">
              <button type="button" className="btn btnBlue">
                Upgrade to Platinium
              </button>
            </div>
          </div>
          {/*====================================================grayBox-ends-here==================================================*/}
          <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
            <div className="draCard1 p-3 m-2">
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="mb-0">Share My Social Card</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-3">
                <img src={SmallImage} alt="samllImage" className="me-2" />
                <a href="#" className="text-decoration-none">
                  <h3 className="mpHead mb-1">
                    Gurav Kumar Pisupati Senior GP
                  </h3>
                </a>
              </div>
              <div className="w-100 mt-3">
                <a
                  href="#"
                  className="mpText text-decoration-none"
                  style={{ color: "#30A2BE !important" }}
                >
                  https://lormeipsum
                </a>
              </div>
              <button type="button" className="w-100 mt-3 btn doaOrangeBtn">
                Share on Whatsapp
              </button>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="text-nowrap mb-0">Quick Earn</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 doaNText mt-3">
                Dr. Free time Patient Video Consultation
              </div>
              <div className="d-flex flex-wrap align-items-center mt-2">
                <div className="me-2">
                  <img src={CamcorderRect} alt="camcorderRect" />
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label" />
                </div>
              </div>
              {/*flexbox-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="text-nowrap mb-0">Today's Appointments</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 overflow-auto mt-2">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="doaNText p-2" colSpan={4}>
                        Sai Krupa Clinic
                        <span
                          className="badge ms-2"
                          style={{ background: "#F98F45 !important" }}
                        >
                          50
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={CamcorderSm}
                            alt="camcordersm"
                            className="me-2"
                          />
                          15
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={PhoneSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={UserGreen} alt="sm" className="me-2" />
                          10
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={RpIcon}
                            alt="rp"
                            width="16px"
                            className="me-2"
                          />
                          10
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="mpText p-2" colSpan={4}>
                        Medical Reps
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={CamcorderSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2" colSpan={3}>
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={UserGreen} alt="sm" className="me-2" />
                          10
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="doaNText p-2" colSpan={4}>
                        Balaji Hospital
                        <span
                          className="badge ms-2"
                          style={{ background: "#F98F45 !important" }}
                        >
                          45
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={CamcorderSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={PhoneSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={UserGreen} alt="green" className="me-2" />
                          10
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={RpIcon}
                            alt="rp"
                            width="16px"
                            className="me-2"
                          />
                          10
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="mpText p-2" colSpan={4}>
                        Medical Reps
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={CamcorderSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2" colSpan={3}>
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={UserGreen} alt="sm" className="me-2" />
                          10
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="doaNText p-2" colSpan={4}>
                        Apple poly clinic
                        <span
                          className="badge ms-2"
                          style={{ background: "#F98F45 !important" }}
                        >
                          20
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={CamcorderSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={PhoneSm} alt="sm" className="me-2" />
                          15
                        </h3>
                      </td>
                      <td className="p-2" colSpan={2}>
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                        >
                          <img src={UserGreen} alt="green" className="me-2" />
                          10
                        </h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*table-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="mb-0 me-3">Earnings</h3>
                <select className="form-select">
                  <option selected>Today</option>
                  <option>One</option>
                  <option>Two</option>
                </select>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 overflow-auto">
                <table className="w-100">
                  <tbody>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <img src={CamcorderSm} alt="sm" className="me-2" />
                      </td>
                      <td className="p-2 mpText">
                        <span
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          ₹
                        </span>
                        8000
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <img src={PhoneSm} alt="phonesm" />
                      </td>
                      <td className="p-2 mpText">
                        <span
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          ₹
                        </span>
                        2000
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <img src={UserGreen} alt="sm" />
                      </td>
                      <td className="p-2 mpText">
                        <span
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          ₹
                        </span>
                        5000
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2 mpText">Total</td>
                      <td className="p-2 mpText">
                        <span
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          ₹
                        </span>
                        15000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*table-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="mb-0">Follow-up Text Queries</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 overflow-auto">
                <table className="w-100">
                  <tbody>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          Patient Queries
                          <span
                            className="badge ms-2"
                            style={{ background: "#F98F45 !important" }}
                          >
                            15
                          </span>
                        </h3>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2">
                        <h3
                          className="mpHead mb-0"
                          style={{ cursor: "pointer" }}
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          RP Queries
                          <span
                            className="badge ms-2"
                            style={{ background: "#F98F45 !important" }}
                          >
                            15
                          </span>
                        </h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*table-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
          </div>
          {/*flexbox-ends-here*/}
        </div>
        {/*myPhoneCardCnt-ends-here*/}
        {/*container-ends-here*/}
      </div>
    );
  }
}

export default ConsultantDashboard;
