import React, { Component } from 'react';
import Backbt from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function SelectThePatient() {
        const history = useHistory();
        return (
            <div>

<div className="overflow-auto p-md-3 mb-4">

<div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0 txtNow">
      <img onClick={() => history.goBack()} src={Backbt} alt="backbtn"/> Select the Patient 
      
    </div>
    {/*doaNText-ends-here*/}
  </div>
                <div className="my-2 d-flex flex-wrap justify-content-end">
                    <a href="/AddPatient">
                        <button type="button" className="btn doaOrangeBtn">+ Add New Patient</button>
                    </a>
                </div>

                <div className="w-100 row mt-3 px-3">
                    <div className="col-md-3 mb-3 me-3">
                        <label className="mpText mb-2">* Search by Mobile/ID</label>
                        <input className="form-control w-100" type="search" placeholder={12345454} />
                    </div>
                    <div className="col-md-3 mb-3 me-3">
                        <label className="mpText mb-2">* Search by IMR.Number</label>
                        <input className="form-control w-100" type="search" placeholder="IMR.Number" />
                        </div>
                        <div className="col-md-3 mb-3 me-3">
                        <label className="mpText mb-2">* Search by Patient Name</label>
                        <input className="form-control w-100" type="search" placeholder="Patient Name" />
                        </div>      
                        
                </div>

                <div className="my-2 d-flex flex-wrap justify-content-between">
                    <div className="uid-clas">
                        <h6 className="my-2 fontxs">* UID = "Unique ID"</h6>
                        <h6 className="my-2 fontxs"> *IMR No = "Internal Medical Record Number"</h6>
                    </div>
                    <Link to="/ConfirmPatientDetails">
                        <button type="button" className="btn doaOrangeBtn">Confirm Patient</button>
                    </Link>
                </div>

              
</div>
            </div>
        );
    }
