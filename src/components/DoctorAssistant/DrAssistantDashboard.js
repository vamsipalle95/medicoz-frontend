import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "../../images/dashboard.png";
import Mpm from "../../images/mpm.png";
import Mfm from "../../images/mfm.png";
import MyPrescription from "../../images/my-prescription-management.png";
import Msp from "../../images/msp.png";
import Mrp from "../../images/mrp.png";
import DrAssistantPatientQueue from "../DoctorAssistant/DrAssistantPatientQueue";
import SelectPatient from "../DoctorAssistant/SelectPatient";
import ConfirmAppointment from "../DoctorAssistant/ConfirmAppointment";
import SelectPayment from "../DoctorAssistant/SelectPayment";
import AddHealthConcerns from "../DoctorAssistant/AddHealthConcerns";
import Bill from "../DoctorAssistant/BillAmount";
import MyPatientManagement from "../MyPatientManagement/mypatientmanagement";
import MyFinanceManagement from "../MyFinanceManagement/myfinancemanagement";
import MyPrescManagement from "../MyPrescriptionManagement/myprescmanagement";
import DoctorServiceProvider from "../DoctorServiceProviders/doctorserviceproviders";
import DocMyRemotepartner from "../DocMyRemotePartners/docmyremotepartner";
import SelectThePatient from "../DoctorAssistant/SelectThePatient";
import ConfirmPatientDetails from "../DoctorAssistant/ConfirmPatientDetails";
import HealthConcerns from "../PolyClinicModule/HealthConcerns";

export default function DrAssistantDashboard() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Router>
        <div className="container mt-4">
          <button
            type="button"
            className="btn doacBtn"
            onClick={() => setShow(!show)}
          >
            <i className="bi bi-list me-2" />
            Menu
          </button>
        </div>
        {}
        <Container>
          <div className="row">
            {show ? (
              <div className="col-lg-3 col-xs-12 col-sm-12 col100">
                <div className="container d-flex flex-wrap mt-4 px-0">
                  <div className="d-flex flex-column" id="sideNav">
                    <NavLink
                      to="/"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Dashboard} alt="dashboard" className="me-2" />
                      My Appointments
                    </NavLink>
                    <NavLink
                      to="/MyPatientManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mpm} alt="mpm" className="me-2" />
                      My Patient Management
                    </NavLink>
                    <NavLink
                      to="/MyPrescManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img
                        src={MyPrescription}
                        alt="prescrption"
                        className="me-2"
                      />
                      My Prescription
                    </NavLink>
                    <NavLink
                      to="/MyFinanceManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mfm} alt="mfm" className="me-2" />
                      My Finance Management
                    </NavLink>
                    <NavLink
                      to="/DoctorServiceProvider"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Msp} alt="Msp" className="me-2" />
                      My Service Providers
                    </NavLink>
                    <NavLink
                      to="/DocMyRemotepartner"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mrp} alt="Mrp" className="me-2" />
                      My Remote Partners
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="col-lg-9 col-xs-12 col-sm-12 col100">
              <div className="myPhoneCardCnt overflow-auto p-md-3 my-4">
                <Switch>
                  <Route exact path="/">
                    <DrAssistantPatientQueue />
                  </Route>

                  <Route exact path="/SelectPatient">
                    <SelectPatient />
                  </Route>

                  <Route exact path="/ConfirmAppointment">
                    <ConfirmAppointment />
                  </Route>

                  <Route exact path="/SelectPayment">
                    <SelectPayment />
                  </Route>

                  <Route exact path="/AddHealthConcerns">
                    <AddHealthConcerns />
                  </Route>

                  <Route exact path="/Bill">
                    <Bill />
                  </Route>

                  <Route exact path="/MyPatientManagement">
                    <MyPatientManagement />
                  </Route>

                  <Route exact path="/MyFinanceManagement">
                    <MyFinanceManagement />
                  </Route>

                  <Route exact path="/HealthConcerns">
                    <HealthConcerns />
                  </Route>

                  <Route exact path="/MyPrescManagement">
                    <MyPrescManagement />
                  </Route>

                  <Route exact path="/DoctorServiceProvider">
                    <DoctorServiceProvider />
                  </Route>

                  <Route exact path="/DocMyRemotepartner">
                    <DocMyRemotepartner />
                  </Route>

                  <Route exact path="/SelectThePatient">
                    <SelectThePatient />
                  </Route>

                  <Route exact path="/ConfirmPatientDetails">
                    <ConfirmPatientDetails />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Container>
      </Router>
      );
    </div>
  );
}
