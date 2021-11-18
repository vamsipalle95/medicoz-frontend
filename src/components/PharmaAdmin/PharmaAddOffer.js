import React from "react";
import { useHistory } from "react-router-dom";
import Back from "../../images/back-button-new.png";

function PharmaAddOffer() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto d-flex flex-wrap p-md-3 ms-lg-3 mb-4">
        <div className="draCard2 p-3 pr-2">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">
              <img src={Back} alt="back" onClick={() => history.goBack()} />
              Add Offer
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <form className="w-100 mt-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="Offer"
                id="TextOffer"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="TextOffer">
                Text Offer
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="Offer"
                id="ImageOffer"
              />
              <label className="form-check-label" htmlFor="ImageOffer">
                Image Offer
              </label>
            </div>
            <div className="mpText w-100 mt-3 mb-2">* Title</div>
            <input className="form-control w-100" type="text" required />
            <div className="mpText w-100 mt-3 mb-2">* Description</div>
            <textarea
              className="form-control w-100"
              rows={10}
              required
              defaultValue={""}
            />
            <button
              type="submit"
              className="btn doaOrangeBtn d-block mx-auto mt-4"
            >
              Add Order
            </button>
          </form>
        </div>
        {/*draCard1-ends-here*/}

        <div className="draCard2 p-3">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">
              <img src={Back} alt="back" onClick={() => history.goBack()} />
              Add Offer
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <form className="w-100 mt-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="Offer"
                id="TextOffer"
              />
              <label className="form-check-label" htmlFor="TextOffer">
                Text Offer
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="Offer"
                id="ImageOffer"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="ImageOffer">
                Image Offer
              </label>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Image Upload"
              />
              <div className="input-group-append">
                <span className="input-group-text">Select File</span>
              </div>
            </div>
            <label className="form-check-label" htmlFor="TextOffer">
              Note: Jpeg, Png format withd: 300px, height:350px;
            </label>

            <button
              type="submit"
              className="btn doaOrangeBtn d-block mx-auto mt-4"
            >
              Upload Offer
            </button>
          </form>
        </div>
        {/*draCard1-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}

export default PharmaAddOffer;
