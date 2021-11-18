import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function PatientViewExpense() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 doacTitle p-3">
    <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Expense List</h3>
  </div>
  <div className="w-100 overflow-auto mt-3">
    <table id="table_id" className="w-100">
      <thead>
        <tr>
          <th>Date</th>
          <th>Head</th>
          <th>Amount</th>
          <th>Mode of Payment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>23/04/2021</td>
          <td>Rent</td>
          <td>25,000</td>
          <td>Cash</td>
        </tr>
        <tr>
          <td>23/04/2021</td>
          <td>Salary</td>
          <td>35,000</td>
          <td>Cash</td>
        </tr>
        <tr>
          <td>23/04/2021</td>
          <td>Stationary</td>
          <td>25,000</td>
          <td>Cash</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
