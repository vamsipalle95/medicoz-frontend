import React, { Component } from "react";
import Urvasi from "../../images/urvasi.png";
import User from "../../images/ramakanth.png";
import GreenT from "../../images/trash-green.png";

export default function ReceptionistMgmt() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">
            Receptionist Management
          </div>
          {/*doaNText-ends-here*/}
          <div>
            <button
              type="button"
              className="btn doaOrangeBtn px-3"
              data-bs-toggle="modal"
              data-bs-target="#invite"
            >
              + Invite
            </button>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
          <div className="draCard1 p-3 m-2">
            <div className="w-100 text-center">
              <img src={Urvasi} alt="urvasi" />
            </div>
            <div className="w-100 mt-3">
              <a href="#" className="text-decoration-none">
                <h3 className="mpHead mb-1">Urvasi Neelkanta</h3>
              </a>
              <p className="mpText mb-0">12345 12345</p>
              <p className="mpText mb-2">urvasi.n@gmail.com</p>
              <p className="mpText mb-0">
                <a
                  href="#time"
                  className="text-decoration-none me-2"
                  style={{ color: "#30A2BE" }}
                  data-bs-toggle="modal"
                >
                  Timings
                </a>
                9:00 am to 5:00 pm
              </p>
              <p className="mpText mb-0">
                <a
                  href="#assign"
                  className="text-decoration-none me-2"
                  style={{ color: "#30A2BE" }}
                  data-bs-toggle="modal"
                >
                  Assigned to
                </a>
                2 Drs.
              </p>
            </div>
            {/*text-ends-here*/}
            <div
              className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3"
              style={{ borderTop: "1px solid #B5B5B5 !important" }}
            >
              <div>
                <img src={GreenT} alt="green" />
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                />
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 p-3 m-2">
            <div className="w-100 text-center">
              <img src={User} alt="user" />
            </div>
            <div className="w-100 mt-3">
              <a href="#" className="text-decoration-none">
                <h3 className="mpHead mb-1">Ramakanth Potineni</h3>
              </a>
              <p className="mpText mb-0">12345 12345</p>
              <p className="mpText mb-2">ramakanth.p@gmail.com</p>
              <p className="mpText mb-0">
                <a
                  href="#time"
                  className="text-decoration-none me-2"
                  style={{ color: "#30A2BE" }}
                  data-bs-toggle="modal"
                >
                  Timings
                </a>
                3:00 PM to 10:00 pm
              </p>
              <p className="mpText mb-0">
                <a
                  href="#assign"
                  className="text-decoration-none me-2"
                  style={{ color: "#30A2BE" }}
                  data-bs-toggle="modal"
                >
                  Assigned to
                </a>
                2 Drs.
              </p>
            </div>
            {/*text-ends-here*/}
            <div
              className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3"
              style={{ borderTop: "1px solid #B5B5B5 !important" }}
            >
              <div>
                <img src={GreenT} alt="green" />
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 p-3 m-2">
            <div className="w-100">
              <a href="#" className="text-decoration-none">
                <h3 className="mpHead mb-1">Krishna Cherukuri</h3>
              </a>
              <p className="mpText mb-0">ramakanth.p@gmail.com</p>
            </div>
            {/*text-ends-here*/}
            <div className="w-100 mt-3">
              <button type="button" className="btn doaOrangeBtn">
                Resend Invitation
              </button>
            </div>
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}

      {/*modal-time-ends-here*/}
      <div
        className="modal fade show"
        id="assign"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">Assigned to</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <a href="#" className="f12sbOrange text-decoration-none">
                  Dr. Assigned to Urvasi Neelkanta
                </a>
              </div>
              <table className="w-100">
                <tbody>
                  <tr style={{ borderBottom: "1px solid #cecece !important" }}>
                    <td className="py-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="option1"
                        />
                        <label className="form-check-label" htmlFor="option1">
                          Suraj Saxena - (Oncologist)
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #cecece !important" }}>
                    <td className="py-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="option2"
                        />
                        <label className="form-check-label" htmlFor="option2">
                          Rammohan Pillai - (General Physician)
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #cecece !important" }}>
                    <td className="py-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="option3"
                        />
                        <label className="form-check-label" htmlFor="option3">
                          Venkatesh Rao - (General Physician)
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-4">
                <a href="#" className="text-decoration-none f11sbBlue">
                  Select All
                </a>
                <button type="button" className="btn doacBtn">
                  Save
                </button>
              </div>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>

      <div
        className="modal fade show"
        id="invite"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">Invite Receptionist</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Mobile"
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email"
              />
              <div className="mpText mt-3">
                Invitee will receive an email invitation
              </div>
              <div className="w-100 mt-4 text-end">
                <button
                  type="button"
                  className="btn doacBtn d-block w-100"
                  data-bs-dismiss="modal"
                >
                  Send
                </button>
              </div>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-invite-ends-here*/}

      <div
        className="modal fade show"
        id="time"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">Timings</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <a href="#" className="f12sbOrange text-decoration-none">
                  Urvasi Neelkanta
                </a>
              </div>
              <div className="abFormGroup w-100 overflow-auto">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="sun"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{ borderRadius: "0px !important" }}
                  htmlFor="sun"
                >
                  S
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="mon"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{
                    borderRadius: "0px !important",
                    marginLeft: "-6px !important",
                  }}
                  htmlFor="mon"
                >
                  M
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="tue"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{
                    borderRadius: "0px !important",
                    marginLeft: "-6px !important",
                  }}
                  htmlFor="tue"
                >
                  T
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="wed"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{
                    borderRadius: "0px !important",
                    marginLeft: "-6px !important",
                  }}
                  htmlFor="wed"
                >
                  W
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="thu"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{
                    borderRadius: "0px !important",
                    marginLeft: "-6px !important",
                  }}
                  htmlFor="thu"
                >
                  T
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="fri"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{
                    borderRadius: "0px !important",
                    marginLeft: "-6px !important",
                  }}
                  htmlFor="fri"
                >
                  F
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="sat"
                  autoComplete="off"
                />
                <label
                  className="btn bg-white py-1"
                  style={{
                    borderRadius: "0px !important",
                    marginLeft: "-6px !important",
                  }}
                  htmlFor="sat"
                >
                  S
                </label>
              </div>
              <table className="w-100 mt-2">
                <tbody>
                  <tr>
                    <td className="pe-2 py-2">
                      <div className="mpText w-100 mb-1">From</div>
                      <input
                        className="form-control w-100"
                        type="text"
                        placeholder="10:00 AM"
                      />
                    </td>
                    <td className="py-2">
                      <div className="mpText w-100 mb-1">To</div>
                      <input
                        className="form-control w-100"
                        type="text"
                        placeholder="12:00 PM"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-100 text-end mt-3">
                <button type="button" className="btn doaOrangeBtn">
                  Add
                </button>
              </div>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
    </div>
  );
}
