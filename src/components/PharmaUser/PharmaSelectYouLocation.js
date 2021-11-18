import React from "react";
import Search from "../../images/search.png";
import Like from "../../images/like.png";
import Clinic from "../../images/clinic.jpg";
import LocationGreenSm from "../../images/location-sm-green.png";
import Tag from "../../images/tag.png";
import Percentage from "../../images/percentage.png";
import Star from "../../images/star.png";
import { useHistory } from "react-router-dom";
import Back from "../../images/back-button-new.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PharmaSelectYouLocation() {
  const history = useHistory();
  return (
    <div>
      <div className="container mt-4">
        <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
          <div className="w-100 p-3 mpGrayBox">
            <div className="mpTitle">
              <img src={Back} alt="back" onClick={() => history.goBack()} />
              Buy Medicines
            </div>
            {/*doaNText-ends-here*/}
          </div>
          {/*graybox-ends-here*/}
          <div className="d-flex flex-wrap align-items-center mt-4">
            <div className="input-group searchInput m-2">
              <span className="input-group-text">
                <img src={Search} alt="search" />
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search Pharmacy By Name/ID"
              />
            </div>
            {/*searchbar-ends-here*/}
            <div className="searchBtn m-2">
              <button type="button" className="btn">
                Search
              </button>
            </div>
            {/*search-button-ends-here*/}
          </div>
          {/*flexbox-ends-here*/}
          <div className="d-flex flex-wrap align-items-center iconBtn mt-3">
            <div className="f16sb mt-2 mb-2 ms-2 me-auto">Select Pharmacy</div>
            <button type="button" className="btn m-2">
              Show Nearby
            </button>
            <button type="button" className="btn m-2">
              By City/Town/Dist
            </button>
            <button type="button" className="btn m-2">
              By Pincode
            </button>
            <button type="button" className="btn m-2">
              By Mandal/Village
            </button>
          </div>
          {/*flexbox-ends-here*/}
          <div className="d-flex flex-wrap justify-content-center justify-content-sm-start align-items-flex-start mt-3">
            <div className="drOnlineCard m-2 p-3">
              <div className="text-end w-100 drLike">
                <a href="#">
                  <img src={Like} alt="like" />
                </a>
              </div>
              <Link to="/NewUserOtp">
                <img src={Clinic} alt="clinic" className="w-100 mt-2" />
              </Link>
              <a
                href="#"
                className="w-100 d-block text-decoration-none f12sbBlue mt-2"
              >
                Balaji Medicals
              </a>
              <div className="w-100 mt-2 f10m">
                <img src={LocationGreenSm} alt="sm" className="me-2" />
                Begumpet, Hyderabad
              </div>
              <a
                href="#"
                className="w-100 d-block text-decoration-none f12sbOrange mt-2"
              >
                <img src={LocationGreenSm} className="me-2" />
                Home Delivery Available
              </a>
              <div className="w-100 mt-2 f10m">
                <img src={Tag} alt="tag" className="me-2" />
                Discount Upto 20%
              </div>
              <div className="w-100 mt-2 f10m">
                <img src={Percentage} alt="percent" className="me-2" />
                Offers (2)
              </div>
              <div className="w-100 mt-2 f10m">
                <img src={Star} alt="start" className="me-2" />
                3/5 Ratings
              </div>
              <div className="w-100 mt-4 f10m">ID: 123456 123456</div>
            </div>
            {/*drOnlineCard-ends-here*/}
            <div className="drOnlineCard m-2 p-3">
              <div className="text-end w-100 drLike">
                <a href="#">
                  <img src={Like} alt="like" />
                </a>
              </div>
              <Link to="/NewUserOtp">
                <img src={Clinic} alt="clinic" className="w-100 mt-2" />
              </Link>
              <a
                href="#"
                className="w-100 d-block text-decoration-none f12sbBlue mt-2"
              >
                More Chemist &amp; Druggist
              </a>
              <div className="w-100 mt-2 f10m">
                <img src={LocationGreenSm} className="me-2" />
                Begumpet, Hyderabad
              </div>
              <a
                href="#"
                className="w-100 d-block text-decoration-none f12sbOrange mt-2"
              >
                <img src={LocationGreenSm} className="me-2" />
                Home Delivery Available
              </a>
              <div className="w-100 mt-2 f10m">
                <img src={Tag} alt="tag" className="me-2" />
                Discount Upto 20%
              </div>
              <div className="w-100 mt-2 f10m">
                <img src={Percentage} alt="percent" className="me-2" />
                Offers (2)
              </div>
              <div className="w-100 mt-2 f10m">
                <img src={Star} alt="start" className="me-2" />
                3/5 Ratings
              </div>
              <div className="w-100 mt-4 f10m">ID: 123456 123456</div>
            </div>
            {/*drOnlineCard-ends-here*/}
            <div className="drOnlineCard m-2 p-3">
              <div className="text-end w-100 drLike">
                <a href="#">
                  <img src={Like} alt="like" />
                </a>
              </div>
              <Link to="/NewUserOtp">
                <img src={Clinic} alt="clinic" className="w-100 mt-2" />
              </Link>
              <a
                href="#"
                className="w-100 d-block text-decoration-none f12sbBlue mt-2"
              >
                Med Plus
              </a>
              <div className="w-100 mt-2 f10m">
                <img src="images/location-sm-green.svg" className="me-2" />
                Begumpet, Hyderabad
              </div>
              <a
                href="#"
                className="w-100 d-block text-decoration-none f12sbOrange mt-2"
              >
                <img src={LocationGreenSm} className="me-2" />
                Home Delivery Available
              </a>
              <div className="w-100 mt-2 f10m">
                <img src={Tag} alt="tag" className="me-2" />
                Discount Upto 20%
              </div>
              <div className="w-100 mt-2 f10m">
                <img src={Percentage} alt="percent" className="me-2" />
                Offers (2)
              </div>
              <div className="w-100 mt-2 f10m">
                <img src={Star} alt="start" className="me-2" />
                3/5 Ratings
              </div>
              <div className="w-100 mt-4 f10m">ID: 123456 123456</div>
            </div>
            {/*drOnlineCard-ends-here*/}
          </div>
          {/*flexbox-ends-here*/}
        </div>
        {/*myPhoneCardCnt-ends-here*/}
      </div>
      {/*container-ends-here*/}
    </div>
  );
}

export default PharmaSelectYouLocation;
