import React, { Component } from "react";
import Bell from "../../images/bell.png";
import ChevronLeft from "../../images/chevron-left-sm.png";
import ChevronRight from "../../images/chevron-right-sm.png";
import Dummy from "../../images/dummy.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class doctornotifications extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-start overflow-auto p-md-3 mb-4">
          <div className="draCard4 p-3 m-2">
            <div className="w-100 doacTitle bordern d-flex align-items-center pb-2">
              <h3 className="mb-0">
                <img src={Bell} alt="bell" className="me-2" />
                My Notifications
              </h3>
            </div>
            {/*doacTitle-ends-here*/}

            <div
              className="btn-group rbGroup mb-3 mb-sm-0"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn rBtnOrange" htmlFor="btnradio1">
                Medicoz (25)
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
              />
              <label className="btn rBtnOrange" htmlFor="btnradio3">
                Medical Company's (22)
              </label>
              {/* <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
      <label className="btn rBtnOrange" htmlFor="btnradio4">Patient Text Queries</label> */}
            </div>
            <div
              className="w-100 d-flex justify-content-between pt-3 pb-2"
              style={{ borderBottom: "1px solid #D4D5D5 !important" }}
            >
              <div className="doaNText">
                <Link to="/MyNotificationView" className="ashxt">
                  {" "}
                  Fallow-up reply
                </Link>
              </div>
              <div className="doaNText">Today</div>
            </div>
            {/*flexbox-ends-here*/}
            <div
              className="w-100 d-flex justify-content-between pt-3 pb-2"
              style={{ borderBottom: "1px solid #D4D5D5 !important" }}
            >
              <div className="doaNText">
                <Link to="/MyNotificationView" className="ashxt">
                  Subject title goes here
                </Link>
              </div>
              <div className="doaNText">Yesterday</div>
            </div>
            {/*flexbox-ends-here*/}
            <div
              className="w-100 d-flex justify-content-between pt-3 pb-2"
              style={{ borderBottom: "1px solid #D4D5D5 !important" }}
            >
              <div className="doaNText">
                <Link to="/MyNotificationView" className="ashxt">
                  Subject title goes here
                </Link>
              </div>
              <div className="doaNText">30/03/2021</div>
            </div>
            {/*flexbox-ends-here*/}
            <div
              className="w-100 d-flex justify-content-between pt-3 pb-2"
              style={{ borderBottom: "1px solid #D4D5D5 !important" }}
            >
              <div className="doaNText">
                <Link to="/MyNotificationView" className="ashxt">
                  {" "}
                  Subject title goes here
                </Link>
              </div>
              <div className="doaNText">29/03/2021</div>
            </div>
            {/*flexbox-ends-here*/}
            <div
              className="w-100 d-flex justify-content-between pt-3 pb-2"
              style={{ borderBottom: "1px solid #D4D5D5 !important" }}
            >
              <div className="doaNText">
                <Link to="/MyNotificationView" className="ashxt">
                  Subject title goes here
                </Link>
              </div>
              <div className="doaNText">28/03/2021</div>
            </div>
            {/*flexbox-ends-here*/}
            <div
              className="w-100 d-flex justify-content-between pt-3 pb-2"
              style={{ borderBottom: "1px solid #D4D5D5 !important" }}
            >
              <div className="doaNText">
                <Link to="/MyNotificationView" className="ashxt">
                  Subject title goes here
                </Link>
              </div>
              <div className="doaNText">27/03/2021</div>
            </div>
            {/*flexbox-ends-here*/}
            <div className="w-100 d-flex pt-3 pb-2">
              <div className="mpText">1-10 of 100</div>
              <div className="ms-auto me-3">
                <a href="#">
                  <img src={ChevronLeft} alt="chevronleft" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={ChevronRight} alt="chevronright" />
                </a>
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*myPhoneCardCnt-ends-here*/}
        {/*container-ends-here*/}
      </div>
    );
  }
}

export default doctornotifications;
