import React from "react";
import Back from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";

import Duplicate from "../../images/duplicate.png";

function PharmaAddDrugsList() {
  const history = useHistory();
  return (
    <div>
      <div className="d-flex flex-wrap align-items-flex-start overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="draCard2 p-3 m-2">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">
              <img src={Back} alt="back" onClick={() => history.goBack()} />
              Add/Edit My Drugs List
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <form className="w-100 mt-3">
            <a
              href="#"
              className="f11sbBlue text-decoration-none d-block w-100 text-end mb-3"
              data-bs-toggle="modal"
              data-bs-target="#bulkUpload"
            >
              Bulk Upload
            </a>
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Drug Name"
              required
            />
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder=" Drug Strength"
              required
            />
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Drug Form"
              required
            />
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Company Name"
              required
            />
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Packing Qty"
              required
            />
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Rate"
              required
            />
            <input
              className="form-control w-100"
              type="text"
              placeholder="Unit Rate"
              required
            />
            <button
              type="submit"
              className="btn doacBtn d-block px-5 mx-auto mt-4"
            >
              Add/Save
            </button>
          </form>
        </div>
        {/*draCard1-ends-here*/}

        {/*draCard1-ends-here*/}
      </div>

      {/*modal-bulkUpload-starts-here*/}
      <div
        className="modal fade"
        id="bulkUpload"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">Bulk Upload</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div
                className="w-100 py-2"
                style={{ borderBottom: "1px solid #B5B5B5" }}
              >
                <a href className="f10mBlue text-decoration-none">
                  Download Template Here
                </a>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 mpText my-2">* Upload File</div>
              <input type="file" className="form-control w-100" />
              <button
                type="button"
                className="btn doacBtn w-100 mt-4"
                data-bs-dismiss="modal"
              >
                Upload
              </button>
            </div>
            {/*modal-body-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-bulkUpload-ends-here*/}
      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}

export default PharmaAddDrugsList;
