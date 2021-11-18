import React, { useState } from "react";
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
import PharmaProfile from "../PharmaAdmin/PharmaProfile";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import PharmaAddCustomer from "../PharmaAdmin/PharmaAddCustomer";
import PharmaAddOffer from "../PharmaAdmin/PharmaAddOffer";
import PharmaCustomerList from "../PharmaAdmin/PharmaCustomerList";
import PharmaCustomerReviewsList from "../PharmaAdmin/PharmaCustomerReviewsList";
import PharmaDeliveryMgmtList from "../PharmaAdmin/PharmaDeliveryMgmtList";
import PharmaDrAddEdit from "../PharmaAdmin/PharmaDrAddEdit";
import PharmaDrMgmtList from "../PharmaAdmin/PharmaDrMgmtList";
import PharmaAddDrustList from "../PharmaAdmin/PharmaAddDrugsList";
import PharmaDrugList from "../PharmaAdmin/PharmaDrugList";
import PharmaOffersList from "../PharmaAdmin/PharmaOffersList";
import PharmaOnlineOrders from "../PharmaAdmin/PharmaOnlineOrders";
import DoctorNotifications from "../DoctorNotifications/doctornotifications";
import MyNotificationView from "../Notifications/MyNotificationView";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function PharmaAdmin() {
  const [show, setShow] = useState(true);
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
                PHARAMCY NAME (ADMIN)
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
                      to="/PharmaProfile"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Ecr} className="me-2" alt="profile" />
                      Pharmacy Profile
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
                      to="/PharmaDrugList"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mop} alt="drugslist" className="me-2" />
                      Drugs List
                    </NavLink>
                    <NavLink
                      to="/PharmaCustomerList"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mac} className="me-2" alt="appoint" />
                      Customers
                    </NavLink>
                    <NavLink
                      to="/PharmaOnlineOrders"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mpm} className="me-2" alt="help" />
                      Online Orders
                    </NavLink>
                    <NavLink
                      to="/PharmaDeliveryMgmtList"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mam} className="me-2" alt="favourites" />
                      Delivery Management
                    </NavLink>
                    <NavLink
                      to="/PharmaCustomerReviewsList"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Mfm} className="me-2" alt="records" />
                      Customer Reviews
                    </NavLink>
                    <NavLink
                      to="/DoctorNotifications"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Bell} className="me-2" alt="address" />
                      Notifications
                    </NavLink>
                    <NavLink
                      to="/MyPrescManagement"
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

                  <Route exact path="/PharmaProfile">
                    <PharmaProfile />
                  </Route>

                  <Route exact path="/PharmaDrMgmtList">
                    <PharmaDrMgmtList />
                  </Route>

                  <Route exact path="/PharmaOffersList">
                    <PharmaOffersList />
                  </Route>

                  <Route exact path="/PharmaDrAddEdit">
                    <PharmaDrAddEdit />
                  </Route>

                  <Route exact path="/PharmaDrugList">
                    <PharmaDrugList />
                  </Route>

                  <Route exact path="/PharmaAddDrustList">
                    <PharmaAddDrustList />
                  </Route>

                  <Route exact path="/PharmaCustomerList">
                    <PharmaCustomerList />
                  </Route>

                  <Route exact path="/PharmaAddCustomer">
                    <PharmaAddCustomer />
                  </Route>

                  <Route exact path="/PharmaOnlineOrders">
                    <PharmaOnlineOrders />
                  </Route>

                  <Route exact path="/PharmaDeliveryMgmtList">
                    <PharmaDeliveryMgmtList />
                  </Route>

                  <Route exact path="/PharmaCustomerReviewsList">
                    <PharmaCustomerReviewsList />
                  </Route>

                  <Route exact path="/DoctorNotifications">
                    <DoctorNotifications />
                  </Route>

                  <Route exact path="/PharmaAddOffer">
                    <PharmaAddOffer />
                  </Route>

                  <Route exact path="/MyNotificationView">
                    <MyNotificationView />
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
