import React, { Component } from 'react';
import SearchGreen from '../../images/search-green.png';
import FilterGreen from '../../images/filter-green.png';
import AgeGreen from '../../images/age-green.png';
import HeightGreen from '../../images/height-green.png';
import WeightGreen from '../../images/weight-green.png';
import BloodGroupGreen from '../../images/blood-group-green.png';
import GenderGreen from '../../images/gender-green.png';
import TexDocument from '../../images/TextDocument.jpg';
import { useHistory } from 'react-router-dom';
import Backbt from '../../images/back-button-new.png';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function TestRecords() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-3"> <img onClick={() => history.goBack()} src={Backbt} alt="btnback"/> Test Reports</h1>
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
     <Link to="/AddEditTestReports"> <button type="button" className="btn doaOrangeBtn">+ Add New</button></Link>
    </div>
    <div className="ms-3 ms-sm-auto me-3">
      <a href="/"><img src={SearchGreen} alt="serach" /></a> 
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
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Master Healtj checkup</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">Prescribed by</p>
        <p className="mpText mb-0"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        <a href="/AddEditTestReports" className="viewMore text-decoration-none ms-auto">Edit</a>
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
        <p className="mpText mb-1"><span>Thyroid test</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">Prescribed by</p>
        <p className="mpText mb-0"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        <a href="/AddEditTestReports" className="viewMore text-decoration-none ms-auto">Edit</a>
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
        <p className="mpText mb-1"><span>LFT</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">Prescribed by</p>
        <p className="mpText mb-0"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        <a href="/AddEditTestReports" className="viewMore text-decoration-none ms-auto">Edit</a>
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>

<div>
  {/*modals-starts-here*/}
  {/*modal-height-starts-here*/}
  <div className="modal fade" id="height" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel"><img src={HeightGreen} alt="htgrn" className="me-2" />Height</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <input className="form-control py-2" type="text" placeholder="Height (fts)" />
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
        <div className="modal-footer border-0">
          <button type="submit" className="btn fmaBtn">Save</button>
        </div>
        {/*modal-footer-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-height-ends-here*/}
  {/*modal-weight-starts-here*/}
  <div className="modal fade" id="weight" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel"><img src={WeightGreen} alt="wtgr" className="me-2" />Weight</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <input className="form-control py-2" type="text" placeholder="Weight (Kgs)" />
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
        <div className="modal-footer border-0">
          <button type="submit" className="btn fmaBtn">Save</button>
        </div>
        {/*modal-footer-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-weight-ends-here*/}
  {/*modal-bg-starts-here*/}
  <div className="modal fade" id="bg" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel"><img src={BloodGroupGreen} alt="bloodGreen" className="me-2" />Blood Group</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <select className="form-select py-2">
              <option selected>Select Blood Group</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
        <div className="modal-footer border-0">
          <button type="submit" className="btn fmaBtn">Save</button>
        </div>
        {/*modal-footer-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-bg-ends-here*/}
  {/*modal-gender-starts-here*/}
  <div className="modal fade" id="gender" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel"><img src={GenderGreen} alt="green" className="me-2" />Gender</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form className="abFormGroup">
            <input type="radio" className="btn-check" name="options" id="gender1" autoComplete="off" defaultChecked />
            <label className="btn py-1 px-3 m-1" htmlFor="gender1">Male</label>
            <input type="radio" className="btn-check" name="options" id="gender2" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="gender2">Female</label>
            <input type="radio" className="btn-check" name="options" id="gender3" autoComplete="off" />
            <label className="btn py-1 px-3 m-1" htmlFor="gender3">Others</label>
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
        <div className="modal-footer border-0">
          <button type="submit" className="btn fmaBtn">Save</button>
        </div>
        {/*modal-footer-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-gender-ends-here*/}
  {/*modal-age-starts-here*/}
  <div className="modal fade" id="age" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel"><img src={AgeGreen} alt="age" className="me-2" />Age</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <input className="form-control py-2" type="text" placeholder="Enter Date Of Birth" />
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
        <div className="modal-footer border-0">
          <button type="submit" className="btn fmaBtn">Save</button>
        </div>
        {/*modal-footer-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-age-ends-here*/}
  {/*modal-hc-starts-here*/}
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

{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
