import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';
import Fb from '../../images/fb.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function PatientReferList() {
    const history = useHistory();
        return (
            <div>
                <div>
  <div className="overflow-auto p-md-3 mb-4">
    <div className="w-100 p-3 mt-3 mpGrayBox">
      <div className="mpTitle me-3 mb-3 mb-sm-0">
        <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Refer Patient
      </div>
      {/*doaNText-ends-here*/}
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 overflow-auto mt-3">
      <table id="table_id">
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
            <th>Refer</th>
            <th>Actions</th>
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
            <td><Link to="/PatientRefer" className="text-decoration-none">Refer</Link></td>
            <td>
              <div className="dropdown">
                <button className="btn dropdown-toggle cD" type="button" id="db1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots-vertical text-white" />
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href>1</a></li>
                  <li><a className="dropdown-item" href>2</a></li>
                  <li><a className="dropdown-item" href>3</a></li>
                </ul>
              </div>{/* dropdown-end */}
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>123456789</td>
            <td>MED1254C</td>
            <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Rao</a></td>
            <td>Male</td>
            <td>35</td>
            <td>12345 12345</td>
            <td>23 April 2021</td>
            <td><Link to="/PatientRefer" className="text-decoration-none">Refer</Link></td>
            <td>
              <div className="dropdown">
                <button className="btn dropdown-toggle cD" type="button" id="db1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots-vertical text-white" />
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href>1</a></li>
                  <li><a className="dropdown-item" href>2</a></li>
                  <li><a className="dropdown-item" href>3</a></li>
                </ul>
              </div>{/* dropdown-end */}
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>123456789</td>
            <td>MED1254C</td>
            <td><a href="#patientProfile" className="text-decoration-none" data-bs-toggle="modal">Vinod Pentakota</a></td>
            <td>Others</td>
            <td>45</td>
            <td>12345 12345</td>
            <td>01 April 2021</td>
            <td><Link to="/PatientRefer" className="text-decoration-none">Refer</Link></td>
            <td>
              <div className="dropdown">
                <button className="btn dropdown-toggle cD" type="button" id="db1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots-vertical text-white" />
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href>1</a></li>
                  <li><a className="dropdown-item" href>2</a></li>
                  <li><a className="dropdown-item" href>3</a></li>
                </ul>
              </div>{/* dropdown-end */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/*flexbox-ends-here*/}
  </div>
  {/*myPhoneCardCnt-ends-here*/}
  {/*container-ends-here*/}
  {/*footer-starts-here*/}
  
  {/*modals-starts-here*/}
  {/*modal-patientProfile-starts-here*/}
  <div className="modal fade" id="patientProfile" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Patient Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex align-items-center py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
            <div className="f10mTeal w-50">UID</div>
            <div className="f10m w-50">123456789</div>
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
  {/*modals-ends-here*/}
</div>

            </div>
        );
    }
