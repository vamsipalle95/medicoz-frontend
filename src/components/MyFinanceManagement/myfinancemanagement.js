import React, { Component } from 'react';
import PB from '../../images/doctoModule/pb.png';
import Urvasi from '../../images/doctoModule/urvasi.png';
import Wallet from '../../images/doctoModule/wallet.png';
import Refunds from '../../images/doctoModule/refunds.png';
import Income from '../../images/doctoModule/income.png';
import Calculator from '../../images/doctoModule/calculator.png';
import ClinicReports from '../../images/doctoModule/clinic-reports.png';
import Drreports from '../../images/doctoModule/dr-reports.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';

export default function Myfinancemanagement() {

  const history = useHistory();
    
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Finance Management
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={PB} alt="pb" className="me-2" />Patient Billing</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <img src={Urvasi} alt="urvasi" />
      </div>
      <div className="w-100 text-center mt-3">
        <Link to="/Generatebill"><button type="button" className="btn doacBtn">Generate Bill</button></Link>
      </div>
      <div className="w-100 text-center">
        <Link to="/PatientViewBill" className="f10mBlue text-decoration-none">View Bill</Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Wallet} alt="wallet" className="me-2" />My Wallet</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb"><span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>₹</span>2500</div>
      </div>
      {/*circle-ends-here*/}
      <div className="mpText text-center mt-2">Balance</div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="drHospitalCard m-2 p-3">
      <div className="w-100 doacTitle d-flex flex-wrap justify-content-between align-items-center mb-3 pb-2">
        <div>
          <h3 className="mb-0"><img src={Refunds} alt="refunds" className="me-2" />Refunds</h3>
        </div>
        <div className="dropdown sortingDD">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Week
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="/">Sun</a></li>
            <li><a className="dropdown-item" href="/">Mon</a></li>
            <li><a className="dropdown-item" href="/">tue</a></li>
          </ul>
        </div>
        {/*dropdown-ends-here*/}
      </div>
      {/*flexbox-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb"><span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>₹</span>20</div>
      </div>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
       <Link to="/PatientRefunds"> <button type="button" className="btn doacBtn">Refunds</button></Link>
      </div>
    </div>
    {/*drHospitalCard-ends-here*/}
    <div className="w400Card m-2 p-3">
      <div className="w-100 doacTitle d-flex flex-wrap justify-content-between align-items-center mb-3 pb-2">
        <div>
          <h3 className="mb-0"><img src={Income} alt="income" className="me-2" />Income</h3>
        </div>
        <div className="dropdown sortingDD">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            By Day
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">1</a></li>
            <li><a className="dropdown-item" href="/">2</a></li>
            <li><a className="dropdown-item" href="/">3</a></li>
          </ul>
        </div>
        {/*dropdown-ends-here*/}
      </div>
      {/*flexbox-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb"><span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>₹</span>200k</div>
      </div>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/AddIncome"><button type="button" className="btn doaOrangeBtn">+ Add Income</button></Link>
      </div>
      <div className="w-100 d-flex flex-wrap justify-content-center align-items-center">
        <Link to="/IncomeReceipt" className="f10mBlue text-decoration-none me-4 my-3">View Income</Link>
        <Link to="/AddIncomeHead" className="f10mBlue text-decoration-none my-3">+Add Income Heads</Link>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*w400Card-ends-here*/}
    <div className="w400Card m-2 p-3">
      <div className="w-100 doacTitle d-flex flex-wrap justify-content-between align-items-center mb-3 pb-2">
        <div>
          <h3 className="mb-0"><img src={Calculator} alt="calculator" className="me-2" />Expenses</h3>
        </div>
        <div className="dropdown sortingDD">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            By Day
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">1</a></li>
            <li><a className="dropdown-item" href="/">2</a></li>
            <li><a className="dropdown-item" href="/">3</a></li>
          </ul>
        </div>
        {/*dropdown-ends-here*/}
      </div>
      {/*flexbox-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb"><span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>₹</span>89.0k</div>
      </div>
      {/*circle-ends-here*/}
      <div className="w-100 text-center mt-3">
        <Link to="/AddExpenses"><button type="button" className="btn doaOrangeBtn">+ Add Expense</button></Link>
      </div>
      <div className="w-100 d-flex flex-wrap justify-content-center align-items-center">
        <Link to="/PatientViewExpense" className="f10mBlue text-decoration-none me-4 my-3">View Expense</Link>
        <Link to="/AddExpenseHead" className="f10mBlue text-decoration-none my-3">+Add Expenses Heads</Link>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*w400Card-ends-here*/}
    <div className="w400Card m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={ClinicReports} alt="clinicrepots" className="me-2" />Clinic Reports</h3>
      </div>
      <form className="w-100 mt-4">
        <div className="mpText w-100 mb-2">
          Select Report Type
        </div>
        <select className="form-select">
          <option selected>Select</option>
          <option>Income from Bill Generation Report</option>
          <option>Other Added Income Report (Date Wise)</option>
          <option>Other Added Income Report (Head Wise)</option>
          <option>Online Income Report</option>
          <option>Expense Report (Date Wise)</option> 
          <option>Expense Report (Head Wise)</option> 
          <option>Cash Income & Cash Expense Statement</option>
          <option>All Income & All Expense Statement</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          Select Mode of Payment
        </div>
        <select className="form-select">
          <option selected>Select</option>
          <option>All</option>
          <option>Cash</option>
          <option>Online</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          Select Date Range
        </div>
        <div className="w-100 d-flex flex-wrap">
          <input type="date" className="form-control"  placeholder="From Date" style={{width: '48%', marginRight: '2%'}} />
          <input type="date" className="form-control" placeholder="To Date" style={{width: '48%', marginLeft: '2%'}} />
        </div>
        {/*flexbox-ends-here*/}
        <Link to="/AddIncome"><button type="button" className="btn doacBtn w-100 mt-4">Generate</button></Link>
      </form>
      {/*form-ends-here*/}
    </div>
    {/*w400Card-ends-here*/}
    <div className="w400Card m-2 p-3">
      <div className="w-100 doacTitle mb-3 pb-2">
        <h3 className="mb-0"><img src={Drreports} alt='drreports' className="me-2" />Dr Wise Reports</h3>
      </div>
      <form className="w-100 mt-4">
        <div className="mpText w-100 mb-2">
          Select Report Type
        </div>
        <select className="form-select">
          <option selected>Select</option>
          <option>Dr. Wise Income Report (Bill Wise)</option>
          <option>Dr. Wise Online Income Report</option>
          <option>Dr. Wise All Income Report</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          Select Doctor
        </div>
        <select className="form-select">
          <option selected>Select Doctor</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <div className="mpText w-100 mt-3 mb-2">
          Select Date Range
        </div>
        <div className="w-100 d-flex flex-wrap">
          <input className="form-control" type="date" placeholder="From Date" style={{width: '48%', marginRight: '2%'}} />
          <input className="form-control" type="date" placeholder="To Date" style={{width: '48%', marginLeft: '2%'}} />
        </div>
        {/*flexbox-ends-here*/}
        <Link to="/AddIncome"><button type="button" className="btn doacBtn w-100 mt-4">Generate</button></Link>
      </form>
      {/*form-ends-here*/}
    </div>
    {/*w400Card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
