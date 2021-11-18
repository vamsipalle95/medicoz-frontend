import React from "react";
import Urvasi from "../../images/urvasi.png";
import TrashGreen from "../../images/trash-green.png";
import Ramakanth from "../../images/ramakanth.png";

function SampleCollection() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">
            Sample Collection Staff
          </div>
          {/*doaNText-ends-here*/}
          <div>
            <button
              type="button"
              className="btn doaOrangeBtn px-3"
              data-bs-toggle="modal"
              data-bs-target="#invite"
            >
              + Invite
            </button>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
          <div className="draCard1 p-3 m-2">
            <div className="w-100 text-center">
              <img src={Urvasi} alt="urvasi" />
            </div>
            <div className="w-100 mt-3">
              <a href="#" className="text-decoration-none">
                <h3 className="mpHead mb-1">Urvasi Neelkanta</h3>
              </a>
              <p className="mpText mb-0">12345 12345</p>
              <p className="mpText mb-2">urvasi.n@gmail.com</p>
            </div>
            {/*text-ends-here*/}
            <div
              className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3"
              style={{ borderTop: "1px solid #B5B5B5 !important" }}
            >
              <a href="#delete" data-bs-toggle="modal">
                <img src={TrashGreen} alt="green" />
              </a>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                />
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 p-3 m-2">
            <div className="w-100 text-center">
              <img src={Ramakanth} alt="kamth" />
            </div>
            <div className="w-100 mt-3">
              <a href="#" className="text-decoration-none">
                <h3 className="mpHead mb-1">Ramakanth Potineni</h3>
              </a>
              <p className="mpText mb-0">12345 12345</p>
              <p className="mpText mb-2">ramakanth.p@gmail.com</p>
            </div>
            {/*text-ends-here*/}
            <div
              className="w-100 d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3"
              style={{ borderTop: "1px solid #B5B5B5 !important" }}
            >
              <a href="#delete" data-bs-toggle="modal">
                <img src={TrashGreen} alt="green" />
              </a>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            {/*flexbox-ends-here*/}
          </div>
          {/*draCard1-ends-here*/}
          <div className="draCard1 p-3 m-2">
            <div className="w-100">
              <a href="#" className="text-decoration-none">
                <h3 className="mpHead mb-1">Krishna Cherukuri</h3>
              </a>
              <p className="mpText mb-0">ramakanth.p@gmail.com</p>
            </div>
            {/*text-ends-here*/}
            <div className="w-100 mt-3">
              <button type="button" className="btn doaOrangeBtn">
                Resend Invitation
              </button>
            </div>
          </div>
          {/*draCard1-ends-here*/}
        </div>
        {/*flexbox-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}
      {/*container-ends-here*/}

      <div>
        {/*modals-starts-here*/}
        {/*modal-invite-starts-here*/}
        <div
          className="modal fade show"
          id="invite"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">Invite Delivery Staff</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Mobile"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <div className="w-100 mpText mt-3">
                  Invitee will receive an email invitation
                </div>
                <div className="w-100 mt-4">
                  <button
                    type="button"
                    className="btn doacBtn w-100"
                    data-bs-dismiss="modal"
                  >
                    Send
                  </button>
                </div>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-invite-ends-here*/}
        {/*modal-delete-starts-here*/}
        <div
          className="modal fade show"
          id="delete"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">Delete Delivery Staff</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="w-100">
                  <a href="#" className="text-decoration-none">
                    <h3 className="mpHead mb-1">Urvasi Neelkanta</h3>
                  </a>
                  <p className="mpText mb-0">12345 12345</p>
                  <p className="mpText mb-2">urvasi.n@gmail.com</p>
                </div>
                <div className="w-100 mt-4">
                  <button
                    type="button"
                    className="btn doacBtn w-100"
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-delete-ends-here*/}
        {/*modals-ends-here*/}
      </div>
    </div>
  );
}

export default SampleCollection;
