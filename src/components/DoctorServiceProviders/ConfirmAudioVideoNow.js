import React, { Component } from 'react';
import Camcorder from '../../images/camcorder-sm.png';
import Profile1 from '../../images/profile-1.png';
import location from '../../images/location-sm-green.png';
import Backbt from '../../images/back-button-new.png';
import SmallImg from '../../images/small-image.png';
import {useHistory} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ConfirmAudioVideoNow() {
  
    const history = useHistory();
    return (
        <div>
               <div className="container px-2">
  <div className="draCard3  me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
    <img onClick={() => history.goBack()} src={Backbt} alt="backbtn" /><img src={Camcorder} alt="cam" className="me-2" />
      <h3 className="mb-0">Confirm Video Appointment</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 doaInfo d-flex align-items-center mt-3 p-3">
      <div className="doaProfile me-4">
        <img src={Profile1} alt="profile" />
      </div>
      {/*doaProfile-ends-here*/}
      <div className="doaText">
        <a href="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></a>
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

    <div className="w-100 mx-auto">
        <h3 className="doacTitle1 mt-2 text-center">Token - 1</h3>
    </div>
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
    <span>Duration:</span> <span className="ml-2"> 15 mins</span>
    </div>
    <div className="doaDuration d-flex flex-wrap justify-content-between w-100 mt-2 pb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
      <div>Doctor Fees</div> <div>: ₹ 5000</div>
    </div>

    <div className="doaDuration d-flex flex-wrap justify-content-between w-100 mt-2 pb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
    <div>My Fees (30% of Dr.Fees)</div> <div>: ₹ 1500 </div>
    </div>

    <div className=" orange_xt d-flex flex-wrap justify-content-between w-100 mt-2 pb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
    <div>Collect Total Fees from Patient</div> <div>: ₹ 6500</div>
      
    </div>

    <div className="doaDuration w-100 mt-2 pb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
     * You Pay to Doctor  <span>: ₹</span> 5000
    </div>
    <div className="doaDuration w-100 mt-3">
      Appointment for Patient
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
    <div className="w-100 d-flex flex-wrap justify-content-between clorf4f4f4 mt-3  px-2 py-3">
    <div className="orange_xt mt-2 pb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
     You Pay to Doctor  <span>: ₹</span> 5000
    </div>
        <div>
            <Link to="/PaymentMode"> <button type="submit" className="btn p-1 doacBtn">Confirm &amp; Pay</button></Link>
        </div>
    </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}
        </div>
        );
    }



