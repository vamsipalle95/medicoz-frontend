import React, { Component } from 'react';
import Camcorder from '../../images/doctoModule/camcorder-sm.png';
import UserGreen from '../../images/doctoModule/user-green-sm.png';
import PhoneSm from '../../images/doctoModule/phone-sm.png';
import Rmicon from '../../images/doctoModule/rp-icon.png';
import Walking from '../../images/doctoModule/walking.png';
import '../ConsultRoom/consultroom.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BackBtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';
import Phi from '../../images/phi.png';
import PdfIcon from '../../images/pdf-icon.png';
import Trashgree from '../../images/trash-green.png';
import TexDocument from '../../images/TextDocument.jpg';
import Person from '../../images/person.png';



export default function ConsulationRoom() {
   const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0 txtNow">
      <img onClick={() => history.goBack()} src={BackBtn} alt="backbtn"/> Hospital/Clinic Name Consultation Room 
      <span className="mx-2 pl-5l"><img src={Camcorder} className="mr-2" alt="video"/><span>(12) </span></span>
      <span className="mx-2"><img src={PhoneSm} className="mr-2" alt="video"/><span>(25) </span></span>
      <span className="mx-2"><img src={UserGreen} className="mr-2" alt="video"/> <span>(13) </span></span>
      <span className="mx-2"><img src={Rmicon} alt="video"/> <span>(20) </span></span>
      <span className="mx-2"><img src={Walking} alt="video"/> <span>(22)</span></span>
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 overflow-auto mt-3">
    <table id="table_id" className="w-100">
      <thead>
        <tr>
          <th>Time</th>
          <th>Patient Name</th>
          <th>Gender/Age</th>
          <th>RP Name</th>
          <th>New/Follow up</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={Camcorder} alt="camcorder" className="me-3 w-16w" style={{width: 16}} />10:30 AM</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#patientProfile">Vinod Kumar</a></td>
          <td>M/28</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#RpPopup">Narsimha</a></td>
          <td>New</td>
          <td />
          <td />
        </tr>
        <tr>
          <td><img src={PhoneSm} alt="phone" className="me-3 w-16w" style={{width: 16}} />10:45 AM</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#patientProfile">Sai rebba</a></td>
          <td>F/32</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#RpPopup">Yashoda Clinic</a></td>
          <td>Follow Up</td>
          <td />
          <td>
            <Link to="/DrConsultationRoom"><button type="button" className="btn doaOrangeBtn px-4">Start</button></Link></td>
        </tr>
        <tr>
          <td><img src={UserGreen} alt="usergreen" className="me-3 w-16w" style={{width: 16}} />11:00  AM</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#patientProfile">Rajesh</a></td>
          <td>M/35</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#RpPopup">Life Hospital</a></td>
          <td>Follow Up</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#modal1">View</a></td>
          <td />
        </tr>
        <tr>
          <td><img src={Rmicon} alt="rp" className="me-3" style={{width: 16}} />11:15  AM</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#patientProfile">Sathish</a></td>
          <td>F/40</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#RpPopup">Keerthi Hospital</a></td>
          <td>New</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#modal1">View</a></td>
          <td />
        </tr>
        <tr>
          <td><img src={Walking} alt="walking" className="me-3 w-16w" style={{width: 16}} />11:30  AM</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#patientProfile">Ramesh</a></td>
          <td>M/28</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#RpPopup">Dr.Ramarao</a></td>
          <td>New</td>
          <td><a href="#" data-bs-toggle="modal" data-bs-target="#modal1">View</a></td>
          <td><button type="button" className="btn doaOrangeBtn px-3">Send-In</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{/*myPhoneCardCnt-ends-here*/}


{/*modal-bulkUpload-starts-here*/}
<div className="modal fade" id="modal1" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal_dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">Upcoming Consulation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <div className="container-fluid">
  <div className="row">
    <div className="col-12 p-3">
      <div className="w-100 tabsOrange bg-white p-3" style={{border: '1px solid #eaeaea', borderRadius: 12}}>
        <nav>
          <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#pd" type="button" role="tab" aria-selected="true">Patient Details</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#vh" type="button" role="tab" aria-selected="false">Visit History</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#pdg" type="button" role="tab" aria-selected="false">Patient Diagnosis</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="pd" role="tabpanel">
            <div className="row pb-2" style={{borderBottom: '1px solid #cecece'}}>
              <div className="col-12 col-md-4 mt-4">
                <div className="w-100 doaNText mb-3">J. Srinidhi</div>
                <div className="f10m mb-1">PT48369</div>
                <div className="f10m mb-1">Male / 38</div>
                <div className="f10m mb-1">Hyderabad, Begumpet</div>
                <div className="f10m mb-1">Nizamabad, Pendur, Gollapalli</div>
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-md-8 mt-4">
                <div className="f10m mb-1">Appointment Type: Video Call</div>
                <div className="f10m mb-1">New / Follow up: New</div>
                <div className="f10m mb-1">Mobile: 12345 12345</div>
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
            <div className="w-100 f10sbTeal mt-3">
              View Documents Uploaded by Patient
            </div>
            <div className="w-100 d-flex flex-wrap align-items-center mt-3">
              <img src={PdfIcon} alt="pdffile" data-bs-toggle="modal"  data-bs-target="#NewPopup" className="m-1 w-small" />
              <img src={PdfIcon} alt="pdffile" data-bs-toggle="modal"  data-bs-target="#NewPopup" className="m-1 w-small" />
              <img src={PdfIcon} alt="pdffile" data-bs-toggle="modal"  data-bs-target="#NewPopup" className="m-1 w-small" />
            </div>
            {/*flexbox-ends-here*/}
            <div className="row">
              <div className="col-12 col-md-4 mt-3">
                <div className="w-100 f10sbTeal mb-3">Medical Conditions</div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc1" />
                  <label className="form-check-label" htmlFor="mc1">
                    I am Diabetic
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc2" />
                  <label className="form-check-label" htmlFor="mc2">
                    I have Arthritis
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc3" />
                  <label className="form-check-label" htmlFor="mc3">
                    Kidney problem
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc4" />
                  <label className="form-check-label" htmlFor="mc4">
                    I have Hypertension (BP)
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc5" />
                  <label className="form-check-label" htmlFor="mc5">
                    I have Asthma
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc6" />
                  <label className="form-check-label" htmlFor="mc6">
                    Lever problem
                  </label>
                </div>
                <div className="w-100 f10sbTeal my-3">Allergies</div>
                <div className="w-100 d-flex align-items-center mb-3">
                  <input type="text" className="form-control me-3" />
                  <button type="button" className="btn btn-sm doacBtn">+</button>
                </div>
                {/*flexbox-ends-here*/}
                <div className="f10m mb-2">Allergy one goes here</div>
                <div className="f10m mb-2">Allergy one goes here</div>
                <div className="f10m mb-2">Allergy one goes here</div>
                <div className="f10m mb-2">Allergy one goes here</div>
                <div className="mt-3"><a href className="f11sbBlue text-decoration-none">Add Prescription</a></div>
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-md-4 mt-3">
                <div className="w-100 f10sbTeal mb-3">Habits</div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="hb1" />
                  <label className="form-check-label" htmlFor="hb1">
                    Smoking
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="hb2" />
                  <label className="form-check-label" htmlFor="hb2">
                    Pan Masala
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="hb3" />
                  <label className="form-check-label" htmlFor="hb3">
                    Alcohol drinking
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="hb4" />
                  <label className="form-check-label" htmlFor="hb4">
                    Tobacco
                  </label>
                </div>
                <div className="form-check w-100 mt-2">
                  <input className="form-check-input" type="checkbox" id="mc6" />
                  <label className="form-check-label" htmlFor="mc6">
                    Junk food
                  </label>
                </div>
                <div className="w-100 f10sbTeal my-3">Surgeries</div>
                <div className="w-100 d-flex align-items-center mb-3">
                  <input type="text" className="form-control me-3" />
                  <button type="button" className="btn btn-sm doacBtn">+</button>
                </div>
                {/*flexbox-ends-here*/}
                <div className="f10m mb-2">Knee Surgery</div>
                <div className="f10m mb-2">Kidney surgery</div>
                <div className="f10m mb-2">Spinal surgery</div>
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-md-4 mt-3">
                <div className="w-100 f10sbTeal mb-3">Current Medication List</div>
                <div className="f10sbOrange mb-2">Morning</div>
                <div className="f10m mb-2">zincovit (Syrup) - Before Food</div>
                <div className="f10m mb-4">zincovit (Syrup) - After Food</div>
                <div className="f10sbOrange mb-2">Afternoon</div>
                <div className="f10m mb-2">zincovit (Syrup) - Before Food</div>
                <div className="f10m mb-4">zincovit (Syrup) - After Food</div>
                <div className="f10sbOrange mb-2">Night</div>
                <div className="f10m mb-2">zincovit (Syrup) - Before Food</div>
                <div className="f10m mb-2">zincovit (Syrup) - After Food</div>
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
          </div>
          {/*tabpane-1-ends-here*/}
          <div className="tab-pane fade" id="vh" role="tabpanel">
            <div className="w-100 d-flex align-items-center p-2 mpGrayBox mt-5">
              <div className="f10m w-50">Total Visits: 3</div>
              <div className="w-50"><a href className="f10mBlue text-decoration-none">Select Visit Date</a></div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">Consult Date/Time</div>
              <div className="f10m w-50">Apr 4, 2021</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">Consult Type:</div>
              <div className="f10m w-50">In-Person/Video/Audio/RP-Video</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">New/Follow-Up:</div>
              <div className="f10m w-50">New</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">Place of Appointment:</div>
              <div className="f10m w-50">Krupa Clinic/ Balaji Hospital</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">Diagnosis:</div>
              <div className="f10m w-50">Urine Infection</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">Given Medication:</div>
              <div className="f10m w-50">Tab:Cefixime-200 Syp: Citralka</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">Investigations Suggested:</div>
              <div className="f10m w-50">CBP, Urine Test, Something, LFT</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">View Given Advices:</div>
              <div className="f10m w-50">Drink 3 Liters of Water, 2 Coconuts per day</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">View Prescription:</div>
              <div className="w-50"><img src={PdfIcon} /></div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10mTeal w-50">View Test Reports:</div>
              <div className="w-50 d-flex flex-wrap align-items-center"><img src={PdfIcon} className="me-2" /><img src={PdfIcon} /></div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 mt-4 text-end">
              <button type="button" className="btn btn-sm pnBtn me-2"><i className="bi bi-chevron-left" /></button>
              <button type="button" className="btn btn-sm pnBtn"><i className="bi bi-chevron-right" /></button>
            </div>
          </div>
          {/*tabpane-2-ends-here*/}
          <div className="tab-pane fade" id="pdg" role="tabpanel">
            <div className="w-100 f10sbTeal mt-3">Vitals</div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">Ht (fts):</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">5' 7" fts</a></div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">Wt (Kgs):</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">72 kgs</a></div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">Temp (f):</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">102 f</a></div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-md-4">
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">BP:</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">120 / 80</a></div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">Blood Sugar:</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">220 / 110</a></div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">Blood Group:</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">AB +ve</a></div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
              <div className="col-12 col-md-4">
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">SpO2:</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">98</a></div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                  <div className="f10m">Heart Rate:</div>
                  <div className="ms-auto"><a href className="f10mBlue text-decoration-none">85</a></div>
                </div>
                {/*flexbox-ends-here*/}
              </div>
              {/*col-ends-here*/}
            </div>
            {/*row-ends-here*/}
            <div className="w-100 f10sbTeal mt-4">Chief Complaint</div>
            <textarea className="form-control w-100 mt-2" rows={5} defaultValue={""} />
            <div className="w-100 f10sbTeal mt-4">Provisional Diagnosis</div>
            <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
              <div className="f10m">some diagnosis</div>
              <div className="ms-auto"><a href><img src={Trashgree} /></a></div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex align-items-center mt-4">
              <input type="text" className="form-control me-3" />
              <button type="button" className="btn btn-sm doaOrangeBtn px-4">+Add</button>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 f10sbTeal mt-4">Dr.Notes</div>
            <textarea className="form-control w-100 mt-2" rows={5} defaultValue={""} />
          </div>
          {/*tabpane-3-ends-here*/}
        </div>
        {/*tabs-ends-here*/}
      </div>
      {/*tabs-container-ends-here*/}
    </div>
    {/*col-ends-here*/}
  </div>
  {/*row-ends-here*/}
</div>
{/*container-fluid-ends-here*/}

      </div>
      {/*modal-body-ends-here*/}
    </div>
  </div>
</div>
{/*modal-bulkUpload-ends-here*/}

{/*modal-view-starts-here*/}
<div className="modal fade" id="NewPopup" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Documents Uploaded by Patient</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="mpText w-100 mb-4">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1500}>
              <img src={TexDocument} alt="txtdoc" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={1500}>
              <img src={TexDocument} alt="txtdoc" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={1500}>
              <img src={TexDocument} alt="txtdoc" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*modal-body-ends-here*/}
    </div>
    {/*modal-content-ends-here*/}
  </div>
</div>
{/*modal-view-ends-here*/}

{/*modal-patientProfile-starts-here*/}
<div className="modal fade" id="patientProfile" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={Person} alt="person" className="me-2" />Patient Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">UID</div>
            <div className="f10m w-50">123456789</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">IMR No</div>
            <div className="f10m w-50">MED13547C</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">First Name</div>
            <div className="f10m w-50">Lorem ipsum</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Last Name</div>
            <div className="f10m w-50">Lorem ipsum</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Gender</div>
            <div className="f10m w-50">Lorem ipsum</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Age</div>
            <div className="f10m w-50">24</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Mobile</div>
            <div className="f10m w-50">12345 12345</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">City/Town//Dist</div>
            <div className="f10m w-50">Hyderabad</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Mandal/village</div>
            <div className="f10m w-50" />
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Locality</div>
            <div className="f10m w-50">Begumpet</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Last Visit</div>
            <div className="f10m w-50">22 April 2021</div>
          </div>
          {/*flexbox-ends-here*/}
          <button type="button" className="btn d-block ms-auto mt-4 doacBtn" data-bs-dismiss="modal">close</button>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-patientProfile-ends-here*/}

  {/*modal-patientProfile-starts-here*/}
<div className="modal fade" id="RpPopup" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={Person} alt="person" className="me-2" />RP Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">UID</div>
            <div className="f10m w-50">123456789</div>
          </div>

          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">First Name</div>
            <div className="f10m w-50">Lorem ipsum</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Last Name</div>
            <div className="f10m w-50">Lorem ipsum</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Gender</div>
            <div className="f10m w-50">Lorem ipsum</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Age</div>
            <div className="f10m w-50">24</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Mobile</div>
            <div className="f10m w-50">12345 12345</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">City/Town//Dist</div>
            <div className="f10m w-50">Hyderabad</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Mandal/village</div>
            <div className="f10m w-50">Hyderabad</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Locality</div>
            <div className="f10m w-50">Begumpet</div>
          </div>
          
          <button type="button" className="btn d-block ms-auto mt-4 doacBtn" data-bs-dismiss="modal">close</button>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-patientProfile-ends-here*/}

            </div>
        );
    }
