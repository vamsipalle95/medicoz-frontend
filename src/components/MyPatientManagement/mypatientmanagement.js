import React, { Component } from 'react';
import PatientList from '../../images/doctoModule/patient-list.png';
import Rpl from '../../images/doctoModule/rpl.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Backbtn from '../../images/back-button-new.png';

export default function Mypatientmanagement() {
 
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
       My Patient Management
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={PatientList} alt="patientlist" className="me-2" />My Patients list</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/PatientList"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">153</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 d-flex align-items-center justify-content-between mt-4">
       <Link to="/PatientList"> <button type="button" className="btn doacBtn" onclick="location.href='dr-patient-list.html';">View</button></Link>
        <Link to="/AddPatient"><button type="button" className="btn doaOrangeBtn">+Add</button></Link>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Rpl} alt="rpl" className="me-2" /> Follow-up Patients List</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/PatientFollowUp"> <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">31</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 d-flex align-items-center justify-content-between text-center mt-4">
       <Link to="/PatientFollowUp"> <button type="button" className="btn doacBtn">View</button></Link>
       <Link to="/PatientFollowUp"> <button type="button" className="btn doacBtn">Text Queries</button></Link>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={PatientList} alt="patientlist" className="me-2" />Patients Ref - <span className="clrOrg">BY Me</span></h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/PatientReferredList"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">3</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 d-flex align-items-center justify-content-between mt-4">
        <Link to="/PatientReferredList"><button type="button" className="btn doacBtn">View</button></Link>
        <Link to="/PatientReferList"><button type="button" className="btn doaOrangeBtn">Refer</button></Link>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Rpl} alt="rpl" className="me-2" />Patients Ref- <span className="clrOrg">TO Me</span></h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/PatientReferral"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">31</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-4">
       <Link to="/PatientReferral"> <button type="button" className="btn doacBtn">View</button></Link>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*drHospitalCard-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
