import React, { Component } from 'react';
import Login from '../../images/login.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class bookOnlineDr extends Component {
    render() {
        return (
            <div>
                <div className="draCard2 ms-auto me-auto p-3">
  <div className="w-100 doacTitle d-flex align-items-center pb-2">
    <img src={Login} alt="login" className="me-2" />
    <h3 className="mb-0">Login or create account</h3>
  </div>
  {/*doacTitle-ends-here*/}
  <div className="doaNText w-100 mt-3">
    Enter your Mobile Number to Login or Register
  </div>
  {/*doaNText-ends-here*/}
  <form className="w-100 mt-5">
    <div className="d-flex align-items-center">
      <input className="form-control w-auto" type="text" placeholder="Mobile #" />
      <button type="button" className="btn btn-sm ms-2 w-50 doaOrangeBtn">Send OTP</button>
    </div>
    {/*flexbox-ends-here*/}
    <input className="form-control w-100 mt-2" type="text" placeholder="OTP" />
    <div className="doaConfirm w-100 d-flex align-items-center mt-4">
      <button type="button" className="btn doabBtn ms-auto me-3 px-4">Back</button>
      <Link to="/NewuserAccount"><button type="submit" className="btn doacBtn px-4">Next</button></Link>
    </div>
    {/*doaConfirm-ends-here*/}
  </form>
  {/*form-ends-here*/}
</div>
{/*draCard1-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
}

export default bookOnlineDr;