import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PharmaSelectByLocation from "../PharmaUser/PharmaSelectByLocation";
import PharmaSelectNearByLoc from "../PharmaUser/PharmaSelectNearByLocation";
import PharmaOrderMedicines from "../PharmaUser/PharmaOrderMedicies";
import PharmaCustomerReivews from "../PharmaUser/PharmaCustomerReviews";
import PharmaSelectYouLocation from "../PharmaUser/PharmaSelectYouLocation";
import PharmaOrderMedicies from "../PharmaUser/PharmaOrderMedicies";
import DeliverMode from "../PharmaUser/DeliverMode";
import DeliverySetLocation from "../PharmaUser/DeliverySetLocation";
import PaymentCases from "../PharmaUser/PaymentCases";
import UserLogin from "../PharmaUser/UserLogin";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import PharmaSubscription from "../PharmaUser/PharmaSubscription";
import PharmaLogin from "../PharmaUser/PharmaLogin";
import PharmaSignUp from "../PharmaUser/PharmaSignUp";
import UserOtp from "../PharmaUser/userOtp";
import PharmaRegistration from "../PharmaUser/PharmaRegistration";
import SelectPaymentMode from "../PharmaUser/SelectPaymentMode";
import Success from "../PharmaUser/Success";
import PharmaParitialMedicines from "../PharmaUser/PharmaParitialMedicines";
import NewUserOtp from "../PharmaUser/NewUserOtp";
import NewUserNow from "../PharmaUser/NewUserNow";
import AddressSetlocation from "../PharmaUser/addressSetLocation";
import DeliveryAddressRural from "../PharmaUser/deliveryAddressRural";
import PaymentModeNow from "../PharmaUser/PaymentModeNow";
import MsgSuccess from "../PharmaUser/MsgSuccess";
import HomeMain from "../PharmaUser/HomePharma";


function PharmaUserMain() {
  return (
    <div>
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeMain />
            </Route>
            <Route exact path="/PharmaSelectByLocation">
              <PharmaSelectByLocation />
            </Route>

            <Route exact path="/NewUserOtp">
              <NewUserOtp />
            </Route>

            <Route exact path="/PaymentModeNow">
              <PaymentModeNow />
            </Route>

            <Route exact path="/AddressSetlocation">
              <AddressSetlocation />
            </Route>

            <Route exact path="/DeliveryAddressRural">
              <DeliveryAddressRural />
            </Route>

            <Route exact path="/NewUserNow">
              <NewUserNow />
            </Route>

            <Route exact path="/PharmaSelectNearByLoc">
              <PharmaSelectNearByLoc />
            </Route>

            <Route exact path="/PharmaOrderMedicines">
              <PharmaOrderMedicines />
            </Route>

            <Route exact path="/PharmaCustomerReivews">
              <PharmaCustomerReivews />
            </Route>

            <Route exact path="/PharmaSelectYouLocation">
              <PharmaSelectYouLocation />
            </Route>

            <Route exact path="/PharmaOrderMedicies">
              <PharmaOrderMedicies />
            </Route>

            <Route exact path="/DeliverMode">
              <DeliverMode />
            </Route>

            <Route exact path="/DeliverySetLocation">
              <DeliverySetLocation />
            </Route>

            <Route exact path="/PaymentCases">
              <PaymentCases />
            </Route>

            <Route exact path="/UserLogin">
              <UserLogin />
            </Route>

            <Route exact path="/MsgSuccess">
              <MsgSuccess />
            </Route>
            <Route
              exact
              path="/PharmaSubscription"
              component={PharmaSubscription}
            />
            <Route exact path="/PharmaLogin" component={PharmaLogin} />
            <Route exact path="/PharmaSignUp" component={PharmaSignUp} />
            <Route exact path="/UserOtp" component={UserOtp} />
            <Route
              exac
              path="/PharmaOrderMedicines"
              component={PharmaOrderMedicines}
            />
            <Route
              exact
              path="/SelectPaymentMode"
              component={SelectPaymentMode}
            />

            <Route
              exact
              path="/PharmaParitialMedicines"
              component={PharmaParitialMedicines}
            />
            <Route
              exact
              path="/PharmaRegistration"
              component={PharmaRegistration}
            />

            <Route exact path="/Success" component={Success} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default PharmaUserMain;
