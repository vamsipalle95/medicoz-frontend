import React, { Component } from 'react';
import BackBtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router';

export default function AddDoctor() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={BackBtn}  alt="backbtn" onClick={()=>history.goBack()} />Add / Edit Doctor</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <form className="w-100 mt-3">
      <div className="form-check form-switch mb-3">
        <label className="mpText">*Status</label>
        <input className="form-check-input" type="checkbox" defaultChecked />
      </div>
      <div className="mpText w-100 mb-2">
        * First Name
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        * Last Name
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        * Speciality
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        * Mobile
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        City/Dist
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        Mandal/Village
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        Locality
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="mpText w-100 mt-3 mb-2">
        Street Name
      </div>
      <input className="form-control w-100" type="text" required />
      <button type="submit" className="btn doacBtn d-block w-100 mt-4">Save</button>
    </form>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

           </div>
        );
    }
