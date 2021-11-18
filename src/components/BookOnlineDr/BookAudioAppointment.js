import React, { Component } from 'react';
import CalendarOrange from '../../images/calender-orange.png';
import ToDo from '../../images/to-do.png';
import Profile from '../../images/profile-1-sm.png';
import LocGreen from '../../images/location-sm-green.png';
import Backbt from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import Camcorder from '../../images/camcorder.png';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Phone from '../../images/phone.png';


export default function BookVideoAppoinment() {
    const history = useHistory();
        return (
            <div>
                

<div class="d-flex flex-wrap ms-auto me-auto">
<div className="w-100 mt-3 bookcls d-flex align-items-center justify-content-center pb-2"><img onClick={() => history.goBack()} src={Backbt} alt="backbtn"/> Book Appointment</div>

<div className="draCard3 ms-auto me-auto p-3 m-2">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <img src={Phone} alt="todo" className="me-2" />
        <h3 className="mb-0">Book Audio Appointment</h3>
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
            <img src={LocGreen} alt="locgreen" className="me-2" />
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
        <img src={CalendarOrange} alt="caledar-orange" />
        </div>
    </div>
    {/*doaSchedule-ends-here*/}
    <div className="doatHead w-100 mt-3">
        Select Time
    </div>
    {/*doatHead-ends-here*/}
    <div className="w-100 doaTabs mt-3">
        <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="morning-tab" data-bs-toggle="tab" data-bs-target="#morning" type="button" role="tab" aria-controls="morning" aria-selected="true">Morning</button>
            <button className="nav-link" id="afternoon-tab" data-bs-toggle="tab" data-bs-target="#afternoon" type="button" role="tab" aria-controls="afternoon" aria-selected="false">Afternoon</button>
            <button className="nav-link" id="evening-tab" data-bs-toggle="tab" data-bs-target="#evening" type="button" role="tab" aria-controls="evening" aria-selected="false">Evening</button>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="morning" role="tabpanel" aria-labelledby="morning-tab">
            <form className="mt-3">
            <input type="radio" className="btn-check" name="options" id="time1" autoComplete="off" defaultChecked />
            <label className="btn" htmlFor="time1">9:00 AM</label>
            <input type="radio" className="btn-check" name="options" id="time2" autoComplete="off" />
            <label className="btn" htmlFor="time2">9:15 AM</label>
            <input type="radio" className="btn-check" name="options" id="time3" autoComplete="off" />
            <label className="btn" htmlFor="time3">9:30 AM</label>
            <input type="radio" className="btn-check" name="options" id="time4" autoComplete="off" />
            <label className="btn" htmlFor="time4">9:45 AM</label>
            <input type="radio" className="btn-check" name="options" id="time5" autoComplete="off" />
            <label className="btn" htmlFor="time5">10:00 AM</label>
            <input type="radio" className="btn-check" name="options" id="time6" autoComplete="off" />
            <label className="btn" htmlFor="time6">10:15 AM</label>
            <input type="radio" className="btn-check" name="options" id="time7" autoComplete="off" />
            <label className="btn" htmlFor="time7">10:45 AM</label>
            <input type="radio" className="btn-check" name="options" id="time8" autoComplete="off" />
            <label className="btn" htmlFor="time8">11:00 AM</label>
            </form>
            {/*fmbGroup-ends-here*/}
        </div>
        {/*tab-pane1-ends-here*/}
        <div className="tab-pane fade" id="afternoon" role="tabpanel" aria-labelledby="afternoon-tab">
            <form className="mt-3">
            <input type="radio" className="btn-check" name="options" id="time9" autoComplete="off" defaultChecked />
            <label className="btn" htmlFor="time9">9:00 AM</label>
            <input type="radio" className="btn-check" name="options" id="time10" autoComplete="off" />
            <label className="btn" htmlFor="time10">9:15 AM</label>
            <input type="radio" className="btn-check" name="options" id="time11" autoComplete="off" />
            <label className="btn" htmlFor="time11">9:30 AM</label>
            <input type="radio" className="btn-check" name="options" id="time12" autoComplete="off" />
            <label className="btn" htmlFor="time12">9:45 AM</label>
            <input type="radio" className="btn-check" name="options" id="time13" autoComplete="off" />
            <label className="btn" htmlFor="time13">10:00 AM</label>
            <input type="radio" className="btn-check" name="options" id="time14" autoComplete="off" />
            <label className="btn" htmlFor="time14">10:15 AM</label>
            <input type="radio" className="btn-check" name="options" id="time15" autoComplete="off" />
            <label className="btn" htmlFor="time15">10:45 AM</label>
            <input type="radio" className="btn-check" name="options" id="time16" autoComplete="off" />
            <label className="btn" htmlFor="time16">11:00 AM</label>
            </form>
            {/*fmbGroup-ends-here*/}
        </div>
        {/*tab-pane2-ends-here*/}
        <div className="tab-pane fade" id="evening" role="tabpanel" aria-labelledby="evening-tab">
            <form className="mt-3">
            <input type="radio" className="btn-check" name="options" id="time17" autoComplete="off" defaultChecked />
            <label className="btn" htmlFor="time17">9:00 AM</label>
            <input type="radio" className="btn-check" name="options" id="time18" autoComplete="off" />
            <label className="btn" htmlFor="time18">9:15 AM</label>
            <input type="radio" className="btn-check" name="options" id="time19" autoComplete="off" />
            <label className="btn" htmlFor="time19">9:30 AM</label>
            <input type="radio" className="btn-check" name="options" id="time20" autoComplete="off" />
            <label className="btn" htmlFor="time20">9:45 AM</label>
            <input type="radio" className="btn-check" name="options" id="time21" autoComplete="off" />
            <label className="btn" htmlFor="time21">10:00 AM</label>
            <input type="radio" className="btn-check" name="options" id="time22" autoComplete="off" />
            <label className="btn" htmlFor="time22">10:15 AM</label>
            <input type="radio" className="btn-check" name="options" id="time23" autoComplete="off" />
            <label className="btn" htmlFor="time23">10:45 AM</label>
            <input type="radio" className="btn-check" name="options" id="time24" autoComplete="off" />
            <label className="btn" htmlFor="time24">11:00 AM</label>
            </form>
            {/*fmbGroup-ends-here*/}
        </div>
        {/*tab-pane3-ends-here*/}
        </div>
        {/*tab-content-ends-here*/}
    </div>
    {/*doaTabs-ends-here*/}
    <div className="doaConfirm w-100 d-flex align-items-center mt-4">
        <button type="button" onClick={() => history.goBack()} className="btn doabBtn ms-auto me-3">Back</button>
        <button type="button" onClick={ () => { history.push("/LoginOtp3");}}  className="btn doacBtn">Confirm</button>
    </div>
    {/*doaConfirm-ends-here*/}
    </div>

    </div>
    </div>
            
        );
    }
