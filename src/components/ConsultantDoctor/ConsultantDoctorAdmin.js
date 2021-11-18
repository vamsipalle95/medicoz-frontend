import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PtTestQueries1 from "../../images/chat1.png";
import Dashboard from "../../images/doctoModule/dashboard.png";
import ConsultRoom from "../../images/doctoModule/ecr.png";
import Profile from "../../images/doctoModule/profile.png";
import MyAppCalendar from "../../images/doctoModule/mac.png";
import Notification from "../../images/doctoModule/bell.png";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import Consultroom from "../ConsultRoom/consultroom";
import ConsultantDashboard from "../ConsultantDoctor/ConsultantDashboard";
import ConsultationRoom from "../ConsultantDoctor/ConsultationRoom";
import ConsultantRPRoom from "../ConsultantDoctor/ConsultantRPRoom";
import ConsultantMyProfile from "../ConsultantDoctor/ConsultantMyProfile";
import ConsultantAppointmentCalendar from "../ConsultantDoctor/ConsultantAppointmentCalendar";
import ConsultantPtTextQueries from "../ConsultantDoctor/ConsultantPtTextQueries";
import ConsultantNotification from "../ConsultantDoctor/ConsultantNotifications";
import Back from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import HealthConcerns from "../PolyClinicModule/HealthConcerns";

export default function SidenavDoctor() {
  const [show, setShow] = useState(true);
  const history = useHistory();
  return (
    <div>
      <Router>
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-3 col-xs-12 col-sm-12">
              <button
                type="button"
                className="btn doacBtn"
                onClick={() => setShow(!show)}
              >
                <i className="bi bi-list me-2" />
                Menu
              </button>
            </div>

            <div className="col-lg-9 col-xs-12 col-sm-12">
              <div className="sdrText1 m-2 patchBg d-flex flex-wrap justify-content-start align-items-center">
                <img
                  src={Back}
                  alt="backbtn"
                  onClick={() => history.goBack()}
                />{" "}
                CONSULTANT DOCTOR (HOSPITAL/POLY-CLINIC NAME) - ADMIN PANEL
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className="row">
            {show ? (
              <div className="col-lg-3 col-xs-12 col-sm-12 col100">
                <div className="container w-100 d-flex flex-wrap mt-4 px-0">
                  <div className="d-flex flex-column" id="sideNav">
                    <NavLink
                      to="/ConsultantDashboard"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Dashboard} className="me-2" alt="call" />
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/ConsultationRoom"
                      exact
                      className="btn1 p-2 mb-2"
                    >
                      <img src={ConsultRoom} className="me-2" alt="profile" />
                      Enter Consultation Room
                    </NavLink>
                    <NavLink
                      to="/ConsultantRPRoom"
                      exact
                      className="btn1 p-2 mb-2"
                    >
                      <img src={ConsultRoom} className="me-2" alt="logout" />
                      Enter Remote Partner Room
                    </NavLink>
                    <NavLink
                      to="/ConsultantMyProfile"
                      exact
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Profile} className="me-2" alt="wallet" />
                      My Profile
                    </NavLink>

                    <NavLink
                      to="/ConsultantAppointmentCalendar"
                      exact
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyAppCalendar} className="me-2" alt="appoint" />
                      My Appointments
                    </NavLink>
                    <NavLink
                      to="/ConsultantPtTextQueries"
                      exact
                      className="btn1 p-2 mb-2"
                    >
                      <img src={PtTestQueries1} className="me-2" alt="help" />
                      Pt. Text Queries (15)
                    </NavLink>

                    <NavLink
                      to="/ConsultantNotification"
                      exact
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Notification} className="me-2" alt="help" />
                      Notifications (25)
                    </NavLink>

                    {/* <NavLink to="/HospitalProfile"><button type="button" className="btn text-start p-2 mb-2"><img src={MyRemotePartner} className="me-2" alt="logout"/>Hospital Public Profile</button></NavLink>
                  <NavLink to="/DrPatientProfileView"><button type="button" className="btn text-start p-2 mb-2"><img src={MyRemotePartner} className="me-2" alt="logout"/>DrPatientProfile</button></NavLink> */}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="col-lg-9 col-xs-12 col-sm-12 col100">
              <div className="myPhoneCardCnt overflow-auto p-md-3 my-4">
                <Switch>
                  <Route exact path="/ConsultantDashboard">
                    <ConsultantDashboard />
                  </Route>

                  <Route exact path="/ConsultationRoom">
                    <ConsultationRoom />
                  </Route>

                  <Route exact path="/ConsultantRPRoom">
                    <ConsultantRPRoom />
                  </Route>

                  <Route exact path="/ConsultantMyProfile">
                    <ConsultantMyProfile />
                  </Route>

                  <Route exact path="/ConsultantAppointmentCalendar">
                    <ConsultantAppointmentCalendar />
                  </Route>

                  <Route exact path="/HealthConcerns">
                    <HealthConcerns />
                  </Route>

                  <Route exact path="/ConsultantPtTextQueries">
                    <ConsultantPtTextQueries />
                  </Route>

                  <Route exact path="/ConsultantNotification">
                    <ConsultantNotification />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Container>
      </Router>
    </div>
  );
}
