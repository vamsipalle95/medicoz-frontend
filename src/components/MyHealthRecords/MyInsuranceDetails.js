import React, { Component } from "react";
import SearchGreen from "../../images/search-green.png";
import FilterGreen from "../../images/filter-green.png";
import TexDocument from "../../images/TextDocument.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Person from "../../images/person.png";
import Backbt from "../../images/back-button-new.png";
import Download from "../../images/download.png";

function MyInsuranceDetails() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto p-md-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
          <h1 className="mpTitle me-3">
            {" "}
            <img
              onClick={() => history.goBack()}
              src={Backbt}
              alt="btnback"
            />{" "}
            My Insurance Details
          </h1>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
          <div className="doaNText me-3">Select Member</div>
          {/*doaNText-ends-here*/}
          <select className="form-select w-auto obSelect">
            <option selected>Srinivas</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          {/*select-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap align-items-baseline mt-4 p-3 p-md-0">
          <div>
            <Link to="/AddInsuranceDetails">
              <button type="button" className="btn doaOrangeBtn">
                + Add New
              </button>
            </Link>
          </div>
          <div className="ms-3 ms-sm-auto me-3">
            <a href="/">
              <img src={SearchGreen} alt="serach" />
            </a>
          </div>
          {/*search-ends-here*/}
          <div className="dropdown">
            <div>
              <div
                className="filter-cls dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={FilterGreen} alt="filtergreen" />
              </div>
              <ul
                className="dropdown-menu txtul"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item">Date</a>
                </li>
                <li>
                  <a className="dropdown-item">Name</a>
                </li>
              </ul>
            </div>
          </div>
          {/*filter-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
          <div className="mpCard p-3 m-2">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="grayTextBox mb-4">Srinivas</div>
              <div className="previewCls mx-3">
                <p
                  className="doaNText1"
                  data-bs-toggle="modal"
                  data-bs-target="#ViewInsuranceDetails"
                >
                  View
                </p>
              </div>
            </div>
            {/*grayTextBox-ends-here*/}
            <div className="w-100">
              <p className="mpText mb-1">
                <span>Mediclaim/Life Insurance</span>
              </p>

              <p className="mpText mb-1">
                <span>Star Health Insurance</span>
              </p>

              <p className="mpText mb-1">
                <span>Policy No: 12548541</span>
              </p>
              <div
                className="mb-3 pb-2"
                style={{ borderBottom: "1px solid #CECECE !important" }}
              >
                <p className="mpText mb-0 me-3">
                  Policy Start Date: 01/04/2021
                </p>
                <p className="mpText mb-0 me-3">Policy End Date: 31/03/2022</p>
              </div>
            </div>
            {/*text-ends-here*/}
            <div className="d-flex align-items-center w-100 mt-3">
              <button
                type="button"
                className="btn doacBtn px-3 py-1"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                View Certificate
              </button>
              <a
                href="/AddInsuranceDetails"
                className="viewMore text-decoration-none ms-auto"
              >
                Edit
              </a>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*card-ends-here*/}
          <div className="mpCard p-3 m-2">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="grayTextBox mb-4">Srinivas</div>
              <div className="previewCls mx-3">
                <p
                  className="doaNText1"
                  data-bs-toggle="modal"
                  data-bs-target="#ViewInsuranceDetails"
                >
                  View
                </p>
              </div>
            </div>
            {/*grayTextBox-ends-here*/}
            <div className="w-100">
              <p className="mpText mb-1">
                <span>Mediclaim/Life Insurance</span>
              </p>

              <p className="mpText mb-1">
                <span>Star Health Insurance</span>
              </p>

              <p className="mpText mb-1">
                <span>Policy No: 12548541</span>
              </p>
              <div
                className="mb-3 pb-2"
                style={{ borderBottom: "1px solid #CECECE !important" }}
              >
                <p className="mpText mb-0 me-3">
                  Policy Start Date: 01/04/2021
                </p>
                <p className="mpText mb-0 me-3">Policy End Date: 31/03/2022</p>
              </div>
            </div>
            {/*text-ends-here*/}
            <div className="d-flex align-items-center w-100 mt-3">
              <button
                type="button"
                className="btn doacBtn px-3 py-1"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                View Certificate
              </button>
              <a
                href="/AddInsuranceDetails"
                className="viewMore text-decoration-none ms-auto"
              >
                Edit
              </a>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*card-ends-here*/}
          <div className="mpCard p-3 m-2">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="grayTextBox mb-4">Srinivas</div>
              <div className="previewCls mx-3">
                <p
                  className="doaNText1"
                  data-bs-toggle="modal"
                  data-bs-target="#ViewInsuranceDetails"
                >
                  View
                </p>
              </div>
            </div>
            {/*grayTextBox-ends-here*/}
            <div className="w-100">
              <p className="mpText mb-1">
                <span>Mediclaim/Life Insurance</span>
              </p>

              <p className="mpText mb-1">
                <span>Star Health Insurance</span>
              </p>

              <p className="mpText mb-1">
                <span>Policy No: 12548541</span>
              </p>
              <div
                className="mb-3 pb-2"
                style={{ borderBottom: "1px solid #CECECE !important" }}
              >
                <p className="mpText mb-0 me-3">
                  Policy Start Date: 01/04/2021
                </p>
                <p className="mpText mb-0 me-3">Policy End Date: 31/03/2022</p>
              </div>
            </div>
            {/*text-ends-here*/}
            <div className="d-flex align-items-center w-100 mt-3">
              <button
                type="button"
                className="btn doacBtn px-3 py-1"
                data-bs-toggle="modal"
                data-bs-target="#view"
              >
                View Certificate
              </button>
              <a
                href="/AddInsuranceDetails"
                className="viewMore text-decoration-none ms-auto"
              >
                Edit
              </a>
            </div>
            {/*button-ends-here*/}
          </div>
          {/*card-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*modal-view-starts-here*/}
      <div className="modal fade" id="view" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Insurance Certificate
              </h5>
              <span>
                <img src={Download} className="ml-16" alt="download" />
              </span>
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

      {/*modal-patientProfile-starts-here*/}
      <div className="modal fade" id="popup2" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">
                <img src={Person} alt="persom" className="me-2" />
                Doctor Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">UID</div>
                <div className="f10m w-50">123456789</div>
              </div>

              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Dr.Name</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>

              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Dr.Speciality</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>

              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">at Hospital/Clinic Name</div>
                <div className="f10m w-50">12345 12345</div>
              </div>

              <button
                type="button"
                className="btn d-block ms-auto mt-4 doacBtn"
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-patientProfile-ends-here*/}

      {/*myPhoneCardCnt-ends-here*/}
      {/*container-ends-here*/}

      {/*modal-patientProfile-starts-here*/}
      <div
        className="modal fade"
        id="ViewInsuranceDetails"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">
                <img src={Person} alt="person" className="me-2" />
                View Insurance Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Type Of Insurace</div>
                <div className="f10m w-50">123456789</div>
              </div>

              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Insurance Co. Name</div>
                <div className="f10m w-50">MED13547C</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Policy Number</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Policy Start Date</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Policy End Date</div>
                <div className="f10m w-50">Lorem ipsum</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Premium Amount(₹)</div>
                <div className="f10m w-50">24</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Premium Payable Basis</div>
                <div className="f10m w-50">12345 12345</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Policy Coverage Amount(₹)</div>
                <div className="f10m w-50">Hyderabad</div>
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">No.of Memebers Covered</div>
                <div className="f10m w-50" />
              </div>
              {/*flexbox-ends-here*/}
              <div
                className="w-100 d-flex align-items-center py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <div className="f10mTeal w-50">Covered Member Names</div>
                <div className="f10m w-50">Begumpet</div>
              </div>
              {/*flexbox-ends-here*/}

              {/*flexbox-ends-here*/}
              <button
                type="button"
                className="btn d-block ms-auto mt-4 doacBtn"
                data-bs-dismiss="modal"
              >
                close
              </button>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-patientProfile-ends-here*/}
    </div>
  );
}

export default MyInsuranceDetails;
