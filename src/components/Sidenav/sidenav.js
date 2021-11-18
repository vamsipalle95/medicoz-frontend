import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Call from "../../images/call-green.png";
import Profile from "../../images/profile.png";
import Wallet from "../../images/wallet.png";
import Orders from "../../images/orders.png";
import Appointment from "../../images/appointment-nav.png";
import Favourites from "../../images/favourites-nav.png";
import Records from "../../images/health-records.png";
import AddressBk from "../../images/address-book.png";
import Bell from "../../images/bell.png";
import Help from "../../images/help.png";
import BookOnlineDr from "../BookOnlineDr/bookOnlineLogin";
import NewuserAccount from "../BookOnlineDr/newUserAccount";
import AddPatient1 from "../BookOnlineDr/addPatient";
import Phone from "../../images/phone.png";
import Myphone from "../Myphone/myphone";
import MyPhoneEdit from "../Myphone/myphoneedit";
import Manageprofile from "../ManageProfile/manageprofile";
import Mywallet from "../Mywallet/mywallet";
import MyOrders from "../Myorders/myorders";
import MyAppointment from "../MyAppointments/appointments";
import MyFavourites from "../../components/MyFavourites/myfavourites";
import MyHealthRecords from "../../components/MyHealthRecords/myhealthrecords";
import AddEditSummary from "../MyHealthRecords/addeditsummary";
import AddEditPrescriptions from "../MyHealthRecords/addEditPrescriptions";
import AddEditTestReports from "../MyHealthRecords/addEditTestReports";
import CurrentMedicationRecords from "../MyHealthRecords/currentMedicationrecords";
import AddressBook from "../AddressBook/addressbook";
import ConfirmAudioVideo from "../BookOnlineDr/confirmAudioVideo";
import PaymentMode from "../BookOnlineDr/paymentMode";
import SetLocation from "../AddressBook/setLocation";
import DeliveryAddressRural from "../AddressBook/deliveryAddressRural";
import DeliveryAddressUrban from "../AddressBook/deliveryAddressUrban";
import AddressSetLocation from "../AddressBook/addressSetLocation";
import YouAreQueue from "../BookOnlineDr/youAreQueue";
import Notifications from "../Notifications/notifications";
import Needhelp from "../NeedHelp/needhelp";
import LogoutP from "../Logout/logout";
import MyHealthRecordsPrescription from "../MyHealthRecords/myhealthrecordprescription";
import Logout from "../../images/logout-nav.png";
import { Container, Row, Col } from "react-bootstrap";
import HealthConcerns from "../BookOnlineDr/HealthConcerns";
import Videocall from "../BookOnlineDr/Videocall";
import AddMember from "../BookOnlineDr/AddMember";
import ConfirmAppointment from "../BookOnlineDr/ConfirmAppointment";
import AppoinmentBooking from "../BookOnlineDr/AppointmentBooking";
import BookingSpeciality from "../BookOnlineDr/BookingSpeciality";
import ManageProfileEdit from "../ManageProfile/manageProfileEdit";
import TestRecords from "../MyHealthRecords/TestRecords";
import HospitalSummary from "../MyHealthRecords/HospitalSummary";
import ViewOrders from "../Myorders/ViewOrders";
import DrOnlineAppointment from "../MyFavourites/drOnlineAppointment";
import AddMoney from "../Mywallet/Addmoney";
import Newuser from "../MyFavourites/NewUserAccount";
import BookAppoinments from "../MyAppointments/BookAppointments";
import MyNotificationView from "../Notifications/MyNotificationView";
import OnlineDrNow from "../NeedHelp/OnlineDrNow";
import MyReceipts from "../MyReceipts/MyReceipts";
import PrimaryMember from "../ManageProfile/PrimaryMember";
import ShareHealthConcern from "../NeedHelp/ShareHealthConcern";
import WhoisPatient from "../BookOnlineDr/WhoisPatient";
import ConfirmVideocall from "../BookOnlineDr/ConfirmVideocall";
import VideoScreen from "../VideoScreen/VideoScreen";
import PaymentModes from "../NeedHelp/PaymentModes";
import NewUserNow from "../NeedHelp/NewUserNow";
import NewOTP from "../NeedHelp/NewOtp";
import BookFollowUpVideo from "../MyAppointments/BookFollowUpVideo";
import ConfirmVideoFollowup from "../MyAppointments/ConfirmVideoFollowUp";
import Payments from "../MyAppointments/Payments";
import BookFollowUpAudio from "../MyAppointments/BookFollowUpAuido";
import ConfirmAudioFollowUp from "../MyAppointments/ConfirmAudioFollowUp";
import PaymentAudio from "../MyAppointments/PaymentsAudio";
import BookFollowUpInPatient from "../MyAppointments/BookFollowUpInPatient";
import ConfirmInPatientFollowUp from "../MyAppointments/ConfirmInPatientFollowUp";
import PaymentsInPatient from "../MyAppointments/PaymentsInPatient";
import MyInsuranceDetails from "../MyHealthRecords/MyInsuranceDetails";
import AddInsuranceDetails from "../MyHealthRecords/AddInsuranceDetails";
import MyVaccinatation from "../MyHealthRecords/MyVaccinationDetails";
import AddVaccineDetails from "../MyHealthRecords/AddVaccineDetails";

export default function Sidenav() {
  const [show, setShow] = useState(true);
  return (
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
            <div className="col-lg-2 col-xs-12 col-sm-12 col100">
              <div className="container d-flex flex-wrap mt-4 px-0">
                <div className="d-flex flex-column" id="sideNav">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    {" "}
                    <img src={Phone} className="me-2" alt="profile" />
                    My Phone
                  </NavLink>
                  <NavLink
                    to="/manageprofile"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Profile} className="me-2" alt="profile" />
                    Manage Profiles
                  </NavLink>
                  <NavLink
                    to="/Mywallet"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Wallet} className="me-2" alt="wallet" />
                    My Wallet
                  </NavLink>
                  <NavLink
                    to="/MyOrders"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Orders} className="me-2" alt="appoint" />
                    My Orders
                  </NavLink>
                  <NavLink
                    to="/MyReceipts"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Orders} className="me-2" alt="appoint" />
                    Bills & Receipts
                  </NavLink>
                  <NavLink
                    to="/MyAppointment"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Appointment} className="me-2" alt="appoint" />
                    My Appointments
                  </NavLink>
                  <NavLink
                    to="/MyFavourites"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Favourites} className="me-2" alt="favourites" />
                    My Favourites
                  </NavLink>
                  <NavLink
                    to="/MyHealthRecords"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Records} className="me-2" alt="records" />
                    Health Records
                  </NavLink>
                  <NavLink
                    to="/AddressBook"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={AddressBk} className="me-2" alt="address" />
                    Address Book
                  </NavLink>
                  <NavLink
                    to="/Notifications"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Bell} className="me-2" alt="bell" />
                    Notifications
                  </NavLink>
                  <NavLink
                    to="/Needhelp"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Help} className="me-2" alt="help" />
                    Need Help
                  </NavLink>
                  <NavLink
                    to="/Logout"
                    exact
                    activeClassName="btn1-active"
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Logout} className="me-2" alt="logout" />
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          ) : null}
          <div className="col-lg-10 col-xs-12 col-sm-12 col100">
            <div className="myPhoneCardCnt overflow-auto p-md-3 my-4">
              <Switch>
                <Route exact path="/">
                  <Myphone />
                </Route>

                <Route exact path="/ConfirmVideoFollowup">
                  <ConfirmVideoFollowup />
                </Route>

                <Route exact path="/BookFollowUpInPatient">
                  <BookFollowUpInPatient />
                </Route>

                <Route exact path="/ConfirmInPatientFollowUp">
                  <ConfirmInPatientFollowUp />
                </Route>

                <Route exact path="/PaymentsInPatient">
                  <PaymentsInPatient />
                </Route>

                <Route exact path="/AddInsuranceDetails">
                  <AddInsuranceDetails />
                </Route>

                <Route exact path="/BookFollowUpAudio">
                  <BookFollowUpAudio />
                </Route>

                <Route exact path="/ConfirmAudioFollowUp">
                  <ConfirmAudioFollowUp />
                </Route>

                <Route exact path="/BookFollowUpVideo">
                  <BookFollowUpVideo />
                </Route>

                <Route exact path="/PaymentAudio">
                  <PaymentAudio />
                </Route>

                <Route exact path="/MyVaccinatation">
                  <MyVaccinatation />
                </Route>

                <Route exact path="/VideoScreen">
                  <VideoScreen />
                </Route>

                <Route exact path="/AddVaccineDetails">
                  <AddVaccineDetails />
                </Route>

                <Route exact path="/Payments">
                  <Payments />
                </Route>

                <Route exact path="/NewOTP">
                  <NewOTP />
                </Route>

                <Route exact path="/NewUserNow">
                  <NewUserNow />
                </Route>

                <Route exact path="/ConfirmVideocall">
                  <ConfirmVideocall />
                </Route>

                <Route exact path="/PrimaryMember">
                  <PrimaryMember />
                </Route>

                <Route exact path="/ShareHealthConcern">
                  <ShareHealthConcern />
                </Route>

                <Route exact path="/Manageprofile">
                  <Manageprofile />
                </Route>

                <Route exact path="/Mywallet">
                  <Mywallet />
                </Route>

                <Route exact path="/MyOrders">
                  <MyOrders />
                </Route>

                <Route exact path="/PaymentModes">
                  <PaymentModes />
                </Route>

                <Route exact path="/MyAppointment">
                  <MyAppointment />
                </Route>

                <Route exact path="/MyFavourites">
                  <MyFavourites />
                </Route>

                <Route exact path="/MyHealthRecords">
                  <MyHealthRecords />
                </Route>

                <Route exact path="/myhealthrecordprescription">
                  <MyHealthRecordsPrescription />
                </Route>

                <Route exact path="/AddressBook">
                  <AddressBook />
                </Route>

                <Route exact path="/Notifications">
                  <Notifications />
                </Route>

                <Route exact path="/Needhelp">
                  <Needhelp />
                </Route>

                <Route exact path="/Logout">
                  <LogoutP />
                </Route>

                <Route exact path="/MyPhoneEdit">
                  <MyPhoneEdit />
                </Route>

                <Route exact path="/WhoisPatient">
                  <WhoisPatient />
                </Route>

                <Route exact path="/AddEditSummary">
                  <AddEditSummary />
                </Route>

                <Route exact path="/AddEditPrescriptions">
                  <AddEditPrescriptions />
                </Route>

                <Route exact path="/CurrentMedicationRecords">
                  <CurrentMedicationRecords />
                </Route>

                <Route exact path="/AddEditTestReports">
                  <AddEditTestReports />
                </Route>

                <Route exact path="/AddressSetLocation">
                  <AddressSetLocation />
                </Route>

                <Route exact path="/SetLocation">
                  <SetLocation />
                </Route>

                <Route exact path="/MyInsuranceDetails">
                  <MyInsuranceDetails />
                </Route>

                <Route exact path="/DeliveryAddressRural">
                  <DeliveryAddressRural />
                </Route>

                <Route exact path="/DeliveryAddressUrban">
                  <DeliveryAddressUrban />
                </Route>
                <Route exact path="/BookOnlineDr">
                  <BookOnlineDr />
                </Route>
                <Route exact path="/NewuserAccount">
                  <NewuserAccount />
                </Route>
                <Route exact path="/AddPatient1">
                  <AddPatient1 />
                </Route>
                <Route exact path="/ConfirmAudioVideo">
                  <ConfirmAudioVideo />
                </Route>
                <Route exact path="/PaymentMode">
                  <PaymentMode />
                </Route>
                <Route exact path="/youAreQueue">
                  <YouAreQueue />
                </Route>
                <Route exact path="/HealthConcerns">
                  <HealthConcerns />
                </Route>
                <Route exact path="/Videocall">
                  <Videocall />
                </Route>
                <Route exact path="/AddMember">
                  <AddMember />
                </Route>
                <Route exact path="/ConfirmAppointment">
                  <ConfirmAppointment />
                </Route>
                <Route exact path="/AppoinmentBooking">
                  <AppoinmentBooking />
                </Route>
                <Route exact path="/BookingSpeciality">
                  <BookingSpeciality />
                </Route>
                <Route exact path="/ManageProfileEdit">
                  <ManageProfileEdit />
                </Route>
                <Route exact path="/TestRecords">
                  <TestRecords />
                </Route>
                <Route exact path="/HospitalSummary">
                  <HospitalSummary />
                </Route>
                <Route exact path="/ViewOrders">
                  <ViewOrders />
                </Route>
                <Route exact path="/AddMoney">
                  <AddMoney />
                </Route>

                <Route exact path="/drOnlineAppointment">
                  <DrOnlineAppointment />
                </Route>

                <Route exact path="/Newuser">
                  <Newuser />
                </Route>

                <Route exact path="/BookAppoinments">
                  <BookAppoinments />
                </Route>

                <Route exact path="/MyNotificationView">
                  <MyNotificationView />
                </Route>

                <Route exact path="/OnlineDrNow">
                  <OnlineDrNow />
                </Route>

                <Route exact path="/Logout">
                  <Logout />
                </Route>

                <Route exact path="/MyReceipts">
                  <MyReceipts />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Container>
    </Router>
  );
}
