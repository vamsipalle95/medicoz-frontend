import React, { Component } from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Like from '../../images/like.png';
import Profile2 from '../../images/profile-2.png';
import Profile4 from '../../images/profile-4.png';
import EllipseGreen from '../../images/ellipse-green.png';
import EllipseYellow from '../../images/ellipse-yellow.png';
import Location from '../../images/location-sm-green.png';
import Camcorder from '../../images/camcorder.png';
import Phone from '../../images/phone.png';
import Likeempty from '../../images/like-empty.png';
import Yashoda from '../../images/yashoda.jpg';
import Teal from  '../../images/ellipse-teal-lg.png';
import Usergreen from '../../images/user-green.png';
import Clinic from '../../images/clinic.jpg';
class myfavourites extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-3">My Favourites</h1>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
    <nav>
      <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#doctors" type="button" role="tab" aria-selected="true">Individual Doctors</button>
        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#hospitals" type="button" role="tab" aria-selected="false">Hospitals</button>
        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#clinics" type="button" role="tab" aria-selected="false">Clinics</button>
      </div>
    </nav>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="doctors" role="tabpanel">
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-4">
          <div className="drOnlineCard m-2 p-3">
            <div className="text-end w-100 drLike">
              <a href="/"><img src={Like} alt="like"/></a>
            </div>
            
            <div className="text-center w-100 drLogo">
              <img src={Profile2} alt="profile2" />
            </div>
            <div className="text-center w-100 drStatus">
              <img src={EllipseGreen} alt="ellipsegree" />
            </div>
            <div className="text-center w-100 mb-3 drsText">
              <h3 className="mb-0">Online - Available Now</h3>
              <h4>&nbsp;&nbsp;</h4>
            </div>
            <div className="w-100 mb-2 drName">
              <a href="/"><h3 className="mb-0">Doctor name</h3></a>
              <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
            </div>
            <div className="w-100 mb-2 drSp">
              <h3 className="mb-0">General Physician</h3>
              <h4 className="mb-0">Experience: 12 Years</h4>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="text-center w-100 drcHead mb-3">
              <h3>Call Now</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
              <a href="/DrOnlineAppointment">
                <div className="text-center me-2">
                  <img src={Camcorder} alt="camera" />
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
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="text-center w-100 drLogo">
              <img src={Profile2} alt="profile2" />
            </div>
            <div className="text-center w-100 drStatus">
              <img src={EllipseYellow} alt="yellow" />
            </div>
            <div className="text-center w-100 mb-3 drsText">
              <h3 className="mb-0">Online -On call</h3>
              <h4 className="mb-0">Wait time: 15 Min</h4>
            </div>
            <div className="w-100 mb-2 drName">
              <a href="/"><h3 className="mb-0">Doctor name</h3></a>
              <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
            </div>
            <div className="w-100 mb-2 drSp">
              <h3 className="mb-0">General Physician</h3>
              <h4 className="mb-0">Experience: 12 Years</h4>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="text-center w-100 drcHead mb-3">
              <h3>Call Now</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
              <a href="/DrOnlineAppointment">
                <div className="text-center me-2">
                  <img src={Camcorder} alt="camera" />
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
              <a href="/"><img src={Likeempty} alt="empty" /></a>
            </div>
            <div className="text-center w-100 drLogo">
              <img src={Profile2} alt="profile3" />
            </div>
            <div className="text-center w-100 drStatus">
              <img src={Teal} alt="teal" />
            </div>
            <div className="text-center w-100 mb-3 drsText">
              <h3 className="mb-0">Dr.IN</h3>
              <h4 className="mb-0">At Clinic</h4>
            </div>
            <div className="w-100 mb-2 drName">
              <a href="/"><h3 className="mb-0">Doctor name</h3></a>
              <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
            </div>
            <div className="w-100 mb-2 drSp">
              <h3 className="mb-0">General Physician</h3>
              <h4 className="mb-0">Experience: 12 Years</h4>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="text-center w-100 drcHeadBook mb-3">
              <h3>Book Follow-up</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
              <a href="/DrOnlineAppointment">
                <div className="text-center me-2">
                  <img src={Camcorder} alt="camera" />
                  <p className="mt-2 mb-0">₹500</p>
                </div>
              </a>
              <a href="/DrOnlineAppointment">
                <div className="text-center me-2">
                  <img src={Phone} alt="phone" />
                  <p className="mt-2 mb-0">₹400</p>
                </div>
              </a>
              <a href="/BookAppoinments">
                <div className="text-center">
                  <img src={Usergreen} alt="green" />
                  <p className="mt-2 mb-0">₹700</p>
                </div>
              </a>
            </div>
          </div>
          {/*drOnlineCard-ends-here*/}
          <div className="drOnlineCard m-2 p-3">
            <div className="text-end w-100 drLike">
              <a href="/"><img src={Likeempty} alt="empty" /></a>
            </div>
            <div className="text-center w-100 drLogo">
              <img src={Profile4} alt="profile4" />
            </div>
            <div className="text-center w-100 drStatus">
              <img src={Teal} alt="teal" />
            </div>
            <div className="text-center w-100 mb-3 drsText">
              <h3 className="mb-0">Dr.IN</h3>
              <h4 className="mb-0">At Hospital</h4>
            </div>
            <div className="w-100 mb-2 drName">
              <a href="/"><h3 className="mb-0">Doctor name</h3></a>
              <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
            </div>
            <div className="w-100 mb-2 drSp">
              <h3 className="mb-0">General Physician</h3>
              <h4 className="mb-0">Experience: 12 Years</h4>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="text-center w-100 drcHeadBook mb-3">
              <h3>Book Follow-up</h3>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
              <a href="/DrOnlineAppointment">
                <div className="text-center me-2">
                  <img src={Camcorder} alt="camera" />
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
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-1-ends-here*/}
      <div className="tab-pane fade" id="hospitals" role="tabpanel">
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-4">
          <div className="drHospitalCard m-2 p-3">
            <div className="text-end w-100 mb-2 drLike">
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="w-100 mb-3 drLogo">
              <img src={Yashoda} alt="yashoda" />
            </div>
            <div className="w-100 mb-1 drName">
              <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
            </div>
            <div className="w-100 mb-1 drSp">
              <h3 className="mb-0">Multispeciality</h3>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-3 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="w-100 text-center dhcBtn">
              <button type="button" className="btn">View Doctors</button>
            </div>
          </div>
          {/*drHospitalCard-ends-here*/}
          <div className="drHospitalCard m-2 p-3">
            <div className="text-end w-100 mb-2 drLike">
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="w-100 mb-3 drLogo">
              <img src={Yashoda} alt="yashoda" />
            </div>
            <div className="w-100 mb-1 drName">
              <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
            </div>
            <div className="w-100 mb-1 drSp">
              <h3 className="mb-0">Multispeciality</h3>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-3 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="w-100 text-center dhcBtn">
              <button type="button" className="btn">View Doctors</button>
            </div>
          </div>
          {/*drHospitalCard-ends-here*/}
          <div className="drHospitalCard m-2 p-3">
            <div className="text-end w-100 mb-2 drLike">
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="w-100 mb-3 drLogo">
              <img src={Yashoda} alt="yashoda" />
            </div>
            <div className="w-100 mb-1 drName">
              <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
            </div>
            <div className="w-100 mb-1 drSp">
              <h3 className="mb-0">Multispeciality</h3>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-3 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="w-100 text-center dhcBtn">
              <button type="button" className="btn">View Doctors</button>
            </div>
          </div>
          {/*drHospitalCard-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-2-ends-here*/}
      <div className="tab-pane fade" id="clinics" role="tabpanel">
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-4">
          <div className="drHospitalCard m-2 p-3">
            <div className="text-end w-100 mb-2 drLike">
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="w-100 mb-3 drLogo">
              <img src={Clinic} alt="cliic" />
            </div>
            <div className="w-100 mb-1 drName">
              <a href="/"><h3 className="mb-0">Clinic name will go here</h3></a>
            </div>
            <div className="w-100 mb-1 drSp">
              <h3 className="mb-0">Multispeciality</h3>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-3 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="w-100 text-center dhcBtn">
              <button type="button" className="btn">View Doctors</button>
            </div>
          </div>
          {/*drHospitalCard-ends-here*/}
          <div className="drHospitalCard m-2 p-3">
            <div className="text-end w-100 mb-2 drLike">
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="w-100 mb-3 drLogo">
              <img src={Clinic} alt="cliic" />
            </div>
            <div className="w-100 mb-1 drName">
              <a href="/"><h3 className="mb-0">Clinic name will go here</h3></a>
            </div>
            <div className="w-100 mb-1 drSp">
              <h3 className="mb-0">Multispeciality</h3>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-3 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="w-100 text-center dhcBtn">
              <button type="button" className="btn">View Doctors</button>
            </div>
          </div>
          {/*drHospitalCard-ends-here*/}
          <div className="drHospitalCard m-2 p-3">
            <div className="text-end w-100 mb-2 drLike">
              <a href="/"><img src={Like} alt="like" /></a>
            </div>
            <div className="w-100 mb-3 drLogo">
              <img src={Clinic} alt="cliic" />
            </div>
            <div className="w-100 mb-1 drName">
              <a href="/"><h3 className="mb-0">Clinic name will go here</h3></a>
            </div>
            <div className="w-100 mb-1 drSp">
              <h3 className="mb-0">Multispeciality</h3>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-baseline mb-3 drLocation">
              <img src={Location} alt="location" className="me-2" />
              <h3 className="mb-0">Begumpet, Hyderabad</h3>
            </div>
            <div className="w-100 text-center dhcBtn">
              <button type="button" className="btn">View Doctors</button>
            </div>
          </div>
          {/*drHospitalCard-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*tabpane-3-ends-here*/}
    </div>
    {/*tabs-ends-here*/}
  </div>
  {/*tabs-container-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
}

export default myfavourites;