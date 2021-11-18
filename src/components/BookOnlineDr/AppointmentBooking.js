import React, { Component } from 'react';
import Todo from '../../images/to-do.png';
import Profile from '../../images/profile-1-sm.png';
import Location from '../../images/location-sm-green.png';
import Calendar from '../../images/calender-orange.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppointmentBooking extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Todo} alt="todo" className="me-2" />
      <h3 className="mb-0">Appointment Booking by RP</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 doaInfo d-flex align-items-center mt-3 p-3">
      <div className="doaProfile me-4">
        <img src={Profile} alt="profile" />
      </div>
      {/*doaProfile-ends-here*/}
      <div className="doaText">
        <a href="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></a>
        <a href="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></a>
        <h4 className="mb-0">General Physician</h4>
        <div className="d-flex align-items-center">
          <img src={Location} alt='Location' className="me-2" />
          <h5 className="mb-0">Begumpet, Hyderabad</h5>
        </div>
      </div>
      {/*doaText-ends-here*/}
    </div>
    {/*doaInfo-ends-here*/}
    <div className="w-100 doaSchedule d-flex align-items-center justify-content-evenly mt-3">
      <div className="pb-1">
        11 Apr
      </div>
      <div className="pb-1 active">
        12 Apr
      </div>
      <div className="pb-1">
        13 Apr
      </div>
      <div className="pb-1">
        14 Apr
      </div>
      <div className="pb-1">
        15 Apr
      </div>
      <div className="pb-1">
        <img src={Calendar} alt="calendar" />
      </div>
    </div>
    {/*doaSchedule-ends-here*/}
    <div className="doatHead w-100 mt-3">
      Select Time
    </div>
    {/*doatHead-ends-here*/}
    <form className="abFormGroup mt-3">
      <input type="radio" className="btn-check" name="options" id="time1" autoComplete="off" defaultChecked />
      <label className="btn p-1 m-1" htmlFor="time1">
        Token 1<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time2" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time2">
        Token 2<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time3" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time3">
        Token 3<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time4" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time4">
        Token 4<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time5" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time5">
        Token 5<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time6" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time6">
        Token 6<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time7" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time7">
        Token 7<br />
        10:30 AM</label>
      <input type="radio" className="btn-check" name="options" id="time8" autoComplete="off" />
      <label className="btn p-1 m-1" htmlFor="time8">
        Token 8<br />
        10:30 AM</label>
    </form>

    <Link to="/BookingSpeciality"><button type="submit" className="btn doacBtn">Confirm</button></Link>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
}

export default AppointmentBooking;