import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function AddEditAboutme() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                    <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                        <div className="draCard2 p-3">
                        <div className="w-100 doacTitle d-flex align-items-center pb-2">
                            <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> About Me</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <form className="w-100 mt-4">
                            <div className="mpText w-100 mb-2">
                            * Short description about me
                            </div>
                            <textarea className="form-control w-100" rows={3} defaultValue={""} />
                            <Link to="/EditAchievments"><button type="submit" className="btn doacBtn w-100 px-4 mt-4">Save</button></Link>
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
