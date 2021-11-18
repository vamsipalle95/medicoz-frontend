import React, { Component } from 'react';
import SearchGreen from '../../images/search-green.png';
import FilterGreen from '../../images/filter-green.png';
import TexDocument from '../../images/TextDocument.jpg';
import { useHistory } from 'react-router-dom';
import Backbt from '../../images/back-button-new.png';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function HospitalSummary() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
  <h1 className="mpTitle me-3"> <img onClick={() => history.goBack()} src={Backbt} alt="btnback"/> Hospital Discharge Summary</h1>
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
    <div>
     <Link to="/AddEditSummary"> <button type="button" className="btn doaOrangeBtn">+ Add New</button></Link>
    </div>
    <div className="ms-3 ms-sm-auto me-3">
      <a href="/"><img src={SearchGreen} alt="search" /></a> 
    </div>
    {/*search-ends-here*/}
    <div className="dropdown">
    <div>
      <div className="filter-cls dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src={FilterGreen} alt="filtergreen" />
      </div>
      <ul className="dropdown-menu txtul" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item">Date</a></li>
        <li><a className="dropdown-item">Hospital Name</a></li>
        <li><a className="dropdown-item">Doctor Name</a></li>
      </ul>
    </div>

     
    </div>
    {/*filter-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Hospital name goes here</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        <a href="/AddEditSummary" className="viewMore text-decoration-none ms-auto">Edit</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Hospital name goes here</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        <a href="/AddEditSummary" className="viewMore text-decoration-none ms-auto">Edit</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Hospital name goes here</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        <a href="/AddEditSummary" className="viewMore text-decoration-none ms-auto">Edit</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>

<div className="modal fade" id="view" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Prescription</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="mpText w-100 mb-4">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1500}>
              <img src={TexDocument} alt="txtdoc" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={1500}>
              <img src={TexDocument} alt="txtdoc" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={1500}>
              <img src={TexDocument} alt="txtdoc" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*modal-body-ends-here*/}
    </div>
    {/*modal-content-ends-here*/}
  </div>
</div>
{/*modal-view-ends-here*/}
{/*modals-ends-here*/}

{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
