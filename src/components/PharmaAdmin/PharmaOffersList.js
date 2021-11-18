import React from "react";
import Clinic from "../../images/clinic.jpg";
import Pencil from "../../images/pencil.png";
import TrashGreen from "../../images/trash-green.png";
import Back from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PharmaOffersList() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">
            <img
              src={Back}
              alt="back"
              className="mx-2"
              onClick={() => history.goBack()}
            />
            Pharmacy Offers
          </div>
          {/*doaNText-ends-here*/}
          <div>
            <Link to="/PharmaAddOffer">
              <button
                type="button"
                className="btn doaOrangeBtn px-3"
                onclick="location.href='phm-add-offer.html';"
              >
                +Add New
              </button>
            </Link>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
          <div className="articleCard p-3 m-2">
            <div className="doaNText w-100 mb-2">
              Title of the offer goes here Lorem ipsum dore
            </div>
            <div className="mpText w-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor
            </div>
            <div className="d-flex justify-content-between mt-4">
              <a href="">
                <img src={Pencil} alt="edit" />
              </a>
              <a href="#delete" data-bs-toggle="modal">
                <img src={TrashGreen} alt="delete" />
              </a>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*articleCard-ends-here*/}
          <div className="articleCard p-3 m-2">
            <img src={Clinic} alt="clinic" className="w-100" />
            <div className="d-flex justify-content-between mt-4">
              <a href="phm-add-offer.html">
                <img src={Pencil} alt="edit" />
              </a>
              <a href="#delete" data-bs-toggle="modal">
                <img src={TrashGreen} alt="delete" />
              </a>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*articleCard-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}

export default PharmaOffersList;
