import React, { Component } from 'react';
import profile from '../../images/doctoModule/profile-1-sm.png';
import Anitha from '../../images/doctoModule/anitha-sm.png';
import Trash from '../../images/doctoModule/trash-green.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export default function EditAddress() {
  const history = useHistory()
        return (
            <div>
                <div className="overflow-auto p-md-3  mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start">
    <div className="draCard2 m-2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center mb-3 pb-2">
        <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()}/> Clinic Doctors</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="w-100 text-center">
        <img src={profile} alt="profile" />
      </div>
      <div className="mpGrayBox w-100 p-3" style={{marginTop: '-35px'}}>
        <div className="w-100 mt-4">
          <a href="/" className="text-decoration-none f11sbBlue">Primary Doctor</a>
        </div>
        <div className="w-100">
          <a href="/" className="text-decoration-none f12sbOrange">Dr.Prasad</a>
        </div>
        <div className="doaNText mb-1">
          General Physician
        </div>
      </div>
      <Link to="/AddSecondaryAddress"><button type="button" className="btn doaOrangeBtn w-100 mt-4">Add Secondary Doctor</button></Link>
      <div className="mpGrayBox w-100 mt-4 p-3">
        <div className="w-100">
          <a href="/" className="text-decoration-none f12sbOrange">Dr.Anitha</a>
        </div>
        <div>
          <a href="mailto:anitha.a@gmail.com" className="f10sb text-decoration-none">anitha.a@gmail.com</a>
        </div>
        <div className="doaNText mt-3">
          Need to accept your invitation
        </div>
        <button type="button" className="btn doaOrangeBtn d-block mt-4 mx-auto">Resend Invitation</button>
      </div>
      <div className="w-100 text-center mt-4">
        <img src={Anitha} alt="aitha" />
      </div>
      <div className="mpGrayBox w-100 p-3" style={{marginTop: '-35px'}}>
        <div className="w-100 mt-4">
          <a href="/" className="text-decoration-none f11sbBlue">Secondary Doctor</a>
        </div>
        <div className="w-100">
          <a href="/" className="text-decoration-none f12sbOrange">Dr.Anitha</a>
        </div>
        <div className="doaNText mb-1">
          Gynaecologist
        </div>
        <div className="text-end">
          <a href><img src={Trash} alt="trash" /></a>
        </div>
      </div>
    </div>
    {/*draCard1-ends-here*/}
    
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }