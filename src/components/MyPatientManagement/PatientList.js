import React, { Component } from 'react';
import VisitHistory from '../../images/visit-history.png';
import PdfIcon from '../../images/pdf-icon.png';
import Person from '../../images/person.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import TexDocument from '../../images/TextDocument.jpg';

export default function PatientList() {
    const history = useHistory();
    
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 p-3 mt-3 mpGrayBox">
                    <div className="mpTitle me-3 mb-3 mb-sm-0">
                    <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Patients List
                    </div>
                    {/*doaNText-ends-here*/}
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 overflow-auto mt-3">
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
                      <div>Search: </div>
                      <div className="ml-2"><input type="text" className="form-control"></input></div>
                    </div>
                  </div>
                    <table className="w-100" id="table_id">
                    <thead>
                        <tr>
                        <th>S.No.</th>
                        <th>UID</th>
                        <th>IMR No</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Last Visit</th>
                        <th>Visit History</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1.</td>
                        <td>123456789</td>
                        <td>MED1254C</td>
                        <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Kumar</a></td>
                        <td>Male</td>
                        <td>25</td>
                        <td>12345 12345</td>
                        <td>22 April 2021</td>
                        <td><a href="#visitHistory" className="text-decoration-none" data-bs-toggle="modal">Visit History</a></td>
                        </tr>
                        <tr>
                        <td>2.</td>
                        <td>123456789</td>
                        <td>MED1548C</td>
                        <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Rao</a></td>
                        <td>Male</td>
                        <td>35</td>
                        <td>12345 12345</td>
                        <td>23 April 2021</td>
                        <td><a href="#visitHistory" className="text-decoration-none" data-bs-toggle="modal">Visit History</a></td>
                        </tr>
                        <tr>
                        <td>3.</td>
                        <td>123456789</td>
                        <td>MED5264C</td>
                        <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Pentakota</a></td>
                        <td>Others</td>
                        <td>45</td>
                        <td>12345 12345</td>
                        <td>01 April 2021</td>
                        <td><a href="#visitHistory" className="text-decoration-none" data-bs-toggle="modal">Visit History</a></td>
                        </tr>
                    </tbody>
                    </table>

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
                    <h6 className="my-2 fontxs"> *IMR No = "Internal Medical Record Number"</h6>
                </div>
                {/*flexbox-ends-here*/}
                </div>
                {/*myPhoneCardCnt-ends-here*/}


                <div className="overflow-auto p-md-3 mb-4">
                <div className="w-100 p-3 mt-3 mpGrayBox">
                    <div className="mpTitle me-3 mb-3 mb-sm-0">
                    <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Patients List (Developer Notes for RP Login )
                    </div>
                    {/*doaNText-ends-here*/}
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 overflow-auto mt-3">
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
                      <span>Search:</span>
                      <span><input type="text" className="form-control"></input></span>
                    </div>
                  </div>
                    <table className="w-100" id="table_id">
                    <thead>
                        <tr>
                        <th>S.No.</th>
                        <th>UID</th>
                        <th>IMR No</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Last Visit</th>
                        <th>Visit History</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1.</td>
                        <td>123456789</td>
                        <td>MED1254C</td>
                        <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Kumar</a></td>
                        <td>Male</td>
                        <td>25</td>
                        <td>12345 12345</td>
                        <td>22 April 2021</td>
                        <td><a href="#visitHistory1" className="text-decoration-none" data-bs-toggle="modal">Visit History</a></td>
                        </tr>
                        <tr>
                        <td>2.</td>
                        <td>123456789</td>
                        <td>MED1548C</td>
                        <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Rao</a></td>
                        <td>Male</td>
                        <td>35</td>
                        <td>12345 12345</td>
                        <td>23 April 2021</td>
                        <td><a href="#visitHistory1" className="text-decoration-none" data-bs-toggle="modal">Visit History</a></td>
                        </tr>
                        <tr>
                        <td>3.</td>
                        <td>123456789</td>
                        <td>MED5264C</td>
                        <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Pentakota</a></td>
                        <td>Others</td>
                        <td>45</td>
                        <td>12345 12345</td>
                        <td>01 April 2021</td>
                        <td><a href="#visitHistory1" className="text-decoration-none" data-bs-toggle="modal">Visit History</a></td>
                        </tr>
                    </tbody>
                    </table>

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
                    <h6 className="my-2 fontxs"> *IMR No = "Internal Medical Record Number"</h6>
                </div>
                {/*flexbox-ends-here*/}
                </div>


                <div>
  {/*modals-starts-here*/}
  {/*modal-patientProfile-starts-here*/}
  <div className="modal fade" id="patientProfile" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={Person} alt="person" className="me-2" />Patient Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">UID</div>
            <div className="f10m w-50">123456789</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">IMR No</div>
            <div className="f10m w-50">MED13547C</div>
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
            <div className="f10m w-50">24</div>
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
            <div className="f10m w-50" />
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Locality</div>
            <div className="f10m w-50">Begumpet</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Last Visit</div>
            <div className="f10m w-50">22 April 2021</div>
          </div>
          {/*flexbox-ends-here*/}
          <button type="button" className="btn d-block ms-auto mt-4 doacBtn" data-bs-dismiss="modal">close</button>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-patientProfile-ends-here*/}
  {/*modal-visitHistory-starts-here*/}
  <div className="modal fade" id="visitHistory1" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={VisitHistory} alt="history" className="me-2" />Visit History</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center p-2 mpGrayBox">
            <div className="f10m w-50">Total Visits: 3</div>
            <div className="w-50"><a href className="f10mBlue text-decoration-none">Select Visit Date (developer dropdown)</a></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Consult Date/Time</div>
            <div className="f10m w-50">Apr 4, 2021</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Consult Type:</div>
            <div className="f10m w-50">In-Person/Video/Audio/RP-Video</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">New/Follow-Up:</div>
            <div className="f10m w-50">New</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">With Dr. Name:</div>
            <div className="f10m w-50">Dr. Srikanth</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Dr.Speciality:</div>
            <div className="f10m w-50">ENT</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Dr.Place:</div>
            <div className="f10m w-50">Hyderabad</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Place of Appointment:</div>
            <div className="f10m w-50">Krupa Clinic/ Balaji Hospital</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Diagnosis:</div>
            <div className="f10m w-50">Urine Infection</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Given Medication:</div>
            <div className="f10m w-50">Tab:Cefixime-200 Syp: Citralka</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Investigations Suggested:</div>
            <div className="f10m w-50">CBP, Urine Test, Something, LFT</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Given Advices:</div>
            <div className="f10m w-50">Drink 3 Liters of Water, 2 Coconuts per day</div>
          </div>

          

          
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Prescription:</div>
            <div className="w-50"><img src={PdfIcon} alt="pdf" data-bs-toggle="modal" data-bs-target="#NewPopup" /></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Test Reports:</div>
            <div className="w-50 d-flex flex-wrap align-items-center"><img src={PdfIcon} alt="pdf" data-bs-toggle="modal" data-bs-target="#BillPopup" className="me-2" /></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 mt-4 text-end">
            <button type="button" className="btn btn-sm pnBtn me-2"><i className="bi bi-chevron-left" /></button>
            <button type="button" className="btn btn-sm pnBtn"><i className="bi bi-chevron-right" /></button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>


  <div className="modal fade" id="visitHistory" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={VisitHistory} alt="history" className="me-2" />Visit History</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center p-2 mpGrayBox">
            <div className="f10m w-50">Total Visits: 3</div>
            <div className="w-50"><a href className="f10mBlue text-decoration-none">Select Visit Date(Developer dropdown)</a></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Consult Date/Time</div>
            <div className="f10m w-50">Apr 4, 2021</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Consult Type:</div>
            <div className="f10m w-50">In-Person/Video/Audio/RP-Video</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">New/Follow-Up:</div>
            <div className="f10m w-50">New</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Place of Appointment:</div>
            <div className="f10m w-50">Krupa Clinic/ Balaji Hospital</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Diagnosis:</div>
            <div className="f10m w-50">Urine Infection</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Given Medication:</div>
            <div className="f10m w-50">Tab:Cefixime-200 Syp: Citralka</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Investigations Suggested:</div>
            <div className="f10m w-50">CBP, Urine Test, Something, LFT</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Given Advices:</div>
            <div className="f10m w-50">Drink 3 Liters of Water, 2 Coconuts per day</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Dr. Notes:</div>
            <div className="f10m w-50">lorem ipsum sur neimn sedi ska</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Prescription:</div>
            <div className="w-50"><img src={PdfIcon} alt="pdf" data-bs-toggle="modal"  data-bs-target="#NewPopup" /></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Test Reports:</div>
            <div className="w-50 d-flex flex-wrap align-items-center"><img src={PdfIcon} alt="pdf" data-bs-toggle="modal"  data-bs-target="#BillPopup" className="me-2" /></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 mt-4 text-end">
            <button type="button" className="btn btn-sm pnBtn me-2"><i className="bi bi-chevron-left" /></button>
            <button type="button" className="btn btn-sm pnBtn"><i className="bi bi-chevron-right" /></button>
          </div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>


  {/*modal-view-starts-here*/}
<div className="modal fade" id="NewPopup" tabIndex={-1} aria-hidden="true">
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

{/*modal-view-starts-here*/}
<div className="modal fade" id="BillPopup" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Test Reports</h5>
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
  {/*modal-visitHistory-ends-here*/}
</div>

                {/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
