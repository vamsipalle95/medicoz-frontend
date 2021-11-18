import React, { Component } from 'react';
import SearchGreen from '../../images/search-green.png';
import FilterGreen from '../../images/filter-green.png';
import Reload from '../../images/reload-orange.png';
import TexDocument from '../../images/TextDocument.jpg';


export default function MyReceipts() {
   
        return (
            <div>
                  <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
    <h1 className="mpTitle me-3">My Bills & Receipts</h1>
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
        <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
          <div className="d-flex flex-wrap justify-content-between ">
                  <nav>
                      <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#drreceipts" type="button" role="tab" aria-selected="true">Dr. Receipts</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#hospital" type="button" role="tab" aria-selected="false">Hospital Receipts</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#clinic" type="button" role="tab" aria-selected="false">Clinic Receipts</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#pharmacy" type="button" role="tab" aria-selected="false">Pharmacy Receipts</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#lab" type="button" role="tab" aria-selected="false">Lab Receipts</button>
                      </div>
                  </nav>
                  <div className="searchcls d-flex flex-wrap justify-content-between">
                            {/*btn-group-ends-here*/}
                    <div className="ms-5 ms-sm-auto me-2">
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
                    </div>
                
                  </div>
     
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="drreceipts" role="tabpanel">
                    {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Consultation with</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Consultation with</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
       
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Consultation with</p><p className=" mb-0 doaNText1"><span>Dr.Dr.Ramana Rao</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
                </div>

                <div className="tab-pane fade show" id="hospital" role="tabpanel">
                    
                    {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Dr Consultation at</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Hospital Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
     
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Dr Consultation at</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Hospital Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Dr Consultation at</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Hospital Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
                </div>

                <div className="tab-pane fade show" id="clinic" role="tabpanel">
                     {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Dr Consultation at</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Clinic Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
       
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Dr Consultation at</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Clinic Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
       
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From Dr Consultation at</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Clinic Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
  
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
                </div>

                <div className="tab-pane fade show" id="pharmacy" role="tabpanel">
                     {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Pharmacy Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
      
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Pharmacy Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Pharmacy Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
      
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
                </div>

                <div className="tab-pane fade show" id="lab" role="tabpanel">
                    {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-start align-items-baseline mt-3">
    <div className="mpCard p-3 m-2">
      <div className="grayTextBox mb-4">
        Srinivas
      </div>
      {/*grayTextBox-ends-here*/}
      <div className="w-100">
        <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Lab Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Lab Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
       
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
      <p className="mpText mb-1"><span>Receipt Date</span></p>
        <div className="mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
          <p className="mpText mb-0 me-3">01/04/2021</p>
        </div>
        <p className="mpText mb-0">From</p>
        <p className=" mb-0 doaNText1" data-bs-toggle="modal" data-bs-target="#popup2"><span>Lab Name</span></p>
      </div>
      {/*text-ends-here*/}
      <div className="d-flex align-items-center w-100 mt-3">
        <button type="button" className="btn doacBtn px-3 py-1" data-bs-toggle="modal" data-bs-target="#view">View</button>
        
      </div>
      {/*button-ends-here*/}
    </div>
    {/*card-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
                </div>

            </div>
        </div>
    </div>
   
    {/*filter-ends-here*/}
  </div>



{/*modal-view-starts-here*/}
<div className="modal fade" id="view" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Bill & Receipt</h5>
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
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}   
            </div>
        );
    }
