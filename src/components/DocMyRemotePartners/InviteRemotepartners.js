import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function InviteRemotepartners() {
    const history = useHistory()
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                            <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                                <div className="draCard1 p-3">
                                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                                    <h3 className="mb-0"><img img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Invite Remote Partner</h3>
                                </div>
                                {/*doacTitle-ends-here*/}
                                <form className="w-100 mt-4">
                                    <div className="mpText w-100 mt-3 mb-2">
                                    * Email Id
                                    </div>
                                    <input className="form-control w-100" type="email" required />
                                    <div className="mpText w-100 mt-3 mb-2">
                                    * Mobile
                                    </div>
                                    <input className="form-control w-100" type="text" required />
                                    <div className="mpText w-100 mt-3 mb-2">
                                    * Select Role
                                    </div>
                                    <select className="form-select w-100">
                                    <option selected>Select</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                    </select>
                                    <button type="submit" className="btn d-block ms-auto doaOrangeBtn px-4 mt-4">Invite</button>
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
                          