import React, { Component } from 'react';
import Confirm from '../../images/confirm.png';
import profile from '../../images/profile-1-sm.png';
import Location from '../../images/location-sm-green.png';
import smallImg from '../../images/small-image.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ConfirmAppointment extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Confirm} alt="confirm" className="me-2" />
      <h3 className="mb-0">Confirm Appointment</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="doaNText w-100 mt-4">
      Video Conference Call
    </div>
    {/*doaNText-ends-here*/}
    <div className="w-100 doaInfo d-flex align-items-center mt-3 p-3">
      <div className="doaProfile me-4">
        <img src={profile} alt="profiel"/>
      </div>
      {/*doaProfile-ends-here*/}
      <div className="doaText">
        <a href="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></a>
        <a href="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></a>
        <h4 className="mb-0">General Physician</h4>
        <div className="d-flex align-items-center">
          <img src={Location} alt="location" className="me-2" />
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
    <div className="doaDuration w-100 mt-3 pb-3" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
      Duration of appointment 15 mins<br /><br />
      Fees: <span>₹</span>800+Conference Call Charges 150<br /><br />
      Total Fees: <span>₹</span>950
    </div>
    <div className="doaDuration w-100 mt-3">
      Patient Name
    </div>
    <div className="w-100 d-flex align-items-center mt-3 pb-3" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
      <div className="me-2">
        <img src={smallImg} alt="smallimg" />
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
    <div className="doaDuration w-100 mt-3">
      Conference Call Caretaker
    </div>
    <div className="w-100 d-flex align-items-center mt-3">
      <div className="me-2">
        <img src={smallImg} alt="iomg" />
      </div>
      <div>
        <div className="doaNText">
          You
        </div>
        <div className="doaDuration mt-1">
          Male, 24 Years
        </div>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex align-items-center justify-content-end mt-4">
      <button type="button" className="btn doabBtn me-3">Back</button>
      <Link to="/AppoinmentBooking"><button type="submit" className="btn doacBtn">Confirm</button></Link>
    </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
}

export default ConfirmAppointment;