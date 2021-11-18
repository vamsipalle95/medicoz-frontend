import React from "react";
import LocationSmGreen from "../../images/location-sm-green.png";
import FilterOrange from "../../images/flite-orange.png";
import Percentage from "../../images/percentage.png";
import TagOrange from "../../images/tag-orange.png";
import StarOrange from "../../images/star-orange.png";
import Clinic from "../../images/clinic.jpg";
import MyProfile from "../../images/my-profile.png";
import LocsmGreen from "../../images/location-sm-green.png";
import LocGreen from "../../images/location-green.png";
import Alarm from "../../images/alarm.png";
import CertificateBadge from "../../images/certificate-badge.png";
import HospitalCertificate from "../../images/hospital-certificate.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import BackBtn from "../../images/back-button-new.png";
import StarOutline from "../../images/star-outline.png";
import TexDocument from "../../images/TextDocument.jpg";

function LabUserOrderMedicines() {
  const history = useHistory();
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="w-100 d-flex flex-wrap align-items-center p-3 mb-2 mpGrayBox">
              <div className="mpTitle me-4 mb-2">
                <img
                  src={BackBtn}
                  alt="back"
                  onClick={() => history.goBack()}
                />
                Tesla Diagnostics
              </div>
              {/*doaNText-ends-here*/}
              <div className="f10m mb-2">
                <img src={LocationSmGreen} alt="green" className="me-2" />
                Begumpet, Hyderabad
              </div>
            </div>
            {/*graybox-ends-here*/}
            <div
              className="p-3"
              style={{ background: "#F2F7F7", borderRadius: 5 }}
            >
              <div className="w-100 d-flex flex-wrap align-items-center">
                <p className="f12sbTeal mb-2 me-4">
                  <img src={FilterOrange} alt="filter" className="me-2" />
                  Home Sample Collection Available
                </p>
                <p className="f12sbTeal mb-2 me-4">
                  <img src={Percentage} alt="percentage" className="me-2" />
                  Discount Upto 20%
                </p>
                <p className="mb-2 me-4">
                  <a href="#" className="f11sbBlue text-decoration-none">
                    <img src={TagOrange} alt="tage" className="me-2" />
                    Offers (2)
                  </a>
                </p>
                <p className="mb-2">
                  <Link to="/PharmaCustomerReviews">
                    <a href="#" className="f11sbBlue text-decoration-none">
                      <img src={StarOrange} alt="starorange" className="me-2" />
                      3/5 Rating
                    </a>
                  </Link>
                </p>
              </div>
              <div className="w-100 d-flex flex-wrap align-items-center">
                <p className="f10m mb-2 me-4">
                  Home Sample Collection within 3 KM FREE, within 8Km:{" "}
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    ₹
                  </span>
                  50/-
                </p>
                <p className="f10m mb-2">
                  Minimum order amount for home sample collection:{" "}
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    ₹
                  </span>
                  300/-
                </p>
              </div>
            </div>
            {/*light-green-box-ends-here*/}
            <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
              <nav>
                <div
                  className="nav nav-tabs border-0"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Order Tests
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#offers"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Offers
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    About the Lab
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="order"
                  role="tabpanel"
                >
                  <div className="w-100 overflow-auto mt-4">
                    <table className="w-100">
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
                          <td className="p-2" />
                          <td className="p-2 f10m">
                            Amount
                            <span
                              style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                              }}
                            >
                              (₹)
                            </span>
                          </td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
                          <td className="p-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Test Name"
                            />
                          </td>
                          <td className="p-2 f10m">
                            <span
                              style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                              }}
                            >
                              ₹
                            </span>
                            0.00
                          </td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
                          <td className="p-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Test Name"
                            />
                          </td>
                          <td className="p-2 f10m">
                            <span
                              style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                              }}
                            >
                              ₹
                            </span>
                            0.00
                          </td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
                          <td className="p-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Test Name"
                            />
                          </td>
                          <td className="p-2 f10m">
                            <span
                              style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                              }}
                            >
                              ₹
                            </span>
                            0.00
                          </td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
                          <td className="p-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Test Name"
                            />
                          </td>
                          <td className="p-2 f10m">
                            <span
                              style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                              }}
                            >
                              ₹
                            </span>
                            0.00
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-end">
                            <button
                              type="button"
                              className="btn doaOrangeBtn px-4"
                            >
                              Add
                            </button>
                          </td>
                          <td className="p-2 doaNText text-nowrap">
                            Total:{" "}
                            <span
                              style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                              }}
                            >
                              ₹
                            </span>
                            0.00
                            <br />
                            (Without discount)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3" colSpan={2} />
                        </tr>
                        <tr style={{ background: "#f1f1f1" }}>
                          <td className="p-4" colSpan={2}>
                            <div
                              className="input-group mt-4"
                              style={{ maxWidth: 700 }}
                            >
                              <input
                                type="search"
                                className="form-control rounded"
                                placeholder="Upload Prescription (optional)"
                              />
                              <button
                                className="btn doaOrangeBtn"
                                style={{ marginLeft: "-5px" }}
                                type="button"
                              >
                                Browse
                              </button>
                            </div>
                            <div className="text-nowrap mt-2">
                              <a
                                href="#vpf"
                                data-bs-toggle="modal"
                                className="f10mBlue text-decoration-none"
                              >
                                View Valid Prescription Format
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*table-ends-here*/}
                  <div className="w-100 text-end mt-4">
                    <Link to="/MedicinesHomeCollection">
                      <button type="button" className="btn doaOrangeBtn px-4">
                        Place Order
                      </button>
                    </Link>
                  </div>
                </div>
                {/*tabpane-1-ends-here*/}
                <div className="tab-pane fade" id="offers" role="tabpanel">
                  <div className="w-100 d-flex flex-wrap align-items-flex-start mt-3">
                    <div className="draCard1 m-2 p-3">
                      <div className="w-100 mpText mb-3">
                        Title of the offer goes here Lorem ipsum dore
                        consectetur adipiscing elit.
                      </div>
                      <div className="w-100 mpText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas quis sapien tristique, pellentesque velit ac,
                        pellentesque dolor. Sed lacinia bibendum eleifend. Nulla
                        commodo, ante vel venenatis laoreet, quam ex rhoncus
                        eros, non tincidunt metus ipsum scelerisque dui. Integer
                        erat dui, sodales eget magna sed, ullamcorper bibendum
                        leo. Donec non rutrum libero. Proin est sapien, egestas
                        ut viverra eget, commodo vitae ipsum. Donec et magna
                        quis tellus interdum dictum et non erat. Integer
                        ullamcorper ex arcu, volutpat accumsan quam sagittis at.
                        Etiam feugiat eros sed odio blandit gravida. Integer
                        ultrices non velit non eleifend.
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 m-2 p-3">
                      <img src={Clinic} alt="clinic" className="w-100" />
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 m-2 p-3">
                      <div className="w-100 mpText mb-3">
                        Title of the offer goes here Lorem ipsum dore
                        consectetur adipiscing elit.
                      </div>
                      <div className="w-100 mpText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas quis sapien tristique, pellentesque velit ac,
                        pellentesque dolor. Sed lacinia bibendum eleifend. Nulla
                        commodo, ante vel venenatis laoreet, quam ex rhoncus
                        eros, non tincidunt metus ipsum scelerisque dui. Integer
                        erat dui, sodales eget magna sed, ullamcorper bibendum
                        leo. Donec non rutrum libero. Proin est sapien, egestas
                        ut viverra eget, commodo vitae ipsum. Donec et magna
                        quis tellus interdum dictum et non erat. Integer
                        ullamcorper ex arcu, volutpat accumsan quam sagittis at.
                        Etiam feugiat eros sed odio blandit gravida. Integer
                        ultrices non velit non eleifend.
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-2-ends-here*/}
                <div className="tab-pane fade" id="about" role="tabpanel">
                  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle pb-2">
                        <h3 className="mb-0">About Lab</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mpText mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar sic tempor. Sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum…
                      </div>
                      {/*text-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={MyProfile} alt="profile" className="me-2" />
                        <h3 className="mb-0">Lab Details</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div
                        className="w-100 pt-3 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Name</div>
                        <div className="mpText mt-1">Friendly Lab</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Lab Registration No.</div>
                        <div className="mpText mt-1">12345 12345</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Phone 1</div>
                        <div className="mpText mt-1">12345 12345</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Phone 2</div>
                        <div className="mpText mt-1">12345 12345</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Email</div>
                        <div className="mpText mt-1">info@friendlylab.com</div>
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={LocsmGreen} alt="green" className="me-2" />
                        <h3 className="mb-0">Lab Address</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                        <div className="w-100 text-center">
                          <img src={LocGreen} alt="green" />
                        </div>
                      </div>
                      {/*circle-ends-here*/}
                      <div className="w-100 mpText text-center mt-3">
                        A49, First Floor, Indian Airlines Colony, Begumpet,
                        Hyderabad - 13
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={Alarm} alt="alaram" className="me-2" />
                        <h3 className="mb-0">Lab Timings</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mt-2 overflow-auto">
                        <table className="w-100">
                          <tbody>
                            <tr
                              style={{
                                borderBottom: "1px solid #cecece !important",
                              }}
                            >
                              <td className="mpText pe-2 py-2">9:30 AM</td>
                              <td className="mpText py-2">12:30 PM</td>
                            </tr>
                            <tr
                              style={{
                                borderBottom: "1px solid #cecece !important",
                              }}
                            >
                              <td className="mpText pe-2 py-2">1:30 AM</td>
                              <td className="mpText py-2">8:30 PM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*table-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img
                          src={CertificateBadge}
                          alt="badge"
                          className="me-2"
                        />
                        <h3 className="mb-0">Lab Certificate</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mt-3">
                        <img src={HospitalCertificate} alt="hospital" />
                      </div>

                      <div className="w-100 text-center mt-3">
                        <button
                          type="button"
                          className="btn doaOrangeBtn px-3 py-2"
                          data-bs-toggle="modal"
                          data-bs-target="#certificate"
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div style={{ height: 340 }}>
                        <Link to="/PharmaCustomerReviews">
                          {" "}
                          <div className="w-100 doacTitle pb-2">
                            <h3 className="mb-0">Ratings &amp; Reviews</h3>
                          </div>
                        </Link>
                        {/*doacTitle-ends-here*/}
                        <div className="w-100 mt-3">
                          <img src={StarOrange} alt="orange" className="me-2" />
                          <img src={StarOrange} alt="orange" className="me-2" />
                          <img src={StarOrange} alt="orange" className="me-2" />
                          <img src={StarOrange} alt="orange" className="me-2" />
                          <img src={StarOutline} alt="outline" />
                        </div>
                        <a
                          href="#"
                          className="w-100 f11sbBlue text-decoration-none"
                        >
                          10 Rating
                        </a>
                      </div>
                      <div className="w-100 text-center mt-3">
                        <button
                          type="button"
                          className="btn doaOrangeBtn px-3 py-2"
                          onclick="location.href='lab-landing-customer-ratings-reviews.html';"
                        >
                          View Ratings
                        </button>
                      </div>
                      {/*button-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-3-ends-here*/}
              </div>
              {/*tabs-ends-here*/}
            </div>
            {/*tabs-container-ends-here*/}
          </div>
          {/*col-ends-here*/}
          <div
            className="col-12 col-lg-2 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <ul className="timeline">
              <li className="active">
                <p className="f10m">Select Tests</p>
              </li>
              <li>
                <p className="f10m">Upload Prescription(optional)</p>
              </li>
              <li>
                <p className="f10m">Select Payment Mode</p>
              </li>
              <li>
                <p className="f10m">Place Order</p>
              </li>
              <li>
                <p className="f10m">Complete</p>
              </li>
            </ul>
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-ends-here*/}

      {/*modal-view-starts-here*/}
      <div
        className="modal fade"
        id="certificate"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Lab Certificate
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mpText w-100 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={1500}>
                    <img
                      src={TexDocument}
                      alt="txtdoc"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval={1500}>
                    <img
                      src={TexDocument}
                      alt="txtdoc"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval={1500}>
                    <img
                      src={TexDocument}
                      alt="txtdoc"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/*modal-body-ends-here*/}
          </div>
          {/*modal-content-ends-here*/}
        </div>
      </div>
      {/*modal-view-ends-here*/}
      {/*modals-ends-here*/}
    </div>
  );
}

export default LabUserOrderMedicines;
