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
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Think} alt="think" className="me-2" />
      <h3 className="mb-0">Who is the patient?</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="d-flex align-items-center w-100 mt-3 pb-3" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
      <div className="doaNText">
        Add new Family Member
      </div>
      <button type="button"  data-bs-toggle="modal" data-bs-target="#addFamilymember" className="btn ms-auto doaOrangeBtn">+ Add</button>
    </div>
    {/*flexbox-ends-here*/}
    <div className="doaNText w-100 mt-3">
      Select from Existing Family Member(s)
    </div>
    <form className="ogrBtnGroup w-100 mt-3">
      <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
      <label className="btn" htmlFor="option1">Vinod</label>
      <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" defaultChecked />
      <label className="btn" htmlFor="option2">Pooja</label>
      <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
      <label className="btn" htmlFor="option3">Vikas</label>
      <div className="w-100 text-end d-flex flex-wrap mt-4">
      <button type="button" onClick = {() => history.goBack()}className="btn doabBtn ms-auto me-3 px-4">Back</button>
       <Link to="/ConfirmVideoAppointment"> <button type="submit" className="btn doacBtn px-4">Next</button></Link>
      </div>
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}



<div className="modal fade" id="addFamilyMember" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Add Family Member</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
                   
      <div className="w-100 d-flex align-items-center mt-3">
      <div className="w-auto me-3">
        <img src={MpEdit} alt="mpedit" />
      </div>
      {/*image-ends-here*/}
      <div className="w-auto">
        <div className="doaDuration">
          <a href="/">Add Photo<img src={Edit} alt="edit" className="ms-2" /></a>
        </div>
        <div className="grayTextBox mt-2">
          Srinivas
        </div>
        {/*grayTextBox-ends-here*/}
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <form className="w-100 mt-4">
      <input className="form-control w-100" type="text" placeholder="* First name" required />
      <input className="form-control w-100 mt-4" type="text" placeholder="* Last name" />
      <input className="form-control w-100 mt-4" type="text" placeholder="* Enter Age" required />
      <select className="form-select w-100 mt-4">
        <option selected>* Select gender</option>
        <option value={1}>Male</option>
        <option value={2}>Female</option>
        <option value={3}>Others</option>
      </select>
      <input className="form-control w-100 mt-4" type="text" placeholder="Mobile ( Optional )" />
      <input className="form-control w-100 mt-4" type="email" placeholder="Email ( Optional )" />
      <div className="doaNText w-100 mt-4">
        Select Relationship
      </div>
      <div className="abFormGroup w-100 mt-3">
        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option1">Son</label>
        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" defaultChecked />
        <label className="btn px-3 py-1 m-1" htmlFor="option2">Daughter</label>
        <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option3">Wife</label>
        <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option5">Father</label>
        <input type="radio" className="btn-check" name="options" id="option6" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option6">Mother</label>
        <input type="radio" className="btn-check" name="options" id="option7" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option7">Brother</label>
        <input type="radio" className="btn-check" name="options" id="option8" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option8">Sister</label>
        <input type="radio" className="btn-check" name="options" id="option9" autoComplete="off" />
        <label className="btn px-3 py-1 m-1" htmlFor="option9">Relative</label>
      
       
        
      </div>
      {/*button-group-ends-here*/}
      <div className="doaConfirm w-100 d-flex align-items-center mt-4">
        <button type="button" className="btn doabBtn ms-auto me-3 px-4">Cancel</button>
        <button type="submit" className="btn doacBtn px-4">Save</button>
      </div>
      {/*doaConfirm-ends-here*/}
    </form>
    {/*form-ends-here*/}
      </div>
      {/*modal-body-ends-here*/}
    </div>
    {/*modal-content-ends-here*/}
  </div>
</div>
{/*modal-view-ends-here*/}
  
            </div>
        );
    }
