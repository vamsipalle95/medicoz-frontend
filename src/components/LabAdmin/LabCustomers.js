import React from "react";
import Edit from "../../images/edit.png";
import { useHistory } from "react-router-dom";
import MyProfile from "../../images/my-profile.png";
import LocsmGreen from "../../images/location-sm-green.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function LabCustomers() {
  const history = useHistory();
  const handleAddCustomer = () => {
    history.push("/LabAddCustomer");
  };
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">Customers Management</div>
          {/*doaNText-ends-here*/}
          <div>
            <button
              type="button"
              className="btn doaOrangeBtn px-4"
              onClick={handleAddCustomer}
            >
              Add
            </button>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id" className="w-100">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <a href="lab-add-customer.html" className="me-2">
                    <Link to="/LabAddCustomer">
                      <img src={Edit} alt="edit" />
                    </Link>
                  </a>
                  <a
                    href="#dp"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Prem Kumar
                  </a>
                </td>
                <td>12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Moserambagh
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <a href="lab-add-customer.html" className="me-2">
                    <Link to="/LabAddCustomer">
                      <img src={Edit} alt="edit" />
                    </Link>
                  </a>
                  <a
                    href="#dp"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Jai Ram
                  </a>
                </td>
                <td>12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Chaitanyapuri
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <a href="lab-add-customer.html" className="me-2">
                    <Link to="/LabAddCustomer">
                      <img src={Edit} alt="edit" />
                    </Link>
                  </a>
                  <a
                    href="#dp"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Veera Babu
                  </a>
                </td>
                <td>12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Malakpet
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
                <h5 className="modal-title">
                  <img src={MyProfile} className="me-2" />
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
        {/*modal-dp-starts-here*/}
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
                  <img src={MyProfile} className="me-2" />
                  Customer Profile
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
        {/*modal-location-starts-here*/}
        <div
          className="modal fade show"
          id="location"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">
                  <img src={LocsmGreen} className="me-2" />
                  Location
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
                        <td className="mpText py-2">Name</td>
                        <td className="mpText py-2">Vikas</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Mobile</td>
                        <td className="mpText py-2">123456789</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">House/Flat No</td>
                        <td className="mpText py-2"># Malakpet,104 1s floor</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Apartment/society Name</td>
                        <td className="mpText py-2">Bhari Manzil</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Street Name</td>
                        <td className="mpText py-2">Malakpet</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Landmark</td>
                        <td className="mpText py-2">Yashoda Hospital</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Locality</td>
                        <td className="mpText py-2">Yashoda Hospital</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Mandal/village</td>
                        <td className="mpText py-2">Chadarghat</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">City/Dist</td>
                        <td className="mpText py-2">Hyderabad</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Pincode</td>
                        <td className="mpText py-2">510088</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-100 mt-4">
                  <button
                    type="button"
                    className="btn doacBtn w-100"
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
        {/*modal-location-ends-here*/}
        {/*modals-ends-here*/}
      </div>
    </div>
  );
}

export default LabCustomers;
