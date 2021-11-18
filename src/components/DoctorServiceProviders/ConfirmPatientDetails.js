import React, { Component } from 'react';
import Backbt from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function ConfirmPatientDetails() {
    const history = useHistory();
    return (
        <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                    <div className="draCard2 p-3">
                    <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <h3 className="mb-0"><img src={Backbt} alt="back" onClick={() => history.goBack()} className="bi bi-chevron-left me-2" />Confirm Patient Details</h3>
                    </div>
                    {/*doacTitle-ends-here*/}
                    <form className="w-100 mt-4">
                        <div className="mpText w-100 mb-2">
                        * First Name
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                        Sai
                        </div>
                        <div className="mpText w-100 mb-2">
                        * Last Name
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                        Rebba
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        * Gender
                        </div>
                        <div className="abFormGroup">
                        <input type="radio" className="btn-check" name="options" id="male" autoComplete="off" />
                        <label className="btn py-1 px-3 m-1" htmlFor="male">Male</label>
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        * Mobile
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                        +91-9963509329
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        * Age
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                            36
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        City/Dist
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                            Hyderabad
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        Mandal/Village
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                            Kukatpally
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        Locality
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                            Allwyn Colony
                        </div>

                        <div className="mpText w-100 mt-3 mb-2">
                        Pin Code
                        </div>
                        <div className="mpText w-100 mb-2 mx-2 border p-1">
                           500072
                        </div>
                        <Link to="/ConfirmAudioVideoNow">
                            <button type="button" className="d-block btn doaOrangeBtn clsuder mt-4 ms-auto">Confirm Patient Details</button>
                            </Link>
                    </form>
                    {/*form-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                </div>
                {/*flexbox-ends-here*/}
                </div>
                {/*myPhoneCardCnt-ends-here*/}    
        </div>
        );
    }
