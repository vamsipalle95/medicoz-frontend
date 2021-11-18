import React, { Component } from 'react';
import Urvasi from '../../images/doctoModule/urvasi.png';
import PhoneEs from '../../images/doctoModule/phone-es.png';
import MailEs from '../../images/doctoModule/mail-sm.png';
import TrashGreen from '../../images/doctoModule/trash-green.png';
import Ramakanth from '../../images/doctoModule/ramakanth.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function Myassistantmanagement() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Assistant Management
    </div>
    {/*doaNText-ends-here*/}
    <div>
      <button type="button" className="btn doaOrangeBtn px-3" data-bs-toggle="modal" data-bs-target="#invite">+ Invite</button>
    </div>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard1 p-3 m-2">
      <div className="w-100 text-center">
        <img src={ Urvasi} alt="Urvasi"/>
      </div>
      <div className="w-100 mt-3">
        <a href="/" className="text-decoration-none"><h3 className="mpHead mb-1">Urvasi Neelkanta</h3></a>
        <p className="mpText mb-0"><img src={PhoneEs} alt="phonees" className="me-2" />Mobile: 12345 12345</p>
        <p className="mpText mb-0"><img src={MailEs} alt="mailes" className="me-2" />urvasi.n@gmail.com</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3" style={{borderTop: '1px solid #B5B5B5 !important'}}>
        <div><img src={TrashGreen} alt="trshgrn" data-bs-toggle="modal" data-bs-target="#del" /></div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" defaultChecked />
        </div>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard1 p-3 m-2">
      <div className="w-100 text-center">
        <img src={Ramakanth} alt="ramakanth" />
      </div>
      <div className="w-100 mt-3">
        <a href="/" className="text-decoration-none"><h3 className="mpHead mb-1">Ramakanth Potineni</h3></a>
        <p className="mpText mb-0"><img src={PhoneEs} alt="phonees" className="me-2" />Mobile: 12345 12345</p>
        <p className="mpText mb-0"><img src={MailEs} alt="mailes" className="me-2" />ramakanth.p@gmail.com</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3" style={{borderTop: '1px solid #B5B5B5 !important'}}>
        <div><img src={TrashGreen} data-bs-toggle="modal" data-bs-target="#del" alt='trahgreen' /></div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" />
        </div>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard1 p-3 m-2">
      <div className="w-100">
        <a href="/" className="text-decoration-none"><h3 className="mpHead mb-1">Krishna Cherukuri</h3></a>
        <p className="mpText mb-0">ramakanth.p@gmail.com</p>
        <p className="mpText mb-0">Need to accept your invitation</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 mt-3">
        <button type="button" className="btn doaOrangeBtn">Resend Invitation</button>
      </div>
    </div>
    {/*draCard1-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>

{/*modals-starts-here*/}
{/*modal-invite-starts-here*/}
<div className="modal fade" id="invite" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">Invite Assistant</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="w-100 mt-3">
          <input className="form-control" type="text" placeholder="Name" />
        </div>
        <div className="w-100 mt-3">
          <input className="form-control" type="text" placeholder="Mobile" />
        </div>
        <div className="w-100 mt-3">
          <input className="form-control" type="email" placeholder="Email" />
        </div>
        <div className="mpText w-100 mt-3">
          Invitee will receive an email invitation
          to be your assistant
        </div>
        <div className="w-100 text-center mt-4">
          <button type="button" className="btn doacBtn px-4">Send</button>
        </div>
      </div>
      {/*modal-body-ends-here*/}
    </div>
  </div>
</div>

<div className="modal fade" id="del" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">Delete Assistant</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
          <p className="mpText">Urvasi Neelkanta</p>
          <p className="mpText">12345 12345</p>
          <p className="mpText">urvasi.n@gmail.com</p>
        <div className="w-100 text-center mt-4">
          <button type="button" className="btn doacBtn px-4">Delete</button>
        </div>
      </div>
      {/*modal-body-ends-here*/}
    </div>
  </div>
</div>
{/*modal-invite-ends-here*/}
{/*modals-ends-here*/}

{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }