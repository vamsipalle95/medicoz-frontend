import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import PtTestQueries1 from "../../images/chat1.png";
import Dashboard from "../../images/doctoModule/dashboard.png";
import ConsultRoom from "../../images/doctoModule/ecr.png";
import Profile from "../../images/doctoModule/profile.png";
import MyPages from "../../images/doctoModule/mop.png";
import MyAppCalendar from "../../images/doctoModule/mac.png";
import MyPatientManage from "../../images/doctoModule/mpm.png";
import MyAssManage from "../../images/doctoModule/mam.png";
import MyFinManage from "../../images/doctoModule/mfm.png";
import MyPresManage from "../../images/doctoModule/my-prescription-management.png";
import Notification from "../../images/doctoModule/bell.png";
import AssignMyClinic from "../../images/doctoModule/aamc.png";
import ServiceProvider from "../../images/doctoModule/msp.png";
import MyRemotePartner from "../../images/doctoModule/mrp.png";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import Consultroom from "../ConsultRoom/consultroom";
import DrRoomRP from "../ConsultRoom/DrRoomRP";
import PtTestQueries from "../PtTestQueries/PtTestQueries";
import MyPatientManagement from "../MyPatientManagement/mypatientmanagement";
import MyFinanceManagement from "../MyFinanceManagement/myfinancemanagement";
import MyPrescManagement from "../MyPrescriptionManagement/myprescmanagement";
import DoctorNotifications from "../DoctorNotifications/doctornotifications";
import DoctorServiceProvider from "../DoctorServiceProviders/doctorserviceproviders";
import DocMyRemotepartner from "../DocMyRemotePartners/docmyremotepartner";
import { Container, Row, Col } from "react-bootstrap";
import DrAppointmentList from "../HospitalModule/DrAppointmentList";
import HospAppointments from "../HospitalModule/HospitalAppointments";
import HospitalProfile from "../HospitalModule/HospitalProfile";
import AddDoctor from "../HospitalModule/AddDoctor";
import ReceptionistMgmt from "../HospitalModule/ReceptionistMgmt";
import RoomsAvailability from "../HospitalModule/RoomsAvailability";
import DrConsultationRoom from "../ConsultRoom/DrConsultationRoom";
import VideoScreen from "../VideoScreen/VideoScreen";
import PatientList from "../MyPatientManagement/PatientList";
import AddPatient from "../MyPatientManagement/AddPatient";
import PatientFollowUp from "../MyPatientManagement/PatientFollowUp";
import PatientReferredList from "../MyPatientManagement/PatientReferredList";
import PatientReferList from "../MyPatientManagement/PatientReferList";
import PatientRefer from "../MyPatientManagement/PatientRefer";
import PatientReferral from "../MyPatientManagement/PatientReferral";
import Generatebill from "../MyFinanceManagement/Generatebill";
import AddExpenses from "../MyFinanceManagement/AddExpenses";
import AddExpenseHead from "../MyFinanceManagement/AddExpenseHead";
import AddIncome from "../MyFinanceManagement/AddIncome";
import AddIncomeHead from "../MyFinanceManagement/AddIncomeHead";
import PatientRefunds from "../MyFinanceManagement/PatientRefunds";
import PatientViewBill from "../MyFinanceManagement/PatientViewBill";
import PatientViewExpense from "../MyFinanceManagement/PatientViewExpense";
import PatientViewIncome from "../MyPatientManagement/PatientViewIncome";
import IncomeReceipt from "../MyFinanceManagement/IncomeReceipt";
import MyDrugsList from "../MyPrescriptionManagement/MyDrugsList";
import MyInvestigationList from "../MyPrescriptionManagement/MyInvestigationList";
import ProvisionalDiagnosis from "../MyPrescriptionManagement/ProvisionalDiagnosis";
import InviteRemotePartners from "../DocMyRemotePartners/InviteRemotepartners";
import ServiceProvidersall from "../DoctorServiceProviders/ServiceprovidersAll";
import BulkAppointment from "../DoctorServiceProviders/BulkAppointment";
import ServiceProviderSlots from "../DoctorServiceProviders/ServiceProviderSlots";
import MySymptomsList from "../MyPrescriptionManagement/MySymptomsList";
import MyVitalsList from "../MyPrescriptionManagement/MyVitalsList";
import AddEditMyDrugs from "../MyPrescriptionManagement/AddEditMyDrugs";
import MyAdvice from "../MyPrescriptionManagement/myAdvice";
import MyNotificationView from "../Notifications/MyNotificationView";
import SelectTokenBookSlot from "../DoctorServiceProviders/SelectTokenNoAndBookSlot";
import SelectThePatient from "../DoctorServiceProviders/SelectThePatient";
import ConfirmPatientDetails from "../DoctorServiceProviders/ConfirmPatientDetails";
import ConfirmAudioVideoNow from "../DoctorServiceProviders/ConfirmAudioVideoNow";
import HospitalNameDoctorsList from "../DoctorServiceProviders/HopsitalViewDoctors";
import SignleSlotBookingByRp from "../DoctorServiceProviders/SingleSlotBookingByRp";
import DrPatientProfileView from "../DrPatientProfileView/DrPatientProfileView";
import ViewHospitalDoctors from "../ViewHospitalDoctors/ViewHospitalDoctors";
import ViewClinicDoctors from "../ViewClinicDoctors/ViewClinicDoctors";
import ViewSpecialistDoctors from "../ViewSpeicialistDoctors/ViewSpecialistDoctors";
import ClinicNameDoctorSlots from "../ViewClinicDoctors/ClinicNameDoctorSlots";
import ClinicPartners from "../DoctorServiceProviders/ClinicPartners";
import HospitalPartners from "../DoctorServiceProviders/HospitalPartners";
import AddEditSetlocation from "../DoctrMyProfile/AddEditSetLocation";
import AddressSetLocation from "../AddressBook/addressSetLocation";
import DeliveryAddressRural from "../AddressBook/deliveryAddressRural";
import AddEditAboutme from "../MyOwnPages/AddEditAboutme";
import EditAchievments from "../MyOwnPages/EditAchievments";
import AddEditArticle from "../MyOwnPages/AddEditArticle";
import ManageAppointments from "../MyAppCalendar/ManageAppointments";
import ManageHospitalDrSlots from "../HospitalModule/ManageHospitalDrSlots";
import AddEditSocialLinks from "../DoctrMyProfile/AddEditSocialLinks";
import Medicalcolist from "../Doctor/medicalcolists";
import MedicalRepList from "../Doctor/medicalreplists";
import HealthConcerns from "../PolyClinicModule/HealthConcerns";
import SingleSlotBookingByRp from "../DoctorServiceProviders/SingleSlotBookingByRp";

export default function Mainhome() {
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
                HOSPITAL NAME (ADMIN)
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
                      to="/"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Dashboard} className="me-2" alt="call" />
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/Consultroom"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={ConsultRoom} className="me-2" alt="profile" />
                      Enter Consultation Room
                    </NavLink>
                    <NavLink
                      to="/DrRoomRP"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={ConsultRoom} className="me-2" alt="logout" />
                      Enter Dr.Room (RP Login)
                    </NavLink>
                    <NavLink
                      to="/HospitalProfile"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Profile} className="me-2" alt="wallet" />
                      Hospital Profile
                    </NavLink>
                    <NavLink
                      to="/DrAppointmentList"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyPages} className="me-2" alt="appoint" />
                      Doctors & Appointments
                    </NavLink>
                    <NavLink
                      to="/PtTestQueries"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={PtTestQueries1} className="me-2" alt="help" />
                      Pt. Text Queries (15)
                    </NavLink>
                    <NavLink
                      to="/MyPatientManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img
                        src={MyPatientManage}
                        className="me-2"
                        alt="favourites"
                      />
                      My Patients Mgmt
                    </NavLink>
                    <NavLink
                      to="/ReceptionistMgmt"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyAssManage} className="me-2" alt="records" />
                      Receiptionist Mgmt
                    </NavLink>

                    <NavLink
                      to="/Medicalcolist"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyPresManage} className="me-2" alt="bell" />
                      My Medical Co's Mgmt
                    </NavLink>

                    <NavLink
                      to="/MedicalRepList"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyPresManage} className="me-2" alt="bell" />
                      My Medical Rep's Mgmt
                    </NavLink>

                    <NavLink
                      to="/MyFinanceManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyFinManage} className="me-2" alt="address" />
                      Finance Mgmt
                    </NavLink>
                    <NavLink
                      to="/MyPrescManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyPresManage} className="me-2" alt="bell" />
                      Prescription Mgmt
                    </NavLink>
                    <NavLink
                      to="/RoomsAvailability"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyAppCalendar} className="me-2" alt="appoint" />
                      Rooms Availability{" "}
                    </NavLink>
                    <NavLink
                      to="/DoctorNotifications"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Notification} className="me-2" alt="help" />
                      Notifications (25)
                    </NavLink>
                    <NavLink
                      to="/DoctorServiceProvider"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img
                        src={ServiceProvider}
                        className="me-2"
                        alt="logout"
                      />
                      My Service Providers
                    </NavLink>
                    <NavLink
                      to="/DocMyRemotepartner"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img
                        src={MyRemotePartner}
                        className="me-2"
                        alt="logout"
                      />
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
                    <DoctorDashboard />
                  </Route>
                  <Route exact path="/SelectThePatient">
                    <SelectThePatient />
                  </Route>

                  <Route exact path="/AddEditArticle">
                    <AddEditArticle />
                  </Route>

                  <Route exact path="/EditAchievments">
                    <EditAchievments />
                  </Route>

                  <Route exact path="/AddEditAboutme">
                    <AddEditAboutme />
                  </Route>

                  <Route exact path="/HealthConcerns">
                    <HealthConcerns />
                  </Route>

                  <Route exact path="/AddEditSocialLinks">
                    <AddEditSocialLinks />
                  </Route>

                  <Route exact path="/ManageAppointments">
                    <ManageAppointments />
                  </Route>

                  <Route exact path="/DeliveryAddressRural">
                    <DeliveryAddressRural />
                  </Route>

                  <Route exact path="/AssignMyClinic">
                    <AssignMyClinic />
                  </Route>

                  <Route exact path="/SingleSlotBookingByRp">
                    <SingleSlotBookingByRp />
                  </Route>

                  <Route exact path="/AddEditSetlocation">
                    <AddEditSetlocation />
                  </Route>

                  <Route exact path="/AddressSetLocation">
                    <AddressSetLocation />
                  </Route>

                  <Route exact path="/HospitalPartners">
                    <HospitalPartners />
                  </Route>

                  <Route exact path="/ConfirmPatientDetails">
                    <ConfirmPatientDetails />
                  </Route>

                  <Route exact path="/ConfirmAudioVideoNow">
                    <ConfirmAudioVideoNow />
                  </Route>

                  <Route exact path="/ManageHospitalDrSlots">
                    <ManageHospitalDrSlots />
                  </Route>

                  <Route exact path="/Medicalcolist">
                    <Medicalcolist />
                  </Route>

                  <Route exact path="/MedicalRepList">
                    <MedicalRepList />
                  </Route>

                  <Route exact path="/HospitalNameDoctorsList">
                    <HospitalNameDoctorsList />
                  </Route>

                  <Route exact path="/SignleSlotBookingByRp">
                    <SignleSlotBookingByRp />
                  </Route>

                  <Route exact path="/DrPatientProfileView">
                    <DrPatientProfileView />
                  </Route>

                  <Route exact path="/"></Route>

                  <Route exact path="/ViewHospitalDoctors">
                    <ViewHospitalDoctors />
                  </Route>

                  <Route exact path="/ViewClinicDoctors">
                    <ViewClinicDoctors />
                  </Route>

                  <Route exact path="/ViewSpecialistDoctors">
                    <ViewSpecialistDoctors />
                  </Route>

                  <Route exact path="/ClinicNameDoctorSlots">
                    <ClinicNameDoctorSlots />
                  </Route>

                  <Route exact path="/ClinicPartners">
                    <ClinicPartners />
                  </Route>

                  <Route exact path="/PatientViewBill">
                    <PatientViewBill />
                  </Route>

                  <Route exact path="/SelectTokenBookSlot">
                    <SelectTokenBookSlot />
                  </Route>

                  <Route exact path="/PatientRefunds">
                    <PatientRefunds />
                  </Route>

                  <Route exact path="/MyNotificationView">
                    <MyNotificationView />
                  </Route>

                  <Route exact path="/PatientViewIncome">
                    <PatientViewIncome />
                  </Route>

                  <Route exact path="/MyAdvice">
                    <MyAdvice />
                  </Route>
                  <Route exact path="/ProvisionalDiagnosis">
                    <ProvisionalDiagnosis />
                  </Route>

                  <Route exact path="/ServiceProvidersall">
                    <ServiceProvidersall />
                  </Route>

                  <Route exact path="/BulkAppointment">
                    <BulkAppointment />
                  </Route>

                  <Route exact path="/ServiceProviderSlotst">
                    <ServiceProviderSlots />
                  </Route>

                  <Route exact path="/MySymptomsList">
                    <MySymptomsList />
                  </Route>

                  <Route exact path="/MyVitalsList">
                    <MyVitalsList />
                  </Route>

                  <Route exact path="/AddEditMyDrugs">
                    <AddEditMyDrugs />
                  </Route>

                  <Route exact path="/InviteRemotePartners">
                    <InviteRemotePartners />
                  </Route>

                  <Route exact path="/PatientViewExpense">
                    <PatientViewExpense />
                  </Route>

                  <Route exact path="/MyDrugsList">
                    <MyDrugsList />
                  </Route>

                  <Route exact path="/MyInvestigationList">
                    <MyInvestigationList />
                  </Route>

                  <Route exact path="/AddExpenses">
                    <AddExpenses />
                  </Route>

                  <Route exact path="/AddExpenseHead">
                    <AddExpenseHead />
                  </Route>

                  <Route exact path="/RoomsAvailability">
                    <RoomsAvailability />
                  </Route>

                  <Route exact path="/IncomeReceipt">
                    <IncomeReceipt />
                  </Route>

                  <Route exact path="/HospAppointments">
                    <HospAppointments />
                  </Route>

                  <Route exact path="/AddIncomeHead">
                    <AddIncomeHead />
                  </Route>

                  <Route exact path="/DrConsultationRoom">
                    <DrConsultationRoom />
                  </Route>

                  <Route exact path="/AddIncome">
                    <AddIncome />
                  </Route>

                  <Route exact path="/AddPatient">
                    <AddPatient />
                  </Route>

                  <Route exact path="/PatientFollowUp">
                    <PatientFollowUp />
                  </Route>

                  <Route exact path="/PatientList">
                    <PatientList />
                  </Route>

                  <Route exact path="/Consultroom">
                    <Consultroom />
                  </Route>

                  <Route exact path="/ReceptionistMgmt">
                    <ReceptionistMgmt />
                  </Route>

                  <Route exact path="/Generatebill">
                    <Generatebill />
                  </Route>

                  <Route exact path="/AddDoctor">
                    <AddDoctor />
                  </Route>

                  <Route exact path="/PatientReferList">
                    <PatientReferList />
                  </Route>

                  <Route exact path="/PatientReferral">
                    <PatientReferral />
                  </Route>

                  <Route exact path="/PatientReferredList">
                    <PatientReferredList />
                  </Route>

                  <Route exact path="/DrRoomRP">
                    <DrRoomRP />
                  </Route>

                  <Route exact path="/DrAppointmentList">
                    <DrAppointmentList />
                  </Route>

                  <Route exact path="/HospitalProfile">
                    <HospitalProfile />
                  </Route>

                  <Route exact path="/PtTestQueries">
                    <PtTestQueries />
                  </Route>

                  <Route exact path="/MyPatientManagement">
                    <MyPatientManagement />
                  </Route>

                  <Route exact path="/VideoScreen">
                    <VideoScreen />
                  </Route>

                  <Route exact path="/MyFinanceManagement">
                    <MyFinanceManagement />
                  </Route>

                  <Route exact path="/MyPrescManagement">
                    <MyPrescManagement />
                  </Route>

                  <Route exact path="/DoctorNotifications">
                    <DoctorNotifications />
                  </Route>

                  <Route exact path="/DoctorServiceProvider">
                    <DoctorServiceProvider />
                  </Route>

                  <Route exact path="/DocMyRemotepartner">
                    <DocMyRemotepartner />
                  </Route>

                  <Route exact path="/PatientRefer">
                    <PatientRefer />
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
