import React, { Component } from 'react';
import Heart from '../../images/heart-in-hand.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ShareHealthConcern extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Heart} alt="heat" className="me-2" />
      <h3 className="mb-0">Share your Health Concern</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="doaNText w-100 mt-3">
      Share with Dr. Niraj prior to your consultation
    </div>
    {/*doaNText-ends-here*/}
    <form className="form d-flex flex-wrap align-items-flex-start mt-4">
      <div className="form-check w-50">
        <input className="form-check-input" type="checkbox" defaultValue id="option1" />
        <label className="form-check-label" htmlFor="option1">
          I am Diabetic
        </label>
      </div>
      <div className="form-check w-50">
        <input className="form-check-input" type="checkbox" defaultValue id="option2" />
        <label className="form-check-label" htmlFor="option2">
          I have Hypertension (BP)
        </label>
      </div>
      <div className="form-check w-50 mt-2">
        <input className="form-check-input" type="checkbox" defaultValue id="option3" />
        <label className="form-check-label" htmlFor="option3">
          I have Arthritis
        </label>
      </div>
      <div className="form-check w-50 mt-2">
        <input className="form-check-input" type="checkbox" defaultValue id="option4" />
        <label className="form-check-label" htmlFor="option4">
          I have Asthma
        </label>
      </div>
      <div className="form-check w-50 mt-2">
        <input className="form-check-input" type="checkbox" defaultValue id="option5" />
        <label className="form-check-label" htmlFor="option5">
          Kidney problem
        </label>
      </div>
      <div className="form-check w-50 mt-2">
        <input className="form-check-input" type="checkbox" defaultValue id="option6" />
        <label className="form-check-label" htmlFor="option6">
          Lever problem
        </label>
      </div>
      <div className="doaNText w-100 mt-4">
        Add Vitals
      </div>
      {/*doaNText-ends-here*/}
      <div className="w-100 d-flex align-items-center mt-3">
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
          <input className="form-control shcInput" placeholder="Fasting / After food" type="text" />
        </div>
      </div>
      {/*flex-box-ends-here*/}
      <div className="doaNText w-100 mt-4">
        Brief your Problem
      </div>
      {/*doaNText-ends-here*/}
      <div className="w-100 mt-3">
        <textarea className="form-control shcTextArea" placeholder="Type here" rows={3} defaultValue={""} />
      </div>
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
      <Link to="/Videocall"><button type="submit" className="btn doacBtn px-3 mt-5 ms-auto">Next</button></Link>
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
}

export default ShareHealthConcern;