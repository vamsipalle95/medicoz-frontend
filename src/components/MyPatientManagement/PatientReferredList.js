import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import pdfIcon from '../../images/pdf-icon-orange.png';
import Backbtn from '../../images/back-button-new.png';
import TexDocument from '../../images/TextDocument.jpg';

export default function PatientReferredList() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Patients Ref - BY Me List
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
  <div className="d-flex my-3 flex-wrap align-items-center justify-content-between">
                    <div className="entries d-flex flex-wrap">
                      <span className="mx-2">Show </span>
                      <span>
                        <select className="form-control">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                          </select></span><span className="mx-2"> Entries </span>
                    </div>

                    <div class="searchItem d-flex flex-wrap">
                      <div>Search:</div>
                      <div><input type="text" className="form-control"></input></div>
                    </div>
                  </div>
  <div className="w-100 overflow-auto mt-3">
  
    <table id="table_id" className="overflow_tb mb-3">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Date</th>
          <th>Full Name/ID</th>
          <th>Gender / Age</th>
          <th>Referred To</th>
          <th>City</th>
          <th>Status</th>
          <th>Discharge Summary</th>
          <th>Bill</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>may 3, 21</td>
          <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Kumar</a></td>
          <td>M/25</td>
          <td>Konark Hospital</td>
          <td>Hyderabad</td>
          <td>Admitted</td>
          <td><img src={pdfIcon} alt="pdficon" data-bs-toggle="modal" data-bs-target="#NewPopup" className="sizePdf" /></td>
          <td><img src={pdfIcon} alt="pdficon" data-bs-toggle="modal" data-bs-target="#BillPopup" /></td>
        </tr>
        <tr>
          <td>1.</td>
          <td>may 3, 21</td>
          <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Kumar</a></td>
          <td>M/25</td>
          <td>Konark Hospital</td>
          <td>Hyderabad</td>
          <td>Admitted</td>
          <td><img src={pdfIcon} alt="pdficon" data-bs-toggle="modal" data-bs-target="#NewPopup" /></td>
          <td><img src={pdfIcon} alt="pdficon" data-bs-toggle="modal" data-bs-target="#BillPopup" /></td>
        </tr>
        <tr>
          <td>1.</td>
          <td>may 3, 21</td>
          <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Kumar</a></td>
          <td>M/25</td>
          <td>Konark Hospital</td>
          <td>Hyderabad</td>
          <td>Admitted</td>
          <td><img src={pdfIcon} alt="pdficon" data-bs-toggle="modal" data-bs-target="#NewPopup" /></td>
          <td><img src={pdfIcon} alt="pdficon" data-bs-toggle="modal" data-bs-target="#BillPopup"/></td>
        </tr>
      </tbody>
    </table>

    
  </div>
  <div className="d-flex mt-2 flex-wrap align-items-center justify-content-between">
                    <div className="entries d-flex flex-wrap">
                      <span className="mx-2">Showing </span><span>1 to 3 of 3 entries</span>
                     
                    </div>

                    <div class="searchItem d-flex flex-wrap">
                    <ul className="pagination pagination-sm">
                      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>

                    </div>
                  </div>

                  <h6 className="my-2 fontxs">* UID = "Unique ID"</h6>
                  <h6 className="my-2 fontxs">*IMR No = "Internal Medical Record Number"</h6>
  {/*flexbox-ends-here*/}
</div>

{/*modals-starts-here*/}
{/*modal-patientProfile-starts-here*/}
<div className="modal fade" id="patientProfile" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">Referred Patient Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">UID</div>
          <div className="f10m w-50">123456789</div>
        </div>

        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">IMR No</div>
          <div className="f10m w-50">MED1254C</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">First Name</div>
          <div className="f10m w-50">Lorem ipsum</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Last Name</div>
          <div className="f10m w-50">Lorem ipsum</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Gender</div>
          <div className="f10m w-50">Lorem ipsum</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Age</div>
          <div className="f10m w-50">Lorem ipsum</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Mobile</div>
          <div className="f10m w-50">12345 12345</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">City/Town//Dist</div>
          <div className="f10m w-50">Hyderabad</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Mandal/village</div>
          <div className="f10m w-50">Lorem ipsum</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Locality</div>
          <div className="f10m w-50">Begumpet</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Referred Date</div>
          <div className="f10m w-50">22 April 2021</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Hospital Name</div>
          <div className="f10m w-50">Konark Hospital</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">City/Dist</div>
          <div className="f10m w-50">Lorem ipsum</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="f10mTeal w-50">Locality</div>
          <div className="f10m w-50">Hyderabad</div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="w-50"><a href className="f10mOrange text-decoration-none">View Discharge Summary</a></div>
          <div className="w-50"><img src="images/pdf-icon.svg" /></div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <div className="w-50"><a href className="f10mOrange text-decoration-none">View Pt. Bill</a></div>
          <div className="w-50"><img src="images/pdf-icon.svg" /></div>
        </div>
        {/*flexbox-ends-here*/}
        <button type="button" className="btn d-block ms-auto mt-4 doacBtn" data-bs-dismiss="modal">close</button>
      </div>
      {/*modal-body-ends-here*/}
    </div>
  </div>
</div>
{/*modal-patientProfile-ends-here*/}


{/*modal-view-starts-here*/}
<div className="modal fade" id="NewPopup" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Discharge Summary</h5>
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

{/*modal-view-starts-here*/}
<div className="modal fade" id="BillPopup" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Bill</h5>
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

            </div>
        );
    }
