import React, { Component } from 'react';
import Like from '../../images/doctoModule/like.png';
import Profile from '../../images/doctoModule/profile-1.png';
import EllispeGreen from '../../images/doctoModule/ellipse-green.png';
import LocsmGreen from '../../images/doctoModule/location-sm-green.png';
import Camcorder from '../../images/doctoModule/camcorder.png';
import yashoda from '../../images/doctoModule/yashoda.jpg';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function ServiceProviderSlots() {
  const history = useHistory()
        return (
            <div>
                <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} />View My Bulk Appointment Service Providers
    </div>
    {/*doaNText-ends-here*/}
  </div>
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='green' />
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
        <img src={LocsmGreen} alt="loc" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <div className="w-100 d-flex justify-content-between align-items-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
            <img src={Camcorder} alt="camcorder"/>
            <p className="mb-0 f10m">₹500</p>
          </div>
        </a>
        <button type="button" className="btn doacBtn" data-bs-toggle="modal" data-bs-target="#viewSlots">View Slots</button>
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
        <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Myltispeciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="loc" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
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
        <img src={LocsmGreen} alt="loc" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
    <div className="drOnlineCard m-2 p-3" style={{background: '#F1F1F1'}}>
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="Like" /></a>
      </div>
      <div className="text-center w-100 drLogo">
        <img src={Profile} alt="profile" />
      </div>
      <div className="text-center w-100 drStatus">
        <img src={EllispeGreen} alt='green' />
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
      <img src={LocsmGreen} alt="loc" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
          <img src={Camcorder} alt="camcorder"/>
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
        <img src={EllispeGreen} alt='green' />
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
        <img src={LocsmGreen} alt="loc" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
          <img src={Camcorder} alt="camcorder"/>
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
        <img src={EllispeGreen} alt='green' />
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
      <img src={LocsmGreen} alt="loc" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <a href="/" className="text-decoration-none">
          <div className="text-center me-2">
          <img src={Camcorder} alt="camcorder"/>
            <p className="mb-0 f10m">₹500</p>
          </div>
        </a>
      </div>
    </div>
    {/*drOnlineCard-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
