import React, { Component } from 'react';
import Computer from '../../images/computer.png';
import Calendar from '../../images/calender.png';
import Search from '../../images/search.png';
import LocationGreen from '../../images/location-sm-green.png';
import Like from '../../images/like.png';
import Camcorder from '../../images/camcorder.png';
import Phone from '../../images/phone.png';
import Profile3 from '../../images/profile-3.png';
import { useHistory } from 'react-router-dom';
import Location from '../../images/location.png';
import ArrowBk from '../../images/arrow-back.png';
import Filter from '../../images/filter.png';
import FilterGreen from '../../images/filter-green.png';
import BackBtn from '../../images/back-button-new.png';
import Gps from '../../images/gps.png';
import Teal from  '../../images/ellipse-teal-lg.png';
import Usergreen from '../../images/user-green.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BookAppointmentHospDrList() {
    const history = useHistory();
        return (
            <div>
                <div>
                  <div className="container sortingCnt p-2 my-3">
  <div className="btn-group rbGroup m-2" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"  />
    <label className="btn rBtnOrange" htmlFor="btnradio1"><img src={Computer} alt="computer" className="me-2" />Doctors ONLINE NOW</label>
    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" defaultChecked/>
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
  
 
</div>
{/*sorting-container-ends-here*/}



<div className="container doctorsCnt p-2 my-3">

<div className="d-flex flex-wrap align-items-center">
     
      
      {/*btdrBtn-ends-here*/}
      <div className="sdrText1 m-2 d-flex flex-wrap justify-content-start align-items-center">
       <img src={BackBtn} alt="back" onClick={() => history.goBack()}/> Hospital Name - Select Dr &amp; Book Appointment

      
      </div>
      {/*sdrText11-ends-here*/}
     
    
    </div>
    {/*flexbox-ends-here*/}
    <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline">
      <div className="drOnlineCard2 m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={Like} alt="like" /></a>
        </div>
        <Link to="/DrPatientProfileView">
            <div className="text-center w-100 drLogo">
                <img src={Profile3} alt="profile" />
        </div></Link>
        <div className="text-center w-100 drStatus">
              <img src={Teal} alt="teal" />
            </div>
            <div className="text-center w-100 mb-3 drsText">
              <h3 className="mb-0">Dr.IN</h3>
              <h4 className="mb-0">At Hospital</h4>
            </div>

            <div className="w-100 drName">
                <h5 className="fn3 mb-0">
                <a href="#">Hospital Name here</a>
                </h5>
            </div>  


        <div className="w-100 mb-2  drName">
          <Link to="/DrPatientProfileView"><h3 className="mb-0">Doctor name</h3></Link>
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
        <div className="text-center w-100 drcHeadBook mb-3">
              <h3>Book Appointment</h3>
            </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
         
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder" onClick={ () => { history.push("/BookVideoAppoinment");}} />
              <p className="mt-2 mb-0">₹500</p>
            </div>
         
           
            <div className="text-center">
              <img src={Phone} alt="phone" onClick={ () => { history.push("/BookAudioAppointment");}} />
              <p className="mt-2 mb-0">₹400</p>
            </div>
           

                <div className="text-center">
                    <img src={Usergreen} alt="green" onClick={ () => {history.push("/BookInPersonAppointment")}} />
                <p className="mt-2 mb-0">₹700</p>
            </div>
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
        
        <div className="w-100 mb-2 mt-5 drName">
        <div className="w-100 drName">
                <h5 className="fn3 mb-0">
                <a href="#">Hospital Name here</a>
                </h5>
            </div>  
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
        <div className="text-center w-100 drcHeadBook mb-3">
              <h3>Book Appointment</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
         
         <div className="text-center me-2">
           <img src={Camcorder} alt="camcorder" onClick={ () => { history.push("/LoginOtp");}} />
           <p className="mt-2 mb-0">₹500</p>
         </div>
      
         <Link to="/DrOnlineAppointment">
         <div className="text-center">
           <img src={Phone} alt="phone" />
           <p className="mt-2 mb-0">₹400</p>
         </div>
         </Link>

             <div className="text-center">
                 <img src={Usergreen} alt="green" />
             <p className="mt-2 mb-0">₹700</p>
         </div>
     </div>
      </div>
      {/*drOnlineCard-ends-here*/}
      <div className="drOnlineCard2 m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={Like} alt="like" /></a>
        </div>
        <Link to="/DrPatientProfileView">
            <div className="text-center w-100 drLogo">
                <img src={Profile3} alt="profile" />
        </div></Link>
        <div className="text-center w-100 drStatus">
              <img src={Teal} alt="teal" />
            </div>
            <div className="text-center w-100 mb-3 drsText">
              <h3 className="mb-0">Dr.IN</h3>
              <h4 className="mb-0">At Hospital</h4>
            </div>
        <div className="w-100 mb-2 mt-3 drName">
        <div className="w-100 drName">
                <h5 className="fn3 mb-0">
                <a href="#">Hospital Name here</a>
                </h5>
            </div>  
          <Link to="/DrPatientProfileView"><h3 className="mb-0">Doctor name</h3></Link>
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
        <div className="text-center w-100 drcHeadBook mb-3">
              <h3>Book Appointment</h3>
            </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
         
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder" onClick={ () => { history.push("/LoginOtp");}} />
              <p className="mt-2 mb-0">₹500</p>
            </div>
         
            <Link to="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} alt="phone" />
              <p className="mt-2 mb-0">₹400</p>
            </div>
            </Link>

                <div className="text-center">
                    <img src={Usergreen} alt="green" />
                <p className="mt-2 mb-0">₹700</p>
            </div>
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
        
        <div className="w-100 mb-2 mt-5 drName">
        <div className="w-100 drName">
                <h5 className="fn3 mb-0">
                <a href="#">Hospital Name here</a>
                </h5>
            </div>  
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
        <div className="text-center w-100 drcHeadBook mb-3">
              <h3>Book Appointment</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
         
         <div className="text-center me-2">
           <img src={Camcorder} alt="camcorder" onClick={ () => { history.push("/LoginOtp");}} />
           <p className="mt-2 mb-0">₹500</p>
         </div>
      
         <Link to="/DrOnlineAppointment">
         <div className="text-center">
           <img src={Phone} alt="phone" />
           <p className="mt-2 mb-0">₹400</p>
         </div>
         </Link>

             <div className="text-center">
                 <img src={Usergreen} alt="green" />
             <p className="mt-2 mb-0">₹700</p>
         </div>
     </div>
      </div>
      {/*drOnlineCard-ends-here*/}
    </div>
    {/*flexbox-ends-here*/}

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

<div className="modal fade" id="cityTown" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">By City/Town/Dist</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div class="container">
            <div className="row">
                <div className="col-md-5">
                <form className="w-100">
                    <div className="mpText w-100 mb-2">Enter City/Town/Dist</div>
                    <input className="form-control w-100" type="text"  required />
                    </form>
                </div>

                <div className="col-md-5">
                <form className="w-100">
                    <div className="mpText w-100 mb-2">Enter Locality</div>
                    <input className="form-control w-100" type="text" required />
                    </form>
                </div>

                <div className="col-md-2">
                
                    
                                       <button type="button" className="doacBtn py-2 mt-4l px-3">OK</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*modals-ends-here*/}

<div className="modal fade" id="pincode" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">By Pincode</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div class="container">
            <div className="row">
                <div className="col-md-10">
                <form className="w-100">
                    <div className="mpText w-100 mb-2">Enter Pincode</div>
                    <input className="form-control w-100" type="text"  required />
                    </form>
                </div>

               

                <div className="col-md-2">
                
                    
                                       <button type="button" className="doacBtn py-2 mt-4l px-3">OK</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*modals-ends-here*/}

<div className="modal fade" id="mandalVillage" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">By Mandal/Village</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div class="container">
            <div className="row">
                <div className="col-md-5">
                <form className="w-100">
                    <div className="mpText w-100 mb-2">Enter Mandal/Village</div>
                    <input className="form-control w-100" type="text"  required />
                    </form>
                </div>

                <div className="col-md-5">
                <form className="w-100">
                    <div className="mpText w-100 mb-2">Enter Locality</div>
                    <input className="form-control w-100" type="text" required />
                    </form>
                </div>

                <div className="col-md-2">
                
                    
                                       <button type="button" className="doacBtn py-2 mt-4l px-3">OK</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*modals-ends-here*/}

<div className="modal fade" id="Nearby" tabIndex={-1} aria-labelledby="Nearby" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="Nearby">Show NearBy</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div class="container">
            <div className="row">
                <div className="col-md-12">
                
                <div className="w-100 d-flex align-items-center justify-content-between border py-3 px-3 my-2">
                    
                    <div>
                        <p className="doaNText mb-0">Set your current Location</p>
                        </div>

                        <div className="me-2">
                        <img src={Gps} alt="Gps" />
                    </div>
                    </div>

                    

                
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*modals-ends-here*/}
    
    {/*flexbox-ends-here*/}
  </div>
{/*doctors-container-ends-here*/}
            </div>
            </div>
        );
    }
