import React, { Component } from 'react';
import VisitHistory from '../../images/visit-history.png';
import PdfIcon from '../../images/pdf-icon.png';
import Person from '../../images/person.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TexDocument from '../../images/TextDocument.jpg';
import Download from '../../images/download-green1.png';
import Chat from '../../images/chat.png';

export default function PatientFollowUp() {
 const history = useHistory();
        return (
            <div>
               <div className="overflow-auto p-md-3 mb-4">
                    <div className="w-100 p-3 mt-3 mpGrayBox">
                        <div className="mpTitle me-3 mb-3 mb-sm-0">
                        <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Patient Follow-up List
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
                      <div>Search:</div>
                      <div><input type="text" className="form-control"></input></div>
                    </div>
                  </div>
                        <table id="table_id">
                        <thead>
                            <tr>
                            <th>S.No.</th>
                            <th>Follow-Up date</th>
                            <th>Full Name</th>
                            <th>UID</th>
                            <th>IMR No</th>
                            <th>Gender / Age</th>
                            <th>Mobile</th>
                            <th>Last Consultation</th>
                            <th>View TextQeuery</th>
                            <th>Ask Follow-Up Text Query</th>
                            <th>Send Reports</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1.</td>
                            <td>123456789</td>
                            <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Kumar</a></td>
                            <td>123456789</td>
                            <td>MED1254C</td>
                            <td>Male 25</td>
                            <td>12345 12345</td>
                            <td><a href="#dtr" className="text-decoration-none" data-bs-toggle="modal">Details &amp; Test Reports</a></td>
                            <td><a href="#myFollow" className="text-decoration-none" data-bs-toggle="modal">View & Reply</a></td>
                            <td><img src={Chat} alt="chatIcon" data-bs-toggle="modal" data-bs-target="#myChat"/></td>
                            <td>
                            <div class="image-upload">
                                <label for="file-input">
                                  <img src={Download} alt="download" />
                                </label>

                                <input id="file-input" type="file" />
                              </div>
                            </td>
                            </tr>
                            <tr>
                            <td>2.</td>
                            <td>123456789</td>
                            <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Rao</a></td>
                            <td>123456789</td>
                            <td>MED1254C</td>
                            <td>Male 35</td>
                            <td>12345 12345</td>
                            <td><a href="#dtr" className="text-decoration-none" data-bs-toggle="modal">Details &amp; Test Reports</a></td>
                            <td><a href="#myFollow" className="text-decoration-none" data-bs-toggle="modal">View & Reply</a></td>
                            <td><img src={Chat} alt="chatIcon" data-bs-toggle="modal" data-bs-target="#myChat"/></td>
                            <td>
                            <div class="image-upload">
                                <label for="file-input">
                                  <img src={Download} alt="download" />
                                </label>

                                <input id="file-input" type="file" />
                              </div>
                            </td>
                            </tr>
                            <tr>
                            <td>3.</td>
                            <td>123456789</td>
                            <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Pentakota</a></td>
                            <td>123456789</td>
                            <td>MED1254C</td>
                            <td>Others 45</td>
                            <td>12345 12345</td>
                            <td><a href="#dtr" className="text-decoration-none" data-bs-toggle="modal">Details &amp; Test Reports</a></td>
                            <td><a href="#myFollow" className="text-decoration-none" data-bs-toggle="modal">View & Reply</a></td>
                            <td><img src={Chat} alt="chatIcon" data-bs-toggle="modal" data-bs-target="#myChat"/></td>
                            <td>
                            <div class="image-upload">
                                <label for="file-input">
                                  <img src={Download} alt="download" />
                                </label>

                                <input id="file-input" type="file" />
                              </div>
                            </td>
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
          <h5 className="modal-title"><img src={Person} alt="persom" className="me-2" />Patient Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">UID</div>
            <div className="f10m w-50">123456789</div>
          </div>


          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">IMR No</div>
            <div className="f10m w-50">MED1234C</div>
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
  {/*modal-dtr-starts-here*/}
  <div className="modal fade" id="dtr" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Details &amp; Test Reports (Dev Notes..popup after issue Prescription)</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
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
            <div className="f10mTeal w-50">With Dr. name:</div>
            <div className="f10m w-50">Dr. Srikanth</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Dr. Speciality</div>
            <div className="f10m w-50">ENT</div>
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
            <div className="f10m w-50">CBP, Urine Test,Something, LFT</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">View Given Advices:</div>
            <div className="f10m w-50">Drink 3 Liters of Water,2 Coconuts per day</div>
          </div>

          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">Doctor Notes:</div>
            <div className="f10m w-50">lorem ipusm sit der nit hoc ncio leirm</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="w-50"><a href className="f10mOrange text-decoration-none">View Prescription:</a></div>
            <div className="w-50"><img src={PdfIcon} alt="pdf" data-bs-toggle="modal" data-bs-target="#NewPopup" /></div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="w-50"><a href className="f10mOrange text-decoration-none">View Test Reports:</a></div>
            <div className="w-50 d-flex flex-wrap align-items-center"><img src={PdfIcon} alt="pdf" data-bs-toggle="modal" data-bs-target="#BillPopup" /></div>
          </div>
          <div className="mx-auto mt-4 d-flex flex-wrap justify-content-center w-100">
           <Link to="/DrConsultationRoom"><button type="submit" className="btn fmaBtn">Issue More Prescription</button></Link>
           </div>
"
          {/*flexbox-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-dtr-ends-here*/}
  {/*modals-ends-here*/}

  {/*modal-height-starts-here*/}
<div className="modal fade" id="myFollow" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">View Text Query</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
          <div className="doaText">
            <h4 className="mb-0">Patient Name</h4>
          </div>

          <h4 className="query-cls">Query</h4>
          <hr/>
          <p className="fot">2:00, July 28, 2021</p>
          <div className="doaText">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aenean euismod bibendum laoreet.</h4>

            <div className="doaText ashbox">
            <p className="fot">10:30, July 29, 2021</p>
              <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean euismod bibendum laoreet
              </h4>

              
            </div>
            </div>
            <h4 className="query-cls mt-2">Reply</h4>

            <textarea className="txtara">
              Enter reply here.....
            </textarea>
          
          
        
      </div>
      {/*modal-body-ends-here*/}
      <div className="modal-footer border-0">
        <button type="submit" className="btn fmaBtn">Send</button>
      </div>
      {/*modal-footer-ends-here*/}
    </div>
  </div>
</div>
{/*modal-height-ends-here*/}

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


{/*modal-height-starts-here*/}
<div className="modal fade" id="myChat" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title" id="filterModalLabel">Follow-up Query By Remote Partner(RP)</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
          <div className="doaText">
            <h3 className="mb-0 colorDr">Doctor name will go here</h3>
            <h4 className="small">MBBS, MS, MNAMS , FALS, FMAS</h4>
          </div>

          <h4 className="query-cls">Query</h4>
          <p class="fot">2:00, July 28, 2021</p>
          <hr/>
          <div className="doaText">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aenean euismod bibendum laoreet.</h4>

            <div className="doaText ashbox">
              <h4>
              <p class="fot mb-2">10:30, July 29, 2021</p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean euismod bibendum laoreet
              </h4>

              
            </div>
            </div>
            <h4 className="query-cls mt-2">Follow Up Query by RP</h4>

            <textarea className="txtara">
              Enter query here.....
            </textarea>
          
          
        
      </div>
      {/*modal-body-ends-here*/}
      <div className="modal-footer border-0">
        <button type="submit" className="btn fmaBtn">Ask</button>
      </div>
      {/*modal-footer-ends-here*/}
    </div>
  </div>
</div>
{/*modal-height-ends-here*/}
{/*modal-view-ends-here*/}
{/*modals-ends-here*/}
</div>

                    {/*myPhoneCardCnt-ends-here*/}
                    
            </div>
        );
    }