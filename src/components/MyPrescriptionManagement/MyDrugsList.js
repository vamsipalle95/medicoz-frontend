import React, { Component } from 'react';
import PencilGreen from '../../images/doctoModule/pencil-green.png';
import Trashgreen from '../../images/doctoModule/trash-green.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function MyDrugsList() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-between justify-content-between pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Drugs List</h3>
      <button type="button" className="btn doaOrangeBtn w-50"><Link to="/AddEditMyDrugs" className="text-white">Add Drugs</Link></button>
    </div>
    {/*doacTitle-ends-here*/}
    <form className="w-100">
      <div className="float-right d-flex flex-wrap jusity-content-end align-items-end">
       
      </div>
      <div className="input-group my-3">
  <input type="text" className="form-control" placeholder="Search" />
  
</div>



      <div className="w-100 d-flex flex-wrap align-items-center mt-3" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="f10m mb-2 me-3">
          Tab - Dolo 650 mg - Cipla
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={PencilGreen} alt="pencil" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={Trashgreen} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="f10m mb-2 me-3">
          Tab - Dolo 650 mg - Cipla
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={PencilGreen} alt="pencil" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={Trashgreen} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="f10m mb-2 me-3">
          Tab - Dolo 650 mg - Cipla
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={PencilGreen} alt="pencil" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={Trashgreen} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="f10m mb-2 me-3">
          Tab - Dolo 650 mg - Cipla
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={PencilGreen} alt="pencil" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={Trashgreen} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
