import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';

export default function AddBankaccount() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                    <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                        <div className="draCard2 p-3">
                        <div className="w-100 doacTitle d-flex align-items-center pb-2">
                            <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Bank Details</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <form className="w-100 mt-4">
                            <div className="mpText w-100 mb-2">
                            * Bank Name
                            </div>
                            <input className="form-control w-100" type="text" required />
                            <div className="mpText w-100 mt-3 mb-2">
                            * Account Number
                            </div>
                            <input className="form-control w-100" type="text" required />
                            <div className="mpText w-100 mt-3 mb-2">
                            * Branch Location
                            </div>
                            <input className="form-control w-100" type="text" required />
                            <div className="mpText w-100 mt-3 mb-2">
                            * IFSC Code
                            </div>
                            <input className="form-control w-100" type="text" required />
                            <Link to="/AddEditBasic"><button type="submit" className="btn doacBtn w-100 px-4 mt-4">Save</button></Link>
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
                  