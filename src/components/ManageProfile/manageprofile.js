import React, { Component } from 'react';
import MP from '../../images/mp1.png';
import MP1 from '../../images/mp2.png';
import MP2 from '../../images/mp3.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class manageprofile extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-3">Manage Profiles</h1>
    <Link to="/ManageProfileEdit"><button type="button" className="doaOrangeBtn py-2 px-3">+ Add New</button></Link>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
    <div className="doaNText me-3">
      Set as Primary Member
    </div>
    {/*doaNText-ends-here*/}
    <select className="form-select w-auto obSelect">
      <option selected>Srinivas</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    {/*select-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="w-100 mx-auto text-center">
        <img src={MP} alt="mp1" />
        <p className="grayTextBox mx-4 my-3">Primary Member</p>
      </div>
      {/*image-ends-here*/}
      <div className="w-100 mt-3">
      <Link to="/PrimaryMember" className="text-decoration-none"><h3 className="mpHead mb-1">Srinivas Kota</h3></Link>
        <p className="mpText mb-0"><span>UHID:</span> APJ1.0008716853</p>
        <p className="mpText mb-0">Age 24 (1/04/1997)</p>
        <p className="mpText mb-0"><span>Self</span></p>
        <p className="mpText mb-0">&nbsp;&nbsp;</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 text-center mt-3">
      <Link to="/PrimaryMember"><button type="button" className="btn doacBtn px-3 py-2">Edit Profile</button></Link>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="w-100 text-center">
        <img src={MP1} alt="mp2" />
      </div>
      {/*image-ends-here*/}
      <div className="w-100 mt-3">
      <Link to="/ManageProfileEdit" className="text-decoration-none"><h3 className="mpHead mb-1">Pooja Kota</h3></Link>
        <p className="mpText mb-0"><span>UHID:</span> APJ1.0008716853</p>
        <p className="mpText mb-0">Age 23 (1/04/1997)</p>
        <p className="mpText mb-0">Female</p>
        <p className="mpText mb-0">Daughter</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 text-center mt-3">
      <Link to="/ManageProfileEdit"><button type="button" className="btn doacBtn px-3 py-2">Edit Profile</button></Link>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="w-100 text-center">
        <img src={MP2} alt="mp3" />
      </div>
      {/*image-ends-here*/}
      <div className="w-100 mt-3">
      <Link to="/ManageProfileEdit" className="text-decoration-none"><h3 className="mpHead mb-1">Vinod Kota</h3></Link>
        <p className="mpText mb-0"><span>UHID:</span> APJ1.0008716853</p>
        <p className="mpText mb-0">Age 24 (1/04/1997)</p>
        <p className="mpText mb-0">Male</p>
        <p className="mpText mb-0">Son</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/ManageProfileEdit"><button type="button" className="btn doacBtn px-3 py-2">Edit Profile</button></Link>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
}

export default manageprofile;