import React, { Component } from 'react';
import SearchGreen from '../../images/search-green.png';
import FilterGreen from '../../images/filter-green.png';
import Profile1 from '../../images/profile-1.png';
import Ellipseimg from '../../images/ellipse-green.png';
import smallImg from '../../images/small-image.png';
import Chat from '../../images/chat.png';
import Usergreen from '../../images/user-green.png';
import PhoneImg from '../../images/phone.png';
import Camera from '../../images/camcorder.png';
import Phonesvg from '../../images/phone-sm.png';
import Person from '../../images/person.png';
import Download from '../../images/download-green1.png';
import {BrowserRouter as Router,
  Switch,
  Route,
 Link
} from "react-router-dom";

class appointments extends Component {
    render() {
        return (
            <div>
                <div className="">
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-3">My Appointments</h1>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
    <div className="doaNText me-3">
      Select Member
    </div>
    {/*doaNText-ends-here*/}
    <select className="form-select w-auto obSelect">
      <option selected>Srinivas</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    {/*select-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
    <nav>
      <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#upcoming" type="button" role="tab" aria-selected="true">Upcoming</button>
        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#followup" type="button" role="tab" aria-selected="false">Follow-Up</button>
        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cancelled" type="button" role="tab" aria-selected="false">Cancelled</button>
        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab" aria-selected="false">Completed</button>
      </div>
    </nav>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="upcoming" role="tabpanel">
        <div className="w-100 d-flex justify-content-end mt-3">
          <Link to="/" className="text-decoration-none"><img src={SearchGreen} className="me-3" alt="" /></Link>
          <div className="dropdown">
            <div>
              <div className="filter-cls dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={FilterGreen} alt="filtergreen" />
              </div>
              <ul className="dropdown-menu txtul" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item">Date</a></li>
                <li><a className="dropdown-item">Dr Name</a></li>
                <li><a className="dropdown-item">Hosptial</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Camera} className="me-2"  alt="" />
              <h3 className="mb-0">Video Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Hospital</h4>          
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Phonesvg} className="me-2"  alt="" />
              <h3 className="mb-0">Audio Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Hospital</h4>          
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Clinic)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Clinic</h4>      
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
                <img src={smallImg} alt="smallimg"/>
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
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Hospital)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Clinic</h4>       
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
                <img src={smallImg} alt="smallImg" />
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
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-1-ends-here*/}
      <div className="tab-pane fade" id="followup" role="tabpanel">
        <div className="w-100 d-flex justify-content-end mt-3">
          <Link to="/" className="text-decoration-none"><img src={SearchGreen} alt="searchgree" className="me-3" /></Link>
          <div className="dropdown">
            <div>
              <div className="filter-cls dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={FilterGreen} alt="filtergreen" />
              </div>
              <ul className="dropdown-menu txtul" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item">Date</a></li>
                <li><a className="dropdown-item">Dr Name</a></li>
                <li><a className="dropdown-item">Hosptial</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
          <div className="draCard1 m-2 p-3 width275">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Camera} className="me-2"  alt="" />
              <h3 className="mb-0">Video Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Hospital</h4>          
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            <div className="text-center w-100 drcHead mb-3">
              <h3>Book Follow-up</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
            
              <Link to="/BookFollowUpVideo">
                <div className="text-center">
                  <img src={Camera} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookFollowUpAudio">
                <div className="text-center">
                  <img src={PhoneImg} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookFollowUpInPatient">
                <div className="text-center me-2">
                  <img src={Usergreen}  alt="user" />
                </div>
              </Link>

              <Link to="@" data-bs-toggle="modal" data-bs-target="#myChat">
                <div className="text-center me-2">
                  <img src={Chat} alt="chat" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Download} alt="download" />
                </div>
              </Link>
             
              
             
            </div>
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3 width275">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Phonesvg} className="me-2"  alt="" />
              <h3 className="mb-0">Audio Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Hospital</h4>          
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            <div className="text-center w-100 drcHead mb-3">
              <h3>Book Follow-up</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">

            <Link to="/BookAppoinments">
                <div className="text-center">
                  <img src={Camera} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookFollowUpAudio">
                <div className="text-center">
                  <img src={PhoneImg} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Usergreen}  alt="user" />
                </div>
              </Link>

              <Link to="@" data-bs-toggle="modal" data-bs-target="#myChat">
                <div className="text-center me-2">
                  <img src={Chat} alt="chat" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Download} alt="download" />
                </div>
              </Link>

            </div>
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3 width275">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Clinic)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Clinic</h4>      
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            <div className="text-center w-100 drcHead mb-3">
              <h3>Book Follow-up</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">

            <Link to="/BookAppoinments">
                <div className="text-center">
                  <img src={Camera} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookFollowUpAudio">
                <div className="text-center">
                  <img src={PhoneImg} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Usergreen}  alt="user" />
                </div>
              </Link>

              <Link to="@" data-bs-toggle="modal" data-bs-target="#myChat">
                <div className="text-center me-2">
                  <img src={Chat} alt="chat" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Download} alt="download" />
                </div>
              </Link>

            </div>
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3 width275">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Hospital)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Clinic</h4>       
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            <div className="text-center w-100 drcHead mb-3">
              <h3>Book Follow-up</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
            <Link to="/BookAppoinments">
                <div className="text-center">
                  <img src={Camera} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookFollowUpAudio">
                <div className="text-center">
                  <img src={PhoneImg} alt="phoeimg" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Usergreen}  alt="user" />
                </div>
              </Link>

              <Link to="@" data-bs-toggle="modal" data-bs-target="#myChat">
                <div className="text-center me-2">
                  <img src={Chat} alt="chat" />
                </div>
              </Link>

              <Link to="/BookAppoinments">
                <div className="text-center me-2">
                  <img src={Download} alt="download" />
                </div>
              </Link>
            </div>
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-2-ends-here*/}
      <div className="tab-pane fade" id="cancelled" role="tabpanel">
        <div className="w-100 d-flex justify-content-end mt-3">
          <Link to="/" className="text-decoration-none"><img src={SearchGreen} alt="searchgree" className="me-3" /></Link>
          <div className="dropdown">
            <div>
              <div className="filter-cls dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={FilterGreen} alt="filtergreen" />
              </div>
              <ul className="dropdown-menu txtul" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item">Date</a></li>
                <li><a className="dropdown-item">Dr Name</a></li>
                <li><a className="dropdown-item">Hosptial</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Camera} className="me-2"  alt="" />
              <h3 className="mb-0">Video Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
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
            <div className="doaNText w-100 mt-3">
              Cancel Reason
            </div>
            <div className="doaDuration w-100 mt-2">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Aenean
            </div>
            <div className="doaDuration w-100 mt-2">
              Refund/Cancellation Fee: <span>₹</span>500
            </div>
            <div className="doaDuration w-100 mt-3">
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Phonesvg} className="me-2"  alt="" />
              <h3 className="mb-0">Audio Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
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
            <div className="doaNText w-100 mt-3">
              Cancel Reason
            </div>
            <div className="doaDuration w-100 mt-2">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Aenean
            </div>
            <div className="doaDuration w-100 mt-2">
              Refund/Cancellation Fee: <span>₹</span>500
            </div>
            <div className="doaDuration w-100 mt-3">
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Clinic)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
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
            <div className="doaNText w-100 mt-3">
              Cancel Reason
            </div>
            <div className="doaDuration w-100 mt-2">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Aenean
            </div>
            <div className="doaDuration w-100 mt-2">
              Refund/Cancellation Fee: <span>₹</span>500
            </div>
            <div className="doaDuration w-100 mt-3">
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Hospital)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
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
            <div className="doaNText w-100 mt-3">
              Cancel Reason
            </div>
            <div className="doaDuration w-100 mt-2">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Aenean
            </div>
            <div className="doaDuration w-100 mt-2">
              Refund/Cancellation Fee: <span>₹</span>500
            </div>
            <div className="doaDuration w-100 mt-3">
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-3-ends-here*/}

      <div className="tab-pane fade" id="completed" role="tabpanel">
        <div className="w-100 d-flex justify-content-end mt-3">
          <Link to="/" className="text-decoration-none"><img src={SearchGreen} alt="searchgree" className="me-3" /></Link>
          <div className="dropdown">
            <div>
              <div className="filter-cls dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={FilterGreen} alt="filtergreen" />
              </div>
              <ul className="dropdown-menu txtul" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item">Date</a></li>
                <li><a className="dropdown-item">Dr Name</a></li>
                <li><a className="dropdown-item">Hosptial</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap mt-3">
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Camera} className="me-2"  alt="" />
              <h3 className="mb-0">Video Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Hospital</h4>          
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Phonesvg} className="me-2"  alt="" />
              <h3 className="mb-0">Audio Call -  Appointment</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Hospital</h4>          
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Clinic)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Clinic</h4>      
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
            
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 m-2 p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
              <img src={Person} className="me-2"  alt="" />
              <h3 className="mb-0">In-Person -  Appointment (Hospital)</h3>
            </div>
            {/*doacTitle-ends-here*/}
            <div className="w-100 doaInfo d-flex flex-wrap align-items-center mt-3 p-3">
              <div className="doaProfile me-4">
                <img src={Profile1} alt="profile" />
              </div>
              {/*doaProfile-ends-here*/}
              <div className="doaText">
                <Link to="/" className="text-decoration-none"><h2 className="mb-0">Hospital/Clinic Name</h2></Link>
                <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. Niraj</h3></Link>
                <h4 className="mb-0">General Physician</h4>
                <div className="d-flex align-items-center">
                  <img src="images/location-sm-green.svg" className="me-2"  alt="" />
                  <h5 className="mb-0">Begumpet, Hyderabad</h5>
                </div>
              </div>
              {/*doaText-ends-here*/}
              <div className="w-100 d-flex align-items-center mt-2">
                <div className="me-2"  alt="">
                  <img src={Ellipseimg} alt="ellipse" />
                </div>
                <div className="doaText me-2">
                  <Link to="/" className="text-decoration-none"><h3 className="mb-0">Dr. IN</h3></Link>
                </div>
                {/*doaText-ends-here*/}
                <div className="doaText">
                  <h4 className="mb-0">at Clinic</h4>       
                </div>
                {/*doaText-ends-here*/}
              </div>
              {/*flexbox-ends-here*/}
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
              Appointment for
            </div>
            <div className="w-100 d-flex align-items-center mt-3">
              <div className="me-2"  alt="">
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
          
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-2-ends-here*/}
    </div>
    {/*tabs-ends-here*/}
  </div>
  {/*tabs-container-ends-here*/}
</div>

{/*modal-height-starts-here*/}
<div className="modal fade" id="myChat" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Follow-up Query</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
          <div className="doaText">
            <h3 className="mb-0 colorDr">Doctor name will go here</h3>
            <h4 className="small">MBBS, MS, MNAMS , FALS, FMAS</h4>
          </div>

          <h4 className="query-cls">Query</h4>
          <p class="fot">2:00, July 28, 2021</p>
          <hr/>
          <div className="doaText">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aenean euismod bibendum laoreet.</h4>

            <div className="doaText ashbox">
              <h4>
              <p class="fot mb-2">10:30, July 29, 2021</p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean euismod bibendum laoreet
              </h4>

              
            </div>
            </div>
            <h4 className="query-cls mt-2">Follow Up Query</h4>

            <textarea className="txtara">
              Enter query here.....
            </textarea>
          
          
        
      </div>
      {/*modal-body-ends-here*/}
      <div className="modal-footer border-0">
        <button type="submit" className="btn fmaBtn">Ask</button>
      </div>
      {/*modal-footer-ends-here*/}
    </div>
  </div>
</div>
{/*modal-height-ends-here*/}


{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
}

export default appointments;