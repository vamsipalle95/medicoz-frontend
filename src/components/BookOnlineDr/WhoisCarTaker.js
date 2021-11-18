import React, { Component } from 'react';
import Think from '../../images/thinking.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MpEdit from '../../images/mp-edit.png';
import Edit from '../../images/edit.png';
import {useHistory } from 'react-router-dom';

export default function WhoisPatient() {
const history = useHistory();
        return (
            <div>
 <div className="container px-2 py-5">
  <div className="draCard3 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Think} alt="think" className="me-2" />
      <h3 className="mb-0">Select Care Taker</h3>
    </div>
   
    <div className="doaNText w-100 mt-3">
      Select Care Taker From Below
    </div>
    <form className="ogrBtnGroup w-100 mt-3">
      <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
      <label className="btn" htmlFor="option1">You</label>
      <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" defaultChecked />
      <label className="btn" htmlFor="option2">Vinod</label>
      <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
      <label className="btn" htmlFor="option3">Vikas</label>
      
    </form>

    <div className="w-100 doacTitle d-flex align-items-center pt-2 pb-2">
      <h3 className="mb-0">Note:</h3>
    </div>

    <div className="doaNText w-100 mt-3">
      All Video Participants should have Medicoz Mobile App
    </div>
    {/*form-ends-here*/}

    <div className="doaNText w-100 mt-3">
      <a href="#">Share Medicoz Mobile App Link</a>
    </div>
    <div className="doaNText w-100 mt-3">
      (Dev Notes show show care takers family members having mobile numbers in the above list)
    </div>

    <div className="w-100 text-end d-flex flex-wrap mt-4">
    <button type="button" onClick = {() => history.goBack()}className="btn doabBtn ms-auto me-3 px-4">Back</button>

       <Link to="/ConfirmConferenceAppointment"> <button type="submit" className="btn doacBtn px-4">Next</button></Link>
      </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}




  
            </div>
        );
    }
