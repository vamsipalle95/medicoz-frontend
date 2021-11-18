import React, { Component } from 'react';
import CalendarOrange from '../../images/calender-orange.png';
import Camcorder from '../../images/doctoModule/camcorder.png';
import PhoneXs from '../../images/doctoModule/phone_white.png';
import Phone from '../../images/doctoModule/phone.png';
import PersonXs from '../../images/doctoModule/person.png';
import VisitHistory from '../../images/doctoModule/visit-history.png';
import Rpicon from '../../images/doctoModule/rp-icon.png';
import CaledarWhite from '../../images/doctoModule/calender-white.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class myappcalendar extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      My Appointments Calendar
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard3 p-3 m-2">
      <div className="w-100 doaSchedule d-flex align-items-center justify-content-evenly mt-3">
        <div className="pb-1 active">
          11 Apr
        </div>
        <div className="pb-1">
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
          <img src={CalendarOrange} alt='calorange'/>
        </div>
      </div>
      {/*doaSchedule-ends-here*/}
      <div className="w-100 d-flex flex-wrap mt-2">
        <div className="f10sb me-2">
          Today
        </div>
        <div className="f10m">
         <Link to="/Consultroom">Patients (11)</Link>, <Link to="">Medical Reps (3)</Link>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 ogBox mt-3 p-3">
        <div className="w-100 d-flex flex-wrap align-items-center">
          <div className="f11b me-2">
            Krupa Clinic-
          </div>
          <div className="f8m me-2">
            patients (3)
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={Camcorder} alt="camcorder" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:00 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abOrange d-flex align-items-center m-1 p-1">
            <img src={PhoneXs} alt="phonexs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8mWhite">10:40 AM</div>
          </div>
          {/*abOrange-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={PersonXs} alt="xs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">11:45 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">11:30 AM</div>
          </div>
          {/*abWhite-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*ogBox-ends-here*/}
      <div className="w-100 grayBox mt-3 p-3">
        <div className="w-100 d-flex flex-wrap align-items-center">
          <div className="f11b me-2">
            Balaji Hospital -
          </div>
          <div className="f8m me-2">
            patients (6)
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={Camcorder} alt="camcorder" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:00 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={Phone} alt="phonexs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:40 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={PersonXs} alt="xs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" style={{width: 12, height: 12}} />
            <div className="f8m">1:30 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:45 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">2:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">2:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={Rpicon} alt='rpicon' className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">2:30 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={Rpicon} alt='rpicon' className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">2:45 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">3:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">3:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap align-items-center mt-3">
          <div className="f11b me-2">
            Balaji Hospital -
          </div>
          <div className="f8m me-2">
            (2 Medial Reps) 
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
        <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={Camcorder} alt="camcorder" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:00 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={Phone} alt="phonexs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:40 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={PersonXs} alt="xs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">3:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*grayBox-ends-here*/}
      <div className="w-100 grayBox mt-3 p-3">
        <div className="w-100 d-flex flex-wrap align-items-center">
          <div className="f11b me-2">
            Krupa Clinic-
          </div>
          <div className="f8m me-2">
            Patients(3)
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
        <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={Camcorder} alt="camcorder" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:00 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={Phone} alt="phonexs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:40 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={PersonXs} alt="xs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">6:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">6:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">6:35 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">7:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">7:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">7:30 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">7:45 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">8:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">8:15 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">8:30 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">8:45 PM</div>
          </div>
          {/*abWhite-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap align-items-center mt-3">
          <div className="f11b me-2">
            Krupa Clinic-
          </div>
          <div className="f8m me-2">
            Medical Resp(2)
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
        <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={Camcorder} alt="camcorder" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:00 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={Phone} alt="phonexs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">10:40 AM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
            <img src={PersonXs} alt="xs" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">1:00 PM</div>
          </div>
          {/*abWhite-ends-here*/}
          <div className="abWhite d-flex align-items-center m-1 p-1">
          <img src={VisitHistory} alt="history" className="me-2" style={{width: 12, height: 12}} />
            <div className="f8m">9:45 PM</div>
          </div>
          {/*abWhite-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*grayBox-ends-here*/}
    </div>
    {/*draCard1-ends-here*/}
    <div className="m-2">
    <Link to="/ManageAppointments"><button type="button" className="btn d-block doacBtn mb-2"><img src={CaledarWhite} alt="calwhite" className="me-2" />Manage Krupa Clinic Slots (Self Clinic)</button></Link>
    <Link to="/ManageAppointments1"><button type="button" className="btn d-block doacBtn mb-2"><img src={CaledarWhite} alt="calwhite" className="me-2" />Manage Specific RP Slots</button></Link>
    </div>
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
}

export default myappcalendar;