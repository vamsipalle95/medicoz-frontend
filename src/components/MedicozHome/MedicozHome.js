import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScIcon1 from "../../images/sc-icon-1.png";
import ScIcon2 from "../../images/sc-icon-2.png";
import ScIcon3 from "../../images/sc-icon-3.png";
import ScIcon4 from "../../images/sc-icon-4.png";
import MobileInHand from "../../images/mobile-in-hand.png";
import FindIcon1 from "../../images/find-icon-1.png";
import FindIcon2 from "../../images/find-icon-2.png";
import FindIcon3 from "../../images/find-icon-3.png";
import FindIcon4 from "../../images/find-icon-4.png";
import FindIcon5 from "../../images/find-icon-5.png";
import WcIcon1 from "../../images/wc-icon-1.png";
import WcIcon2 from "../../images/wc-icon-2.png";
import WcIcon3 from "../../images/wc-icon-3.png";
import WcIcon4 from "../../images/wc-icon-4.png";
import PlayStore from "../../images/play-store.png";
import AppStore from "../../images/app-store.png";
import DoctorImg from "../../images/doctor.png";
import StarsGreen from "../../images/stars-green.png";
import StarsOrange from "../../images/stars-orange.png";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div>
      <div>
        <div className="container-fluid py-5 homeSplash">
          <div className="container">
            <h1 className="w-100">India’s Trusted Doctors</h1>
            <div className="w-100 d-md-flex align-items-center">
              <div className="f20sbWhite mb-3 me-4">Safe Fast Reliable</div>
              <div
                className="f12bWhite text-uppercase rounded p-2 mb-3 me-3"
                style={{ background: "#11DF48", width: "fit-content" }}
              >
                online
              </div>
              <div
                className="f12bWhite text-uppercase rounded p-2 mb-3"
                style={{ background: "#F98F45", width: "fit-content" }}
              >
                offline
              </div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-lg-flex align-items-flex-start mt-5">
              <div
                className="d-flex align-items-center p-3 mb-3 me-3 splashCard"
                style={{ background: "#323857", cursor: "pointer" }}
              >
                <img src={ScIcon1} alt="icon1" className="me-3" />
                <div
                  onClick={() => {
                    history.push("/BookingSpeciality");
                  }}
                >
                  <p className="f12sbWhite mb-1 text-white">Talk To Doctors</p>
                  <p className="f12sbWhite text-white">ONLINE NOW</p>
                  <button type="button" className="btn doacBtn">
                    START
                  </button>
                </div>
              </div>
              {/*card-ends-here*/}
              <div
                className="d-flex align-items-center p-3 mb-3 splashCard"
                style={{ background: "#F98F45", cursor: "pointer" }}
              >
                <img src={ScIcon2} alt="icon2" className="me-3" />
                <div>
                  <p className="f12sbWhite mb-1">Book Doctor</p>
                  <p className="f12sbWhite">Appointment</p>
                  <button type="button" className="btn doacBtn">
                    BOOK
                  </button>
                </div>
              </div>
              {/*card-ends-here*/}
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-lg-flex align-items-flex-start">
              <div
                className="d-flex align-items-center p-3 mb-3 me-3 splashCard"
                style={{ background: "#30A2BE", cursor: "pointer" }}
              >
                <img src={ScIcon3} alt="icon3" className="me-3" />
                <div>
                  <p className="f12sbWhite mb-1">Buy Medicines from</p>
                  <p className="f12sbWhite">Nearby Pharmacy</p>

                  <button type="button" className="btn doacBtn">
                    BUY
                  </button>
                </div>
              </div>
              {/*card-ends-here*/}
              <div
                className="d-flex align-items-center p-3 mb-3 splashCard"
                style={{ background: "#9CE7F5", cursor: "pointer" }}
              >
                <img src={ScIcon4} alt="icon4" className="me-3" />
                <div>
                  <p className="f11b mb-1">Book Tests from</p>
                  <p className="f11b">Nearby Lab</p>
                  <button type="button" className="btn doacBtn">
                    BOOK
                  </button>
                </div>
              </div>
              {/*card-ends-here*/}
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*container-ends-here*/}
        </div>
        {/*home-splash-ends-here*/}
        <div className="container-fluid bg-white py-5">
          <div
            className="container d-flex flex-wrap justify-content-center align-items-baseline"
            style={{
              background: 'url("images/sortingBg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "30%",
              backgroundPosition: "top 50px right 0px",
            }}
          >
            <div className="f25sbOrange text-center w-100 mb-3">
              Specialities
            </div>
            {/*Title-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <a href="#">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileInHand} alt="mobileInHand" />
                </div>
                {/*spCardIcon-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
              <div className="spCardText">
                <h3 className="mb-0">For general Health issue</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada efficitur consequat.
              </div>
              {/*spCardText-ends-here*/}
            </div>
            {/*specialityCard-ends-here*/}
            <div className="text-center w-100 mt-3">
              <button type="button" className="btn doacBtn px-4">
                More
              </button>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*flexbox-ends-here*/}
        </div>
        {/*container-fluid-ends-here*/}
        <div className="container-fluid py-5" style={{ background: "#F1F1F1" }}>
          <div className="container">
            <div className="f25sbOrange text-center w-100 mb-3">
              Find Nearby
            </div>
            <div className="w-100 d-flex flex-wrap justify-content-center align-items-flex-start">
              <div className="findCard p-3 m-3">
                <div className="w-100 text-center">
                  <img src={FindIcon1} alt="icon1" />
                </div>
                <div className="f14m mt-3 text-center">Online Doctors Now</div>
              </div>
              {/*card-ends-here*/}
              <div className="findCard p-3 m-3">
                <div className="w-100 text-center">
                  <img src={FindIcon2} alt="icon2" />
                </div>
                <div className="f14m mt-3 text-center">Clinic</div>
              </div>
              {/*card-ends-here*/}
              <div className="findCard p-3 m-3">
                <div className="w-100 text-center">
                  <img src={FindIcon3} alt="icon3" />
                </div>
                <div className="f14m mt-3 text-center">Hospital</div>
              </div>
              {/*card-ends-here*/}
              <div className="findCard p-3 m-3">
                <div className="w-100 text-center">
                  <img src={FindIcon4} alt="icon4" />
                </div>
                <div className="f14m mt-3 text-center">Pharmacy</div>
              </div>
              {/*card-ends-here*/}
              <div className="findCard p-3 m-3">
                <div className="w-100 text-center">
                  <img src={FindIcon5} alt="icon5" />
                </div>
                <div className="f14m mt-3 text-center">Diagnostic Lab</div>
              </div>
              {/*card-ends-here*/}
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*container-ends-here*/}
        </div>
        {/*container-fluid-ends-here*/}
        <div className="container-fluid bg-white py-5">
          <div className="container">
            <div className="f25sbOrange text-center w-100">Why Choose us?</div>
            <div className="row mt-5">
              <div className="col-12 col-lg-6">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={WcIcon1} alt="wcicon1" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f20bTeal text-center text-md-start mb-4">
                      Family Health Records Locker for FREE
                    </h5>
                    <p className="f20m text-center text-md-start mb-1">
                      - All at one place
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - Safe &amp; Secure
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - Share with you’r Doctor Easily
                    </p>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-lg-6">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={WcIcon2} alt="wcicon2" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f20bTeal text-center text-md-start mb-4">
                      Instantly Video connect with Doctor
                    </h5>
                    <p className="f20m text-center text-md-start mb-1">
                      - From any location
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - No waiting*
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - Instant Prescription
                    </p>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
            <div className="row mt-5">
              <div className="col-12 col-lg-6">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={WcIcon3} alt="wcicon3" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f20bTeal text-center text-md-start mb-4">
                      Book Appointment - Online and Offline
                    </h5>
                    <p className="f20m text-center text-md-start mb-1">
                      - Family Doctor
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - Hospital Doctor
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - Clinic Doctor
                    </p>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-lg-6">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={WcIcon4} alt="wcicon4" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f20bTeal text-center text-md-start mb-4">
                      Video Conference Appointments between
                    </h5>
                    <p className="f20m text-center text-md-start mb-1">
                      - Patient, Caretaker, Doctor
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - Save time
                    </p>
                    <p className="f20m text-center text-md-start mb-1">
                      - All members can be in their own locations
                    </p>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
            <div className="f25sbOrange text-center w-100 mt-5">
              Download Medicoz Mobile App
            </div>
            <div className="w-100 d-md-flex align-items-center justify-content-center mt-4">
              <a href="#">
                <img src={PlayStore} alt="playstore" className="me-3 mb-3" />
              </a>
              <a href="#">
                <img src={AppStore} alt="appstore" className="mb-3" />
              </a>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*container-ends-here*/}
        </div>
        {/*container-fluid-ends-here*/}
        <div className="container-fluid py-5" style={{ background: "#F1F1F1" }}>
          <div className="container">
            <div className="f25sbOrange text-center w-100">
              What Everyone is saying about Medicoz
            </div>
            <div className="row mt-5">
              <div className="col-12 col-lg-4">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={DoctorImg} alt="dctrimg" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f16bTeal text-center text-md-start mb-3">
                      Madhusudhan Rao
                    </h5>
                    <p className="f14 text-center text-md-start">
                      Testimonial will go here lips lorem Testimonial will go
                      here lips lorem Testimonial will go here lips lorem
                    </p>
                    <div className="text-center text-md-start">
                      <img src={StarsGreen} alt="starsgreen" />
                    </div>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-lg-4">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={DoctorImg} alt="dctrimg" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f16bTeal text-center text-md-start mb-3">
                      Madhusudhan Rao
                    </h5>
                    <p className="f14 text-center text-md-start">
                      Testimonial will go here lips lorem Testimonial will go
                      here lips lorem Testimonial will go here lips lorem
                    </p>
                    <div className="text-center text-md-start">
                      <img src={StarsOrange} alt="starsOrange" />
                    </div>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-lg-4">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={DoctorImg} alt="dctrimg" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f16bTeal text-center text-md-start mb-3">
                      Madhusudhan Rao
                    </h5>
                    <p className="f14 text-center text-md-start">
                      Testimonial will go here lips lorem Testimonial will go
                      here lips lorem Testimonial will go here lips lorem
                    </p>
                    <div className="text-center text-md-start">
                      <img src={StarsOrange} alt="starsOrange" />
                    </div>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
            <div className="row mt-5">
              <div className="col-12 col-lg-4">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={DoctorImg} alt="dctrimg" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f16bTeal text-center text-md-start mb-3">
                      Madhusudhan Rao
                    </h5>
                    <p className="f14 text-center text-md-start">
                      Testimonial will go here lips lorem Testimonial will go
                      here lips lorem Testimonial will go here lips lorem
                    </p>
                    <div className="text-center text-md-start">
                      <img src={StarsOrange} alt="starsOrange" />
                    </div>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-lg-4">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={DoctorImg} alt="dctrimg" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f16bTeal text-center text-md-start mb-3">
                      Madhusudhan Rao
                    </h5>
                    <p className="f14 text-center text-md-start">
                      Testimonial will go here lips lorem Testimonial will go
                      here lips lorem Testimonial will go here lips lorem
                    </p>
                    <div className="text-center text-md-start">
                      <img src={StarsOrange} alt="starsOrange" />
                    </div>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-lg-4">
                <div className="d-md-flex align-items-center">
                  <div className="me-3 mb-3 text-center text-md-start">
                    <img src={DoctorImg} alt="dctrimg" />
                  </div>
                  <div className="mb-3">
                    <h5 className="f16bTeal text-center text-md-start mb-3">
                      Madhusudhan Rao
                    </h5>
                    <p className="f14 text-center text-md-start">
                      Testimonial will go here lips lorem Testimonial will go
                      here lips lorem Testimonial will go here lips lorem
                    </p>
                    <div className="text-center text-md-start">
                      <img src={StarsOrange} alt="starsOrange" />
                    </div>
                  </div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
          </div>
          {/*container-ends-here*/}
        </div>
        {/*container-fluid-ends-here*/}
      </div>
    </div>
  );
}
