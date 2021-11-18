import React, { Component } from 'react';
import Like from '../../images/doctoModule/like.png';
import Profile from '../../images/doctoModule/profile-1.png';
import EllispeGreen from '../../images/doctoModule/ellipse-green.png';
import LocsmGreen from '../../images/doctoModule/location-sm-green.png';
import Camcorder from '../../images/doctoModule/camcorder.png';
import yashoda from '../../images/doctoModule/yashoda.jpg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Backbt from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function ServiceprovidersAll() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbt} alt="altBtn" onClick={() => history.goBack()}/> Search All Service Providers
    </div>
    {/*doaNText-ends-here*/}
  </div>
  <div className="w-100 d-flex mt-3">
    <input type="search" className="form-control me-3" placeholder="Search All Providers List" />
    <button type="button" className="btn doacBtn px-4">Search</button>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='greenm' />
      </div>
      <div className="text-center w-100 mb-3">
        <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
        <h4 className="mb-0 f10m">At Hospital</h4>
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
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>

      <div className="text-center w-100 drcHead1 mb-3"><h3>Book Appointment</h3></div>


      <div className="w-100 d-flex justify-content-between align-items-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
            <h3 className="f10m" >Single Slot</h3>
            <img src={Camcorder} alt="camcorder"/>
            <p className="mb-0 f10m">₹500</p>
          </div>
        </a>
       <button type="button" className="btn txt-fnt" data-bs-toggle="modal" data-bs-target="#viewSlots">Book Bulk Slots</button>
       
      </div>
      <Link to="/SelectTokenBookSlot"> <p>Dev:clickhere</p></Link>
    </div>
    {/*drOnlineCard-ends-here*/}
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
    <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='greenm' />
      </div>
      <div className="text-center w-100 mb-3">
        <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
        <h4 className="mb-0 f10m">At Hospital</h4>
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
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
            <img src={Camcorder} alt="camcorder" />
            <p className="mb-0 f10m">₹500</p>
          </div>
        </a>
      </div>
    </div>
    {/*drOnlineCard-ends-here*/}
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
    <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='greenm' />
      </div>
      <div className="text-center w-100 mb-3">
        <h3 className="mb-0 f12sbOrange">Dr. IN</h3>
        <h4 className="mb-0 f10m">At Hospital</h4>
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
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
            <img src={Camcorder} alt="camcorder" />
            <p className="mb-0 f10m">₹500</p>
          </div>
        </a>
      </div>
    </div>
    {/*drOnlineCard-ends-here*/}
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Hospital name</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Myltispeciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt='green' className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like"/></a>
      </div> 
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Myltispeciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="lockgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
  </div>
  {/*flexbox-ends-here*/}
</div>

{/*modal-viewSlots-starts-here*/}
<div className="modal fade" id="viewSlots" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">View allotted Slots</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="w-100">
          <a href="/" className="text-decoration-none"><h3 className="mpHead mb-1">Doctor name</h3></a>
          <p className="mpText mb-2">MBBS, MS, MNAMS, FALS</p>
          <p className="doaNText mb-0">General Physician</p>
          <p className="mpText mb-0">Experience: 12 Years</p>
        </div>
        {/*text-ends-here*/}
        <div className="w-100 d-flex align-items-center mt-3">
          <div className="divGray text-center w-50 py-1 me-2">
            Apr 4
          </div>
          <div>
            <p className="mpText mb-0"><span>10:00 AM to 5:00 PM</span></p>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center mt-3">
          <div className="divGray text-center w-50 py-1 me-2">
            Apr 10
          </div>
          <div>
            <p className="mpText mb-0"><span>11:00 AM to 5:00 PM</span></p>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center mt-3">
          <div className="divGray text-center w-50 py-1 me-2">
            Apr 21
          </div>
          <div>
            <p className="mpText mb-0"><span>12:00 AM to 5:00 PM</span></p>
          </div>
        </div>
        {/*flexbox-ends-here*/}

        <div className="buttonNow d-flex flex-wrap justify-content-end">
            <button type="button" className="btn txt-fnt">Book Slot</button>
        </div>
      </div>
    </div>
  </div>
  {/*modal-viewSlots-ends-here*/}
</div>

{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
