import React from "react";
import Gps from "../../images/gps.png";

function PharmaSelectNearByLocation() {
  return (
    <div>
      <div className="container mt-4">
        <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
          <div className="w-100 p-3 mpGrayBox">
            <div className="mpTitle">Select Pharmacy Location</div>
            {/*doaNText-ends-here*/}
          </div>
          {/*graybox-ends-here*/}
          <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
            <nav>
              <div
                className="nav nav-tabs border-0"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#snp"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Show nearby Pharmacy's
                </button>
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#spbl"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Search Pharmacy's By Location
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="snp"
                role="tabpanel"
              >
                <div className="input-group mt-4" style={{ maxWidth: 380 }}>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Set your current location"
                  />
                  <span className="input-group-text">
                    <img src={Gps} alt="gps" />
                  </span>
                </div>
              </div>
              {/*tabpane-1-ends-here*/}
              <div className="tab-pane fade" id="spbl" role="tabpanel">
                <div className="form-check form-check-inline mt-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="options"
                    id="option1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="option1">
                    By Name/ID
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="options"
                    id="option2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    By City/Town/Dist
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="options"
                    id="option3"
                  />
                  <label className="form-check-label" htmlFor="option3">
                    By Pincode
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="options"
                    id="option4"
                  />
                  <label className="form-check-label" htmlFor="option4">
                    By Mandal/Village
                  </label>
                </div>
                <div className="p-3 mpGrayBox mt-4" style={{ maxWidth: 460 }}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control me-3"
                      placeholder="Search Pharmacy By Name/ID"
                    />
                    <button className="btn doaOrangeBtn" type="button">
                      Ok
                    </button>
                  </div>
                </div>
                {/*graybox-ends-here*/}
              </div>
              {/*tabpane-2-ends-here*/}
            </div>
            {/*tabs-ends-here*/}
          </div>
          {/*tabs-container-ends-here*/}
        </div>
        {/*myPhoneCardCnt-ends-here*/}
      </div>
      {/*container-ends-here*/}
    </div>
  );
}

export default PharmaSelectNearByLocation;
