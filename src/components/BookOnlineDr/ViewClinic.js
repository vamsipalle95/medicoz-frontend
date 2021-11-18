import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import Computer from '../../images/computer.png';
import Calendar from '../../images/calender.png';
import Search from '../../images/search.png';
import LocationGreen from '../../images/location-sm-green.png';
import Like from '../../images/like.png';
import Profile1 from '../../images/profile-1.png';
import EllipseGreen from '../../images/ellipse-green.png';
import Camcorder from '../../images/camcorder.png';
import Phone from '../../images/phone.png';
import EllipseYellow from '../../images/ellipse-yellow.png';
import LikeMT from '../../images/like-empty.png';
import Profile3 from '../../images/profile-3.png';
import Profile4 from '../../images/profile-4.png';
import Location from '../../images/location.png';
import Globe from '../../images/globe.png';
import Rupee from '../../images/rupee.png';
import ArrowBk from '../../images/arrow-back.png';
import Filter from '../../images/filter.png';
import FilterGreen from '../../images/filter-green.png';
import Gps from '../../images/gps.png';
import Yashoda from '../../images/yashoda.jpg';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ViewClinic() {
    const history = useHistory();
        return (
            <div>
                 <div className="container doctorsCnt p-4 my-3">
                 <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline">

                 <div className="sdrText1 w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
      <img src={Backbtn} alt="btn" onClick={() => history.goBack()} /><h1 className="sdrText1 me-4">Clinic Name - ONLINE DR'S NOW</h1>
    </div>
      <div className="drOnlineCard m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={Like} alt="like" /></a>
        </div>
        <Link to="/DrPatientProfileView">
            <div className="text-center w-100 drLogo">
                <img src={Profile3} alt="profile" />
        </div></Link>
        <div className="text-center w-100 drStatus">
          <img src={EllipseGreen} alt="ellipseGreen" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online - Available Now</h3>
          <h4>&nbsp;&nbsp;</h4>
        </div>
        <div className="w-100 mb-2 drName">
            <h5 className="fn3"><a href="#">Clinic Name here</a></h5>
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
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder" />
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
          <a href="#"><img src={Like} alt="like" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile3} alt="prifle" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseYellow} alt="ellipse yellow" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online -On call</h3>
          <h4 className="mb-0">Wait time: 15 Min</h4>
        </div>
        <div className="w-100 mb-2 drName">
        <h5 className="fn3"><a href="#">Clinic Name here</a></h5>
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
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder" />
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
          <a href="#"><img src={LikeMT} alt="likemt" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile3} alt="profile3" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseYellow} alt="yelloiw" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online -On call</h3>
          <h4 className="mb-0">Wait time: 15 Min</h4>
        </div>
        <div className="w-100 mb-2 drName">
        <h5 className="fn3"><a href="#">Clinic Name here</a></h5>
          <a href="#"><h3 className="mb-0">Doctor name</h3></a>
          <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
        </div>
        <div className="w-100 mb-2 drSp">
          <h3 className="mb-0">General Physician</h3>
          <h4 className="mb-0">Experience: 12 Years</h4>
        </div>
        <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
          <img src={LocationGreen} className="me-2" />
          <h3 className="mb-0">Begumpet, Hyderabad</h3>
        </div>
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} alt="camcorder"/>
              <p className="mt-2 mb-0">₹500</p>
            </div>
          </a>
          <a href="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} alt='phone' />
              <p className="mt-2 mb-0">₹400</p>
            </div>
          </a>
        </div>
      </div>
      {/*drOnlineCard-ends-here*/}
      <div className="drOnlineCard m-2 p-3">
        <div className="text-end w-100 drLike">
          <a href="#"><img src={LikeMT} alt="likemt" /></a>
        </div>
        <div className="text-center w-100 drLogo">
          <img src={Profile4} alt="4" />
        </div>
        <div className="text-center w-100 drStatus">
          <img src={EllipseYellow} alt="y" />
        </div>
        <div className="text-center w-100 mb-3 drsText">
          <h3 className="mb-0">Online -On call</h3>
          <h4 className="mb-0">Wait time: 15 Min</h4>
        </div>
        <div className="w-100 mb-2 drName">
        <h5 className="fn3"><a href="#">Clinic Name here</a></h5>
          <a href="#"><h3 className="mb-0">Doctor name</h3></a>
          <h4 className="mb-0">MBBS, MS, MNAMS, FALS</h4>
        </div>
        <div className="w-100 mb-2 drSp">
          <h3 className="mb-0">General Physician</h3>
          <h4 className="mb-0">Experience: 12 Years</h4>
        </div>
        <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
          <img src={LocationGreen} className="me-2" />
          <h3 className="mb-0">Begumpet, Hyderabad</h3>
        </div>
        <div className="text-center w-100 drcHead mb-3">
          <h3>Call Now</h3>
        </div>
        <div className="w-100 d-flex justify-content-evenly align-items-center drCall">
          <a href="/DrOnlineAppointment">
            <div className="text-center me-2">
              <img src={Camcorder} />
              <p className="mt-2 mb-0">₹500</p>
            </div>
          </a>
          <a href="/DrOnlineAppointment">
            <div className="text-center">
              <img src={Phone} />
              <p className="mt-2 mb-0">₹400</p>
            </div>
          </a>
        </div>
      </div>
      {/*drOnlineCard-ends-here*/}
    </div>
    {/*flexbox-ends-here*/}   
            </div>
            </div>
        );
    }
