import React, { Component } from 'react';
import {useHistory} from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';

export default function AddEditMedicalReg() {
const history = useHistory(true);
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Medical Registration</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="mpText w-100 mb-2">
          * Select Doctor Type
        </div>
        <select className="form-select">
          <option selected>* Select Doctor Type</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          * Registration No.
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="mpText w-100 mt-3 mb-2">
          * Select State Medical Council
        </div>
        <select className="form-select">
          <option selected>* Select State Medical Council</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          * Registration Year (YYYY)
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="mpText w-100 mt-3 mb-2">
          * Upload Registration Certificate
        </div>
        <input className="form-control w-100" type="file" required />
        <button type="submit" className="btn doacBtn w-100 px-4 mt-4">Save</button>
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
