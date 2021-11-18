import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
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
import Phone from "../../images/phone.png";
import Logout from "../../images/logout-nav.png";
import Doctorslist from "../SuperAdmin/doctorslist";
import Patientlist from "../SuperAdmin/patientlist";
import Hospitallist from "../SuperAdmin/hospitalslist";
import Polycliniclist from "../SuperAdmin/polycliniclist";
import Rump from "../SuperAdmin/RuMP";
import Remotepartnerlist from "../SuperAdmin/remotepartnerslist";
import Pharmacylist from "../SuperAdmin/pharmacylist";
import Lablists from "../SuperAdmin/lablists";
import PharamacyDeliverStaffList from "../SuperAdmin/pharmacydeliverystafflist";
import LabHomeSamplecollectionlist from "../SuperAdmin/labhomesamplecollection";
import DrAssistantLists from "../SuperAdmin/drassistantlist";
import Receptionistlists from "../SuperAdmin/receptionistlist";
import Medicalcolist from "../SuperAdmin/medicalcolists";
import MedicalRepList from "../SuperAdmin/medicalreplists";
import SpecialityDept from "../SuperAdmin/specialitydeptList";
import SpecializationLists from "../SuperAdmin/SpecializationLists";
import DrugLists from "../SuperAdmin/druglists";
import InvestigationsList from "../SuperAdmin/investigationslist";
import PatientVitalsList from "../SuperAdmin/patientvitalslist";
import HealthConditionList from "../SuperAdmin/healthconditionslist";
import HealthConcernVitalList from "../SuperAdmin/healthconcernvitallist";
import SymptomsList from "../SuperAdmin/symptomslist";
import StateMedicalCouncilList from "../SuperAdmin/statemedicalcounselslist";
import Localization from "../SuperAdmin/Localization";
import ConveyanceChargesList from "../SuperAdmin/conveyancechargeslist";
import InternalUsersList from "../SuperAdmin/userslist";
import AddDoctorsTemplate from "../SuperAdmin/addDoctor";
import PatientsBulkUploadTemplate from "../SuperAdmin/PatientBulkUploadTemplate";
import HospitalsBulkUploadTemplate from "../SuperAdmin/hopitalbulkuploadeTemplate";
import PolyclinicsBulkUploadTemplate from "../SuperAdmin/polyclinicsbulkuploadeTemplate";
import RuMPsBulkUploadTemplate from "../SuperAdmin/RumpsBulkuploadtemplate";
import PharmacyBulkUploadTemplate from "../SuperAdmin/Pharmacybulkuploadtemplate";
import LabsBulkUploadTemplate from "../SuperAdmin/labsbulkuploadtemplate";
import MedicalCoBulkUploadTemplates from "../SuperAdmin/medicalcoBulkuploadTemplate";
import MedicalRepsBulkUploadTemplate from "../SuperAdmin/medicalrepsbulkuploadtemplate";
import SpecialityBulkUploadTemplate from "../SuperAdmin/specialitydeptbulkupload";
import SpecializationBulkUploadTemplate from "../SuperAdmin/speclizationbulkuploadtemplate";
import StateMedicalCouncilBulkUpload from "../SuperAdmin/stateMedicalcouncilBulkUpload";
import DrugsBulkUploadTemplate from "../SuperAdmin/drugsBulkUploadTemplate";
import PatientVitalsBulkTemplate from "../SuperAdmin/patientVitalsBulkUpload";
import InvestigationBulkUploadTemplate from "../SuperAdmin/InvestigationsBulkUploadTemplate";
import HealthConcernsVitalTemplate from "../SuperAdmin/HealthConcernsVitalTemplate";
import HealthConditionBulkTemplate from "../SuperAdmin/HealthConditionsBulkTemplate";
import SymptomsBulkUploadTemplate from "../SuperAdmin/symptomsBulkUploadTemplate";
import AdviceBulkUploadTemplate from "../SuperAdmin/advicebulkUploadTemplate";
import ProvisionalDiagnosisBulkUpload from "../SuperAdmin/provisionalDiagnosistemple";
import StateBulkUploadTemplate from "../SuperAdmin/stateBulkUploadTemplate";
import DistrictBulkUploadTemplate from "../SuperAdmin/districtBulkUploadTemplate";
import MandalTalukBulkUpload from "../SuperAdmin/mandalTalukBulkTemplate";
import VillagesBulkUpload from "../SuperAdmin/VillagesBulkUploadTemplate";

function Superadmin() {
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
            <div className="col-lg-3 col-xs-12 col-sm-12 col100">
              <div className="container d-flex flex-wrap mt-4 px-0">
                <div className="d-flex flex-column scrollcls" id="sideNav">
                  <NavLink to="/" exact className="btn1 p-2 mb-2">
                    <img src={Phone} className="me-2" alt="profile" />
                    Dashaboard
                  </NavLink>
                  <NavLink to="/manageprofile" exact className="btn1 p-2 mb-2">
                    <img src={Profile} className="me-2" alt="profile" />
                    Masters <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/Doctorslist">
                          Doctors List (12545)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Patientlist">
                          Patients List (125445)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Hospitallist">
                          Hospitals List (12545)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Polycliniclist">
                          Poly-Clinics List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Rump">RuMP's List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Remotepartnerlist">
                          Remote Partners List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Pharmacylist">Pharmacy's List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/PharamacyDeliverStaffList">
                          Pharmacy Delivery Staff List
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/Lablists">Labs's List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/LabHomeSamplecollectionlist">
                          Lab Home Sample collection Staff List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/DrAssistantLists">
                          Dr.Assistant's List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Receptionistlists">
                          Receptionist's List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Medicalcolist">Medical Co's List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/MedicalRepList">
                          Medical Rep's List
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/SpecialityDept">
                          Speciality Dept's List
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/SpecializationLists">
                          Specialization List's
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/DrugLists">Drugs List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/InvestigationsList">
                          Investigations List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/PatientVitalsList">
                          Pt.Vital's List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/HealthConcernVitalList">
                          Health Concern Vital's List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/HealthConditionLis">
                          Health Condition's List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/SymptomsList">Symptom's List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Advices List</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Provisional Diagnosis List</NavLink>
                      </li>

                      <li>
                        <NavLink to="/StateMedicalCouncilList">
                          State Medical Council's List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Localization">Location Master</NavLink>
                      </li>

                      <li>
                        <NavLink to="/InternalUsersList">
                          Internal Users List
                        </NavLink>
                      </li>
                    </ul>
                  </NavLink>

                  <NavLink
                    to="/ConveyanceChargesList"
                    exact
                    className="btn1 p-2 mb-2"
                  >
                    <img src={Orders} className="me-2" alt="appoint" />
                    Conveyance Charges List
                  </NavLink>
                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    Health Workers List
                  </NavLink>

                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    Subscriptions List <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/">Doctors Subscriptions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Hospitals Subscriptions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Poly-Clinic Subscriptions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Pharmacy Subscriptions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Lab Subscriptions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">RuMP's Subscriptions</NavLink>
                      </li>
                    </ul>
                  </NavLink>

                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    Advertisement Lists <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/">Doctors Ads</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Hospitals Ads</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Poly-Clinic Ads</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Pharmacy Ads</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Lab Ads</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">RuMP's Ads</NavLink>
                      </li>
                    </ul>
                  </NavLink>

                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    Send Notifications List{" "}
                    <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/">Doctors Notifications</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Hospitals Notifications</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Poly-Clinic Notifications</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Pharmacy Notifications</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Lab Notifications</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">RuMP's Notifications</NavLink>
                      </li>
                    </ul>
                  </NavLink>

                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    About Us Mgmt <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/">About Us</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">FAQ's</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Advertise with Us</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Subscriptions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Contact Us</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Terms & Conditions</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Privacy Policy</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Cookies Policy</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Payment Policy</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Refund Policy</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Blogs</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Articles</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Press & Media</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Testimonials</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Social Media</NavLink>
                      </li>
                    </ul>
                  </NavLink>

                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    Bulk Upload Templates Lists{" "}
                    <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/AddDoctorsTemplate">
                          Add Doctors Template
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/PatientsBulkUploadTemplate">
                          Add Patients Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/HospitalsBulkUploadTemplate">
                          Add Hospitals Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/PolyclinicsBulkUploadTemplate">
                          Add Poly-Clinics Template
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/RuMPsBulkUploadTemplate">
                          Add RuMP's Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/PharmacyBulkUploadTemplate">
                          Add Pharmacy's Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/LabsBulkUploadTemplate">
                          Add Labs Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/MedicalCoBulkUploadTemplates">
                          Add Medical Co's. Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/MedicalRepsBulkUploadTemplate">
                          Add Medical Rep's Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/SpecialityBulkUploadTemplate">
                          Add Speciality Dept's Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/SpecializationBulkUploadTemplate">
                          Add Specializations Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/StateMedicalCouncilBulkUpload">
                          Add State Medical Councils Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/DrugsBulkUploadTemplate">
                          Add Drugs Template
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/InvestigationBulkUploadTemplate">
                          Add Investigations Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/PatientVitalsBulkTemplate">
                          Add Pt.Vitals Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/HealthConcernsVitalTemplate">
                          Add Health Concern Vitals Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/HealthConditionBulkTemplate">
                          Add Health Conditions Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/SymptomsBulkUploadTemplate">
                          Add Symptoms Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/AdviceBulkUploadTemplate">
                          Add Advices Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/ProvisionalDiagnosisBulkUpload">
                          Add Provisional Diagnosis Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/StateBulkUploadTemplate">
                          Add States Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/DistrictBulkUploadTemplate">
                          Add Districts Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/MandalTalukBulkUpload">
                          Add Mandal/Taluks Template
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/VillagesBulkUpload">
                          Add Villages Template
                        </NavLink>
                      </li>
                    </ul>
                  </NavLink>

                  <NavLink to="/MyReceipts" exact className="btn1 p-2 mb-2">
                    <img src={Orders} className="me-2" alt="appoint" />
                    Reports <i className="fa fa-chevron-down"></i>
                    <ul className="listView">
                      <li>
                        <NavLink to="/">Report-1</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Report-2</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Report-3</NavLink>
                      </li>

                      <li>
                        <NavLink to="/">Report-4</NavLink>
                      </li>
                    </ul>
                  </NavLink>
                </div>
              </div>
            </div>
          ) : null}
          <div className="col-lg-9 col-xs-12 col-sm-12 col100">
            <div className="myPhoneCardCnt overflow-auto p-md-3 my-4">
              <Switch>
                <Route exact path="/Doctorslist">
                  <Doctorslist />
                </Route>

                <Route exact path="/Patientlist">
                  <Patientlist />
                </Route>

                <Route exact path="/Hospitallist">
                  <Hospitallist />
                </Route>

                <Route exact path="/Polycliniclist">
                  <Polycliniclist />
                </Route>

                <Route exact path="/Rump">
                  <Rump />
                </Route>

                <Route exact path="/Remotepartnerlist">
                  <Remotepartnerlist />
                </Route>

                <Route exact path="/Pharmacylist">
                  <Pharmacylist />
                </Route>

                <Route exact path="/Lablists">
                  <Lablists />
                </Route>

                <Route exact path="/PharamacyDeliverStaffList">
                  <PharamacyDeliverStaffList />
                </Route>

                <Route exact path="/LabHomeSamplecollectionlist">
                  <LabHomeSamplecollectionlist />
                </Route>

                <Route exact path="/DrAssistantLists">
                  <DrAssistantLists />
                </Route>

                <Route exact path="/Receptionistlists">
                  <Receptionistlists />
                </Route>

                <Route exact path="/Medicalcolist">
                  <Medicalcolist />
                </Route>

                <Route exact path="/MedicalRepList">
                  <MedicalRepList />
                </Route>

                <Route exact path="/SpecialityDept">
                  <SpecialityDept />
                </Route>

                <Route exact path="/SpecializationLists">
                  <SpecializationLists />
                </Route>

                <Route exact path="/DrugLists">
                  <DrugLists />
                </Route>

                <Route exact path="/InvestigationsList">
                  <InvestigationsList />
                </Route>

                <Route exact path="/PatientVitalsList">
                  <PatientVitalsList />
                </Route>

                <Route exact path="/HealthConcernVitalList">
                  <HealthConcernVitalList />
                </Route>

                <Route exact path="/HealthConditionLis">
                  <HealthConditionList />
                </Route>

                <Route exact path="/SymptomsList">
                  <SymptomsList />
                </Route>

                <Route exact path="/StateMedicalCouncilList">
                  <StateMedicalCouncilList />
                </Route>

                <Route exact path="/Localization">
                  <Localization />
                </Route>

                <Route exact path="/ConveyanceChargesList">
                  <ConveyanceChargesList />
                </Route>

                <Route exact path="/InternalUsersList">
                  <InternalUsersList />
                </Route>

                <Route exact path="/AddDoctorsTemplate">
                  <AddDoctorsTemplate />
                </Route>

                <Route exact path="/PatientsBulkUploadTemplate">
                  <PatientsBulkUploadTemplate />
                </Route>

                <Route exact path="/HospitalsBulkUploadTemplate">
                  <HospitalsBulkUploadTemplate />
                </Route>

                <Route exact path="/PolyclinicsBulkUploadTemplate">
                  <PolyclinicsBulkUploadTemplate />
                </Route>

                <Route exact path="/RuMPsBulkUploadTemplate">
                  <RuMPsBulkUploadTemplate />
                </Route>

                <Route exact path="/PharmacyBulkUploadTemplate">
                  <PharmacyBulkUploadTemplate />
                </Route>

                <Route exact path="/LabsBulkUploadTemplate">
                  <LabsBulkUploadTemplate />
                </Route>

                <Route exact path="/MedicalCoBulkUploadTemplates">
                  <MedicalCoBulkUploadTemplates />
                </Route>

                <Route exact path="/MedicalRepsBulkUploadTemplate">
                  <MedicalRepsBulkUploadTemplate />
                </Route>

                <Route exact path="/SpecialityBulkUploadTemplate">
                  <SpecialityBulkUploadTemplate />
                </Route>

                <Route exact path="/SpecializationBulkUploadTemplate">
                  <SpecializationBulkUploadTemplate />
                </Route>

                <Route exact path="/StateMedicalCouncilBulkUpload">
                  <StateMedicalCouncilBulkUpload />
                </Route>

                <Route exact path="/DrugsBulkUploadTemplate">
                  <DrugsBulkUploadTemplate />
                </Route>

                <Route exact path="/PatientVitalsBulkTemplate">
                  <PatientVitalsBulkTemplate />
                </Route>

                <Route exact path="/InvestigationBulkUploadTemplate">
                  <InvestigationBulkUploadTemplate />
                </Route>

                <Route exact path="/HealthConcernsVitalTemplate">
                  <HealthConcernsVitalTemplate />
                </Route>

                <Route exact path="/HealthConditionBulkTemplate">
                  <HealthConditionBulkTemplate />
                </Route>

                <Route exact path="/SymptomsBulkUploadTemplate">
                  <SymptomsBulkUploadTemplate />
                </Route>

                <Route exact path="/AdviceBulkUploadTemplate">
                  <AdviceBulkUploadTemplate />
                </Route>

                <Route exact path="/ProvisionalDiagnosisBulkUpload">
                  <ProvisionalDiagnosisBulkUpload />
                </Route>

                <Route exact path="/StateBulkUploadTemplate">
                  <StateBulkUploadTemplate />
                </Route>

                <Route exact path="/DistrictBulkUploadTemplate">
                  <DistrictBulkUploadTemplate />
                </Route>

                <Route exact path="/MandalTalukBulkUpload">
                  <MandalTalukBulkUpload />
                </Route>

                <Route exact path="/VillagesBulkUpload">
                  <VillagesBulkUpload />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Container>
    </Router>
  );
}

export default Superadmin;
