import React, { Component } from 'react';
import BackBtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddEditBasicDetails() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="backbtn" className="mr-2" />  Basic Info</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="mpText w-100 mb-2">
          * First Name
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="mpText w-100 mt-3 mb-2">
          * Last Name
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="mpText w-100 mt-3 mb-2">
          * Select Gender
        </div>
        <select className="form-select w-100">
          <option selected>* Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          * Age
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="mpText w-100 mt-3 mb-2">
          * Mobile
        </div>
        <input className="form-control w-100" type="text" required />
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