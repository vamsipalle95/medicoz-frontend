import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AddEditMyDrugs() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Add/Edit My Drugs List</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <form className="w-100 mt-2">
      <div className="w-100 text-end mb-2">
        <a href="#bulkUpload" className="f10mBlue text-decoration-none" data-bs-toggle="modal">Bulk Upload My Drugs List</a>
      </div>
      <select className="form-select">
        <option selected>Drug Type</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <input className="form-control w-100 mt-2" type="text" placeholder="Drug Name" required />
      <input className="form-control w-100 mt-2" type="text" placeholder="Drug Strength" required />
      <select className="form-select mt-2">
        <option selected>Drug Unit</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <select className="form-select mt-2">
        <option selected>Drug Consumption (By Patient)</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <select className="form-select mt-2">
        <option selected>Drug Generic Name</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <input className="form-control w-100 mt-2" type="text" placeholder="Company Name" required />
      <Link to="/MyDrugsList"><button type="button" className="btn doaOrangeBtn w-100 mt-3 px-4">Add Drug</button></Link>
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>

{/*modal-bulkUpload-starts-here*/}
<div className="modal fade" id="bulkUpload" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">Bulk Upload</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <a href className="f10mBlue text-decoration-none">Download Template Here</a>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 mpText my-2">* Upload File</div>
        <input type="file" className="form-control w-100" />
        <button type="button" className="btn doacBtn w-100 mt-4" data-bs-dismiss="modal">Upload</button>
      </div>
      {/*modal-body-ends-here*/}
    </div>
  </div>
</div>
{/*modal-bulkUpload-ends-here*/}
{/*modals-ends-here*/}

{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
