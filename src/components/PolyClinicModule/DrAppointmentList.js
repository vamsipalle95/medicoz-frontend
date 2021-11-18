import React, { Component } from "react";
import EllipseGreen from "../../images/ellipse-green-xs.png";
import MyProfile from "../../images/my-profile.png";
import EllipseGray from "../../images/ellipse-gray-xs.png";
import EllipseRed from "../../images/ellipse-red-xs.png";
import Edit from "../../images/edit.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function DrAppointmentList() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">
            Doctors &amp; Appointments
          </div>
          {/*doaNText-ends-here*/}
          <div>
            <Link to="/AddDoctor">
              <button type="button" className="btn doaOrangeBtn px-3">
                Add Doctor
              </button>
            </Link>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Active</th>
                <th>Dr. In/Out</th>
                <th>Full Name</th>
                <th>Speciality</th>
                <th>Assigned Receptionist</th>
                <th>Appointments</th>
                <th>Assig RP Room to Dr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ color: "#F98F45 !important" }}>Active</td>
                <td>
                  <img src={EllipseGreen} alt="green" />
                </td>
                <td>
                  <a href="#dp" className="me-2" data-bs-toggle="modal">
                    <img src={MyProfile} alt="myprofile" />
                  </a>
                  <Link to="/AddDoctor">
                    <img src={Edit} alt="edit" />
                  </Link>
                  Suraj Saxena
                </td>
                <td>General Physician</td>
                <td>Devika Kant</td>
                <td>
                  <Link
                    to="/ClinicDoctorAppointments"
                    className="text-decoration-none"
                  >
                    Appointments
                  </Link>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>No</option>
                    <option>Yes</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Inactive</td>
                <td>
                  <img src={EllipseGray} alt="gray" />
                </td>
                <td>
                  <a href="#dp" className="me-2" data-bs-toggle="modal">
                    <img src={MyProfile} alt="myprofile" />
                  </a>
                  <Link to="/AddDoctor">
                    <img src={Edit} alt="edit" />
                  </Link>
                  Rammohan Pillai
                </td>
                <td>Paediatrics</td>
                <td>Murthy Reddy</td>
                <td>
                  <Link
                    to="/ClinicDoctorAppointments"
                    className="text-decoration-none"
                  >
                    Appointments
                  </Link>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>No</option>
                    <option>Yes</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td style={{ color: "#F98F45 !important" }}>Active</td>
                <td>
                  <img src={EllipseRed} alt="red" />
                </td>
                <td>
                  <a href="#dp" className="me-2" data-bs-toggle="modal">
                    <img src={MyProfile} alt="myprofile" />
                  </a>
                  <Link to="/AddDoctor">
                    <img src={Edit} alt="edit" />
                  </Link>
                  Venkatesh Rao
                </td>
                <td>Oncologist</td>
                <td>Swapna</td>
                <td>
                  <Link
                    to="/ClinicDoctorAppointments"
                    className="text-decoration-none"
                  >
                    Appointments
                  </Link>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>No</option>
                    <option>Yes</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*myPhoneCardCnt-ends-here*/}

      <div
        className="modal fade show"
        id="dp"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">
                <img src={MyProfile} alt="myprofile" className="me-2" />
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
              <div className="w-100 overflow-auto">
                <table className="w-100">
                  <tbody>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Dr Status</td>
                      <td className="f10mOrange py-2">Active</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">First Name</td>
                      <td className="mpText py-2">Venkatesh</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Last Name</td>
                      <td className="mpText py-2">Rao</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Speciality</td>
                      <td className="mpText py-2">Oncologist</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Gender</td>
                      <td className="mpText py-2">Male</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Age</td>
                      <td className="mpText py-2">48</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Mobile 1</td>
                      <td className="mpText py-2">12345 12345</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Mobile 2</td>
                      <td className="mpText py-2">12345 12345</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">Email</td>
                      <td className="mpText py-2">Venky@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*table-ends-here*/}
              <div className="w-100 mt-4 text-end">
                <button className="btn doacBtn" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-dp-ends-here*/}
      {/*modals-ends-here*/}
    </div>
  );
}
