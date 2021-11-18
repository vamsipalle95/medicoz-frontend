import React, { Component } from "react";
import BasicInfo from "../../images/doctoModule/basic-info.png";
import Mp1 from "../../images/doctoModule/mp1.png";
import phoneEs from "../../images/doctoModule/phone-es.png";
import Mailsm from "../../images/doctoModule/mail-sm.png";
import Educ from "../../images/doctoModule/education.png";
import Spec from "../../images/doctoModule/specialization.png";
import Language from "../../images/doctoModule/languages.png";
import LangBlack from "../../images/doctoModule/languages-black.png";
import MediReg from "../../images/doctoModule/medical-registration.png";
import MrLogo from "../../images/doctoModule/mr-logo.jpg";
import Kyc from "../../images/doctoModule/kyc.png";
import Pan from "../../images/doctoModule/pan-card.jpg";
import LocGreen from "../../images/doctoModule/location-sm-green.png";
import Map from "../../images/doctoModule/map.jpg";
import CicleRupee from "../../images/doctoModule/circle-rupee.png";
import CircleRupeeBlack from "../../images/doctoModule/circle-rupee-black.png";
import Bank from "../../images/doctoModule/bank.png";
import Sigature from "../../images/doctoModule/signature.png";
import DigSign from "../../images/doctoModule/digital-signature.png";
import SocLinks from "../../images/doctoModule/social-links.png";
import Facebook from "../../images/doctoModule/fb-orange.png";
import Twitter from "../../images/doctoModule/twitter-orange.png";
import Linkedin from "../../images/doctoModule/linkedin-orange.png";
import LockOpen from "../../images/doctoModule/lock-open.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ConsultantMyProfile extends Component {
  render() {
    return (
      <div>
        <div className="overflow-auto p-md-3 mb-4">
          <div className="w-100 d-flex flex-wrap align-items-baseline justify-content-between p-3 p-md-0">
            <div className="mb-2">
              <h1 className="mpTitle mb-0 me-3">My Profile</h1>
            </div>
            <div className="d-flex flex-wrap align-items-center">
              <div className="fm15 mb-2 me-3">Profile completion</div>
              <div
                className="progress mb-2"
                style={{
                  borderRadius: 15,
                  backgroundColor: "#ffffff",
                  border: "1px solid #eaeaea",
                  height: 10,
                  width: 150,
                }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%", backgroundColor: "#13E135" }}
                />
              </div>
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={BasicInfo} alt="basicifno" className="me-2" />
                  <h3 className="mb-0">Basic Info</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 text-center mt-3">
                  <img src={Mp1} alt="mp1" />
                  <a href="/" className="text-decoration-none">
                    <p
                      className="mpText mt-2 mb-0"
                      style={{ color: "#30A2BE !important" }}
                    >
                      Change
                    </p>
                  </a>
                </div>
                <div className="w-100 mt-3">
                  <a href="/" className="text-decoration-none">
                    <h3 className="mpHead mb-1">Venu Kumar Pisupati</h3>
                  </a>
                  <p className="mpText mb-0">Male, Age 24 (04/01/1985)</p>
                  <p className="mpText mb-0">
                    <img src={phoneEs} alt="phonees" className="me-2" />
                    Mobile: 12345 12345
                  </p>
                  <p className="mpText mb-0">
                    <img src={Mailsm} alt="mailsm" className="me-2" />
                    venu@outlook.com
                  </p>
                </div>
                {/*text-ends-here*/}
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddEditBasic">
                  <button
                    type="button"
                    className="btn doaOrangeBtn px-3 py-2"
                    onclick="location.href='dr-add-edit-basic-info.html';"
                  >
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Educ} alt="educaiton" className="me-2" />
                  <h3 className="mb-0">Education­­</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="me-2">
                    <img src={Educ} alt="educaiton" />
                  </div>
                  <div>
                    <p className="mpText mb-0">MBBS: 2010</p>
                    <p className="mpText mb-0">Manipal University</p>
                  </div>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="me-2">
                    <img src={Educ} alt="educaiton" />
                  </div>
                  <div>
                    <p className="mpText mb-0">Ortho: 2015</p>
                    <p className="mpText mb-0">Manipal University</p>
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddEducation">
                  <button
                    type="button"
                    className="btn doaOrangeBtn px-3 py-2"
                    onclick="location.href='dr-add-edit-education.html';"
                  >
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Spec} alt="specialization" className="me-2" />
                  <h3 className="mb-0">Specialization &amp; Exp</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 mt-3">
                  <p className="mpText mb-0">Speciality Pediatrician</p>
                  <p className="mpText mb-0">Specialisation Goes here</p>
                </div>
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddEditSpecExp">
                  <button
                    type="button"
                    className="btn doaOrangeBtn px-3 py-2"
                    onclick="location.href='dr-add-edit-specialization-exp.html';"
                  >
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Language} alt="lang" className="me-2" />
                  <h3 className="mb-0">Languages Spoken</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="me-2">
                    <img src={LangBlack} alt="lagublack" />
                  </div>
                  <div>
                    <p className="mpText mb-0">English</p>
                  </div>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center">
                  <div className="me-2">
                    <img src={LangBlack} alt="lagublack" />
                  </div>
                  <div>
                    <p className="mpText mb-0">Telugu</p>
                  </div>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center">
                  <div className="me-2">
                    <img src={LangBlack} alt="lagublack" />
                  </div>
                  <div>
                    <p className="mpText mb-0">Hindi</p>
                  </div>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center">
                  <div className="me-2">
                    <img src={LangBlack} alt="lagublack" />
                  </div>
                  <div>
                    <p className="mpText mb-0">Kannada</p>
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddLanguage">
                  <button type="button" className="btn doaOrangeBtn px-3 py-2">
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={MediReg} alt="medi" className="me-2" />
                  <h3 className="mb-0">Medical Registration</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 mt-3">
                  <img src={MrLogo} alt="mrlogo" width="100px" />
                </div>
                <div className="w-100 mt-3">
                  <a href="/" className="text-decoration-none">
                    <h3 className="mpHead mb-1">Doctor Type: Allopath</h3>
                  </a>
                  <p className="mpText mb-0">Registration No. 12345 67890</p>
                  <p className="mpText mb-0">
                    State Medical Council Telangana Medical Council
                  </p>
                  <p className="mpText mb-0">Registration Year: 2000</p>
                </div>
                {/*text-ends-here*/}
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddEditMedicalReg">
                  <button type="button" className="btn doaOrangeBtn px-3 py-2">
                    Add/Edit
                  </button>
                </Link>{" "}
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Kyc} alt="kyc" className="me-2" />
                  <h3 className="mb-0">KYC</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 mt-3">
                  <img src={Pan} alt="pan" />
                </div>
                <div className="w-100 mt-3">
                  <p className="mpText mb-0">Upload any Government</p>
                  <p className="mpText mb-0">Approved Identity Card</p>
                </div>
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddKyc">
                  <button type="button" className="btn doaOrangeBtn px-3 py-2">
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
          </div>
          {/*flexbox-ends-here*/}
        </div>
        {/*myPhoneCardCnt-ends-here*/}
      </div>
    );
  }
}

export default ConsultantMyProfile;
