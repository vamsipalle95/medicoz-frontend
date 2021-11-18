import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackBtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function DeliveryAddressUrban() {
      const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="backbtn"/> Add/Edit Delivery Address</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="doaNText w-100 mt-3">
      Select
    </div>
    <div className="w-100 irBtn mt-2">
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked />
    <label className="form-check-label" htmlFor="inlineRadio1">Urban</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
    <label className="form-check-label" htmlFor="inlineRadio2">Rural</label>
  </div>
</div>

    {/*inline-radios-ends-here*/}
    <form className="w-100 mt-4">
      <div className="mpText w-100 mb-2">
        * Select State
      </div>
      <input className="form-control w-100" type="text" placeholder="Telangana" required />
      <div className="mpText w-100 mt-3 mb-2">
        * Select District
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        * Select Mandal
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        Enter Village
      </div>
      <input className="form-control w-100" type="text" />
      <div className="mpText w-100 mt-3 mb-2">
        * Enter Locality
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        * Enter Pincode
      </div>
      <input className="form-control w-100" type="text" required />
      
      
      
     
      <div className="mpText w-100 mt-3 mb-2">
        Choose a name for the address
      </div>
      <div className="abFormGroup">
        <input type="radio" className="btn-check" name="options" id="home" autoComplete="off" defaultChecked />
        <label className="btn py-1 px-3 m-1" htmlFor="home">Home</label>
        <input type="radio" className="btn-check" name="options" id="office" autoComplete="off" />
        <label className="btn py-1 px-3 m-1" htmlFor="office">Office</label>
        <input type="radio" className="btn-check" name="options" id="others" autoComplete="off" />
        <label className="btn py-1 px-3 m-1" htmlFor="others">Others</label>
      </div>
      
      
      <button type="submit" className="d-block btn doacBtn px-4 mt-4 mx-auto">Save Address</button>
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
