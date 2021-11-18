import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddEditSpecExp() {
    const history = useHistory(true);
  
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                            <div className="draCard2 p-3">
                            <div className="w-100 doacTitle d-flex align-items-center pb-2">
                                <h3 className="mb-0"><img onClick={() => history.goBack()} src={Backbtn} alt="backbtn"/> Specialisation &amp; Exp</h3>
                            </div>
                            {/*doacTitle-ends-here*/}
                            <form className="w-100 mt-4">
                                <div className="mpText w-100 mb-2">
                                * Select Speciality Department
                                </div>
                                <select className="form-select">
                                <option selected>* Select Speciality Department</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                                </select>
                                <div className="mpText w-100 mt-3 mb-2">
                                * Select Specialisation Type
                                </div>
                                <select className="form-select">
                                <option selected>* Select Specialisation Type</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                                </select>
                                <div className="mpText w-100 mt-3 mb-2">
                                *Other Specialisation
                                </div>
                                <input className="form-control w-100" type="text" placeholder="Add your Specialisation" required />
                                <div className="mpText w-100 mt-3 mb-2">
                                * Years of Experience
                                </div>
                                <input className="form-control w-100" type="text" required />
                                <div className="mpText w-100 mt-3 mb-2">
                                Currently Working at
                                </div>
                                <input className="form-control w-100" type="text" required />
                                <div className="mpText w-100 mt-3 mb-2">
                                Current Postion Title
                                </div>
                                <input className="form-control w-100" type="text" required />
                                <button type="submit" className="btn doacBtn w-100 px-4 mt-4">Save</button>
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
             