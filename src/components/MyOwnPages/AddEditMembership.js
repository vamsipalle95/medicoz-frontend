import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function AddEditMembership() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Memberships</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="mpText w-100 mb-2">
          * Membership Name
        </div>
        <input type="text" className="form-control w-100 mb-3" />
        <div className="mpText w-100 mb-2">
          * Membership Name
        </div>
        <input type="text" className="form-control w-100 mb-3" />
        <div className="mpText w-100 mb-2">
          * Membership Name
        </div>
        <input type="text" className="form-control w-100" />
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn doacBtn px-5">Save</button>
          <button type="submit" className="btn doaOrangeBtn px-4">+Add</button>
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
