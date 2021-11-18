import React, { Component } from 'react';
import Banner from '../../images/pexels-james-wheeler-414612.jpg';
import VideoCircle from '../../images/video-circle.png';
import AudioCircle from '../../images/audio-circle1.png';
import PersonCircle from '../../images/person-circle.png';
import CamcorderXs from '../../images/camcorder-xs.png';
import PersonXs from '../../images/person-xs.png';
import Phi from '../../images/phi.png';
import PdfIcon from '../../images/pdf-icon.png';
import Trashgree from '../../images/trash-green.png';
import PencilGreen from '../../images/pencil-green.png';
import QuestionImg from '../../images/question_img.png';
import Phone from '../../images/phone.png';
import UserGreen from '../../images/user-green.png';
import ChatIcon from '../../images/chat.png';
import TexDocument from '../../images/TextDocument.jpg';
import CloseRed from '../../images/close.png';


export default function DrConsultationRoom() {
    
        return (
            <div>
                <div>
              <div className="d-flex flex-wrap justify-content-between">
                <p> DeveloperNotes</p>
                  <img src={CloseRed} data-bs-toggle="modal" data-bs-target="#VideoCall" alt="close-red" className="closeIcon" />
              </div>
               
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-lg-6 p-3">
        <div className="w-100">
          <img src={Banner} alt="banner" className="img-fluid" />
        </div>
        <div className="w-100 text-end" style={{marginTop: '-10%'}}>
          <img src={Banner} alt="banner" width="25%" className="me-5" />
        </div>
        <div className="w-100 d-flex flex-wrap align-items-center">
          <div className="doaNText m-2">
            12:25
          </div>
          <div className="m-2">
            <a href>
              <img src={VideoCircle} alt="Videocirlce" />
            </a>
          </div>
          <div className="m-2">
            <a href>
              <img src={AudioCircle} alt="audioCircle" />
            </a>
          </div>
          <div className="m-2">
            <a href>
              <img src={PersonCircle} alt="Person" />
            </a>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap align-items-center mt-2">
          <button type="button" className="btn redBtn me-3 mb-2">End call &amp; Exit</button>
          <button type="button" className="btn greenBtn mb-2">Connect</button>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 bg-white p-3 mt-3" style={{border: '1px solid #eaeaea', borderRadius: 12}}>
          <div className="doaNText w-100">Upcoming</div>
          <div className="w-100 d-flex align-items-center mt-3">
            <button type="button" className="btn btn-sm bg-white pnBtn me-4"><i className="bi bi-chevron-left" /></button>
            <div className="w-100 d-flex align-items-flex-start overflow-auto">
              <div className="abWhite d-flex align-items-center m-1 p-1">
                <img src={CamcorderXs} alt="cam" className="me-2" style={{width: 12, height: 12}} />
                <div className="f8m">10:30 AM</div>
              </div>
              {/*abWhite-ends-here*/}
              <div className="abWhite d-flex align-items-center m-1 p-1">
                <div className="f8m">10:45 AM</div>
              </div>
              {/*abWhite-ends-here*/}
              <div className="abWhite d-flex align-items-center m-1 p-1">
                <img src={PersonXs} alt="personxs" className="me-2" style={{width: 12, height: 12}} />
                <div className="f8m">11:00 AM</div>
              </div>
              {/*abWhite-ends-here*/}
              <div className="abWhite d-flex align-items-center m-1 p-1">
                <div className="f8m">11:15</div>
              </div>
              {/*abWhite-ends-here*/}
              <div className="abWhite d-flex align-items-center m-1 p-1">
                <div className="f8m">11:30</div>
              </div>
              {/*abWhite-ends-here*/}
            </div>
            {/*flexbox-ends-here*/}
            <button type="button" className="btn btn-sm bg-white pnBtn"><i className="bi bi-chevron-right" /></button>
          </div>
          {/*flexbox-ends-here*/}
        </div>
      </div>
      {/*col-ends-here*/}
      <div className="col-12 col-lg-6 p-3">
        <div className="w-100 tabsOrange bg-white p-3" style={{border: '1px solid #eaeaea', borderRadius: 12}}>
          <nav>
            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#pd" type="button" role="tab" aria-selected="true">Patient Details</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#vh" type="button" role="tab" aria-selected="false">Visit History</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#pdg" type="button" role="tab" aria-selected="false">Patient Diagnosis</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#ip" type="button" role="tab" aria-selected="false">Issue prescription</button>
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
                <img src={PdfIcon} data-bs-toggle="modal" data-bs-target="#NewPopup" alt="phi" className="m-1 w-small"/>
                <img src={PdfIcon} data-bs-toggle="modal" data-bs-target="#NewPopup"alt="phi" className="m-1 w-small" />
                <img src={PdfIcon} data-bs-toggle="modal" data-bs-target="#NewPopup"alt="phi" className="m-1 w-small"/>
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
                <div className="w-50"><img src={PdfIcon} alt="pdf" /></div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                <div className="f10mTeal w-50">View Test Reports:</div>
                <div className="w-50 d-flex flex-wrap align-items-center"><img src={PdfIcon} alt="pdf" className="me-2" /><img src={PdfIcon} alt="pdf" /></div>
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
                <div className="ms-auto"><a href><img src={Trashgree} alt="trash" /></a></div>
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
            <div className="tab-pane fade" id="ip" role="tabpanel">
              <div className="w-100 py-2 px-3 text-white mt-3" style={{background: '#1C2341', fontWeight: 600, fontSize: 11}}>
                Place holder for banners
              </div>
              {/*blue-box-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                <div className="mb-2 me-3"><a href="#cml" className="f11sbBlue text-decoration-none" data-bs-toggle="modal">View Current medication list</a></div>
                <div className="mb-2"><a href="#allergies" className="f11sbBlue text-decoration-none" data-bs-toggle="modal">View Allergies</a></div>
              </div>
              {/*flexbox-ends-here*/}
              <div className=" mt-1 text_width">Add Drug :</div>
              <div className="w-100 d-flex flex-wrap align-items-center pt-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                <div className="f10m me-3 mb-2">Zincovit (syrup) 20 ML-Before Food-2 Days</div>
                <div className="ms-auto me-3 mb-2"><a href><img src={PencilGreen} alt="green" /></a></div>
                <div className="mb-2"><a href><img src={Trashgree} alt="trash" /></a></div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center pt-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                <div className="f10m me-3 mb-2">Zincovit (syrup) 30 ML-After Food-3 Days</div>
                <div className="ms-auto me-3 mb-2"><a href><img src={PencilGreen} alt="green" /></a></div>
                <div className="mb-2"><a href><img src={Trashgree} alt="trash" /></a></div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="row">
                <div className="col-12 col-md-4 mt-3">
                  <label for="name" className="green1">Drug Name</label>
                  <input type="text" className="form-control w-100" placeholder="Enter" />
                </div>
                {/*col-ends-here*/}
                <div className="col-12 col-md-4 mt-3">
                <label for="name" className="green1">Drug Unit</label>
                  <select className="form-select w-100">
                    <option selected>select</option>
                    <option>No's</option>
                    <option>ml</option>
                    <option>tsp</option>
                    <option>ml with Water</option>
                  </select>
                </div>
                {/*col-ends-here*/}
                <div className="col-12 col-md-4 mt-3">
                <label for="name" className="green1">Enter ml</label>
                  <input type="text" className="form-control w-100" placeholder="5ml" />
                </div>
                {/*col-ends-here*/}
              </div>
              {/*row-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center">
                <div className="form-check m-2">
                  <input className="form-check-input" type="checkbox" id="morning" />
                  <label className="form-check-label" htmlFor="morning">
                    Morning
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="checkbox" id="afternoon" />
                  <label className="form-check-label" htmlFor="afternoon">
                    Afternoon
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="checkbox" id="night" />
                  <label className="form-check-label" htmlFor="night">
                    Night
                  </label>
                </div>
                <div className="form-check m-2">
                  <input className="form-check-input" type="checkbox" id="SOS" />
                  <label className="form-check-label" htmlFor="SOS">
                    SOS
                  </label>
                </div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="row">
                <div className="col-12 col-md-4 mt-3">
                <label for="name" className="green1">When to Take</label>
                  <select className="form-select w-100">
                  <option selected>Select</option>
                    <option>On Empty stomach</option>
                    <option>Before Food</option>
                    <option>After Food</option>
                   
                  </select>
                </div>
                {/*col-ends-here*/}
                <div className="col-12 col-md-4 mt-3">
                <label for="name" className="green1">No.of Days</label>
                  <input type="text" className="form-control w-100" placeholder="Days" />
                </div>
                {/*col-ends-here*/}
                <div className="col-12 col-md-4 mt-4l">
                  <button type="button" className="btn btn-sm doaOrangeBtn px-4">+Add</button>
                </div>
                {/*col-ends-here*/}
              </div>
              {/*row-ends-here*/}
              <div className="mt-3 text_width">Add Test :</div>
              <div className="w-100 d-flex flex-wrap align-items-center pt-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                <div className="f10m me-3 mb-2">MRI Chest</div>
                <div className="ms-auto mb-2"><a href><img src={Trashgree} alt="trash" /></a></div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="row">
                <div className="col-12 col-md-8 mt-3">
                  <input type="text" className="form-control" placeholder="Enter Test Name" />
                </div>
                {/*col-ends-here*/}
                <div className="col-12 col-md-4 mt-3">
                  <button type="button" className="btn btn-sm doaOrangeBtn px-4">+Add</button>
                </div>
                {/*col-ends-here*/}
              </div>
              {/*row-ends-here*/}
              <div className="mt-3 text_width1">Add Advice:</div>
              <div className="w-100 d-flex flex-wrap align-items-center pt-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                <div className="f10m me-3 mb-2">Coconut Water</div>
                <div className="ms-auto mb-2"><a href><img src={Trashgree} alt="trash" /></a></div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="row">
                <div className="col-12 col-md-8 mt-3">
                  <input type="text" className="form-control" placeholder="Enter Advice" />
                </div>
                {/*col-ends-here*/}
                <div className="col-12 col-md-4 mt-3">
                  <button type="button" className="btn btn-sm doaOrangeBtn px-4">+Add</button>
                </div>
                {/*col-ends-here*/}
              </div>
              {/*row-ends-here*/}
              <div className="orange mt-3">Next follow up Date</div>
              <input type="date" className="form-control w-100 mt-2" />

              <div className="checkboxes my-4">
                <p className="green1">Enable Below Options for this Patient Follow-Up</p>
              <div>
                    <div className="form-check">
                        <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" defaultValue />Enable Audio Appointment Follow-up  <img src={Phone} alt="phone" className="wdPhone"/> <img src={QuestionImg} alt="questionImg"/>
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" defaultValue />Enable In-Person Appointment Follow-up <img src={UserGreen}  className="wdPhone" alt="usergreen"/> <img src={QuestionImg} alt="questionImg"/>
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" defaultValue />Enable Text Query Follow-up <img src={ChatIcon}  className="wdChat" alt="usergreen"/> <img src={QuestionImg} alt="questionImg"/>
                        </label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" defaultValue />Send Reports Immediately <img src={QuestionImg} alt="questionImg"/>
                        </label>
                    </div>
                    </div>

              </div>
              <div className="w-100 d-flex justify-content-end align-items-center mt-4">
                <button type="button" className="btn doacBtn me-3 mb-3" data-bs-target="#preview" data-bs-toggle="modal">Preview</button>
                <button type="button" className="btn doacBtn mb-3">Send Prescription</button>
              </div>


              
              {/*flexbox-ends-here*/}
            </div>
            {/*tabpane-4-ends-here*/}
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
  {/*modal-cml-starts-here*/}
  <div className="modal fade" id="cml" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><i className="bi bi-chevron-left me-2" />Current Medication List</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 f12sbTeal">Morning</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 f12sbTeal mt-3">Afternoon</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 f12sbTeal mt-3">Night</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 text-end mt-4"><button type="button" className="btn doacBtn px-4" data-bs-dismiss="modal">Close</button></div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-cml-ends-here*/}
  {/*modal-allergies-starts-here*/}
  <div className="modal fade" id="allergies" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><i className="bi bi-chevron-left me-2" />Allergies</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 f12sbTeal">Morning</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Allergy one goes here</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Allergy two goes here</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Allergy three goes here</div>
          <div className="w-100 text-end mt-4"><button type="button" className="btn doacBtn px-4" data-bs-dismiss="modal">Close</button></div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-allergies-ends-here*/}
  {/*modal-preview-starts-here*/}
  <div className="modal fade" id="preview" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><i className="bi bi-chevron-left me-2" />Preview</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 f12sbTeal mb-2">Chief Complaint</div>
          <div className="f10m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum</div>
          <div className="w-100 f12sbTeal mt-3">Provisional Diagnosis</div>
          <div className="f10m mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
          </div>
          <div className="w-100 f12sbTeal mt-3">Notes</div>
          <div className="f10m mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
          </div>
          <div className="w-100 f12sbTeal mt-3">Issue Prescription</div>
          <div className="w-100 f12sbTeal mt-3">Morning</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 f12sbTeal mt-3">Afternoon</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 f12sbTeal mt-3">Test</div>
          <div className="f10m mt-2">
            Test goes here
          </div>
          <div className="w-100 f12sbTeal mt-3">Add Advice</div>
          <div className="f10m mt-2">
            Coconut water
          </div>
          <div className="w-100 f12sbTeal mt-3">Next Follow up</div>
          <div className="f10m mt-2">
            22 July 2021
          </div>

        
            <div className="f10m mt-4">
              Enable Audio Appointment Follow-up
            </div>

            <div className="f10m mt-4">
            Enable In-Person Appointment Follow-up 
            </div>

            <div className="f10m mt-4">
            Enable Text Query Follow-up
            </div>

            <div className="f10m mt-4">
            Send Reports Immediately
            </div>
          <div className="w-100 text-end mt-4"><button type="button" className="btn doacBtn px-4" data-bs-dismiss="modal">Close</button></div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>


  {/*modal-view-starts-here*/}
<div className="modal fade" id="NewPopup" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Documents Uploaded By Patient</h5>
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

{/*modal-view-starts-here*/}
<div className="modal fade" id="BillPopup" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Documents Uploaded By Patient</h5>
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



  <div className="modal fade" id="VideoCall" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel">Video Screen</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="mpText w-100 mb-4">
            <p className="mpTitle">Do you want to close the window?</p>

            <div className="w-100 d-flex flex-wrap align-items-center mt-2">
              <button type="button" className="btn redBtn me-3 mb-2">No</button>
              <button type="button" className="btn greenBtn mb-2">Yes</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{/*modal-view-ends-here*/}
  {/*modal-preview-ends-here*/}
</div>



            </div>
        );
    }
