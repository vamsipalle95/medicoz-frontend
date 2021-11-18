import React, { useState } from 'react';
import Wallet from '../../images/wallet.png';
import Debit from '../../images/debit-card.png';
import Credit from '../../images/credit-card.png';
import Upi from '../../images/upi.png';
import NetBank from '../../images/net-banking.png';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


export default function PaymentModes() {
    
        return (
            <div>
                <div className="container px-2 py-5">
                <div className="draCard2 ms-auto me-auto p-3">
                    <div className="w-100 doacTitle d-flex align-items-center pb-2">
                    <img src={Wallet} alt="wallet" className="me-2" />
                    <h3 className="mb-0">Select Payment Mode</h3>
                    </div>
                    {/*doacTitle-ends-here*/}
                   <Link to="/YouAreQueue"><button type="button" className="btn spmBtn w-100 mt-4"><img src={Debit} alt="deibit" className="me-3" width="24px" height="24px" />Debit card</button></Link>
                    <button type="button" className="btn spmBtn w-100 mt-4"><img src={Credit} alt="credit" className="me-3" width="24px" height="24px" />Credit card</button>
                    <button type="button" className="btn spmBtn w-100 mt-4"><img src={Upi} alt="uipi" className="me-3" width="24px" height="24px" />UPI</button>
                    <button type="button" className="btn spmBtn w-100 mt-4"><img src={NetBank} alt="betba" className="me-3" width="24px" height="24px" />Net banking</button>
                    
                </div>
                {/*draCard1-ends-here*/}
                </div>
                </div>
                        );
         }
