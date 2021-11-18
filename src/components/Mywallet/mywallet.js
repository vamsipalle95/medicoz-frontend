import React, { Component } from 'react';
import Walletpic from '../../images/wallet.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class mywallet extends Component {
    render() {
        return (
            <div>
                <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="draCard1 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Walletpic} className="me-2" alt="wallet1" />
      <h3 className="mb-0">My Wallet</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
      <h3 className="mb-1 w-100">₹2500</h3>
      <h4 className="mb-0 w-100">Balance</h4>
    </div>
    {/*circle-ends-here*/}
    <div className="w-100 text-center mt-4">
      <Link to="/AddMoney"><button type="button" className="doacBtn py-1 px-3">Add Money</button></Link>
    </div>
    {/*button-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
}

export default mywallet;