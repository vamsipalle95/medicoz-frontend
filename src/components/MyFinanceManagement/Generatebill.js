import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Backbtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';


export default function Generatebill() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 doacTitle d-flex flex-wrap align-items-center p-3">
                    <div className="my-2 me-3">
                    <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Generate In-Person Patient Bill</h3>
                    </div>
                    <div className="ms-sm-auto me-3 my-2">
                    <div className="f10m mb-1">Default to Today</div>
                    <div className="f10sbOrange">23 April 2021</div>
                    </div>
                    <div className="my-2">
                   <Link to="/AddPatient"><button type="button" className="btn doaOrangeBtn">+ Add New Patient</button></Link>
                    </div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 irBtn mt-2 px-3">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="inlineRadio1">Consultation Bill</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Other Bill</label>
                    </div>
                </div>
                {/*inline-radios-ends-here*/}
                <div className="w-100 row mt-3 px-3">
                    <div className="col-md-3 mb-3 me-3">
                        <label className="mpText mb-2">* Search by Mobile/ID</label>
                        <input className="form-control w-100" type="search" placeholder="12345454" />
                    </div>


                    <div className="col-md-3 mb-3 me-3">
                        <label className="mpText mb-2">* Search by IMR.Number</label>
                        <input className="form-control w-100" type="search" placeholder="IMR.Number" />
                    </div>
                    <div className="col-md-3 mb-3 me-3">
                        <label className="mpText mb-2">* Search by Patient Name</label>
                        <input className="form-control w-100" type="search" placeholder="Patient Name" />
                    </div>

                    <div className="col-md-3 mb-3" style={{width: 270}}>
                    <label className="mpText mb-2">Select Dr. Name</label>
                        <select className="form-select">
                            <option selected>Select</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>

                  



                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex flex-wrap align-items-center mt-3 px-3">
                    <div className="mb-3 me-3" style={{width: 250}}>
                    <label className="mpText mb-2">* Service Name</label>
                    <input className="form-control w-100" type="text" placeholder />
                    </div>
                    <div className="mb-3 me-3" style={{width: 250}}>
                    <label className="mpText mb-2">Nos. or Quantity</label>
                    <input className="form-control w-100" type="text" placeholder />
                    </div>
                    <div className="mb-3" style={{width: 250}}>
                    <label className="mpText mb-2">* Amount</label>
                    <input className="form-control w-100" type="text" placeholder />
                    </div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 text-end mt-3 px-3" style={{maxWidth: 814}}>
                    <button type="button" className="btn doaOrangeBtn">+ Add More</button>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center mt-3 px-3">
                    <div className="mb-3 me-3" style={{width: 250}}>
                    <label className="mpText mb-2">Total (₹)</label>
                    <input className="form-control w-100" type="text" placeholder />
                    </div>
                    <div className="mb-3 me-3" style={{width: 250}}>
                    <label className="mpText mb-2">Discount (₹)</label>
                    <input className="form-control w-100" type="text" placeholder />
                    </div>
                    <div className="mb-3" style={{width: 250}}>
                    <label className="mpText mb-2">Net Amount (₹)</label>
                    <input className="form-control w-100" type="text" placeholder />
                    </div>
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 d-flex flex-wrap align-items-end mt-3 px-3">
                    <div className="mb-3 me-3" style={{width: 250}}>
                    <label className="mpText mb-2">* Mode of Payment</label>
                    <select className="form-select">
                        <option selected>Select</option>
                        <option value={1}>Cash</option>
                        <option value={2}>UPI</option>
                        <option value={3}>Credit Card</option>
                        <option value={3}>Debit Card</option>
                        <option value={3}>NetBanking</option>
                    </select>
                    </div>
                    <div className="mb-3" style={{width: '100%', maxWidth: 516}}>
                    <button type="button" className="btn doacBtn w-100">Generate Bill</button>
                    </div>
                </div>
                {/*flexbox-ends-here*/}
                </div>
                {/*myPhoneCardCnt-ends-here*/}

                            </div>
                        );
                    }
               