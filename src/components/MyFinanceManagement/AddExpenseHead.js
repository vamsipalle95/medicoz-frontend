import React, { Component } from 'react';
import PencilGreen from '../../images/doctoModule/pencil-green.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';


export default function AddExpenseHead() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="backbt" onClick={() => history.goBack()}  />Add Expenses Heads</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3" style={{borderBottom: '1px solid #cecece !important'}}>
      <div className="mb-2 me-3">
        <a href className="f10mBlue text-decoration-none">Rent</a>
      </div>
      <div className="mb-2">
        <a href><img src={PencilGreen} alt="pencil" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex flex-wrap justify-content-between align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
      <div className="mb-2 me-3">
        <a href className="f10mBlue text-decoration-none">Miscellaneous</a>
      </div>
      <div className="mb-2">
        <a href><img src={PencilGreen} alt="pencil" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex flex-wrap justify-content-between align-items-center pb-2 mt-2" style={{borderBottom: '1px solid #cecece !important'}}>
      <div>
        <input type="text" className="form-control" placeholder="Salary" />
      </div>
      <div>
        <a href><img src={PencilGreen} alt="pencil" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex flex-wrap justify-content-between align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
      <div className="mb-2 me-3">
        <a href className="f10mBlue text-decoration-none">Stationery</a>
      </div>
      <div className="mb-2">
        <a href><img src={PencilGreen} alt="pencil" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex flex-wrap justify-content-between align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
      <div className="mb-2 me-3">
        <a href className="f10mBlue text-decoration-none">Furniture</a>
      </div>
      <div className="mb-2">
        <a href><img src={PencilGreen} alt="pencil" /></a>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 mt-2">
      <input type="text" className="form-control w-100" placeholder="* Service Name" />
    </div>
    <div className="w-100 text-end mt-3">
      <button type="button" className="btn doaOrangeBtn">+ Add</button>
    </div>
    <div className="w-100 mt-3">
    <Link to="/MyFinanceManagement">  <button className="w-100 btn doacBtn">Save</button></Link>
    </div>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
