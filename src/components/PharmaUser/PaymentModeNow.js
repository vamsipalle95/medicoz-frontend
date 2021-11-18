import React from "react";
import LocationSmGreen from "../../images/location-sm-green.png";
import FilterOrange from "../../images/flite-orange.png";
import Percentage from "../../images/percentage.png";
import TagOrange from "../../images/tag-orange.png";
import StarOrange from "../../images/star-orange.png";
import Clinic from "../../images/clinic.jpg";
import MyProfile from "../../images/my-profile.png";
import LocsmGreen from "../../images/location-sm-green.png";
import LocGreen from "../../images/location-green.png";
import Alarm from "../../images/alarm.png";
import CertificateBadge from "../../images/certificate-badge.png";
import HospitalCertificate from "../../images/hospital-certificate.png";
import Map from "../../images/map.png";
import { useHistory } from "react-router-dom";
import BackBtn from "../../images/back-button-new.png";
import StarOutline from "../../images/star-outline.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Debit from "../../images/debit-card.png";
import Credit from "../../images/credit-card.png";
import Upi from "../../images/upi.png";
import NetBank from "../../images/net-banking.png";

function LabUserSetLocation() {
  const history = useHistory();
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-12 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            {/*light-green-box-ends-here*/}
            <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
              <div className="w-100 d-flex flex-wrap align-items-start mt-4">
                <div className="draCard1 p-3">
                  <div className="w-100 doacTitle d-flex align-items-center pb-2">
                    <h3 className="mb-0">Select Payment Mode</h3>
                  </div>
                  {/*doacTitle-ends-here*/}
                  <Link to="/MsgSuccess">
                    <button type="button" className="btn spmBtn w-100 mt-4">
                      <img
                        src={Debit}
                        className="me-3"
                        width="24px"
                        height="24px"
                      />
                      Debit card
                    </button>{" "}
                  </Link>
                  <button type="button" className="btn spmBtn w-100 mt-4">
                    <img
                      src={Credit}
                      className="me-3"
                      width="24px"
                      height="24px"
                    />
                    Credit card
                  </button>
                  <button type="button" className="btn spmBtn w-100 mt-4">
                    <img
                      src={Upi}
                      className="me-3"
                      width="24px"
                      height="24px"
                    />
                    UPI
                  </button>
                  <button type="button" className="btn spmBtn w-100 mt-4">
                    <img
                      src={NetBank}
                      className="me-3"
                      width="24px"
                      height="24px"
                    />
                    Net banking
                  </button>
                </div>
                {/*card-ends-here*/}
              </div>
              {/*tabs-ends-here*/}
            </div>
            {/*tabs-container-ends-here*/}
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-ends-here*/}
    </div>
  );
}

export default LabUserSetLocation;
