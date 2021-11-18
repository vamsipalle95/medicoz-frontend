import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function IncomeReceipt() {
   const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 p-3 mt-3 mpGrayBox">
                    <div className="mpTitle me-3 mb-3 mb-sm-0">
                    <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Income Receipt
                    </div>
                    {/*doaNText-ends-here*/}
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 overflow-auto mt-3">
                    <table id="table_id">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Bill No</th>
                        <th>Patient Name/ ID</th>
                        <th>Service Name</th>
                        <th>Dr Name</th>
                        <th>Amount</th>
                        <th>Mode of Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23/04/2021</td>
                            <td>1245</td>
                            <td>Sameer Bhatia-P1245</td>
                            <td>Consultation Fee</td>
                            <td>Dr.Prasad</td>
                            <td>600</td>
                            <td>Cash</td>
                        </tr>
                        <tr>
                            <td>23/04/2021</td>
                            <td>1245</td>
                            <td>Sameer Bhatia-P1245</td>
                            <td>Consultation Fee</td>
                            <td>Dr.Prasad</td>
                            <td>600</td>
                            <td>Cash</td>
                        </tr>
                        <tr>
                            <td>23/04/2021</td>
                            <td>1245</td>
                            <td>Sameer Bhatia-P1245</td>
                            <td>Consultation Fee</td>
                            <td>Dr.Prasad</td>
                            <td>600</td>
                            <td>Cash</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {/*flexbox-ends-here*/}
                </div>
                {/*myPhoneCardCnt-ends-here*/}
            </div>
        );
    }
