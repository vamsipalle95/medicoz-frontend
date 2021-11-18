import React, { Component } from 'react';
import Logo from '../../images/medicoz-logo.png';
import DrLogin from '../DrLogin/DrLogin';
import {useHistory} from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';
import NewUser from '../../images/new-user.png';


export default function Header() {
    let history = useHistory();
        return (
            <div>
           
            <div className="header_sect">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top sticky-top">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={Logo} width="150px" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hyderabad
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a href="/BookOnlineDr" className="nav-link" aria-current="page">Consult Dr</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">Buy medicines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Lab test</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="" data-bs-toggle="modal" data-bs-target="#Login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="modal" data-bs-target="#SignUp">Sign Up</a>
        </li>
      </ul>
    </div>
    {/*navbar-collapse-ends-here*/}
  </div>
  {/*container-ends-here*/}
</nav>



{/*navbar-ends-here*/}



                      {/*modal-view-starts-here*/}
                <div className="modal fade" id="Login" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                      <div className="modal-header w-100 p-0 header_mod">
                      <div className="greenBg text-center">
                              <h1 className="mb-0">Welcome to <img src={Logo} alt="logo"/></h1>
                        </div>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                      </div>
                      <div className="modal-body">
                            <div className="body_cls mx-auto text-center font-weight-bold">
                              <h6>Login to access your Medicoz Account</h6>
                              <h6 className="pat_cls">Patient Login</h6>
                            </div>

                            <form>
                                                    <div className="d-flex align-items-center justify-align-between">
                                <input className="form-control w-75" type="text" placeholder="Enter Mobile No" />
                                <button type="button" className="btn btn-sm ms-2 w-25 doaOrangeBtn">Send OTP</button>
                              </div>
                              <input className="form-control w-100 mt-2" type="text" placeholder="OTP" />
                            
                              <div className="doaConfirm w-100 d-flex justify-content-center align-items-center mt-4">
                              
                                <Link to="/"><button type="submit" className="btn doacBtn px-4">Login</button></Link>
                              </div>


                            </form>
                      </div>

                    </div>
                  </div>
                  </div>
{/*modal-view-ends-Login*/}


  {/*modal-view-starts-signup*/}

                  <div className="modal fade" id="SignUp" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-0">
                      <div className="modal-header w-100 p-0 header_mod">
                      <div className="greenBg text-center">
                              <h1 className="mb-0">Welcome to <img src={Logo} alt="logo"/></h1>
                        </div>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                      </div>
                      <div className="modal-body">
                      <div className="container">
                              <div className="ms-auto me-auto p-3">
                                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                                  <img src={NewUser} alt="newuser" className="me-2" />
                                  <h3 className="mb-0">Create Patient account</h3>
                                </div>
                                {/*doacTitle-ends-here*/}
                                <form className="w-100 mt-4">
                                  <input className="form-control w-100" type="text" placeholder="*First Name" />
                                  <input className="form-control w-100 mt-4" type="text" placeholder="*Last Name" />
                                  <select className="form-select w-100 mt-4">
                                    <option selected>Select Gender</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                    <option value={3}>Others</option>
                                  </select>
                                  <input className="form-control w-100 mt-4" type="text" placeholder="*Age" />

                                  
                                  

                                  <div className="d-flex mt-4 align-items-center justify-align-between">
                                <input className="form-control w-75" type="text" placeholder="Enter Mobile No" />
                                <button type="button" className="btn btn-sm ms-2 w-25 doaOrangeBtn">Send OTP</button>
                              </div>
                              <input className="form-control w-100 mt-4" type="text" placeholder="OTP" />


                                  <div className="form-check w-100 mt-4">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                      I Agree to <a href="/">Terms &amp; Conditions</a>
                                    </label>
                                  </div>
                                  <div className="doaConfirm w-100 d-flex align-items-center justify-content-end mt-4">
                                   
                                    <Link to="/WhoisPatient"><button type="submit" className="btn doacBtn px-4">Register</button></Link>
                                  </div>
                                  {/*doaConfirm-ends-here*/}
                                </form>
                                {/*form-ends-here*/}
                              </div>
                              {/*draCard1-ends-here*/}
                            </div>
                            {/*container-ends-here*/}

                          </div>

                    </div>
                  </div>
                  </div>
                    {/*modal-view-ends-signup*/}     
                            </div>
                      
                            </div>
                        );
                    }
