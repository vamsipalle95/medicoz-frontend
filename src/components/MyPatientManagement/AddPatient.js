import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddPatient() {
    const history = useHistory();
    
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                    <div className="draCard2 p-3">
                    <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} className="bi bi-chevron-left me-2" />Add Patient</h3>
                    </div>
                    {/*doacTitle-ends-here*/}
                    <form className="w-100 mt-4">
                        <div className="mpText w-100 mb-2">
                        * First Name
                        </div>
                        <input className="form-control w-100" type="text" required />
                        <div className="mpText w-100 mt-3 mb-2">
                        *Last Name
                        </div>
                        <input className="form-control w-100" type="text" required />
                        <div className="mpText w-100 mt-3 mb-2">
                        * Gender
                        </div>
                        <div className="abFormGroup">
                        <input type="radio" className="btn-check" name="options" id="male" autoComplete="off" />
                        <label className="btn py-1 px-3 m-1" htmlFor="male">Male</label>
                        <input type="radio" className="btn-check" name="options" id="female" autoComplete="off" />
                        <label className="btn py-1 px-3 m-1" htmlFor="female">Female</label>
                        <input type="radio" className="btn-check" name="options" id="others" autoComplete="off" />
                        <label className="btn py-1 px-3 m-1" htmlFor="others">Others</label>
                        </div>
                        <div className="mpText w-100 mt-3 mb-2">
                        * Mobile
                        </div>
                        <input className="form-control w-100" type="text" required />
                        <div className="mpText w-100 mt-3 mb-2">
                        * Age
                        </div>
                        <input className="form-control w-100" type="text" required />
                        <div className="mpText w-100 mt-3 mb-2">
                        City/Dist
                        </div>
                        <input className="form-control w-100" type="text" />
                        <div className="mpText w-100 mt-3 mb-2">
                        Mandal/Village
                        </div>
                        <input className="form-control w-100" type="text" />
                        <div className="mpText w-100 mt-3 mb-2">
                        Locality
                        </div>
                        <input className="form-control w-100" type="text" />

                        <div className="mpText w-100 mt-3 mb-2">
                        Pin Code
                        </div>
                        <input className="form-control w-100" type="text" />
                        <button type="button" className="d-block btn doaOrangeBtn mt-4 ms-auto">+ Add Patient</button>
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
            