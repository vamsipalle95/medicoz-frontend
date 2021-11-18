import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Dashboard from "../../images/dashboard.png";
import Ecr from "../../images/ecr.png";
import MyProfile from "../../images/my-profile.png";
import Mop from "../../images/mop.png";
import Mac from "../../images/mac.png";
import Mpm from "../../images/mpm.png";
import Mam from "../../images/mam.png";
import Mfm from "../../images/mfm.png";
import Bell from "../../images/bell.png";
import Aamc from "../../images/aamc.png";
import LabPlask from "../../images/lab-plask.png";
import Customers from "../../images/customers.png";
import Upload from "../../images/upload.png";
import Samplecollection from "../../images/sample-collection.png";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import LabProfile from "../LabAdmin/LabProfile";
import PharmaDrMgmtList from "../PharmaAdmin/PharmaDrMgmtList";
import AddDoctor from "../PolyClinicModule/AddDoctor";
import PharmaDrAddEdit from "../PharmaAdmin/PharmaDrAddEdit";
import LabTestList from "../LabAdmin/LabTestList";
import AddTestList from "../LabAdmin/LabAddTestList";
import LabCustomers from "../LabAdmin/LabCustomers";
import LabAddCustomer from "../LabAdmin/LabAddCustomer";
import PharmaOnlineOrders from "../PharmaAdmin/PharmaOnlineOrders";
import LabUploadReports from "../LabAdmin/LabUploadReports";
import SampleCollection from "../LabAdmin/SampleCollection";
import PharmaCustomerReviews from "../PharmaAdmin/PharmaCustomerReviewsList";
import DoctorNotifications from "../DoctorNotifications/doctornotifications";
import MyNotificationView from "../Notifications/MyNotificationView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function LabAdmin() {
  const [show, setShow] = useState(true);
  return (
    <div>
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
                  LAB ADMIN NAME (ADMIN)
                </div>
              </div>
            </div>
          </div>
          {}
          <Container>
            <div className="row">
              {show ? (
                <div className="col-lg-3 col-xs-12 col-sm-12 col100">
                  <div className="container d-flex flex-wrap mt-4 px-0">
                    <div className="d-flex flex-column" id="sideNav">
                      <NavLink
                        to="/DoctorDashboard"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Dashboard} className="me-2" alt="call" />
                        Dashboard
                      </NavLink>
                      <NavLink
                        to="/LabProfile"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={LabPlask} className="me-2" alt="profile" />
                        Lab Profile
                      </NavLink>
                      <NavLink
                        to="/PharmaDrMgmtList"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={MyProfile} alt="myprofiel" className="me-2" />
                        Doctors Management
                      </NavLink>
                      <NavLink
                        to="/LabTestList"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Mop} alt="drugslist" className="me-2" />
                        Test List
                      </NavLink>
                      <NavLink
                        to="/LabCustomers"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Customers} className="me-2" alt="appoint" />
                        Customers
                      </NavLink>
                      <NavLink
                        to="/PharmaOnlineOrders"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Mop} className="me-2" alt="help" />
                        Online Test Orders(5)
                      </NavLink>
                      <NavLink
                        to="/LabUploadReports"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Upload} className="me-2" alt="favourites" />
                        Upload Reports
                      </NavLink>
                      <NavLink
                        to="/SampleCollection"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img
                          src={Samplecollection}
                          className="me-2"
                          alt="records"
                        />
                        Sample Collection
                      </NavLink>
                      <NavLink
                        to="/PharmaCustomerReviews"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Customers} className="me-2" alt="address" />
                        Customer Reviews
                      </NavLink>
                      <NavLink
                        to="/DoctorNotifications"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Bell} className="me-2" alt="bell" />
                        Notifications
                      </NavLink>

                      <NavLink
                        to="/"
                        exact
                        activeClassName="btn1-active"
                        className="btn1 p-2 mb-2"
                      >
                        <img src={Aamc} className="me-2" alt="bell" />
                        Reports
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="col-lg-9 col-xs-12 col-sm-12 col100">
                <div className="myPhoneCardCnt overflow-auto p-md-3 my-4">
                  <Switch>
                    <Route exact path="/DoctorDashboard">
                      <DoctorDashboard />
                    </Route>
                    <Route exact path="/LabProfile">
                      <LabProfile />
                    </Route>

                    <Route exact path="/PharmaDrMgmtList">
                      <PharmaDrMgmtList />
                    </Route>

                    <Route exact path="/AddDoctor">
                      <AddDoctor />
                    </Route>

                    <Route exact path="/PharmaDrAddEdit">
                      <PharmaDrAddEdit />
                    </Route>

                    <Route exact path="/LabTestList">
                      <LabTestList />
                    </Route>

                    <Route exact path="/AddTestList">
                      <AddTestList />
                    </Route>

                    <Route exact path="/LabAddCustomer">
                      <LabAddCustomer />
                    </Route>

                    <Route exact path="/PharmaCustomerReviews">
                      <PharmaCustomerReviews />
                    </Route>

                    <Route exact path="/LabCustomers">
                      <LabCustomers />
                    </Route>
                    <Route exact path="/PharmaOnlineOrders">
                      <PharmaOnlineOrders />
                    </Route>

                    <Route exact path="/LabUploadReports">
                      <LabUploadReports />
                    </Route>

                    <Route exact path="/SampleCollection">
                      <SampleCollection />
                    </Route>

                    <Route exact path="/MyNotificationView">
                      <MyNotificationView />
                    </Route>

                    <Route exact path="/DoctorNotifications">
                      <DoctorNotifications />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </Container>
        </Router>
      </div>
    </div>
  );
}

export default LabAdmin;
