import React, { Component } from 'react';
import Wallet from '../../images/wallet.png';
import Debit from '../../images/debit-card.png';
import Credit from '../../images/credit-card.png';
import Upi from '../../images/upi.png';
import NetBnk from '../../images/net-banking.png';
import BackBtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
export default function Addmoney() {
    const history = useHistory();

        return (
            <div>
                <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="draCard1 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
    <img onClick={() => history.goBack()} className="me-2" src={BackBtn} alt="backbtn"/> <img src={Wallet} alt='wallet' />
      <h3 className="mb-0">Add Money</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <button type="button" className="btn spmBtn w-100 mt-4"><img src={Debit} alt="debit" className="me-3" width="24px" height="24px" />Debit card</button>
    <button type="button" className="btn spmBtn w-100 mt-4"><img src={Credit} alt="credit" className="me-3" width="24px" height="24px" />Credit card</button>
    <button type="button" className="btn spmBtn w-100 mt-4"><img src={Upi} alt="upi" className="me-3" width="24px" height="24px" />UPI</button>
    <button type="button" className="btn spmBtn w-100 mt-4"><img src={NetBnk} alt="Netbmk" className="me-3" width="24px" height="24px" />Net banking</button>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }


