import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function PatientViewBill() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                            <div className="w-100 doacTitle d-flex flex-wrap align-items-center p-3">
                                <div className="my-2 me-3">
                                <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> View Bill</h3>
                                </div>
                                <div className="ms-sm-auto my-2">
                                <div className="f10sbOrange">23 April 2021</div>
                                </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 p-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                                <div className="f10mTeal mb-1">Clinic Name</div>
                                <div className="f10m">Address will go here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex align-items-center p-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                                <div className="f10mTeal" style={{width: '30%'}}>
                                Bill: <span className="f10m">123456789</span>
                                </div>
                                <div className="f10mTeal" style={{width: '30%'}}>
                                Phone: <span className="f10m">12345 12345</span>
                                </div>
                                <div className="f10mTeal" style={{width: '30%'}}>
                                Timings: <span className="f10m">9:30 to 1:30, 3:30 to 7:30</span>
                                </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex align-items-center p-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                                <div className="f10mTeal w-50">
                                Patient Name: <span className="f10m">Srinivas</span>
                                </div>
                                <div className="f10mTeal w-50">
                                Dr.Name: <span className="f10m">Dr.Anitha</span>
                                </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex align-items-center p-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                                <div className="f10m w-50">
                                Consultation Fees
                                </div>
                                <div className="f10m w-50">
                                ₹ 600
                                </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 d-flex align-items-center p-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                                <div className="f10mTeal w-50">
                                Discount: <span className="f10m">50</span>
                                </div>
                                <div className="f10mTeal w-50">
                                Total Amount: <span className="f10m">550</span>
                                </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 p-2" style={{borderBottom: '1px solid #B5B5B5'}}>
                                <div className="f10mTeal">
                                Payment Type: <span className="f10m">UPI</span>
                                </div>
                            </div>
                            {/*flexbox-ends-here*/}
                            <div className="w-100 text-end mt-3 p-2">
                                <button type="button" className="btn doacBtn me-3">Print</button>
                                <button type="button" className="btn doacBtn">Share</button>
                            </div>
                            </div>
                            {/*myPhoneCardCnt-ends-here*/}

                                        </div>
                                    );
                                }
                          