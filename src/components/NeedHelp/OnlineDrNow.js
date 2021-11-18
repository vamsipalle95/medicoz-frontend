import React, { Component } from 'react';
import Computer from '../../images/computer.png';
import Calendar from '../../images/calender.png';
import Search from '../../images/search.png';
import Filter from '../../images/filter.png';
import ArrowBk from '../../images/arrow-back.png';
import Location from '../../images/location.png';
import Globe from '../../images/globe.png';
import Rupee from '../../images/rupee.png';
import Like from '../../images/like.png';
import Profile from '../../images/profile.png';
import EllipseGreen from '../../images/ellipse-green.png';
import LocationGreen from '../../images/location-sm-green.png';
import Camcorder from '../../images/camcorder.png';
import Phone from '../../images/phone.png';
import EllipseYellow from '../../images/ellipse-yellow.png';
import LikeMT from '../../images/like-empty.png';
import Profile3 from '../../images/profile-3.png';
import Profile4 from '../../images/profile-4.png';
import { useHistory } from 'react-router-dom';
import FilterGreen from '../../images/filter-green.png';

export default function OnlineDrNow() {
    const history = useHistory();
        return (
            <div>
                <div>
  <div className="container sortingCnt p-2 my-3">
    <div className="btn-group rbGroup m-2" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
    <label className="btn rBtnOrange" htmlFor="btnradio1"><img src={Computer} alt="com" className="me-2" />Doctors ONLINE NOW</label>
      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
      <label className="btn rBtnOrange" htmlFor="btnradio3"><img src={Calendar} alt="calendar" className="me-2" />Book Appointment</label>
    </div>
    {/*btn-group-ends-here*/}
    <div className="irBtn m-2">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked />
        <label className="form-check-label" htmlFor="inlineRadio1">Individual Doctors</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
        <label className="form-check-label" htmlFor="inlineRadio2">Hospitals</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
        <label className="form-check-label" htmlFor="inlineRadio3">Clinics</label>
      </div>
    </div>
    {/*inline-radios-ends-here*/}
    <div className="d-flex flex-wrap align-items-center">
      <div className="input-group searchInput m-2">
        <span className="input-group-text"><img src={Search} alt="search" /></span>
        <input type="search" className="form-control" />
      </div>
      {/*searchbar-ends-here*/}
      <div className="searchBtn m-2">
        <button type="button" className="btn">Search</button>
      </div>
      {/*search-button-ends-here*/}
      <div className="dropdown sortingDD m-2">
        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          By Location
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      {/*dropdown-ends-here*/}
      <div className="filterBtn m-2">
        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#filterModal"><img src={Filter} alt="filter" className="me-2" />More Filters</button>
      </div>
      {/*filter-button-ends-here*/}
    </div>
    {/*flexbox-ends-here*/}
  </div>
  {/*sorting-container-ends-here*/}
  <div className="container doctorsCnt p-2 my-3">
    <div className="d-flex flex-wrap align-items-center">
      <div className="btdrBtn m-2">
        <button type="button" className="btn"><img onClick={() => history.goBack()} src={ArrowBk}  alt="arrowbk" height="20px" /></button>
      </div>
      {/*btdrBtn-ends-here*/}
      <div className="sdrText m-2">
        Select &amp; Talk to Dr. Right Now
      </div>
      {/*sdrText-ends-here*/}
      <div className="iconBtn ms-2 ms-md-auto mt-2 mb-2 me-2">
        <button type="button" className="btn"><img src={Location} alt="loc" className="me-2" />Show Nearby</button>
      </div>
      {/*show-nearby-ends-here*/}
      <div className="iconBtn m-2">
        <button type="button" className="btn"><img src={Globe} alt="globe" className="me-2" />By Language</button>
      </div>
      {/*By-Language-ends-here*/}
      <div className="iconBtn m-2">
        <button type="button" className="btn"><img src={Rupee} alt="ruee" className="me-2" />By Fees</button>
      </div>
      {/*By-Fees-ends-here*/}
    </div>
    {/*flexbox-ends-here*/}
    <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline">
      <div className="drOnlineCard m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={Like} alt="like" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile3} alt="profile" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseGreen} alt="ellipseGreen" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online - Available Now</h3>
          <h4>&nbsp;&nbsp;</h4>
        </div>
        <div className="w-100 mb-2 drName">
          <a href="#"><h3 className="mb-0">Doctor name</h3></a>
          <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
        </div>
        <div className="w-100 mb-2 drSp">
          <h3 className="mb-0">General Physician</h3>
          <h4 className="mb-0">Experience: 12 Years</h4>
        </div>
        <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
          <img src={LocationGreen} alt="locgrenn" className="me-2" />
          <h3 className="mb-0">Begumpet, Hyderabad</h3>
        </div>
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder" />
              <p className="mt-2 mb-0">₹500</p>
            </div>
          </a>
          <a href="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} alt="phone" />
              <p className="mt-2 mb-0">₹400</p>
            </div>
          </a>
        </div>
      </div>
      {/*drOnlineCard-ends-here*/}
      <div className="drOnlineCard m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={Like} alt="like" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile3} alt="prifle" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseYellow} alt="ellipse yellow" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online -On call</h3>
          <h4 className="mb-0">Wait time: 15 Min</h4>
        </div>
        <div className="w-100 mb-2 drName">
          <a href="#"><h3 className="mb-0">Doctor name</h3></a>
          <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
        </div>
        <div className="w-100 mb-2 drSp">
          <h3 className="mb-0">General Physician</h3>
          <h4 className="mb-0">Experience: 12 Years</h4>
        </div>
        <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
          <img src={LocationGreen} alt="green" className="me-2" />
          <h3 className="mb-0">Begumpet, Hyderabad</h3>
        </div>
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder" />
              <p className="mt-2 mb-0">₹500</p>
            </div>
          </a>
          <a href="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} alt="phone" />
              <p className="mt-2 mb-0">₹400</p>
            </div>
          </a>
        </div>
      </div>
      {/*drOnlineCard-ends-here*/}
      <div className="drOnlineCard m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={LikeMT} alt="likemt" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile3} alt="profile3" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseYellow} alt="yelloiw" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online -On call</h3>
          <h4 className="mb-0">Wait time: 15 Min</h4>
        </div>
        <div className="w-100 mb-2 drName">
          <a href="#"><h3 className="mb-0">Doctor name</h3></a>
          <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
        </div>
        <div className="w-100 mb-2 drSp">
          <h3 className="mb-0">General Physician</h3>
          <h4 className="mb-0">Experience: 12 Years</h4>
        </div>
        <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
          <img src={LocationGreen} className="me-2" />
          <h3 className="mb-0">Begumpet, Hyderabad</h3>
        </div>
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder"/>
              <p className="mt-2 mb-0">₹500</p>
            </div>
          </a>
          <a href="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} alt='phone' />
              <p className="mt-2 mb-0">₹400</p>
            </div>
          </a>
        </div>
      </div>
      {/*drOnlineCard-ends-here*/}
      <div className="drOnlineCard m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={LikeMT} alt="likemt" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile4} alt="4" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseYellow} alt="y" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online -On call</h3>
          <h4 className="mb-0">Wait time: 15 Min</h4>
        </div>
        <div className="w-100 mb-2 drName">
          <a href="#"><h3 className="mb-0">Doctor name</h3></a>
          <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
        </div>
        <div className="w-100 mb-2 drSp">
          <h3 className="mb-0">General Physician</h3>
          <h4 className="mb-0">Experience: 12 Years</h4>
        </div>
        <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
          <img src={LocationGreen} className="me-2" />
          <h3 className="mb-0">Begumpet, Hyderabad</h3>
        </div>
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} />
              <p className="mt-2 mb-0">₹500</p>
            </div>
          </a>
          <a href="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} />
              <p className="mt-2 mb-0">₹400</p>
            </div>
          </a>
        </div>
      </div>
      {/*drOnlineCard-ends-here*/}
    </div>
    {/*flexbox-ends-here*/}
    
    {/*flexbox-ends-here*/}
  </div>

  {/*modal-filter-starts-here*/}
<div className="modal fade" id="filterModal" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel"><img src={FilterGreen} alt="green" className="me-2" />Apply filters</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="fmiTitle my-3">
          Doctor experience in years
        </div>
        {/*fmiTitle-ends-here*/}
        <form className="fmbGroup my-3">
          <input type="radio" className="btn-check" name="options" id="exp1" autoComplete="off" defaultChecked />
          <label className="btn" htmlFor="exp1">0-15</label>
          <input type="radio" className="btn-check" name="options" id="exp2" autoComplete="off" />
          <label className="btn" htmlFor="exp2">6-10</label>
          <input type="radio" className="btn-check" name="options" id="exp3" autoComplete="off" />
          <label className="btn" htmlFor="exp3">11-15</label>
          <input type="radio" className="btn-check" name="options" id="exp4" autoComplete="off" />
          <label className="btn" htmlFor="exp4">15+</label>
        </form>
        {/*fmbGroup-ends-here*/}
        <div className="fmiTitle my-3">
          Doctor fees
        </div>
        {/*fmiTitle-ends-here*/}
        <form className="fmbGroup my-3">
          <input type="radio" className="btn-check" name="options" id="fee1" autoComplete="off" />
          <label className="btn" htmlFor="fee1">100-500</label>
          <input type="radio" className="btn-check" name="options" id="fee2" autoComplete="off" />
          <label className="btn" htmlFor="fee2">500-1000</label>
          <input type="radio" className="btn-check" name="options" id="fee3" autoComplete="off" />
          <label className="btn" htmlFor="fee3">1000+</label>
        </form>
        {/*fmbGroup-ends-here*/}
        <div className="fmiTitle my-3">
          Doctor gender
        </div>
        {/*fmiTitle-ends-here*/}
        <form className="fmbGroup my-3">
          <input type="radio" className="btn-check" name="options" id="male" autoComplete="off" />
          <label className="btn" htmlFor="male">Male</label>
          <input type="radio" className="btn-check" name="options" id="female" autoComplete="off" />
          <label className="btn" htmlFor="female">Female</label>
        </form>
        {/*fmbGroup-ends-here*/}
        <div className="fmiTitle my-3">
          Language
        </div>
        {/*fmiTitle-ends-here*/}
        <form className="fmbGroup my-3">
          <input type="radio" className="btn-check" name="options" id="l1" autoComplete="off" />
          <label className="btn" htmlFor="l1">Hindi</label>
          <input type="radio" className="btn-check" name="options" id="l2" autoComplete="off" />
          <label className="btn" htmlFor="l2">English</label>
          <input type="radio" className="btn-check" name="options" id="l3" autoComplete="off" />
          <label className="btn" htmlFor="l3">Telugu</label>
        </form>
        {/*fmbGroup-ends-here*/}
      </div>
      {/*modal-body-ends-here*/}
      <div className="modal-footer border-0">
        <button type="button" className="btn fmaBtn">Apply</button>
      </div>
      {/*modal-footer-ends-here*/}
    </div>
  </div>
</div>
{/*modal-filter-ends-here*/}
{/*modals-ends-here*/}

  {/*doctors-container-ends-here*/}
</div>

            </div>
        );
    }
