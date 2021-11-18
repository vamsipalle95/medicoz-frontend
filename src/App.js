import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import HeaderDoctor from "./components/Header/headerdoctor";

import Footer from "./components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/Sidenav/SignUp";
import Patient from "./components/Patient/Patient";
import Doctor from "./components/Doctor/Doctor";
import HopsitalAdmin from "./components/HospitalModule/mainhome";
import PolyClinicAdmin from "./components/PolyClinicModule/PolyclinicMain";
import DrAssistantAdmin from "./components/DoctorAssistant/DrAssistantDashboard";
import PharmaAdmin from "./components/PharmaAdmin/PharmaAdmin";
import PharaDeliveryStaff from "./components/PharmacyDeliveryStaff/PharmacyDeliveryStaff";
import DrAccount from "./components/DrLogin/DrAccount";
import PharmaUserMain from "./components/PharmaUser/PharmaUserMain";
import LabAdmin from "./components/LabAdmin/LabAdmin";
import UserMain from "./components/LabUser/UserMain";
import Home from "./components/BookOnlineDr/Home";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import Superadmin from "./components/SuperAdmin/Superadmin";
import ConsultantDrAdmin from "./components/ConsultantDoctor/ConsultantDoctorAdmin";
import RuMPAdminRemotePartner from "./components/RuMPRemotePartner/RuMPAdminRemotePartner";
import MedicozHome from "./components/BookOnlineDr/MedicozHome";
function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={DrAccount} />
            <Route exact path="/Doctor" component={Doctor} />
          </Switch>
        </Router>
        <Header />
        {/* <PharaDeliveryStaff /> */}
        {/* <PharmaAdmin /> */}
        {/* <DrAssistantAdmin /> */}
        {/* <HopsitalAdmin /> */}
        {/* <PharmaUserMain /> */}
        {/* <LabAdmin /> */}
        {/* <Doctor/> */}
        {/* <Home /> */}
        {/* <PolyClinicAdmin /> */}
        {/* <Superadmin /> */}
        {/* <RuMPAdminRemotePartner /> */}
        {/* <ConsultantDrAdmin /> */}
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Doctor} />
            <Route
              exact
              path="/ConsultantDrAdmin"
              component={ConsultantDrAdmin}
            />
          </Switch>
        </Router> */}
        {/* <MedicozHome /> */}
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Doctor} />
            <Route
              exact
              path="/RuMPAdminRemotePartner"
              component={RuMPAdminRemotePartner}
            />
          </Switch>
        </Router> */}

        <Patient />
        {/* <Doctor /> */}
        <Footer />
      </div>
    </div>
  );
}
export default App;
