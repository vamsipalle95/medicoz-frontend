import React, { Component } from 'react';
import MpEdit from '../../images/mp-edit.png';
import { BrowserRouter as Route, Router, Link } from "react-router-dom";

class addressbook extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-4">Address Book</h1>
    <div>
  <Link to="/SetLocation"><button type="button" className="btn doaOrangeBtn">+ Add New</button></Link>
    </div>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="w-100 mb-3">
        <img src={MpEdit} alt="edit" />
      </div>
      {/*image-ends-here*/}
      <div className="grayTextBox mb-4">
        Srinivas (Office)
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <div className="mb-3">
          <p className="mpText mb-0 me-3">
            B49, Prakash Nagar,Hyderabad, 
            water tank,Telangana - 500016
            Mobile: 98483 12345
          </p>
        </div>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <a href="/" className="viewMore text-decoration-none me-auto">Delete</a>
        <Link to="/AddressSetLocation"><button type="button" className="btn doacBtn px-3 py-1">Edit</button></Link>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="w-100 mb-3">
        <img src={MpEdit} alt="edit"/>
      </div>
      {/*image-ends-here*/}
      <div className="grayTextBox mb-4">
        Srinivas (Office)
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <div className="mb-3">
          <p className="mpText mb-0 me-3">
            B49, Prakash Nagar,Hyderabad, 
            water tank,Telangana - 500016
            Mobile: 98483 12345
          </p>
        </div>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <a href="/" className="viewMore text-decoration-none me-auto">Delete</a>
        <Link to="/SetLocation"><button type="button" className="btn doacBtn px-3 py-1">Edit</button></Link>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
}

export default addressbook;