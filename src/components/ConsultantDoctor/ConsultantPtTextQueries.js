import React, { Component } from "react";
import Bell from "../../images/bell.png";
import ChevronLeft from "../../images/chevron-left-sm.png";
import ChevronRight from "../../images/chevron-right-sm.png";
import Person from "../../images/person.png";
import Dummy from "../../images/dummy.png";
import PdfIcon from "../../images/pdf-icon.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ConsultantPTTextQueries() {
  return (
    <div>
      <div
        className="w-100 tabsOrange bg-white p-3"
        style={{ border: "1px solid #eaeaea", borderRadius: 12 }}
      >
        <nav>
          <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#tab1"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Patient Follow-up Queries
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tab2"
              type="button"
              role="tab"
              aria-selected="false"
            >
              RP Follow-up Queries
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tab3"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Dr.Reply's
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="tab1" role="tabpanel">
            {/*tab1 content here8*/}

            <div className="p-3 m-2 w-100">
              <div className="table_data d-flex flex-wrap justify-content-between w-100">
                <table id="table_id" className="table table-responsive">
                  <thead>
                    <th>S.no</th>
                    <th>Date/Time</th>
                    <th>Patient Name</th>
                    <th>Last Consulation</th>
                    <th>View Query</th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PtDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PtDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PtDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PtDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PtDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PtDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*doacTitle-ends-here*/}

              {/*flexbox-ends-here*/}
            </div>

            {/*tab1 content here*/}
          </div>

          <div className="tab-pane fade show" id="tab2" role="tabpane2">
            <div className="p-3 m-2 w-100">
              <div className="table_data d-flex flex-wrap justify-content-between w-100">
                <table id="table_id" className="table table-responsive">
                  <thead>
                    <th>S.no</th>
                    <th>Date/Time</th>
                    <th>RP Name</th>
                    <th>Patient Name</th>
                    <th>Last Consulation</th>
                    <th>View Query</th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#RpDetails"
                        >
                          Narsimha
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#RpDetails"
                        >
                          Yashoda Clinic
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#RpDetails"
                        >
                          Life Hospital
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#RpDetails"
                        >
                          Narsimha
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#RpDetails"
                        >
                          Narsimha
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#RpDetails"
                        >
                          Keerthi Hospital
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*doacTitle-ends-here*/}

              {/*flexbox-ends-here*/}
            </div>
          </div>

          <div className="tab-pane fade show" id="tab3" role="tabpane3">
            <div className="p-3 m-2 w-100">
              <div className="table_data d-flex flex-wrap justify-content-between w-100">
                <table id="table_id" className="table table-responsive">
                  <thead>
                    <th>S.no</th>
                    <th>Date/Time</th>
                    <th>Dr.Name</th>
                    <th>Patient Name</th>
                    <th>Last Consulation</th>
                    <th>View Query</th>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Narsimha
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PatientDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Yashoda Clinic
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PatientDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Life Hospital
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PatientDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Narsimha
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PatientDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Narsimha
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PatientDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>09/08/2021 10:00am</td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup2"
                        >
                          Keerthi Hospital
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#PatientDetails"
                        >
                          Vinod Kumar
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup3"
                        >
                          Details & Test Reports
                        </a>
                      </td>
                      <td>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#Popup4"
                        >
                          Text Query
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*doacTitle-ends-here*/}

              {/*flexbox-ends-here*/}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center justify-content-sm-start overflow-auto p-md-3 mb-4">
        {/*modal-patientProfile-starts-here*/}
        <div
          className="modal fade"
          id="popup2"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <img src={Person} alt="persom" className="me-2" />
                  Doctor Details
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
                  <div className="f10m w-50">MED1234C</div>
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

        {/*modal-patientProfile-starts-here*/}
        <div
          className="modal fade"
          id="RpDetails"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <img src={Person} alt="persom" className="me-2" />
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

                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">IMR No</div>
                  <div className="f10m w-50">MED1234C</div>
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

        <div
          className="modal fade"
          id="PtDetails"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <img src={Person} alt="persom" className="me-2" />
                  Patient Details
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
                  <div className="f10m w-50">MED1234C</div>
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

        <div
          className="modal fade"
          id="PatientDetails"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <img src={Person} alt="persom" className="me-2" />
                  Patient Details
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
                  <div className="f10m w-50">MED1234C</div>
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

        {/*modal-dtr-starts-here*/}
        <div
          className="modal fade"
          id="popup3"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  Details &amp; Test Reports (Dev Notes..popup after issue
                  Prescription)
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
                  <div className="f10mTeal w-50">Consult Date/Time</div>
                  <div className="f10m w-50">Apr 4, 2021</div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">Consult Type:</div>
                  <div className="f10m w-50">
                    In-Person/Video/Audio/RP-Video
                  </div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">New/Follow-Up:</div>
                  <div className="f10m w-50">New</div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">With Dr. name:</div>
                  <div className="f10m w-50">Dr. Srikanth</div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">Dr. Speciality</div>
                  <div className="f10m w-50">ENT</div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">Place of Appointment:</div>
                  <div className="f10m w-50">Krupa Clinic/ Balaji Hospital</div>
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
                  <div className="f10mTeal w-50">Given Medication:</div>
                  <div className="f10m w-50">
                    Tab:Cefixime-200 Syp: Citralka
                  </div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">Investigations Suggested:</div>
                  <div className="f10m w-50">
                    CBP, Urine Test,Something, LFT
                  </div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">View Given Advices:</div>
                  <div className="f10m w-50">
                    Drink 3 Liters of Water,2 Coconuts per day
                  </div>
                </div>
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="f10mTeal w-50">Doctor Notes:</div>
                  <div className="f10m w-50">
                    lorem ipusm sit der nit hoc ncio leirm
                  </div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="w-50">
                    <a href className="f10mOrange text-decoration-none">
                      View Prescription:
                    </a>
                  </div>
                  <div className="w-50">
                    <img src={PdfIcon} alt="pdf" />
                  </div>
                </div>
                {/*flexbox-ends-here*/}
                <div
                  className="w-100 d-flex align-items-center py-2"
                  style={{ borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="w-50">
                    <a href className="f10mOrange text-decoration-none">
                      View Test Reports:
                    </a>
                  </div>
                  <div className="w-50 d-flex flex-wrap align-items-center">
                    <img src={PdfIcon} alt="pdf" className="me-2" />
                    <img src={PdfIcon} alt="pdf" />
                  </div>
                </div>
                <div className="mx-auto mt-4 d-flex flex-wrap justify-content-center w-100">
                  <Link to="/DrConsultationRoom">
                    <button type="submit" className="btn fmaBtn">
                      Issue More Prescription
                    </button>
                  </Link>
                </div>
                "{/*flexbox-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*draCard1-ends-here*/}

        {/*modal-height-starts-here*/}
        <div
          className="modal fade"
          id="popup4"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  View Text Query
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="doaText">
                  <h4 className="mb-0">Patient Name</h4>
                </div>

                <h4 className="query-cls">Query</h4>
                <hr />
                <p className="fot">2:00, July 28, 2021</p>
                <div className="doaText">
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet.
                  </h4>

                  <div className="doaText ashbox">
                    <p className="fot">10:30, July 29, 2021</p>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet
                    </h4>
                  </div>
                </div>
                <h4 className="query-cls mt-2">Reply</h4>

                <textarea className="txtara">Enter reply here.....</textarea>
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn">
                  Send
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-height-ends-here*/}
      </div>
    </div>
  );
}
