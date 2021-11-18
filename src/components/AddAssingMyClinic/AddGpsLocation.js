import React, { Component } from 'react';
import Map from '../../images/doctoModule/map.png';
import LocGreen from '../../images/doctoModule/location-sm-green.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function AddGpsLocation() {
  const history = useHistory()
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Set Clinic Location</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 mt-3">
      <img src={Map} alt="map" />
    </div>
    {/*map-ends-here*/}
    <div className="w-100 doaNText d-flex align-items-center mt-3">
      <img src={LocGreen} alt="green" className="me-2" />Set your Clinic Location
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 mpText mt-2">
      B49, Prakash Nagar,Hyderabad, 
      water tank,Telangana - 500016
      Mobile: 98483 12345
    </div>
    <div className="w-100 mt-3">
      <Link to="/AddAddressLocation"><button type="button" className="btn doabBtn py-1 px-3">Change</button></Link>
    </div>
    <div className="w-100 mt-4 text-center">
    <Link to="/AddAddressLocation"><button type="button" className="btn doacBtn py-1 px-3">Confirm Location</button></Link>
    </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
