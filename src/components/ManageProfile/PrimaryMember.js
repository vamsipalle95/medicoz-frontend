import React, { Component } from 'react';
import MpEdit from '../../images/mp-edit.png';
import Edit from '../../images/edit.png';
import BackBtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';

export default function PrimaryMember() {
  const history = useHistory();
    return (
     
        <div>
                 <div className="overflow-auto p-md-3 mb-4">
              <div className="draCard2 p-3">
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="backbtn" /> Add/Edit Profile</h3>
                </div>
                {/*doacTitle-ends-here*/}
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
                  <input className="form-control w-100 mt-4" type="text" placeholder="Last name" />
                  <input className="form-control w-100 mt-4" type="text" placeholder="* Age(cal)" required />
                  <select className="form-select w-100 mt-4">
                    <option selected>* Select gender</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <input className="form-control w-100 mt-4" type="text" placeholder="Mobile ( Optional )" />
                  <input className="form-control w-100 mt-4" type="email" placeholder="Email ( Optional )" />
                  <div className="doaConfirm w-100 d-flex align-items-center mt-4">
                    <button type="button" className="btn doabBtn ms-auto me-3 px-4">Cancel</button>
                    <button type="submit" className="btn doacBtn px-4">Save</button>
                  </div>
                  {/*doaConfirm-ends-here*/}
                </form>
                {/*form-ends-here*/}
              </div>
              {/*draCard1-ends-here*/}
            </div>
            {/*myPhoneCardCnt-ends-here*/}
            {/*container-ends-here*/}
          </div>
      
    );
  }
