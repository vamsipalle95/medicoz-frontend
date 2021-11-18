import React, { Component } from 'react';
import NewUser from '../../images/new-user.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class newUserAccount extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={NewUser} alt="newuser" className="me-2" />
      <h3 className="mb-0">New User account</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <form className="w-100 mt-4">
      <input className="form-control w-100" type="text" placeholder="First Name" />
      <input className="form-control w-100 mt-4" type="text" placeholder="Last Name" />
      <select className="form-select w-100 mt-4">
        <option selected>Select Gender</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <input className="form-control w-100 mt-4" type="text" placeholder="Age" />
      <input className="form-control w-100 mt-4" type="email" placeholder="Email (Optional)" />
      <div className="form-check w-100 mt-4">
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I Agree to <a href="/">Terms &amp; Conditions</a>
        </label>
      </div>
      <div className="doaConfirm w-100 d-flex align-items-center mt-4">
        <button type="button" className="btn doabBtn ms-auto me-3 px-4">Back</button>
        <Link to="/WhoisPatient"><button type="submit" className="btn doacBtn px-4">Create</button></Link>
      </div>
      {/*doaConfirm-ends-here*/}
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
}

export default newUserAccount;