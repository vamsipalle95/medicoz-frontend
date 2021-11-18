import React, { Component } from 'react';
import Pan from '../../images/doctoModule/pan-card.jpg';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddKyc() {
  const history = useHistory(true)
        return (
            <div>
                <div className="overflow-auto p-md-3  mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Backbtn} onClick={() => history.goBack()} alt="back" /> KYC</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="w-100 mb-3">
          <img src={Pan} alt="pan" />
        </div>
        <select className="form-select">
          <option selected>Select Document Type</option>
          <option>Aadhar</option>
          <option>PAN Card</option>
          <option>Driving License</option>
          <option>Passport</option>
          <option>Voter ID</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          * Upload any Government Approved Identity Card
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
