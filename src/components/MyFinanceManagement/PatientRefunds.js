import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function PatientFunds() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 doacTitle p-3">
                    <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Refund</h3>
                </div>
                <div className="w-100 overflow-auto mt-3">
                    <table id="table_id" className="w-100">
                    <thead>
                        <tr>
                        <th>Refund Date.</th>
                        <th>Patient Name/ ID</th>
                        <th>Service Name</th>
                        <th>Dr Name</th>
                        <th>Amount</th>
                        <th>Refund By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>23/04/2021</td>
                        <td>Sameer Bhatia-P1245</td>
                        <td>Consultation Fee</td>
                        <td>Dr.Prasad</td>
                        <td>600</td>
                        <td>Online</td>
                        </tr>
                        <tr>
                        <td>23/04/2021</td>
                        <td>Mrs.Rajani-P61528</td>
                        <td>Consultation Fee</td>
                        <td>Dr.Prasad</td>
                        <td>600</td>
                        <td>Online</td>
                        </tr>
                        <tr>
                        <td>23/04/2021</td>
                        <td>Vinod Mehra-P12879</td>
                        <td>Consultation Fee</td>
                        <td>Dr.Anitha</td>
                        <td>600</td>
                        <td>Online</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                {/*myPhoneCardCnt-ends-here*/}

                            </div>
                        );
    }
