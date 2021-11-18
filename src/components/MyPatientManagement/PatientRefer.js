import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function PatientRefer() {
  const history = useHistory();

        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Refer Patient
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3 m-2">
      <div className="w-100 doacTitle pb-2">
        <h3 className="mb-0">Patient Profile</h3>
      </div>
      {/*doacTitle-ends-here*/}
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
        <div className="f10m w-50">Lorem ipsum</div>
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
        <div className="f10m w-50">Lorem ipsum</div>
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
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard2 p-3 m-2" style={{background: '#F2F7F7 !important'}}>
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0">Refer to</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center w-100 mb-2">
          <p className="mpText mb-0">To Hospital</p><p className="f8m mb-0">(auto suggest and search)</p>
        </div>
        <input type="text" className="form-control w-100 mb-3" />
        <div className="mpText w-100 mb-2">
          City/Dist
        </div>
        <input type="text" className="form-control w-100 mb-3" readOnly />
        <div className="mpText w-100 mb-2">
          Locality
        </div>
        <input type="text" className="form-control w-100 mb-3" readOnly />
        <div className="mpText w-100 mb-2">
          Patient Problem
        </div>
        <textarea className="form-control" rows={3} defaultValue={""} />
        <div className="w-100 text-end mt-4">
          <button type="button" className="btn doaOrangeBtn px-4">Refer</button>
        </div>
      </form>
      {/*form-ends-here*/}
    </div>
    {/*draCard1-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }