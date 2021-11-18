import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import LabSelectNearByLocation from "../LabUser/LabSelectNearByLocation";
import LabSelectYouLocation from "../LabUser/LabSelectYouLocation";
import LabUserLogin from "../LabUser/LabUserLogin";
import LabLogin from "../LabUser/LabLogin";
import LabuserRegistration from "../LabUser/LabUserRegistration";
import LabSignUp from "../LabUser/LabSignUp";
import LabUserOtp from "../LabUser/LabUserOtp";
import UserMsgSuccess from "../LabUser/UserMsgSuccess";
import LabUserOrderMedicines from "../LabUser/LabUserOrderMedicines";
import NewUserOtp1 from "./NewUserOtp1";
import NewUserNow1 from "./NewUserNow1";
import MedicinesHomeCollection from "../LabUser/MedicinesHomeCollection";
import LabUserSetLocation from "./LabUserSetLocation";
import LabUserDeliveryAddress from "../LabUser/LabUserDeliveryAddress";
import LabuserThanku from "../LabUser/LabUserDeliveryThankyou";
import LabUserPaymentModeNow from "../LabUser/LabUserPaymentModeNow";
import PharmaCustomerReviews from "../PharmaAdmin/PharmaCustomerReviewsList";
import HomePharma from "../LabUser/LabHome";

function LabHome() {
  return (
    <div className="miHt">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePharma />
          </Route>
          <Route exact path="/LabSelectNearByLocation">
            <LabSelectNearByLocation />
          </Route>
          <Route exact path="/LabSelectYouLocation">
            <LabSelectYouLocation />
          </Route>

          <Route exact path="/LabUserLogin">
            <LabUserLogin />
          </Route>

          <Route exact path="/LabLogin">
            <LabLogin />
          </Route>

          <Route exact path="/LabuserRegistration">
            <LabuserRegistration />
          </Route>

          <Route exact path="/LabSignUp">
            <LabSignUp />
          </Route>

          <Route exact path="/LabUserOtp">
            <LabUserOtp />
          </Route>
          <Route exact path="/UserMsgSuccess">
            <UserMsgSuccess />
          </Route>

          <Route exact path="/LabUserOrderMedicines">
            <LabUserOrderMedicines />
          </Route>

          <Route exact path="/NewUserOtp">
            <NewUserOtp1 />
          </Route>

          <Route exact path="/NewUserNow">
            <NewUserNow1 />
          </Route>

          <Route exact path="/MedicinesHomeCollection">
            <MedicinesHomeCollection />
          </Route>

          <Route exact path="/LabUserSetLocation">
            <LabUserSetLocation />
          </Route>

          <Route exact path="/LabUserDeliveryAddress">
            <LabUserDeliveryAddress />
          </Route>

          <Route exact path="/LabUserPaymentModeNow">
            <LabUserPaymentModeNow />
          </Route>

          <Route exact path="/LabuserThanku">
            <LabuserThanku />
          </Route>

          <Route exact path="/PharmaCustomerReviews">
            <PharmaCustomerReviews />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default LabHome;
