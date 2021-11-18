import React, { Component } from 'react';
import Signature from '../../images/doctoModule/signature.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddDigitalSign() {
   const history = useHistory(true);
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                    <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                        <div className="draCard2 p-3">
                        <div className="w-100 doacTitle d-flex align-items-center pb-2">
                            <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Digital Signature</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <form className="w-100 mt-4">
                            <div className="w-100 mb-3">
                            <img src={Signature} alt="sign" />
                            </div>
                            <div className="mpText w-100 mt-3 mb-2">
                            * Upload Scanned Signature
                            </div>
                            <input className="form-control w-100" type="file" required />
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
                   