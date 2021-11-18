import React, { Component } from 'react';
import Camcorder from '../../images/camcorder-sm.png';
import Profile1 from '../../images/profile-1.png';
import location from '../../images/location-sm-green.png';
import SmallImg from '../../images/small-image.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Phone from '../../images/phone.png';

export default function ConfirmVideocall(){
   
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Phone} alt="cam" className="me-2" />
      <h3 className="mb-0">Confirm Audio Appointment</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 doaInfo d-flex align-items-center mt-3 p-3">
      <div className="doaProfile me-4">
        <img src={Profile1} alt="profile" />
      </div>
      {/*doaProfile-ends-here*/}
      <div className="doaText">
       
        <a href="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></a>
        <h4 className="mb-0">General Physician</h4>
        <div className="d-flex align-items-center">
          <img src={location} alt="Location" className="me-2" />
          <h5 className="mb-0">Begumpet, Hyderabad</h5>
        </div>
      </div>
      {/*doaText-ends-here*/}
    </div>
    {/*doaInfo-ends-here*/}
    <div className="w-100 doaInfo d-flex align-items-center justify-content-evenly mt-2 p-3">
      <div className="doaDay">
        11 April
      </div>
      <div className="doaDay">
        SUN
      </div>
      <div className="doaDay">
        10:30 PM
      </div>
    </div>
    {/*doaInfo-ends-here*/}
    <div className="doaDuration w-100 mt-3">
      Duration: 15 mins
    </div>
    <div className="doaDuration w-100 mt-2 pb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
      Fees: <span>₹</span>500
    </div>
    <div className="doaDuration w-100 mt-3">
      Appointment for
    </div>
    <div className="w-100 d-flex align-items-center mt-3 pb-3" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
      <div className="me-2">
        <img src={SmallImg} alt="img" />
      </div>
      <div>
        <div className="doaNText">
          Vinod
        </div>
        <div className="doaDuration mt-1">
          Male, 24 Years
        </div>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 text-end mt-3">
     <Link to="/PaymentModes2"> <button type="submit" className="btn doacBtn">Confirm &amp; Pay</button></Link>
    </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
