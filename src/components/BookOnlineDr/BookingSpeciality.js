import React, { Component } from "react";
import MobileHand from "../../images/mobile-in-hand.png";
import Computer from "../../images/computer.png";
import Calendar from "../../images/calender.png";
import Search from "../../images/search.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class BookingSpeciality extends Component {
  render() {
    return (
      <div>
        <div className="container sortingCnt p-2 my-3">
          <div
            className="btn-group rbGroup m-2"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn rBtnOrange" htmlFor="btnradio1">
              <img src={Computer} alt="computer" className="me-2" />
              Doctors ONLINE NOW
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn rBtnOrange" htmlFor="btnradio3">
              <img src={Calendar} alt="calendar" className="me-2" />
              Book Appointment
            </label>
          </div>
          {/*btn-group-ends-here*/}
          <div className="irBtn m-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Individual Doctors
              </label>
            </div>
            {/* <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
      <label className="form-check-label" htmlFor="inlineRadio2">Hospitals</label>
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
      <label className="form-check-label" htmlFor="inlineRadio3">Clinics</label>
    </div> */}
          </div>
          {/*inline-radios-ends-here*/}
          <div className="d-flex flex-wrap align-items-center">
            <div className="input-group searchInput m-2">
              <span className="input-group-text">
                <img src={Search} alt="search" />
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search Specialities"
              />
            </div>
            {/*searchbar-ends-here*/}
            <div className="searchBtn m-2">
              <button type="button" className="btn">
                Search
              </button>
            </div>
            {/*search-button-ends-here*/}
          </div>
          {/*flexbox-ends-here*/}
        </div>
        {/*sorting-container-ends-here*/}

        <div className="container doctorsCnt p-2 my-3">
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-baseline">
            <div className="spgTitle w-100 m-3">Select Speciality</div>
            {/*spgTitle-ends-here*/}
            <div className="specialityCard p-3 m-3">
              <div className="w-100 d-flex align-items-center mb-2">
                <div className="spCardTitle">
                  <Link to="/DoctorsOnlineNow">
                    General physician
                    <br />
                    Second line
                  </Link>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  General physician
                  <br />
                  Second line
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  General physician
                  <br />
                  Second line
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  <a href="/">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  <a href="/">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  <a href="/">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  <a href="/">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  <a href="/">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
                  <a href="/">
                    General physician
                    <br />
                    Second line
                  </a>
                </div>
                {/*spCardTitle-ends-here*/}
                <div className="spCardIcon ms-auto">
                  <img src={MobileHand} alt="mobile" />
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
          </div>
          {/*flexbox-ends-here*/}
        </div>
        {/*doctors-container-ends-here*/}
      </div>
    );
  }
}

export default BookingSpeciality;
