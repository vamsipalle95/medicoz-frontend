import React, { Component } from 'react';
import Like from '../../images/doctoModule/like.png';
import Profile from '../../images/doctoModule/profile-1.png';
import EllispeGreen from '../../images/doctoModule/ellipse-green.png';
import LocsmGreen from '../../images/doctoModule/location-sm-green.png';
import Camcorder from '../../images/doctoModule/camcorder.png';
import yashoda from '../../images/doctoModule/yashoda.jpg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Backbt from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function HopsitalViewDoctors() {
    const history = useHistory();
        return (
            <div>
                {/*flexbox-ends-here*/}

                <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
     <img img onClick={() => history.goBack()} src={Backbt} alt="backbtn" /> Hospital Name - Doctor Slots
    </div>
    {/*doaNText-ends-here*/}
  </div>
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='greenm' />
      </div>
      <div className="text-center w-100">
        <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
        <h4 className="mb-0 f10m">At Hospital</h4>
        <h4>&nbsp;&nbsp;</h4>
      </div>
      <div className="w-100 mb-2 drName">
      <h2 className="mb-0 textBlue">Hospital Name</h2>
        <a href="/"><h3 className="mb-0">Doctor name</h3></a>
        <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
      </div>
      <div className="w-100 mb-2 drSp">
        <h3 className="mb-0">General Physician</h3>
        <h4 className="mb-0">Experience: 12 Years</h4>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>

      <div className="text-center w-100 drcHead1 mb-3"><h3>Book Appointment</h3></div>


      <div className="w-100 d-flex justify-content-between align-items-center mt-3">
        <Link to="/SignleSlotBookingByRp" className="text-decoration-none">
          <div className="text-center me-2">
            <h3 className="f10m" >Single Slot</h3>
            <img src={Camcorder} alt="camcorder"/>
            <p className="mb-0 f10m">₹500</p>
          </div>
        </Link>
       <button type="button" className="btn txt-fnt" data-bs-toggle="modal" data-bs-target="#viewSlots">Book Bulk Slots</button>
       
      </div>
      <Link to="/SelectTokenBookSlot"> <p>Dev:clickhere</p></Link>
    </div>
    {/*drOnlineCard-ends-here*/}
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
    <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='greenm' />
      </div>
      <div className="text-center w-100">
        <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
        <h4 className="mb-0 f10m">At Hospital</h4>
        <h4>&nbsp;&nbsp;</h4>
      </div>
      <div className="w-100 mb-2 drName">
      <h2 className="mb-0 textBlue">Hospital Name</h2>
        <a href="/"><h3 className="mb-0">Doctor name</h3></a>
        <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
      </div>
      <div className="w-100 mb-2 drSp">
        <h3 className="mb-0">General Physician</h3>
        <h4 className="mb-0">Experience: 12 Years</h4>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>

      <div className="text-center w-100 drcHead1 mb-3"><h3>Book Appointment</h3></div>
      <div className="w-100 text-center mt-3">
      <Link to="/SignleSlotBookingByRp" className="text-decoration-none">    
          <div className="text-center me-2">
          <h3 className="f10m text-decoration-none" >Single Slot</h3>
            <img src={Camcorder} alt="camcorder" />
            <p className="mb-0 f10m">₹500</p>
          </div>
        </Link>
      </div>
    </div>
    {/*drOnlineCard-ends-here*/}
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
    <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='greenm' />
      </div>
      <div className="text-center w-100">
        <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
        <h4 className="mb-0 f10m">At Hospital</h4>
        <h4>&nbsp;&nbsp;</h4>
      </div>
      <div className="w-100 mb-2 drName">
      <h2 className="mb-0 textBlue">Hospital Name</h2>

        <a href="/"><h3 className="mb-0">Doctor name</h3></a>
        <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
      </div>
      <div className="w-100 mb-2 drSp">
        <h3 className="mb-0">General Physician</h3>
        <h4 className="mb-0">Experience: 12 Years</h4>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>

      <div className="text-center w-100 drcHead1 mb-3"><h3>Book Appointment</h3></div>
      <div className="w-100 text-center mt-3">
      <Link to="/SignleSlotBookingByRp" className="text-decoration-none">    
          <div className="text-center me-2">
          <h3 className="f10m text-decoration-none" >Single Slot</h3>
            <img src={Camcorder} alt="camcorder" />
            <p className="mb-0 f10m">₹500</p>
          </div>
        </Link>
      </div>
    </div>
    {/*drOnlineCard-ends-here*/}
    
    
  </div>
  {/*flexbox-ends-here*/}    
            </div>
        );
    }
