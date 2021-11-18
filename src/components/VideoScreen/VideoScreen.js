import React, { Component } from 'react';
import Banner from '../../images/pexels-james-wheeler-414612.jpg';
import VideoCircle from '../../images/video-circle.png';
import AudioCircle from '../../images/audio-circle.png';
import PersonCircle from '../../images/person-circle.png';
import CamcorderXs from '../../images/camcorder-xs.png';
import PersonXs from '../../images/person-xs.png';
import Download from '../../images/download-green1.png';
import Heart from '../../images/heart-in-hand.png';
import {useHistory} from 'react-router-dom';

export default function VideoScreen() {
     let history = useHistory();
     
        return (
            <div>
                 <div className="container-fluid">
                                <div className="row">
                                  <div className="col-12 col-lg-6 p-3">
                                    <div className="w-100">
                                      <img src={Banner} alt="banner" className="img-fluid" />
                                    </div>
                                    <div className="w-100 text-end" style={{marginTop: '-10%'}}>
                                      <img src={Banner} alt="banner" width="25%" className="me-5" />
                                    </div>
                                    <div className="w-100 d-flex flex-wrap align-items-center">
                                      <div className="doaNText m-2">
                                        12:25
                                      </div>
                                      <div className="m-2">
                                        <a href>
                                          <img src={VideoCircle} alt="Videocirlce" />
                                        </a>
                                      </div>
                                      <div className="m-2">
                                        <a href>
                                          <img src={AudioCircle} alt="audioCircle" />
                                        </a>
                                      </div>
                                      <div className="m-2">
                                        <a href>
                                          <img src={PersonCircle} alt="Person" />
                                        </a>
                                      </div>
                                    </div>
                                    {/*flexbox-ends-here*/}
                                  
                                    {/*flexbox-ends-here*/}
                                  </div>

                                  <div className="w-100 d-flex flex-wrap align-items-center justify-content-between mt-2">
                                    <div className="callButtons">
                                        <button type="button" className="btn redBtn me-3 mb-2">End call &amp; Exit</button>
                                        <button type="button" className="btn greenBtn mb-2">Connect</button>
                                    </div>

                                    <div className="documentsSec">
                                      <div className="files d-flex flex-column ">
                                        <label className="small1">eg: Prescriptions, Test Reports</label>
                                      
                                      </div>

                                      <div className="image-upload">
                                        <label htmlFor="file-input">
                                        <button type="file" className="btn doaOrangeBtn me-3 mb-2">Upload Health Documents</button>
                                        <input id="file-input" type="file" />
                                        </label>
                                        
                                      </div>

                                  

                                      
                                      <button type="button" className="btn doaOrangeBtn mb-2" data-bs-toggle="modal" data-bs-target="#shareHealthConcerns"> Share Your Health Concerns with Doctor</button>
                                    </div>
                                    </div>

                                  </div>
                                  </div> 



                                      <div className="modal fade" id="shareHealthConcerns" tabIndex={-1} aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                              <div className="modal-content border-0">
                                                <div className="modal-header">
                                                  <h5 className="modal-title" id="filterModalLabel">
                                                  <div className="w-100 doacTitle d-flex align-items-center pb-2">
                                                      <img src={Heart} alt="heat" className="me-2" />
                                                      <h3 className="mb-0">Share your Health Concern</h3>
                                                    </div>
                                                  </h5>
                                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">

                                                <div className="container px-2">
                                                <div className=" ms-auto me-auto p-3">
                                
                                {/*doacTitle-ends-here*/}
                                <div className="doaNText w-100 mt-3">
                                  Share with Dr. Niraj prior to your consultation
                                </div>
                                {/*doaNText-ends-here*/}

                                
                                <form className="form d-flex flex-wrap align-items-flex-start mt-4">

                                <div className="form-check pl-0 mb-3 w-100">
                                    <div className="doaNText w-100 ">
                                        Brief your Problem
                                      </div>
                                  {/*doaNText-ends-here*/}
                                  <div className="w-100 mt-3">
                                    <textarea className="form-control shcTextArea" placeholder="Type here" rows={10} cols={5} defaultValue={""} />
                                  </div>
                                  </div>

                                  <div className="doaNText w-100 my-4">
                                    Add Vitals
                                  </div>
                                  {/*doaNText-ends-here*/}
                                  <div className="w-100 d-flex align-items-center my-3">
                                    <div className="w-auto me-3">
                                      <label className="form-label shcLabel">Height (fts)</label>
                                      <input className="form-control shcInput" type="text" />
                                    </div>
                                    <div className="w-auto">
                                      <label className="form-label shcLabel">Weight (Kgs)</label>
                                      <input className="form-control shcInput" type="text" />
                                    </div>
                                  </div>

                                
                                
                                
                                
                              
                                
                                  {/*flex-box-ends-here*/}
                                  <div className="w-100 d-flex align-items-center mt-3">
                                    <div className="w-auto me-3">
                                      <label className="form-label shcLabel">Temperature (°F)</label>
                                      <input className="form-control shcInput" type="text" />
                                    </div>
                                    <div className="w-auto">
                                      <label className="form-label shcLabel">Blood Pressure</label>
                                      <input className="form-control shcInput" placeholder="Fasting / After food" type="text" />
                                    </div>
                                  </div>
                                  {/*flex-box-ends-here*/}
                                  <div className="w-100 d-flex align-items-center mt-3">
                                    <div className="w-100">
                                      <label className="form-label shcLabel">Sugar Levels</label>
                                    
                                      <input className="form-control shcInput" placeholder="Fasting/After food" type="text" />
                                      
                                    
                                    </div>
                                  </div>
                                  {/*flex-box-ends-here*/}
                                  
                                  <div className="doaNText w-100 mt-3">
                                    Upload Health Documents
                                  </div>
                                  {/*doaNText-ends-here*/}
                                  <div className="w-100 d-flex align-items-center mt-3">
                                    <div className="w-100 me-3">
                                      <label className="form-label shcLabel">Photo.png</label>
                                      <input type="file" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                      <label className="form-label shcLabel">Document.pdf</label>
                                      <input type="file" className="form-control" />
                                    </div>
                                  </div>
                                  {/*flex-box-ends-here*/}


                                
                                    

                                      <div data-bs-toggle="modal" data-bs-target="#AddpatientProfile" className="doaNText w-100 mt-3">
                                      <p className="doaNText1">Add Health Profile</p>
                                      </div>
                                  
                                    
                                  
                                  
                                  <button type="submit" className="btn doacBtn px-3 mt-1 ms-auto">Next</button>
                                </form>
                                {/*form-ends-here*/}
                              </div>
                              {/*draCard1-ends-here*/}
                            </div>
                            {/*container-ends-here*/}
                            </div>
                            {/*container-ends-here*/}


                      </div>

                    </div>
                  </div>  
                </div> 
            
        );
    }
