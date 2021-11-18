import React, { Component } from "react";
import Cursor from "../../images/cursor.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConfImg from "../../images/conf-image1.png";
import VideoCall from "../../images/video-call.png";

export default function VideoOrConfirmcall() {
  return (
    <div>
      <div className="container px-2 py-5">
        <div className="draCard1 ms-auto me-auto p-3">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <img src={Cursor} alt="cursor" className="me-2" />
            <h3 className="mb-0">Select any one option</h3>
          </div>
          {/*doacTitle-ends-here*/}
          <img src={VideoCall} alt="videocall" className="w-100 mt-3" />
          <Link to="/WhoisPatient2">
            <button
              type="button"
              className="btn doacBtn px-3 d-block mx-auto mt-3"
            >
              Video Call
            </button>
          </Link>

          <div className="text-center w-100 drcHeadBook2 mb-3">
            <h3>(OR)</h3>
          </div>

          <img src={ConfImg} alt="confimg" className="w-100 mt-3" />
          <Link to="/WhoisPatient21">
            {" "}
            <button
              type="button"
              className="btn doacBtn d-block mx-auto px-3 mt-3"
            >
              Conference Video Call
            </button>
          </Link>
        </div>
        {/*draCard1-ends-here*/}
      </div>
      {/*container-ends-here*/}

      {/*container-ends-here*/}
    </div>
  );
}
