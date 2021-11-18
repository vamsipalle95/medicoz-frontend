import React, { Component } from 'react';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function LoginOtp4() {
   const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0">Login or Create Account</h3>
    </div>
    <form className="w-100 mt-3">
      <div className="doaNText w-100 mb-3">
      Enter your Mobile Number to Login or Register
      </div>
      <div className="d-flex align-items-center">
        <input className="form-control w-auto" type="text" placeholder="Mobile #" />
        <button type="button" className="btn btn-sm ms-2 w-50 doaOrangeBtn">Send OTP</button>
      </div>
      <input className="form-control w-100 mt-2" type="text" placeholder="OTP" />
     
      <div className="doaConfirm w-100 d-flex align-items-center mt-4">
        <button type="button" onClick={() => history.goBack()} className="btn doabBtn ms-auto me-3 px-4">Back</button>
        <Link to="/InPersonUserAccount"><button type="submit" className="btn doacBtn px-4">Next</button></Link>
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
