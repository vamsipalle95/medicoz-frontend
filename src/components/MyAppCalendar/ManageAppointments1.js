import React, { useState } from 'react';
import clock from '../../images/doctoModule/clock-xs-white.png';
import PersonWhite from '../../images/doctoModule/person-xs-white.png';
import CamcorderWhite from '../../images/doctoModule/camcorder-xs-white.png';
import PhoneWt from '../../images/doctoModule/phone-xs-white.png';
import Subscribe from '../../images/doctoModule/subscribe-remote-partner-icon.png';
import Search from '../../images/search.png';
import Camsm from '../../images/doctoModule/camcorder-sm.png';
import Clinic from '../../images/doctoModule/clinic.jpg';
import PhoneEs from '../../images/doctoModule/phone-es.png';
import LocGreen from '../../images/doctoModule/location-sm-green.png';
import clocksm from '../../images/doctoModule/clock-sm.png';
import Calendar1 from '../../images/doctoModule/calender.png';
import PencilGreen from '../../images/doctoModule/pencil-green.png';
import CamcordRect from '../../images/doctoModule/camcorder-rectangle.png';
import PhoneRect from '../../images/doctoModule/phone-rectangle.png';
import UserGreensm from '../../images/doctoModule/user-green-sm.png';
import UserRect from '../../images/doctoModule/user-rectangle.png';
import RupeeCir from '../../images/doctoModule/rupee-circle.png';
import Calendar from 'react-calendar';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';



export default function ManageAppointments() {
  const [value, onChange] = useState(new Date());
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  
  
  
  {/*flexbox-ends-here*/}
  <div className="w-100 grayBox d-flex flex-wrap align-items-center justify-content-between mt-3 p-3">
    <div className="my-2 me-2">
      <img src={Subscribe} alt="subscribe" />
    </div>
    <div className="my-2 me-2">
      <p className="f10bTeal mb-0">Remote Partner Slotst: <span className="f10m">Lorem ipsum dolor sit amet, laoreet. Proin gravida dolor sit amet</span></p>
    </div>
    <div className="my-2">
      <button type="button" className="btn btnBlue">Subscribe to Remote Partner Slot Feature</button>
    </div>
  </div>
  {/*grayBox-ends-here*/}
  <div className="w-100 d-flex flex-wrap align-items-center px-3 mt-3">
    <div className="f12sbTeal me-3 my-2"> <img onClick={() => history.goBack()} src={Backbtn} alt="backbtn" />My Remote Partner Slots</div>
    <button type="button" data-bs-toggle="modal" data-bs-target="#invite" className="btn doaOrangeBtn my-2">Invite</button>
  </div>
  {/*flexbox-ends-here*/}
  <div className="input-group w-100 searchInput searchBtn mt-2">
    <span className="input-group-text"><img src={Search} alt="sarch" /></span>
    <input type="search" className="form-control" />
    <button type="button" className="btn ms-3">Search</button>
  </div>
  {/*searchbar-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Camsm} alt="camsm" className="me-2" />Sai Clinic <span className="f10sbTeal">(Specific Slots)</span></h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="w-100 mb-3 drLogo">
        <img src={Clinic} alt="clinic" />
      </div>
      <div className="w-100 mb-1 drName">
        <a href><h3 className="mb-0">Name Goes here</h3></a>
      </div>
      <div className="w-100 mb-1 drSp">
        <h3 className="mb-0">Role (Dr./Health Worker)</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-1 drLocation">
        <img src={PhoneEs} alt="phones" className="me-2" />
        <h3 className="mb-0">Mobile: 12345 12345</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline pb-2 drLocation" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        <img src={LocGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">City/Dist.Mandal, Village</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-center mt-3">
        <div className="divWhite f8m me-2 p-1">
          Apr 4
        </div>
        {/*divWhite-ends-here*/}
        <div className="f10m">From 10:00 AM to 5:00 PM</div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center mt-2">
        <div className="divWhite f8m me-2 p-1">
          Apr 12
        </div>
        {/*divWhite-ends-here*/}
        <div className="f10m">From 10:00 AM to 5:00 PM</div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center mt-2">
        <div className="divWhite f8m me-2 p-1">
          Apr 22
        </div>
        {/*divWhite-ends-here*/}
        <div className="f10m">From 10:00 AM to 5:00 PM</div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 text-center mt-3">
        <button type="button" className="btn doaOrangeBtn" data-bs-toggle="modal" data-bs-target="#specificSlots">+Add New Time Slot</button>
      </div>
      <div className="w-100 text-center mt-2"><a href="#cpmr" className="text-decoration-none f11sbBlue" data-bs-toggle="modal">Cancel Slots</a></div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Camsm} alt="camsm" className="me-2" />Sanjay Clinic <span className="f10sbTeal">(Specific Slots)</span></h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="w-100 mb-3 drLogo">
        <img src={Clinic} alt="clinic" />
      </div>
      <div className="w-100 mb-1 drName">
        <a href><h3 className="mb-0">Name Goes here</h3></a>
      </div>
      <div className="w-100 mb-1 drSp">
        <h3 className="mb-0">Role (Dr./Health Worker)</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-1 drLocation">
        <img src={PhoneEs} alt="phnes" className="me-2" />
        <h3 className="mb-0">Mobile: 12345 12345</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline drLocation">
        <img src={LocGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">City/Dist.Mandal, Village</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <button type="button" data-bs-toggle="modal" data-bs-target="#specificSlots" className="btn doaOrangeBtn">+Add New Time Slot</button>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Camsm} alt="camsm" className="me-2" />Shashi Clinic <span className="f10sbTeal">(Specific Slots)</span></h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="w-100 mb-3 drLogo">
        <img src={Clinic} alt="clinic" />
      </div>
      <div className="w-100 mb-1 drName">
        <a href><h3 className="mb-0">Name Goes here</h3></a>
      </div>
      <div className="w-100 mb-1 drSp">
        <h3 className="mb-0">Role (Dr./Health Worker)</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-1 drLocation">
        
        <h3 className="mb-0">Mobile: 12345 12345</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline drLocation">
        <img src={LocGreen} alt='Locgreen' className="me-2" />
        <h3 className="mb-0">City/Dist.Mandal, Village</h3>
      </div>
      <div className="w-100 text-center mt-3">
        <button type="button" data-bs-toggle="modal" data-bs-target="#specificSlots" className="btn doaOrangeBtn">+Add New Time Slot</button>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>

<div>
  {/*modal-slotDuration-starts-here*/}
  <div className="modal fade" id="slotDuration" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={clocksm} alt="clocksm" className="me-2" />My Slot Duration</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 mpText">Slot cannot be changed for already
            booked appointments</div>
          <div className="w-100 abFormGroup mt-3">
            <input type="radio" className="btn-check" name="options" id="option-1" autoComplete="off" defaultChecked />
            <label className="btn py-1 px-3 m-1" htmlFor="option-1"><i className="bi bi-clock me-2" />10 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-2" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-2"><i className="bi bi-clock me-2" />15 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-3" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-3"><i className="bi bi-clock me-2" />20 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-4" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-4"><i className="bi bi-clock me-2" />25 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-5" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-5"><i className="bi bi-clock me-2" />30 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-6" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-6"><i className="bi bi-clock me-2" />35 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-7" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-7"><i className="bi bi-clock me-2" />40 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-8" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-8"><i className="bi bi-clock me-2" />45 mins</label>
            <input type="radio" className="btn-check" name="options" id="option-9" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="option-9"><i className="bi bi-clock me-2" />60 mins</label>
          </div>
          <div className="w-100 text-end mt-4">
            <button type="submit" className="btn doacBtn">Save</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-slotDuration-ends-here*/}
  {/*modal-specificSlots-starts-here*/}
  <div className="modal fade" id="specificSlots" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={clocksm} alt="clocksm" className="me-2" />Sai Clinic <span className="f10sbTeal">(Specific Slots)</span></h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 mpText">Select Slot (Token) Duration</div>
          <div className="w-100 abFormGroup mt-3">
            <input type="radio" className="btn-check" name="ss" id="ss-1" autoComplete="off" defaultChecked />
            <label className="btn py-1 px-3 m-1" htmlFor="ss-1"><i className="bi bi-clock me-2" />10 mins</label>
            <input type="radio" className="btn-check" name="ss" id="ss-2" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="ss-2"><i className="bi bi-clock me-2" />15 mins</label>
            <input type="radio" className="btn-check" name="ss" id="ss-3" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="ss-3"><i className="bi bi-clock me-2" />20 mins</label>
            <input type="radio" className="btn-check" name="ss" id="ss-4" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="ss-4"><i className="bi bi-clock me-2" />25 mins</label>
            <input type="radio" className="btn-check" name="ss" id="ss-5" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="ss-5"><i className="bi bi-clock me-2" />30 mins</label>
            {/* <input type="radio" className="btn-check" name="ss" id="ss-6" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="ss-6"><i className="bi bi-clock me-2" />35 mins</label> */}
          </div>

          <h5 className="Pattxt"><img src={UserGreensm} alt='sm' className="my-3 border-bottom" /> Patient Consultation Modes and Fees</h5>


          <div className="w-100 d-flex flex-wrap">
            <div className="me-4 mb-2">
              <div className="w-100 doaNText">Mode</div>
              <div className="d-flex flex-wrap align-items-center mx-auto mt-2">
                <div className="me-2">
                  <img src={CamcordRect} alt='rect' style={{width: '30px'}} />
                </div>
               
              </div>
              {/*flexbox-ends-here*/}
             
              {/*flexbox-ends-here*/}
           
              {/*flexbox-ends-here*/}
            </div>
            <div className="mb-2">
              <div className="w-100 doaNText">Consultation Fee</div>
              <div className="d-flex flex-wrap align-items-center mx-auto mt-2">
                <div className="me-2">
                  <img src={RupeeCir} alt="rupee" />
                </div>
                <input className="form-control w-75" type="text" placeholder={500} />
              </div>
              {/*flexbox-ends-here*/}
          
           
              {/*flexbox-ends-here*/}
            </div>
          </div>

          <div className="mt-3 text-center">
          <Calendar
                onChange={onChange}
                value={value}
              />
          </div>
          <div className="w-100 d-flex flex-wrap align-items-center mt-3">
            <div className="mb-2 fromTo">
              <p className="f10m mb-2">From</p>
              <input className="form-control" type="text" placeholder="10:00 AM" />
            </div>
            <div className="mb-2 fromTo">
              <p className="f10m mb-2">To</p>
              <input className="form-control" type="text" placeholder="5:00 PM" />
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="text-end mt-4" style={{width: '99%', marginRight: '1%'}}>
            <button type="button" className="btn doaOrangeBtn">+Add</button>
          </div>
          <div className="text-end mt-4" style={{width: '99%', marginRight: '1%'}}>
            <button type="submit" className="btn doacBtn">Create Time Slot</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-specificSlots-ends-here*/}
  {/*modal-addEditSlot-starts-here*/}
  <div className="modal fade" id="addEditSlot" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Add/Edit New Time Slot</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 doaNText">For Patients</div>
          <div className="mt-3 text-center">
          <Calendar onChange={onChange}value={value}/>
          </div>
          <div className="w-100 d-flex flex-wrap align-items-center">
            <div className="fromTo">
              <p className="f10m mb-2">From</p>
              <input className="form-control mb-2" type="text" placeholder="10:00 AM" />
            </div>
            <div className="fromTo">
              <p className="f10m mb-2">To</p>
              <input className="form-control mb-2" type="text" placeholder="5:00 PM" />
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex flex-wrap align-items-center">
            <div className="fromTo">
              <p className="f10m mb-2">From</p>
              <input className="form-control mb-2" type="text" placeholder="5:00 PM" />
            </div>
            <div className="fromTo">
              <p className="f10m mb-2">To</p>
              <input className="form-control mb-2" type="text" placeholder="10:00 PM" />
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="text-end mt-4" style={{width: '99%', marginRight: '1%'}}>
            <button type="button" className="btn doaOrangeBtn">+Add</button>
          </div>
          <div className="text-end mt-4" style={{width: '99%', marginRight: '1%'}}>
            <button type="submit" className="btn doacBtn">Create Time Slot</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>


  <div className="modal fade" id="MedicalReps" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Add/Edit New Time Slot</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 doaNText">For Medical Reps</div>
          <div className="mt-3 text-center">
          <Calendar onChange={onChange} value={value}/>
          </div>
          <div className="w-100 d-flex flex-wrap align-items-center">
            <div className="fromTo">
              <p className="f10m mb-2">From</p>
              <input className="form-control mb-2" type="text" placeholder="10:00 AM" />
            </div>
            <div className="fromTo">
              <p className="f10m mb-2">To</p>
              <input className="form-control mb-2" type="text" placeholder="5:00 PM" />
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex flex-wrap align-items-center">
            <div className="fromTo">
              <p className="f10m mb-2">From</p>
              <input className="form-control mb-2" type="text" placeholder="5:00 PM" />
            </div>
            <div className="fromTo">
              <p className="f10m mb-2">To</p>
              <input className="form-control mb-2" type="text" placeholder="10:00 PM" />
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="text-end mt-4" style={{width: '99%', marginRight: '1%'}}>
            <button type="button" className="btn doaOrangeBtn">+Add</button>
          </div>
          <div className="text-end mt-4" style={{width: '99%', marginRight: '1%'}}>
            <button type="submit" className="btn doacBtn">Create Time Slot</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-addEditSlot-ends-here*/}
  {/*modal-mrcm-starts-here*/}
  <div className="modal fade" id="mrcm" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={PencilGreen} alt="pencil" className="me-2" />Medical Reps Consultation Modes</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="mx-auto" style={{width: 'fit-content'}}>
            <div className="w-100 doaNText">Mode On/Off</div>
            <div className="d-flex flex-wrap align-items-center mx-auto mt-2">
              <div className="me-2">
                <img src={CamcordRect} alt='rect' />
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label" />
              </div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex flex-wrap align-items-center mt-2">
              <div className="me-2">
                <img src={PhoneRect} alt="phoneRect" />
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label" />
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          <div className="w-100 text-end mt-4">
            <button type="submit" className="btn doacBtn">Save</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-mrcm-ends-here*/}
  {/*modal-pcmc-starts-here*/}
  <div className="modal fade" id="pcmc" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={UserGreensm} alt='sm' className="me-2" />Patient Consultation Modes and Cost</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex flex-wrap">
            <div className="me-4 mb-2">
              <div className="w-100 doaNText">Mode On/Off</div>
              <div className="d-flex flex-wrap align-items-center mx-auto mt-2">
                <div className="me-2">
                  <img src={CamcordRect} alt='rect' />
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label" />
                </div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center mt-2">
                <div className="me-2">
                  <img src={PhoneRect} alt="phoneRect" />
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label" />
                </div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center mt-2">
                <div className="me-2">
                  <img src={UserRect} alt="userrect" />
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label" />
                </div>
              </div>
              {/*flexbox-ends-here*/}
            </div>
            <div className="mb-2">
              <div className="w-100 doaNText">Consultation Fee</div>
              <div className="d-flex flex-wrap align-items-center mx-auto mt-2">
                <div className="me-2">
                  <img src={RupeeCir} alt="rupee" />
                </div>
                <input className="form-control w-75" type="text" placeholder={500} />
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center mt-2">
                <div className="me-2">
                <img src={RupeeCir} alt="rupee" />
                </div>
                <input className="form-control w-75" type="text" placeholder={400} />
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-flex flex-wrap align-items-center mt-2">
                <div className="me-2">
                <img src={RupeeCir} alt="rupee" />
                </div>
                <input className="form-control w-75" type="text" placeholder={600} />
              </div>
              {/*flexbox-ends-here*/}
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 text-end mt-4">
            <button type="submit" className="btn doacBtn">Save</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-pcmc-ends-here*/}
  {/*modal-cpmr-starts-here*/}
  <div className="modal fade" id="cpmr" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={clocksm} alt="clocksm" className="me-2" />Cancel Patient/ Medical Rep</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="mx-auto" style={{width: '50%'}}>
            <div className="w-100 mpText mb-3">What do you like to cancel</div>
            <button type="button" className="btn w-100 doacBtn mb-3" data-bs-toggle="modal" data-bs-target="#cancelOne" data-bs-dismiss="modal">Day(s)</button>
            <button type="button" className="btn w-100 doacBtn" data-bs-toggle="modal" data-bs-target="#cancelTwo" data-bs-dismiss="modal">Time Slots</button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-cpmr-ends-here*/}
  {/*modal-cancelOne-starts-here*/}
  <div className="modal fade" id="cancelOne" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={clocksm} alt="clocksm" className="me-2" />Cancel</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 mb-3">
            <Calendar onChange={onChange}value={value}/>
          </div>
          <div className="w-100 mpText mb-3">All time slots for selected Day(s) will be cancelled</div>
          <button type="button" className="btn d-block mx-auto doacBtn" data-bs-dismiss="modal">Cancel Selected Day(s)</button>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-cancelOne-ends-here*/}
  {/*modal-cancelTwo-starts-here*/}
  <div className="modal fade" id="cancelTwo" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={clocksm} alt="clocksm" className="me-2" />Cancel</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 mpText mb-3">Select a day and proceed for canceling time slots</div>
          <div className="w-100" style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#cancelThree" data-bs-dismiss="modal">
            <Calendar/>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-cancelTwo-ends-here*/}
  {/*modal-cancelThree-starts-here*/}
  <div className="modal fade" id="cancelThree" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={clocksm} alt="clocksm" className="me-2" />Cancel</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form className="w-100">
            <div className="abFormGroup">
              <input type="checkbox" className="btn-check" name="co" id="co1" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co1"><i className="bi bi-camera-video-fill me-2" />10:30 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co2" autoComplete="off" defaultChecked />
              <label className="btn py-1 px-3 m-1" htmlFor="co2"><i className="bi bi-telephone-fill me-2" />10:45 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co3" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co3"><i className="bi bi-person-fill me-2" />11:10 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co4" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co4">11:15 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co5" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co5">11:30 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co6" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co6">11:45 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co7" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co7"><i className="bi bi-camera-video-fill me-2" />5:30 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co8" autoComplete="off" defaultChecked />
              <label className="btn py-1 px-3 m-1" htmlFor="co8"><i className="bi bi-telephone-fill me-2" />5:45 AM</label>
              <input type="checkbox" className="btn-check" name="co" id="co9" autoComplete="off" defaultChecked />
              <label className="btn py-1 px-3 m-1" htmlFor="co9"><i className="bi bi-person-fill me-2" />6:00 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co10" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co10">6:15 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co11" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co11">6:30 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co12" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co12">6:45 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co13" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co13">7:00 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co14" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co14">7:15 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co15" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co15">7:30PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co16" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co16">7:45 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co17" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co17">8:00 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co18" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co18">8:15 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co19" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co19">8:30 PM</label>
              <input type="checkbox" className="btn-check" name="co" id="co20" autoComplete="off" />
              <label className="btn py-1 px-3 m-1" htmlFor="co20">8:45 PM</label>
            </div>
            <div className="w-100 d-flex flex-wrap align-items-center mt-3">
              <button type="button" className="btn doabBtn me-2 mb-2" data-bs-toggle="modal" data-bs-target="#cancelTwo" data-bs-dismiss="modal">Back</button>
              <button type="button" className="btn doacBtn mb-2" data-bs-dismiss="modal">Cancel Selected Timing(s)</button>
            </div>
            {/*flexbox-ends-here*/}
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>


  <div className="modal fade" id="invite" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog Modal_dg modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Invite Remote Partner</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form className="w-100 mt-4">
          <div className="mpText w-100 mb-2">* Name</div>
          <input className="form-control w-100" type="text" required />
          <div className="mpText w-100 mt-3 mb-2">* Email ID</div>
          <input className="form-control w-100" type="text" required />
          <div className="mpText w-100 mt-3 mb-2">* Mobile Number</div>
          <input className="form-control w-100" type="text" required />
          <div className="mpText w-100 mt-3 mb-2">* Select Role</div>
          <select className="form-select w-100">
            <option>* Select</option>
            <option>A Rural Medical Practitioner (RuMP)</option>
            <option>A Health Worker</option>
            <option>A Doctor(MBBS)</option>
            <option>A Poly Clinic</option>
            <option>A Hospital</option>
            </select>
           
            <button type="submit" className="btn doacBtn w-100 px-4 mt-4">Invite</button></form>


        </div>
      </div>
    </div>
  {/*modal-cancelThree-ends-here*/}
  {/*modals-ends-here*/}
</div>

{/*myPhoneCardCnt-ends-here*/}

            </div>




</div>






        );
    }
