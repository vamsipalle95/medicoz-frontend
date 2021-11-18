import React, { Component } from 'react';
import SearchGreen from '../../images/search-green.png';
import FilterGreen from '../../images/filter-green.png';
import Reload from '../../images/reload-orange.png';


class myorders extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-3">My Orders</h1>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 mt-3 mpGrayBox">
    <div className="doaNText me-3">
      Select Member
    </div>
    {/*doaNText-ends-here*/}
    <select className="form-select w-auto obSelect">
      <option selected>Srinivas</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
    {/*select-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap align-items-baseline mt-4 p-3 p-md-0">
    <div className="btn-group rbGroup mb-3 mb-sm-0" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
      <label className="btn rBtnOrange" htmlFor="btnradio1">Pharmacy orders</label>
      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
      <label className="btn rBtnOrange" htmlFor="btnradio3">Diagnostic Orders</label>
    </div>
    {/*btn-group-ends-here*/}
    <div className="ms-3 ms-sm-auto me-3">
      <a href="/"><img src={SearchGreen} alt="searchgreen" /></a> 
    </div>
    {/*search-ends-here*/}
    <div className="dropdown">
    <div>
      <div className="filter-cls dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src={FilterGreen} alt="filtergreen" />
      </div>
      <ul className="dropdown-menu txtul" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item">Date</a></li>
        <li><a className="dropdown-item">Name</a></li>
      </ul>
    </div>

     
    </div>
    {/*filter-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="w-100">
        <p className="mpText mb-1"><span>Amruthanjan + 3 Items</span></p>
        <div className="d-flex flex-wrap align-items-center mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">#CS0156327</p>
          <p className="mpText mb-0">01/04/2021</p>
        </div>
        {/*flexbox-ends-here*/}
        <p className="mpText mb-0">
          Address goes here, Begumpet,
          Hyderabad 11</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 mt-3">
    <button type="button" className="btn doacBtn px-3 py-2 me-2"><img src={Reload} className="me-2" alt="reload" />Re Order</button>
        <a href="/ViewOrders" className="viewMore text-decoration-none">View More</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="w-100">
        <p className="mpText mb-1"><span>Amruthanjan + 3 Items</span></p>
        <div className="d-flex flex-wrap align-items-center mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">#CS0156327</p>
          <p className="mpText mb-0">01/04/2021</p>
        </div>
        {/*flexbox-ends-here*/}
        <p className="mpText mb-0">
          Address goes here, Begumpet,
          Hyderabad 11</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-2 me-2"><img src={Reload} className="me-2" alt="reload" />Re Order</button>
        <a href="/ViewOrders" className="viewMore text-decoration-none">View More</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="w-100">
        <p className="mpText mb-1"><span>Amruthanjan + 3 Items</span></p>
        <div className="d-flex flex-wrap align-items-center mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">#CS0156327</p>
          <p className="mpText mb-0">01/04/2021</p>
        </div>
        {/*flexbox-ends-here*/}
        <p className="mpText mb-0">
          Address goes here, Begumpet,
          Hyderabad 11</p>
      </div>
      {/*text-ends-here*/}
      <div className="w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-2 me-2"><img src={Reload} className="me-2" alt="reload" />Re Order</button>
        <a href="/ViewOrders" className="viewMore text-decoration-none">View More</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
}

export default myorders;
