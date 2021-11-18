import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookingSpeciality from "../BookOnlineDr/BookingSpeciality";
import DoctorsOnlineNow from "../BookOnlineDr/DoctorsOnlineNow";
import DrPatientProfileView from "../DrPatientProfileView/DrPatientProfileView";
import DrsOnlineNowatHospitals from "../BookOnlineDr/DrsOnlineNowAtHospital";
import HospitalPubliProfile from "../HospitalPublicProfile/HospitalPubliProfile";
import DrsOnlineNowAtHospital from "../BookOnlineDr/DrOnlineNowInHospital";
import DrsOnlineNowAtClinic from "../BookOnlineDr/DrsOnlineNowAtClinic";
import ViewClinic from "../BookOnlineDr/ViewClinic";
import DrLogin from "../DrLogin/DrLogin";
import LoginOtp from "../BookOnlineDr/LoginOtp";
import NewUser from "../MyFavourites/NewUserAccount";
import WhoisPatient from "../BookOnlineDr/WhoisPatient";
import ConfirmVideocall from "../BookOnlineDr/ConfirmVideocall";
import PaymentMode from "../BookOnlineDr/paymentMode";
import VideoScreen from "../VideoScreen/VideoScreen";
import BookingSpecialityNow from "../BookOnlineDr/BookingSpeciality1";
import BookAppointCategory from "../BookOnlineDr/BookAppointCategory";
import BookAppointCategory2 from "../BookOnlineDr/BookAppointCategory2";
import BookVideoAppoinment from "../BookOnlineDr/BookVideoAppoinment";
import VideoOrConfirmCall from "../BookOnlineDr/VideoOrConfirmcall";
import VideoUserAccount from "../BookOnlineDr/VideoUserAccount";
import LoginOTP2 from "../BookOnlineDr/LoginOtp2";
import WhoisCarTaker from "../BookOnlineDr/WhoisCarTaker";
import ConfirmAppointment from "../BookOnlineDr/ConfirmAppointment";
import VideoPaymentMode from "../NeedHelp/VideoPaymentmode";
import ConfirmConferenceAppointment from "../BookOnlineDr/ConfirmConferenceAppointment";
import HealthConcerns from "../BookOnlineDr/HealthConcerns";
import WhoisPatient2 from "../BookOnlineDr/WhoisPatient2";
import ConfirmVideoAppointment from "../BookOnlineDr/ConfirmVideoAppoinment";
import ConfirmAudioAppointment from "../BookOnlineDr/ConfirmAudioAppointment";
import PaymentModes2 from "../NeedHelp/PaymentModes2";
import BookAudioAppointment from "../BookOnlineDr/BookAudioAppointment";
import LoginOtp3 from "../BookOnlineDr/LoginOtp3";
import AudioUserAccount from "../BookOnlineDr/AudioUserAccount";
import WhoisPatient3 from "../BookOnlineDr/WhoisPatient3";
import BookInPersonAppointment from "../BookOnlineDr/BookInPersonAppointment";
import LoginOtp4 from "../BookOnlineDr/LoginOtp4";
import InPersonUserAccount from "../BookOnlineDr/InPersonUserAccount";
import WhoisPatient4 from "../BookOnlineDr/WhoisPatient4";
import ConfirmInPersonAppointment from "../BookOnlineDr/ConfirmInPersonAppointment";
import BookingSpeciality2 from "../BookOnlineDr/BookingSpeciality2";
import BookAppointmentHospDrList from "../BookOnlineDr/BookAppointmentHospDrList";
import BookAppointmentClinicList from "../BookOnlineDr/BookAppointmentClinicList";
import BookAppointmentClinicDrList from "../BookOnlineDr/BookAppointmentClinicDrList";
import BookAppointmentHospDr from "../BookOnlineDr/BookAppointmentHospDr";
import ClinicPublicProfile from "../ClicnicPublicProfile/ClinicPublicProfile";
import MainHome from "../BookOnlineDr/MainHome";
import WhoisPatient21 from "../BookOnlineDr/WhoisPatient21";
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
import LabSelectNearByLocation from "../LabUser/LabSelectNearByLocation";
import LabSelectYouLocation from "../LabUser/LabSelectYouLocation";
import LabUserLogin from "../LabUser/LabUserLogin";
import LabLogin from "../LabUser/LabLogin";
import LabuserRegistration from "../LabUser/LabUserRegistration";
import LabSignUp from "../LabUser/LabSignUp";
import LabUserOtp from "../LabUser/LabUserOtp";
import UserMsgSuccess from "../LabUser/UserMsgSuccess";
import LabUserOrderMedicines from "../LabUser/LabUserOrderMedicines";
import NewUserOtp1 from "../LabUser/NewUserOtp1";
import NewUserNow1 from "../LabUser/NewUserNow1";
import MedicinesHomeCollection from "../LabUser/MedicinesHomeCollection";
import LabUserSetLocation from "../LabUser/LabUserSetLocation";
import LabUserDeliveryAddress from "../LabUser/LabUserDeliveryAddress";
import LabuserThanku from "../LabUser/LabUserDeliveryThankyou";
import LabUserPaymentModeNow from "../LabUser/LabUserPaymentModeNow";
import PharmaCustomerReviews from "../PharmaAdmin/PharmaCustomerReviewsList";
import HomePharma from "../LabUser/LabHome";
import MedicozHome from "../BookOnlineDr/MedicozHome";

function Home() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <Router>
            <Switch>
              <Route
                exact
                path="/BookAppointmentClinicDrList"
                component={BookAppointmentClinicDrList}
              />

              <Route
                exact
                path="/BookAppointmentClinicList"
                component={BookAppointmentClinicList}
              />

              <Route
                exact
                path="/BookAppointmentHospDrList"
                component={BookAppointmentHospDrList}
              />

              <Route
                exact
                path="/BookAppointCategory2"
                component={BookAppointCategory2}
              />

              <Route
                exact
                path="/BookingSpeciality2"
                component={BookingSpeciality2}
              />

              <Route
                exact
                path="/ConfirmInPersonAppointment"
                component={ConfirmInPersonAppointment}
              />

              <Route
                exact
                path="/BookInPersonAppointment"
                component={BookInPersonAppointment}
              />

              <Route exact path="/LoginOtp4" component={LoginOtp4} />

              <Route
                exact
                path="/BookAppointmentHospDr"
                component={BookAppointmentHospDr}
              />

              <Route
                exact
                path="/InPersonUserAccount"
                component={InPersonUserAccount}
              />

              <Route exact path="/WhoisPatient4" component={WhoisPatient4} />

              <Route
                exact
                path="/ClinicPublicProfile"
                component={ClinicPublicProfile}
              />

              <Route exact path="/" component={MedicozHome} />

              <Route
                exact
                path="/BookingSpeciality"
                component={BookingSpeciality}
              />

              <Route exact path="/LoginOtp" component={LoginOtp} />

              <Route
                exact
                path="/VideoUserAccount"
                component={VideoUserAccount}
              />

              <Route exact path="/NewUser" component={NewUser} />

              <Route exact path="/DrLogin" component={DrLogin} />

              <Route exact path="/PaymentMode" component={PaymentMode} />

              <Route exact path="/WhoisPatient" component={WhoisPatient} />

              <Route
                exact
                path="/ConfirmVideocall"
                component={ConfirmVideocall}
              />

              <Route
                exact
                path="/DoctorsOnlineNow"
                component={DoctorsOnlineNow}
              />

              <Route exact path="/LoginOTP2" component={LoginOTP2} />

              <Route exact path="/VideoScreen" component={VideoScreen} />

              <Route
                exact
                path="/DrPatientProfileView"
                component={DrPatientProfileView}
              />

              <Route
                exact
                path="/DrsOnlineNowatHospitals"
                component={DrsOnlineNowatHospitals}
              />

              <Route
                exact
                path="/HospitalPubliProfile"
                component={HospitalPubliProfile}
              />

              <Route
                exact
                path="/DrsOnlineNowAtHospital"
                component={DrsOnlineNowAtHospital}
              />

              <Route
                exact
                path="/DrsOnlineNowAtClinic"
                component={DrsOnlineNowAtClinic}
              />

              <Route exact path="/ViewClinic" component={ViewClinic} />

              <Route
                exact
                path="/BookAudioAppointment"
                component={BookAudioAppointment}
              />

              <Route
                exact
                path="/ConfirmAudioAppointment"
                component={ConfirmAudioAppointment}
              />

              <Route
                exact
                path="/BookingSpecialityNow"
                component={BookingSpecialityNow}
              />

              <Route
                exact
                path="/BookAppointCategory"
                component={BookAppointCategory}
              />

              <Route
                exact
                path="/BookVideoAppoinment"
                component={BookVideoAppoinment}
              />

              <Route
                exact
                path="/VideoOrConfirmCall"
                component={VideoOrConfirmCall}
              />

              <Route exact path="/WhoisCarTaker" component={WhoisCarTaker} />

              <Route
                exact
                path="/ConfirmAppointment"
                component={ConfirmAppointment}
              />

              <Route
                exact
                path="/VideoPaymentMode"
                component={VideoPaymentMode}
              />

              <Route exact path="/HealthConcerns" component={HealthConcerns} />

              <Route
                exact
                path="/ConfirmConferenceAppointment"
                component={ConfirmConferenceAppointment}
              />

              <Route exact path="/WhoisPatient2" component={WhoisPatient2} />

              <Route exact path="/WhoisPatient3" component={WhoisPatient3} />

              <Route
                exact
                path="/ConfirmVideoAppointment"
                component={ConfirmVideoAppointment}
              />

              <Route exact path="/PaymentModes2" component={PaymentModes2} />

              <Route exact path="/LoginOtp3" component={LoginOtp3} />

              <Route
                exact
                path="/AudioUserAccount"
                component={AudioUserAccount}
              />

              <Route exact path="/WhoisPatient21">
                <WhoisPatient21 />
              </Route>

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

              <Route exact path="/NewUserOtp1">
                <NewUserOtp1 />
              </Route>

              <Route exact path="/NewUserNow1">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
