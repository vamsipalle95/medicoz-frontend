import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import Like from '../../images/doctoModule/like.png';
import LocsmGreen from '../../images/doctoModule/location-sm-green.png';
import yashoda from '../../images/doctoModule/yashoda.jpg';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function ClinicPartners() {
    const history = useHistory()
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Clinics List - Bulk Appointments Providers
    </div>
    {/*doaNText-ends-here*/}
  </div>
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Clinic name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Multi-Speciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <Link to="/ViewClinicDoctors"><button type="button" className="btn doacBtn d-block mx-auto mt-4">Clinic Doctors Slots</button></Link>
    </div>
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Clinic name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Multi-Speciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <Link to="/ViewClinicDoctors"><button type="button" className="btn doacBtn d-block mx-auto mt-4">Clinic Doctors Slots</button></Link>
    </div>
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Clinic name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Multi-Speciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <Link to="/ViewClinicDoctors"><button type="button" className="btn doacBtn d-block mx-auto mt-4">Clinic Doctors Slots</button></Link>
    </div>
  </div>
  {/*flexbox-ends-here*/}
</div>


{/*myPhoneCardCnt-ends-here*/}
            </div>
        );
    }
