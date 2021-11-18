import React from "react";
import Edit from "../../images/edit.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import MyProfile from "../../images/my-profile.png";

function PharmaDrMgmtList() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">Doctors Management</div>
          {/*doaNText-ends-here*/}
          <div className="me-3">
            <Link to="/PharmaDrAddEdit">
              <button type="button" className="btn doaOrangeBtn px-3">
                Add
              </button>
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="btn doaOrangeBtn px-3"
              data-bs-toggle="modal"
              data-bs-target="#invite"
            >
              Invite
            </button>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Full Name</th>
                <th>Speciality</th>
                <th>Mobile</th>
                <th>City/Dist</th>
                <th>Mandal/Village</th>
                <th>Locality</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link to="/PharmaDrAddEdit" className="me-2">
                    <img src={Edit} alt="edit" />
                  </Link>
                  <a
                    href="#dp"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Suraj Saxena
                  </a>
                </td>
                <td>General Physician</td>
                <td>12345 12345</td>
                <td>Hyderabad</td>
                <td>Kukatpally</td>
                <td>VivekNagar</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Link to="/PharmaDrAddEdit" className="me-2">
                    <img src={Edit} alt="edit" />
                  </Link>
                  <a
                    href="#dp"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Rammohan Pillai
                  </a>
                </td>
                <td>General Physician</td>
                <td>12345 12345</td>
                <td>Hyderabad</td>
                <td>Kukatpally</td>
                <td>VivekNagar</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <Link to="/PharmaDrAddEdit" className="me-2">
                    <img src={Edit} alt="edit" />
                  </Link>
                  <a
                    href="#dp"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Venkatesh Rao
                  </a>
                </td>
                <td>General Physician</td>
                <td>12345 12345</td>
                <td>Hyderabad</td>
                <td>Kukatpally</td>
                <td>VivekNagar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*myPhoneCardCnt-ends-here*/}

      <div>
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
                <h5 className="modal-title">
                  <img src={MyProfile} alt="profile" className="me-2" />
                  Invite Doctor
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="w-100">
                  <div className="mpText w-100 mb-2">* Full Name</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">* Mobile</div>
                  <input className="form-control w-100" type="text" required />
                  <div className="mpText w-100 mt-3 mb-2">Email</div>
                  <input className="form-control w-100" type="email" required />
                  <button
                    type="submit"
                    className="btn doaOrangeBtn d-block w-100 mt-4"
                  >
                    Invite
                  </button>
                </form>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-invite-ends-here*/}
        <div
          className="modal fade show"
          id="dp"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <img src={MyProfile} alt="profile" className="me-2" />
                  Doctor Profile
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="w-100 overflow-auto">
                  <table className="w-100">
                    <tbody>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">UID</td>
                        <td className="mpText py-2">12345678</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">First Name</td>
                        <td className="mpText py-2">Vikas</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Last Name</td>
                        <td className="mpText py-2">Ravpudi</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Speciality</td>
                        <td className="mpText py-2">General Physician</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Mobile</td>
                        <td className="mpText py-2">12345 12345</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">City/Town//Dist</td>
                        <td className="mpText py-2">Warangal</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Mandal</td>
                        <td className="mpText py-2">Aleru</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Village</td>
                        <td className="mpText py-2">Komturu</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Locality</td>
                        <td className="mpText py-2">Ambedkar Nagar</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Street</td>
                        <td className="mpText py-2">Ambedkar Nagar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-100 text-end mt-4">
                  <button
                    type="button"
                    className="btn doacBtn"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-dp-ends-here*/}
        {/*modals-ends-here*/}
      </div>
    </div>
  );
}

export default PharmaDrMgmtList;
