import React from 'react';
import {BrowserRouter as  Link} from "react-router-dom";

export default function AddNewUserAccount() {
 
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0">New User Account</h3>
    </div>
    <form className="w-100 mt-3">
      <input className="form-control w-100" type="text" placeholder="First Name" />
      <input className="form-control w-100 mt-2" type="text" placeholder="Last Name" />
      <select className="form-select w-100 mt-2">
        <option>Select Gender</option>
        <option value={1}>Male</option>
        <option value={2}>Female</option>
        <option value={3}>Transender</option>
        </select>
        <input className="form-control w-100 mt-2" type="text" placeholder="Age" />
        <input className="form-control w-100 mt-2" type="Email" placeholder="Email Id" />
        <div className="w3-half mt-2">
        <input type="checkbox" id="customCheck2" defaultChecked />
        <label className="smalltxt"htmlFor="customCheck2">I Agree to <a href="#"> Terms & Conditions</a></label>
      </div>

      <div className="smalltxt1">Dev notes: populate this user under family member</div>

      <div className="doaConfirm w-100 d-flex align-items-center mt-4">
        <button type="button" className="btn doabBtn ms-auto me-3 px-4">Back</button>
       <Link to="/WhoisPatient"> <button type="submit" className="btn doacBtn px-4">Create</button></Link>
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
