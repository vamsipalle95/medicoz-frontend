import React, { Component } from "react";
import UserGreen from "../../images/user-green.png";
import Badge from "../../images/doctoModule/badge.png";
import ShieldOrange from "../../images/doctoModule/shield-orange.png";
import MemberShips from "../../images/doctoModule/memberships.png";
import MemberShipads from "../../images/doctoModule/membership-pad.png";
import Articles from "../../images/doctoModule/articles.png";
import DocOrange from "../../images/doctoModule/document-orange.png";
import HealthFeed from "../../images/doctoModule/health-feed.png";
import PrescOrange from "../../images/doctoModule/prescription-orange.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class myownpages extends Component {
  render() {
    return (
      <div>
        <div className="overflow-auto p-md-3 mb-4">
          <div className="w-100 d-flex flex-wrap align-items-baseline p-3 p-md-0">
            <div className="mb-2">
              <h1 className="mpTitle mb-0 me-3">My Pages</h1>
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={UserGreen} alt="usergreen" className="me-2" />
                  <h3 className="mb-0">About Me</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 mt-3">
                  <p className="mpText mb-0">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                      amet lacusaccumsa et viverra justo commodo. Proin sodales
                      pulvinar sic tempor. Sociis natoque penatibus et magnis
                      dis parturient montesnascetur ridiculus mus. Nam
                      fermentum…
                    </span>
                  </p>
                </div>
                {/*text-ends-here*/}
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddEditAboutme">
                  <button type="button" className="btn doaOrangeBtn px-3 py-2">
                    Add/Edit
                  </button>
                </Link>{" "}
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Badge} alt="badge" className="me-2" />
                  <h3 className="mb-0">Achievements &amp; Awards</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="">
                    <img src={ShieldOrange} alt="ShieldOrange" />
                  </div>
                  <div>
                    <p className="mpText mb-0">
                      <span>Award or achievement goes here</span>
                    </p>
                  </div>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="">
                    <img src={ShieldOrange} alt="ShieldOrange" />
                  </div>
                  <div>
                    <p className="mpText mb-0">
                      <span>Award or achievement goes here</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/EditAchievments">
                  {" "}
                  <button
                    type="button"
                    className="btn doaOrangeBtn px-3 py-2"
                    onclick="location.href='dr-add-edit-achievements.html';"
                  >
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={MemberShips} alt="membership" className="me-2" />
                  <h3 className="mb-0">Memberships</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="me-2">
                    <img src={MemberShipads} alt="membership" />
                  </div>
                  <div>
                    <p className="mpText mb-0">
                      <span>Membership name goes here</span>
                    </p>
                  </div>
                </div>
                <div className="w-100 d-flex flex-wrap align-items-center mt-3">
                  <div className="me-2">
                    <img src={MemberShipads} alt="membership" />
                  </div>
                  <div>
                    <p className="mpText mb-0">
                      <span>Membership name goes here</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/AddEditMembership">
                  <button type="button" className="btn doaOrangeBtn px-3 py-2">
                    Add/Edit
                  </button>
                </Link>
              </div>
              {/*button-ends-here*/}
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={Articles} alt="articles" className="me-2" />
                  <h3 className="mb-0">My Articles</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="text-center mt-4">
                  <img src={DocOrange} alt="orange" />
                </div>
                <div
                  className="walletCircle d-flex flex-wrap align-content-center text-center mx-auto"
                  style={{ marginTop: "-25px" }}
                >
                  <h2 className="mb-0 w-100">5</h2>
                </div>
                {/*circle-ends-here*/}
                <div className="w-100 text-center mt-4">
                  <Link to="/AddEditArticle">
                    {" "}
                    <button
                      type="button"
                      className="btn doaOrangeBtn px-3 py-2"
                    >
                      View
                    </button>
                  </Link>
                </div>
                {/*button-ends-here*/}
              </div>
            </div>
            {/*draCard1-ends-here*/}
            <div className="draCard1 p-3 m-2">
              <div style={{ height: 340 }}>
                <div className="w-100 doacTitle d-flex align-items-center pb-2">
                  <img src={HealthFeed} alt="heathfeed" className="me-2" />
                  <h3 className="mb-0">My Health Feed</h3>
                </div>
                {/*doacTitle-ends-here*/}
                <div className="text-center mt-4">
                  <img src={PrescOrange} alt="orange" />
                </div>
                <div
                  className="walletCircle d-flex flex-wrap align-content-center text-center mx-auto"
                  style={{ marginTop: "-25px" }}
                >
                  <h2 className="mb-0 w-100">2</h2>
                </div>
                {/*circle-ends-here*/}
                <div className="w-100 text-center mt-4">
                  <Link to="/EditHealthFeed">
                    <button
                      type="button"
                      className="btn doaOrangeBtn px-3 py-2"
                    >
                      View
                    </button>
                  </Link>
                </div>
                {/*button-ends-here*/}
              </div>
            </div>
            {/*draCard1-ends-here*/}
          </div>
          {/*flexbox-ends-here*/}
        </div>
      </div>
    );
  }
}

export default myownpages;
