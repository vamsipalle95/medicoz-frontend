import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AddMember extends Component {
    render() {
        return (
            <div>
               <div>
  <div className="draCard2 ms-auto me-auto p-3 d-flex align-items-center w-100 mt-3 pb-3" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
    <div className="doaNText">
      Add new Family Member
    </div>
    <button type="button" className="btn ms-auto doaOrangeBtn">+ Add</button>
  </div>
  {/*flexbox-ends-here*/}
  <div className="doaNText w-100 mt-3">
    Select from Existing Family Member(s)
  </div>
  <form className="ogrBtnGroup w-100 mt-3">
    <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
    <label className="btn" htmlFor="option1">You</label>
    <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" defaultChecked />
    <label className="btn" htmlFor="option2">Vinod</label>
    <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
    <label className="btn" htmlFor="option3">Vikas</label>
    <div className="doaNText w-100 mt-4">
      Note:
    </div>
    <div className="doaDuration w-100 mt-2">
      All Video participants will require Medicoz
      Mobile App<br /><br />
      <a href="/">Share Medicoz Mobile App Link</a>
    </div>
    <div className="w-100 d-flex align-items-center justify-content-end mt-4">
      <button type="button" className="btn doabBtn px-4 me-3">Back</button>
      <Link to="/ConfirmAppointment"><button type="submit" className="btn doacBtn px-4">Next</button></Link>
    </div>
  </form>
  {/*form-ends-here*/}
  {/*draCard1-ends-here*/}
  {/*container-ends-here*/}
</div>
 
            </div>
        );
    }
}

export default AddMember;