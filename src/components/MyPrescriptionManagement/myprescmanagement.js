import React, { Component } from 'react';
import Drugs from '../../images/doctoModule/drugs.png';
import Investgations from '../../images/doctoModule/investigations.png';
import Pulse from '../../images/doctoModule/pulse.png';
import Symptoms from '../../images/doctoModule/symptoms.png';
import Advice from '../../images/doctoModule/advice.png';
import Diagnosis from '../../images/doctoModule/diagnosis.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class myprescmanagement extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      My Prescription Management
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Drugs} alt="drugs" className="me-2" />My Drugs</h3>
      </div>
      {/*doacTitle-ends-here*/}
     <Link to="/MyDrugsList"> <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto" style={{cursor: 'pointer'}} onclick="location.href='dr-my-drugs-list.html';">
        <div className="w-100 f16sb" style={{color: '#30A2BE !important'}}>20</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/AddEditMyDrugs"><button type="button" className="btn doaOrangeBtn" onclick="location.href='dr-add-edit-my-drugs-list.html';">+ Add / Edit</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Investgations} alt="investi" className="me-2" />My Investigations</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/MyInvestigationList"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">5</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/MyInvestigationList"><button type="button" className="btn doaOrangeBtn" onclick="location.href='dr-my-investigations-list.html';">+ Add / Edit</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Pulse} alt="pulse" className="me-2" />My Vitals</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/MyVitalsList"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">0</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/MyVitalsList"><button type="button" className="btn doaOrangeBtn" onclick="location.href='dr-my-vitals-list.html';">+ Add / Edit</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Symptoms} alt="symptoms" className="me-2" />My Symptoms</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/MySymptomsList"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">6</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
       <Link to="/MySymptomsList"> <button type="button" className="btn doaOrangeBtn" onclick="location.href='dr-my-symptoms-list.html';">+ Add / Edit</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Advice} alt="advice" className="me-2" />My Advice</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/MyAdvice"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">8</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/MyAdvice"><button type="button" className="btn doaOrangeBtn" onclick="location.href='dr-my-advices-list.html';">+ Add / Edit</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 mb-3 cla13fnt pb-2">
        <h3 className="pb-2 cla13fnt"><img src={Diagnosis} alt="Diagnosis" className="me-2" />My Provisional Diagnosis</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <Link to="/ProvisionalDiagnosis"><div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">3</div>
      </div></Link>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
       <Link to="/ProvisionalDiagnosis"> <button type="button" className="btn doaOrangeBtn" onclick="location.href='dr-my-provisional-diagnosis-list.html';">+ Add / Edit</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
}

export default myprescmanagement;