import React, { Component } from 'react';
import Searchgreen from '../../images/search-green.png';
import Gps from '../../images/doctoModule/gps.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Addselfclinic() {
  const history = useHistory()
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()}/> Set Clinic Location</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="input-group w-100 mt-4">
      
      
    </div>
    <Link to="/AddGpsLocation" className="text-decoration-none w-100 d-flex align-items-center my-4">
      <div className="me-2">
        <img src={Gps} alt="gps" />
      </div>
      <div>
        <p className="doaNText mb-0">Set your Location Point</p>
        <p className="mpText mb-0">Using GPS</p>
      </div>
    </Link>
    {/*flexbox-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
