import React, { Component } from 'react';
import PencilGreen from '../../images/doctoModule/pencil-green.png';
import Backbtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function AddIncomeHead() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Add Service/Income Heads</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 d-flex flex-wrap align-items-center mt-3">
      <div className="mpText mb-2 me-3">
        Dr. Anitha Consultation Fee
      </div>
      <div className="mpText mb-2 me-3">
        <span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>₹</span>400
      </div>
      <div className="mb-2">
        <a href><img src={PencilGreen} alt="pencilgreen" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex flex-wrap align-items-center">
      <div className="mpText mb-2 me-3">
        Dr.Prasad Consultation Fee
      </div>
      <div className="mpText mb-2 me-3">
        <span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>₹</span>500
      </div>
      <div className="mb-2">
        <a href><img src={PencilGreen} alt="pencilgreen" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex flex-wrap align-items-center mt-2">
      <div style={{width: '68%', marginRight: '2%'}}>
        <input type="text" className="form-control" placeholder="* Service name" />
      </div>
      <div style={{width: '28%', marginLeft: '2%'}}>
        <input type="text" className="form-control" placeholder="Amount" />
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 text-end mt-3">
      <button type="button" className="btn doaOrangeBtn">+ Add</button>
    </div>
    <div className="w-100 mt-3">
     <Link to="/MyFinanceManagement"><button className="w-100 btn doacBtn">Save</button></Link>
    </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
