import React, { Component } from 'react';

class PatientViewIncome extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 doacTitle p-3">
                    <h3 className="mb-0"><i className="bi bi-chevron-left me-2" />Income Receipts</h3>
                </div>
                <div className="w-100 overflow-auto mt-3">
                    <table id="table_id">
                    <thead>
                        <tr>
                        <th>Date.</th>
                        <th>Bill.No</th>
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
                        <td>Mrs.Rajani-P61528</td>
                        <td>Consultation Fee</td>
                        <td>Dr.Prasad</td>
                        <td>600</td>
                        <td>UPI</td>
                        </tr>
                        <tr>
                        <td>23/04/2021</td>
                        <td>1245</td>
                        <td>Vinod Mehra-P12879</td>
                        <td>Consultation Fee</td>
                        <td>Dr.Anitha</td>
                        <td>600</td>
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
}

export default PatientViewIncome;