import React from "react";
import BasicInfor from "../../images/basic-info.png";
import Duplicate from "../../images/duplicate.png";
import Clinic from "../../images/clinic.jpg";
import List from "../../images/list.png";
import CertBadge from "../../images/certificate-badge.png";
import LocSm from "../../images/location-sm-green.png";
import Alarm from "../../images/alarm.png";
import Contacts from "../../images/contacts.png";
import Badge from "../../images/badge.png";
import BasicInfo from "../../images/basic-info.png";
import Mp1 from "../../images/mp1.png";
import PhoneEs from "../../images/phone-es.png";
import Mailsm from "../../images/mail-sm.png";
import BadgeCert from "../../images/certificate-badge.png";
import HospBadge from "../../images/hospital-certificate.png";
import Locsm from "../../images/hospital-certificate.png";
import SocialLinks from "../../images/social-links.png";
import TrashGreen from "../../images/trash-green.png";
import LocGreen from "../../images/doctoModule/map.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserGreen from "../../images/user-green.png";
import SocLinks from "../../images/doctoModule/social-links.png";
import Facebook from "../../images/doctoModule/fb-orange.png";
import Twitter from "../../images/doctoModule/twitter-orange.png";
import Linkedin from "../../images/doctoModule/linkedin-orange.png";
import ShieldOrange from "../../images/doctoModule/shield-orange.png";

export default function PharmaProfile() {
  return (
    <div>
      <div className="overflow-auto p-md-3  mb-4">
        <div className="w-100 d-flex flex-wrap align-items-baseline justify-content-between p-3 p-md-0">
          <div className="mb-2">
            <h1 className="mpTitle mb-0 me-3">Balaji Hospitals (Admin)</h1>
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
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={BasicInfo} alt="basic-info" className="me-2" />
                <h3 className="mb-0">Pharmacy Admin Info</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 text-center mt-3">
                <img src={Mp1} alt="mp1" />
                <a href="#" className="text-decoration-none">
                  <p
                    className="mpText mt-2 mb-0"
                    style={{ color: "#30A2BE !important" }}
                  >
                    Change
                  </p>
                </a>
              </div>
              <div className="w-100 mt-3">
                <a href="#" className="text-decoration-none">
                  <h3 className="mpHead mb-1">Gurav Kumar</h3>
                </a>
                <p className="mpText mb-0">Male, Age 24 (04/01/1985)</p>
                <p className="mpText mb-0">
                  <img src={PhoneEs} alt="phone-es" className="me-2" />
                  Mobile: 12345 12345
                </p>
                <p className="mpText mb-0">
                  <img src={Mailsm} alt="mail" className="me-2" />
                  gurav@outlook.com
                </p>
              </div>
              {/*text-ends-here*/}
            </div>
            <div className="w-100 text-center mt-3">
              <button
                type="button"
                className="btn doaOrangeBtn px-3 py-2"
                data-bs-toggle="modal"
                data-bs-target="#addEdit"
              >
                Add/Edit
              </button>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="mb-0">Pharmacy Picture</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 mt-3 text-center">
                <img src={Clinic} alt="clinic" />
              </div>
            </div>
            <div className="w-100 text-center mt-3">
              <button type="button" className="btn doaOrangeBtn px-3 py-2">
                Upload
              </button>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={List} alt="list" className="me-2" />
                <h3 className="mb-0">PharmacyDetails</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div
                className="w-100 pt-3 pb-2"
                style={{ borderBottom: "1px solid #D4D5D5 !important" }}
              >
                <div className="doaNText">Name</div>
                <div className="mpText mt-1">Renevo Hospitals</div>
              </div>
              <div
                className="w-100 pt-2 pb-2"
                style={{ borderBottom: "1px solid #D4D5D5 !important" }}
              >
                <div className="doaNText">PharmacyRegistration No.</div>
                <div className="mpText mt-1">12345 12345</div>
              </div>
              <div
                className="w-100 pt-2 pb-2"
                style={{ borderBottom: "1px solid #D4D5D5 !important" }}
              >
                <div className="doaNText">Phone1</div>
                <div className="mpText mt-1">12345 12345</div>
              </div>
              <div
                className="w-100 pt-2 pb-2"
                style={{ borderBottom: "1px solid #D4D5D5 !important" }}
              >
                <div className="doaNText">Phone2</div>
                <div className="mpText mt-1">12345 12345</div>
              </div>
              <div
                className="w-100 pt-2 pb-2"
                style={{ borderBottom: "1px solid #D4D5D5 !important" }}
              >
                <div className="doaNText">Email</div>
                <div className="mpText mt-1">info@renevo.com</div>
              </div>
            </div>
            <div className="w-100 text-center mt-3">
              <button
                type="button"
                className="btn doaOrangeBtn px-3 py-2"
                data-bs-toggle="modal"
                data-bs-target="#addHospital"
              >
                Add /Edit View
              </button>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={BadgeCert} alt="badge" className="me-2" />
                <h3 className="mb-0">Pharmacy Certificate</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 mt-3">
                <img src={HospBadge} alt="hospbadge" />
              </div>
            </div>
            <div className="w-100 text-center mt-3">
              <button type="button" className="btn doaOrangeBtn px-3 py-2">
                Upload
              </button>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="mb-0">Pharmacy Address</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 mt-3">
                <img src={LocGreen} alt="locgreen" className="me-2" />
              </div>
              <div className="w-100 mt-3">
                <p className="mpText mb-0">A49, First Floor,</p>
                <p className="mpText mb-0">Indian Airlines Colony,</p>
                <p className="mpText mb-0">Begumpet, Hyderabad - 13</p>
              </div>
            </div>
            <div className="w-100 text-center mt-3">
              <Link to="/AddEditSetlocation">
                <button type="button" className="btn doaOrangeBtn px-3 py-2">
                  Add/Edit
                </button>
              </Link>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={Alarm} alt="alarm" className="me-2" />
                <h3 className="mb-0">OPD Timings</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 mt-2 overflow-auto">
                <table className="w-100">
                  <tbody>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">9:30 AM</td>
                      <td className="mpText py-2">12:30 PM</td>
                    </tr>
                    <tr
                      style={{ borderBottom: "1px solid #cecece !important" }}
                    >
                      <td className="mpText pe-2 py-2">1:30 AM</td>
                      <td className="mpText py-2">8:30 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*table-ends-here*/}
            </div>
            <div className="w-100 text-center mt-3">
              <button
                type="button"
                className="btn doaOrangeBtn px-3 py-2"
                data-bs-toggle="modal"
                data-bs-target="#addHT"
              >
                Add/Edit
              </button>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}

          {/*draCard2-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={UserGreen} alt="usergreen" className="me-2" />
                <h3 className="mb-0">About Pharmacy</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 mt-3">
                <p className="mpText mb-0">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacusaccumsa et viverra justo commodo. Proin sodales
                    pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                    parturient montesnascetur ridiculus mus. Nam fermentum…
                  </span>
                </p>
              </div>
              {/*text-ends-here*/}
            </div>
            <div className="w-100 text-center mt-3">
              <Link to="/AddEditAboutme">
                <button type="button" className="btn doaOrangeBtn px-3 py-2">
                  Add/Edit
                </button>
              </Link>{" "}
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}

          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={SocLinks} alt="links" className="me-2" />
                <h3 className="mb-0">Social Links</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                <div className="me-2">
                  <img src={Facebook} alt="facebook" />
                </div>
                <div>
                  <p className="mpText mb-0">facebook.com/venu-pisup…</p>
                </div>
              </div>
              <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                <div className="me-2">
                  <img src={Twitter} alt="twitter" />
                </div>
                <div>
                  <p className="mpText mb-0">twitter.com/venu123</p>
                </div>
              </div>
              <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                <div className="me-2">
                  <img src={Linkedin} alt="linkedin" />
                </div>
                <div>
                  <p className="mpText mb-0">Linkedin.com/profile/ven…</p>
                </div>
              </div>
            </div>
            <div className="w-100 text-center mt-3">
              <Link to="/AddEditSocialLinks">
                <button
                  type="button"
                  className="btn doaOrangeBtn px-3 py-2"
                  onclick="location.href='dr-add-edit-social-links.html';"
                >
                  Add/Edit
                </button>
              </Link>{" "}
            </div>
            {/*button-ends-here*/}
          </div>
          {/*draCard2-ends-here*/}

          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={Badge} alt="badge" className="me-2" />
                <h3 className="mb-0">Our Offers</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                <div className="w-100 f16sb">5</div>
              </div>
              {/*circle-ends-here*/}
              <div className="w-100 d-flex align-items-center justify-content-center mt-4">
                <Link to="/PharmaOffersList">
                  <button type="button" className="btn doacBtn me-3">
                    View
                  </button>
                </Link>
                <Link to="/PharmaAddOffer">
                  <button type="button" className="btn doaOrangeBtn">
                    +Add
                  </button>
                </Link>
              </div>
              {/*flexbox-ends-here*/}
            </div>
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard2 p-3 m-2">
            <div style={{ height: 340 }}>
              <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <img src={SocialLinks} alt="social" className="me-2" />
                <h3 className="mb-0">Home Delivery Settings</h3>
              </div>
              {/*doacTitle-ends-here*/}
              <table className="w-100 mt-3">
                <tbody>
                  <tr>
                    <td className="pb-2">
                      <label className="form-check-label" htmlFor="da">
                        Home Delivery Availability
                      </label>
                    </td>
                    <td className="pb-2">
                      <div className="form-check form-switch mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="da"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="mpText pb-2">
                      Delivery Radius from Pharmacy (km)
                    </td>
                    <td className="pb-2">
                      <input className="form-control" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td className="mpText pb-2">Delivery Charges</td>
                    <td className="pb-2">
                      <input className="form-control" type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}

      <div>
        {/*modals-starts-here*/}
        <div
          className="modal fade show"
          id="addEdit"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-chevron-left me-2" />
                  Add / Edit Admin
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="w-100">
                  <div className="mpText w-100 mb-2">* First Name</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Last Name</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Designation</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Mobile</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Email</div>
                  <input className="form-control w-100" type="email" required />
                  <button
                    type="submit"
                    className="btn doacBtn d-block px-4 mx-auto mt-4"
                  >
                    Save
                  </button>
                </form>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-addEdit-ends-here*/}
        <div
          className="modal fade show"
          id="addHospital"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-chevron-left me-2" />
                  Add PharmacyDetails
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="w-100">
                  <div className="mpText w-100 mb-2">* PharmacyName</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">
                    * Registration No.
                  </div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Phone 1</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Phone 2</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Email</div>
                  <input className="form-control w-100" type="email" required />
                  <button
                    type="submit"
                    className="btn doacBtn d-block px-4 mx-auto mt-4"
                  >
                    Save
                  </button>
                </form>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-addHospital-ends-here*/}
        <div
          className="modal fade show"
          id="addHT"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-chevron-left me-2" />
                  Add PharmacyTimings
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="w-100 overflow-auto">
                  <table className="w-100">
                    <tbody>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText pe-2 py-2">
                          Mon - Sat: 7:00 am to 1:00 PM
                        </td>
                        <td className="py-2 text-end">
                          <a href="#">
                            <img src={TrashGreen} alt="green" />
                          </a>
                        </td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText pe-2 py-2">
                          Mon - Sat: 4:00 pm to 7:00 PM
                        </td>
                        <td className="py-2 text-end">
                          <a href="#">
                            <img src={TrashGreen} alt="green" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*table-ends-here*/}
                <div
                  className="mt-3 p-3"
                  style={{
                    background: "#F1F1F1",
                    borderRadius: "6px !important",
                  }}
                >
                  <div className="abFormGroup w-100 overflow-auto">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Mon"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Mon">
                      Mon
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Tue"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Tue">
                      Tue
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Wed"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Wed">
                      Wed
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Thu"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Thu">
                      Thu
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Fri"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Fri">
                      Fri
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Sat"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Sat">
                      Sat
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="Sun"
                      autoComplete="off"
                    />
                    <label className="btn bg-white py-1 px-3 m-1" htmlFor="Sun">
                      Sun
                    </label>
                  </div>
                  <div className="w-100 d-flex align-items-end mt-3">
                    <div style={{ width: "31%", margin: "0% 1%" }}>
                      <div className="mpText w-100 mb-1">* From Time</div>
                      <input
                        className="form-control w-100"
                        type="text"
                        required
                      />
                    </div>
                    <div style={{ width: "31%", margin: "0% 1%" }}>
                      <div className="mpText w-100 mb-1">* To Time</div>
                      <input
                        className="form-control w-100"
                        type="text"
                        required
                      />
                    </div>
                    <div style={{ width: "31%", margin: "0% 1%" }}>
                      <button type="button" className="btn btn-sm doaOrangeBtn">
                        Add
                      </button>
                    </div>
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*graybox-ends-here*/}
                <button type="submit" className="btn doacBtn w-100 mt-4">
                  Save
                </button>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-addHT-ends-here*/}
      </div>
    </div>
  );
}
