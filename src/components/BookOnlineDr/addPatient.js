import React, { Component } from 'react';
import Think from '../../images/thinking.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class addPatient extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Think} alt="think" className="me-2" />
      <h3 className="mb-0">Who is the patient?</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="d-flex align-items-center w-100 mt-3 pb-3" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
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
      <label className="btn" htmlFor="option1">Vinod</label>
      <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" defaultChecked />
      <label className="btn" htmlFor="option2">Pooja</label>
      <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
      <label className="btn" htmlFor="option3">Vikas</label>
      <div className="w-100 text-end mt-4">
       <Link to="/ConfirmAudioVideo"> <button type="submit" className="btn doacBtn px-4">Next</button></Link>
      </div>
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

export default addPatient;