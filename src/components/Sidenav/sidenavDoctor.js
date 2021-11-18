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
import DoctorMyProfile from "../DoctrMyProfile/doctormyprofile";
import MyOwnPages from "../MyOwnPages/myownpages";
import Myappcalendar from "../MyAppCalendar/myappcalendar";
import MyPatientManagement from "../MyPatientManagement/mypatientmanagement";
import MyAssistantManagement from "../MyAssistantManagement/myassistantmanagement";
import MyFinanceManagement from "../MyFinanceManagement/myfinancemanagement";
import MyPrescManagement from "../MyPrescriptionManagement/myprescmanagement";
import DoctorNotifications from "../DoctorNotifications/doctornotifications";
import AddAssignMyclinic from "../AddAssingMyClinic/addassignmyclinic";
import DoctorServiceProvider from "../DoctorServiceProviders/doctorserviceproviders";
import DocMyRemotepartner from "../DocMyRemotePartners/docmyremotepartner";
import AddSelfClinic from "../AddAssingMyClinic/addselfclinic";
import AddGpsLocation from "../AddAssingMyClinic/AddGpsLocation";
import AddAddressLocation from "../AddAssingMyClinic/AddAddressLocation";
import AddClinicAddress from "../AddAssingMyClinic/AddClinicAddress";
import EditAddress from "../AddAssingMyClinic/EditAddress";
import AddEditAboutme from "../MyOwnPages/AddEditAboutme";
import EditAchievments from "../MyOwnPages/EditAchievments";
import AddEditArticle from "../MyOwnPages/AddEditArticle";
import AddBankaccount from "../DoctrMyProfile/AddBankaccount";
import AddEditBasic from "../DoctrMyProfile/AddEditBasicDetails";
import AddDigitalSign from "../DoctrMyProfile/AddDigitalSign";
import AddEducation from "../DoctrMyProfile/AddEducation";
import FeeDetailsNonClinic from "../DoctrMyProfile/FeeDetailsNonClinic";
import EditHealthFeed from "../MyOwnPages/EditHealthFeed";
import AddKyc from "../DoctrMyProfile/AddKyc";
import AddLanguage from "../DoctrMyProfile/AddLanguage";
import AddEditMedicalReg from "../DoctrMyProfile/AddEditMedicalReg";
import AddEditMembership from "../MyOwnPages/AddEditMembership";
import AddEditMyDrugs from "../MyPrescriptionManagement/AddEditMyDrugs";
import AddEditSetlocation from "../DoctrMyProfile/AddEditSetLocation";
import AddEditSocialLinks from "../DoctrMyProfile/AddEditSocialLinks";
import AddEditSpecExp from "../DoctrMyProfile/AddEditSpecExp";
import AddPatient from "../MyPatientManagement/AddPatient";
import Generatebill from "../MyFinanceManagement/Generatebill";
import MyAdvice from "../MyPrescriptionManagement/myAdvice";
import ManageAppointments from "../MyAppCalendar/ManageAppointments";
import DrRoomRP from "../ConsultRoom/DrRoomRP";
import MyDrugsList from "../MyPrescriptionManagement/MyDrugsList";
import MyInvestigationList from "../MyPrescriptionManagement/MyInvestigationList";
import ProvisionalDiagnosis from "../MyPrescriptionManagement/ProvisionalDiagnosis";
import InviteRemotePartners from "../DocMyRemotePartners/InviteRemotepartners";
import ServiceProvidersall from "../DoctorServiceProviders/ServiceprovidersAll";
import BulkAppointment from "../DoctorServiceProviders/BulkAppointment";
import ServiceProviderSlots from "../DoctorServiceProviders/ServiceProviderSlots";
import MySymptomsList from "../MyPrescriptionManagement/MySymptomsList";
import MyVitalsList from "../MyPrescriptionManagement/MyVitalsList";
import AddExpenses from "../MyFinanceManagement/AddExpenses";
import AddExpenseHead from "../MyFinanceManagement/AddExpenseHead";
import AddIncome from "../MyFinanceManagement/AddIncome";
import AddIncomeHead from "../MyFinanceManagement/AddIncomeHead";
import PatientFollowUp from "../MyPatientManagement/PatientFollowUp";
import PatientList from "../MyPatientManagement/PatientList";
import PatientRefer from "../MyPatientManagement/PatientRefer";
import PatientReferList from "../MyPatientManagement/PatientReferList";
import PatientReferral from "../MyPatientManagement/PatientReferral";
import PatientRefunds from "../MyFinanceManagement/PatientRefunds";
import PatientViewBill from "../MyFinanceManagement/PatientViewBill";
import PatientViewExpense from "../MyFinanceManagement/PatientViewExpense";
import PatientViewIncome from "../MyPatientManagement/PatientViewIncome";
import ChangePassword from "../DoctrMyProfile/ChangePassword";
import PatientReferredList from "../MyPatientManagement/PatientReferredList";
import IncomeReceipt from "../MyFinanceManagement/IncomeReceipt";
import DeliveryAddressRural from "../AddressBook/deliveryAddressRural";
import DeliveryAddressUrban from "../AddressBook/deliveryAddressUrban";
import AddSecondaryAddress from "../AddAssingMyClinic/AddSecodaryAddress";
import HospitalPartners from "../DoctorServiceProviders/HospitalPartners";
import ClinicPartners from "../DoctorServiceProviders/ClinicPartners";
import DrPartners from "../DoctorServiceProviders/DrPartners";
import BookAppoinmentNow from "../DoctorServiceProviders/BookAppoinmentNow";
import DrConsultationRoom from "../ConsultRoom/DrConsultationRoom";
import AddressSetLocation from "../AddressBook/addressSetLocation";
import PtTestQueries from "../PtTestQueries/PtTestQueries";
import ManageAppointments1 from "../MyAppCalendar/ManageAppointments1";
import SelectTokenBookSlot from "../DoctorServiceProviders/SelectTokenNoAndBookSlot";
import SelectThePatient from "../DoctorServiceProviders/SelectThePatient";
import ConfirmPatientDetails from "../DoctorServiceProviders/ConfirmPatientDetails";
import ConfirmAudioVideoNow from "../DoctorServiceProviders/ConfirmAudioVideoNow";
import HospitalNameDoctorsList from "../DoctorServiceProviders/HopsitalViewDoctors";
import SignleSlotBookingByRp from "../DoctorServiceProviders/SingleSlotBookingByRp";
import HospitalProfile from "../HospitalPublicProfile/HospitalPubliProfile";
import DrPatientProfileView from "../DrPatientProfileView/DrPatientProfileView";
import VideoScreen from "../VideoScreen/VideoScreen";
import ViewHospitalDoctors from "../ViewHospitalDoctors/ViewHospitalDoctors";
import ViewClinicDoctors from "../ViewClinicDoctors/ViewClinicDoctors";
import ViewSpecialistDoctors from "../ViewSpeicialistDoctors/ViewSpecialistDoctors";
import ClinicNameDoctorSlots from "../ViewClinicDoctors/ClinicNameDoctorSlots";
import Medicalcolist from "../Doctor/medicalcolists";
import MedicalRepList from "../Doctor/medicalreplists";
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
              <div className="sdrText1 m-2 patchBg d-flex flex-row justify-content-between align-items-center">
                <div>DOCTOR NAME - ADMIN PANEL</div>

                <p
                  onClick={() => history.push("/RuMPAdminRemotePartner")}
                  className="cls_dec"
                >
                  Go to RuMP Admin Remote Partner
                </p>
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
                      to="/DoctorDashboard"
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
                      to="/DoctorMyProfile"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Profile} className="me-2" alt="wallet" />
                      My Profile
                    </NavLink>
                    <NavLink
                      to="/MyOwnPages"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyPages} className="me-2" alt="appoint" />
                      My Own Pages
                    </NavLink>
                    <NavLink
                      to="/Myappcalendar"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyAppCalendar} className="me-2" alt="appoint" />
                      My Appoinments
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
                      to="/MyAssistantManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyAssManage} className="me-2" alt="records" />
                      My Assistant Mgmt
                    </NavLink>
                    <NavLink
                      to="/MyFinanceManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyFinManage} className="me-2" alt="address" />
                      My Finance Mgmt
                    </NavLink>
                    <NavLink
                      to="/MyPrescManagement"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={MyPresManage} className="me-2" alt="bell" />
                      My Prescription Mgmt
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
                      to="/DoctorNotifications"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={Notification} className="me-2" alt="help" />
                      Notifications (25)
                    </NavLink>
                    <NavLink
                      to="/AddAssignMyclinic"
                      exact
                      activeClassName="btn1-active"
                      className="btn1 p-2 mb-2"
                    >
                      <img src={AssignMyClinic} className="me-2" alt="logout" />
                      Add & Assign My Clinic
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
                    {/* <NavLink to="/HospitalProfile"><button type="button" className="btn text-start p-2 mb-2"><img src={MyRemotePartner} className="me-2" alt="logout"/>Hospital Public Profile</button></NavLink>
                  <NavLink to="/DrPatientProfileView"><button type="button" className="btn text-start p-2 mb-2"><img src={MyRemotePartner} className="me-2" alt="logout"/>DrPatientProfile</button></NavLink> */}
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

                  <Route exact path="/Consultroom">
                    <Consultroom />
                  </Route>

                  <Route exact path="/DrPatientProfileView">
                    <DrPatientProfileView />
                  </Route>

                  <Route exact path="/DoctorMyProfile">
                    <DoctorMyProfile />
                  </Route>

                  <Route exact path="/MyOwnPages">
                    <MyOwnPages />
                  </Route>

                  <Route exact path="/Myappcalendar">
                    <Myappcalendar />
                  </Route>

                  <Route exact path="/MyPatientManagement">
                    <MyPatientManagement />
                  </Route>

                  <Route exact path="/MyAssistantManagement">
                    <MyAssistantManagement />
                  </Route>

                  <Route exact path="/Medicalcolist">
                    <Medicalcolist />
                  </Route>

                  <Route exact path="/MedicalRepList">
                    <MedicalRepList />
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

                  <Route exact path="/AddAssignMyclinic">
                    <AddAssignMyclinic />
                  </Route>

                  <Route exact path="/DoctorServiceProvider">
                    <DoctorServiceProvider />
                  </Route>

                  <Route exact path="/DocMyRemotepartner">
                    <DocMyRemotepartner />
                  </Route>

                  <Route exact path="/HealthConcerns">
                    <HealthConcerns />
                  </Route>

                  <Route exact path="/AddSelfClinic">
                    <AddSelfClinic />
                  </Route>

                  <Route exact path="/AddGpsLocation">
                    <AddGpsLocation />
                  </Route>

                  <Route exact path="/AddAddressLocation">
                    <AddAddressLocation />
                  </Route>

                  <Route exact path="/AddClinicAddress">
                    <AddClinicAddress />
                  </Route>

                  <Route exact path="/EditAddress">
                    <EditAddress />
                  </Route>

                  <Route exact path="/AddEditAboutme">
                    <AddEditAboutme />
                  </Route>

                  <Route exact path="/EditAchievments">
                    <EditAchievments />
                  </Route>

                  <Route exact path="/AddEditArticle">
                    <AddEditArticle />
                  </Route>

                  <Route exact path="/AddBankaccount">
                    <AddBankaccount />
                  </Route>

                  <Route exact path="/AddEditBasic">
                    <AddEditBasic />
                  </Route>

                  <Route exact path="/AddDigitalSign">
                    <AddDigitalSign />
                  </Route>

                  <Route exact path="/AddEducation">
                    <AddEducation />
                  </Route>

                  <Route exact path="/FeeDetailsNonClinic">
                    <FeeDetailsNonClinic />
                  </Route>

                  <Route exact path="/EditHealthFeed">
                    <EditHealthFeed />
                  </Route>
                  <Route exact path="/AddKyc">
                    <AddKyc />
                  </Route>
                  <Route exact path="/AddLanguage">
                    <AddLanguage />
                  </Route>

                  <Route exact path="/AddEditMedicalReg">
                    <AddEditMedicalReg />
                  </Route>

                  <Route exact path="/AddEditMembership">
                    <AddEditMembership />
                  </Route>

                  <Route exact path="/AddEditMyDrugs">
                    <AddEditMyDrugs />
                  </Route>

                  <Route exact path="/AddEditSetlocation">
                    <AddEditSetlocation />
                  </Route>

                  <Route exact path="/AddEditSocialLinks">
                    <AddEditSocialLinks />
                  </Route>
                  <Route exact path="/AddEditSpecExp">
                    <AddEditSpecExp />
                  </Route>

                  <Route exact path="/AddPatient">
                    <AddPatient />
                  </Route>

                  <Route exact path="/Generatebill">
                    <Generatebill />
                  </Route>

                  <Route exact path="/MyAdvice">
                    <MyAdvice />
                  </Route>

                  <Route exact path="/ManageAppointments">
                    <ManageAppointments />
                  </Route>

                  <Route exact path="/MyDrugsList">
                    <MyDrugsList />
                  </Route>

                  <Route exact path="/MyInvestigationList">
                    <MyInvestigationList />
                  </Route>

                  <Route exact path="/ProvisionalDiagnosis">
                    <ProvisionalDiagnosis />
                  </Route>
                  <Route exact path="/InviteRemotePartners">
                    <InviteRemotePartners />
                  </Route>

                  <Route exact path="/ServiceProvidersall">
                    <ServiceProvidersall />
                  </Route>

                  <Route exact path="/BulkAppointment">
                    <BulkAppointment />
                  </Route>

                  <Route exact path="/ServiceProviderSlots">
                    <ServiceProviderSlots />
                  </Route>

                  <Route exact path="/MySymptomsList">
                    <MySymptomsList />
                  </Route>

                  <Route exact path="/MyVitalsList">
                    <MyVitalsList />
                  </Route>

                  <Route exact path="/AddExpenses">
                    <AddExpenses />
                  </Route>

                  <Route exact path="/AddExpenseHead">
                    <AddExpenseHead />
                  </Route>

                  <Route exact path="/AddIncome">
                    <AddIncome />
                  </Route>

                  <Route exact path="/AddIncomeHead">
                    <AddIncomeHead />
                  </Route>

                  <Route exact path="/PatientFollowUp">
                    <PatientFollowUp />
                  </Route>

                  <Route exact path="/PatientList">
                    <PatientList />
                  </Route>

                  <Route exact path="/PatientRefer">
                    <PatientRefer />
                  </Route>

                  <Route exact path="/PatientReferList">
                    <PatientReferList />
                  </Route>

                  <Route exact path="/PatientReferral">
                    <PatientReferral />
                  </Route>

                  <Route exact path="/PatientRefunds">
                    <PatientRefunds />
                  </Route>

                  <Route exact path="/PatientViewBill">
                    <PatientViewBill />
                  </Route>

                  <Route exact path="/PatientViewExpense">
                    <PatientViewExpense />
                  </Route>

                  <Route exact path="/PatientViewIncome">
                    <PatientViewIncome />
                  </Route>

                  <Route exact path="/ChangePassword">
                    <ChangePassword />
                  </Route>

                  <Route exact path="/PatientReferredList">
                    <PatientReferredList />
                  </Route>

                  <Route exact path="/IncomeReceipt">
                    <IncomeReceipt />
                  </Route>

                  <Route exact path="/DeliveryAddressRural">
                    <DeliveryAddressRural />
                  </Route>
                  <Route exact path="/DeliveryAddressRural">
                    <DeliveryAddressUrban />
                  </Route>

                  <Route exact path="/AddSecondaryAddress">
                    <AddSecondaryAddress />
                  </Route>

                  <Route exact path="/HospitalPartners">
                    <HospitalPartners />
                  </Route>

                  <Route exact path="/ClinicPartners">
                    <ClinicPartners />
                  </Route>

                  <Route exact path="/DrPartners">
                    <DrPartners />
                  </Route>

                  <Route exact path="/BookAppoinmentNow">
                    <BookAppoinmentNow />
                  </Route>

                  <Route exact path="/ManageAppointments1">
                    <ManageAppointments1 />
                  </Route>

                  <Route exact path="/DrConsultationRoom">
                    <DrConsultationRoom />
                  </Route>

                  <Route exact path="/AddressSetLocation">
                    <AddressSetLocation />
                  </Route>

                  <Route exact path="/PtTestQueries">
                    <PtTestQueries />
                  </Route>

                  <Route exact path="/DrRoomRP">
                    <DrRoomRP />
                  </Route>

                  <Route exact path="/SelectTokenBookSlot">
                    <SelectTokenBookSlot />
                  </Route>

                  <Route exact path="/SelectThePatient">
                    <SelectThePatient />
                  </Route>

                  <Route exact path="/ConfirmPatientDetails">
                    <ConfirmPatientDetails />
                  </Route>

                  <Route exact path="/ConfirmAudioVideoNow">
                    <ConfirmAudioVideoNow />
                  </Route>

                  <Route exact path="/HospitalNameDoctorsList">
                    <HospitalNameDoctorsList />
                  </Route>

                  <Route exact path="/SignleSlotBookingByRp">
                    <SignleSlotBookingByRp />
                  </Route>

                  <Router exact path="/HospitalProfile">
                    <HospitalProfile />
                  </Router>

                  <Route exact path="/VideoScreen">
                    <VideoScreen />
                  </Route>

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
                </Switch>
              </div>
            </div>
          </div>
        </Container>
      </Router>
    </div>
  );
}
