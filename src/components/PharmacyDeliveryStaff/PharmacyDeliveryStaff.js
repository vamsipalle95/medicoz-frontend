import React from "react";
import EllispeGray from "../../images/ellipse-gray-xs.png";
import EllipseRed from "../../images/ellipse-red-xs.png";
import EllipseOrange from "../../images/ellipse-orange-xs.png";
import EllipseGreen from "../../images/ellipse-green-xs.png";
import Clinic from "../../images/clinic.jpg";

function PharmacyDeliveryStaff() {
  return (
    <div>
      <div
        className="container bg-white my-4"
        style={{
          border: "1px solid #EAEAEA",
          borderRadius: "8px !important",
          maxWidth: 1000,
        }}
      >
        <div className="f20sb w-100 my-3">Balaji medicals - Delivery Staff</div>
        <div className="row">
          <div className="col-12 p-3">
            <div className="w-100 tabsOrange">
              <nav>
                <div
                  className="nav nav-tabs border-0"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#toDeliver"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    To Deliver
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#delivered"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Delivered
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#notDelivered"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Not Delivered
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="toDeliver"
                  role="tabpanel"
                >
                  <div className="w-100 overflow-auto mt-4">
                    <table id="table_id" className="w-100 dataTable">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Date</th>
                          <th>Order Number</th>
                          <th>Mobile</th>
                          <th>Location</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>15/06/2021</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Moosrambagh
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllispeGray}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>15/06/2021</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Chaitanya Puri
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseOrange}
                              alt="orange"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>15/06/2021</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Malakpet
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseOrange}
                              alt="orange"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*table-ends-here*/}
                </div>
                {/*tabpane-1-ends-here*/}
                <div className="tab-pane fade" id="delivered" role="tabpanel">
                  <div className="w-100 overflow-auto mt-4">
                    <table id="table_id" className="w-100 dataTable">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Order Number</th>
                          <th>Mobile</th>
                          <th>Location</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>15/06/2021</td>
                          <td>11:45 AM</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Moosrambagh
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseGreen}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>15/06/2021</td>
                          <td>11:45 AM</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Chaitanya Puri
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseGreen}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>15/06/2021</td>
                          <td>11:45 AM</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Malakpet
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseGreen}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*table-ends-here*/}
                </div>
                {/*tabpane-2-ends-here*/}
                <div
                  className="tab-pane fade"
                  id="notDelivered"
                  role="tabpanel"
                >
                  <div className="w-100 overflow-auto mt-4">
                    <table id="table_id" className="w-100 dataTable">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Date</th>
                          <th>Order Number</th>
                          <th>Mobile</th>
                          <th>Location</th>
                          <th>Status</th>
                          <th>Reason</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>15/06/2021</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Moosrambagh
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseRed}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                          <td>Customer not avaliable</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>15/06/2021</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Chaitanya Puri
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseRed}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                          <td>
                            <a
                              href="#ndr"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Set reason
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>15/06/2021</td>
                          <td>
                            <a
                              href="#od"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              OR12345511
                            </a>
                          </td>
                          <td className="text-nowrap">12345 12345</td>
                          <td>
                            <a
                              href="#location"
                              data-bs-toggle="modal"
                              className="text-decoration-none"
                            >
                              Malakpet
                            </a>
                          </td>
                          <td className="d-flex align-items-center">
                            <img
                              src={EllipseRed}
                              alt="ellipsegreen"
                              className="me-2 width15"
                            />
                            <select className="form-select">
                              <option selected>Select</option>
                              <option>Not Picked</option>
                              <option>Stared</option>
                              <option>Delivered</option>
                              <option>Not Delivered</option>
                              <option>Rejected</option>
                            </select>
                          </td>
                          <td>lorem ipsum</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*table-ends-here*/}
                </div>
                {/*tabpane-3-ends-here*/}
              </div>
              {/*tabs-ends-here*/}
            </div>
            {/*tabs-container-ends-here*/}
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>

      <div>
        {/*modals-starts-here*/}
        <div
          className="modal fade show"
          id="od"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <a
                  href="#vpf"
                  data-bs-toggle="modal"
                  className="text-decoration-none f11sbBlue"
                >
                  View Prescription
                </a>
                <div className="w-100 tabsOrange mt-3 p-3 p-md-0">
                  <nav>
                    <div
                      className="nav nav-tabs border-0"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#orginalOrder"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        Orginal Order
                      </button>
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#do"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Delivered Order
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="orginalOrder"
                      role="tabpanel"
                    >
                      <div className="w-100 overflow-auto mt-4">
                        <table className="w-100">
                          <tbody>
                            <tr style={{ background: "#eaeaea" }}>
                              <th className="f11b p-2 text-nowrap">
                                Drug Name
                              </th>
                              <th className="f11b p-2">Strength</th>
                              <th className="f11b p-2">Form</th>
                              <th className="f11b p-2">Quantity</th>
                              <th className="f11b p-2 text-nowrap">
                                Unit Rate
                              </th>
                              <th className="f11b p-2">Amount</th>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td className="mpText p-2 text-nowrap">
                                Medicine name
                              </td>
                              <td className="mpText p-2">200mg</td>
                              <td className="mpText p-2">Tablet</td>
                              <td className="mpText p-2">10</td>
                              <td className="mpText p-2">10.00</td>
                              <td className="mpText p-2">10.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td className="mpText p-2 text-nowrap">
                                Medicine name
                              </td>
                              <td className="mpText p-2">200mg</td>
                              <td className="mpText p-2">Tablet</td>
                              <td className="mpText p-2">10</td>
                              <td className="mpText p-2">10.00</td>
                              <td className="mpText p-2">10.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td
                                className="mpText p-2 text-nowrap"
                                colSpan={5}
                              >
                                Total without discount
                              </td>
                              <td className="mpText p-2">20.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*table-ends-here*/}
                      <div className="w-100 text-end mt-4">
                        <button type="button" className="btn doacBtn px-4">
                          Close
                        </button>
                      </div>
                    </div>
                    {/*tabpane-1-ends-here*/}
                    <div className="tab-pane fade" id="do" role="tabpanel">
                      <div className="w-100 overflow-auto mt-4">
                        <table className="w-100">
                          <tbody>
                            <tr style={{ background: "#eaeaea" }}>
                              <th className="f11b p-2 text-nowrap">
                                Drug Name
                              </th>
                              <th className="f11b p-2">Strength</th>
                              <th className="f11b p-2">Form</th>
                              <th className="f11b p-2">Quantity</th>
                              <th className="f11b p-2 text-nowrap">
                                Unit Rate
                              </th>
                              <th className="f11b p-2">Amount</th>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td className="mpText p-2 text-nowrap">
                                Medicine name
                              </td>
                              <td className="mpText p-2">200mg</td>
                              <td className="mpText p-2">Tablet</td>
                              <td className="mpText p-2">10</td>
                              <td className="mpText p-2">10.00</td>
                              <td className="mpText p-2">10.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td className="mpText p-2 text-nowrap">
                                Medicine name
                              </td>
                              <td className="mpText p-2">200mg</td>
                              <td className="mpText p-2">Tablet</td>
                              <td className="mpText p-2">10</td>
                              <td className="mpText p-2">10.00</td>
                              <td className="mpText p-2">10.00</td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td
                                className="mpText p-2 text-nowrap"
                                colSpan={5}
                              >
                                Total without discount
                              </td>
                              <td className="mpText p-2">20.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*table-ends-here*/}
                      <div className="w-100 text-end mt-4">
                        <button type="button" className="btn doacBtn px-4">
                          Close
                        </button>
                      </div>
                    </div>
                    {/*tabpane-2-ends-here*/}
                  </div>
                  {/*tabs-ends-here*/}
                </div>
                {/*tabs-container-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-od-ends-here*/}
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
                <h5 className="modal-title">Location</h5>
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
                        <td className="mpText py-2">Ramesh</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Mobile</td>
                        <td className="mpText py-2">1112234567</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">House/Flat No</td>
                        <td className="mpText py-2">#30/440</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Apartment/society Name</td>
                        <td className="mpText py-2">Teja Apparments</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Street Name</td>
                        <td className="mpText py-2">Gandhinagar</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Landmark</td>
                        <td className="mpText py-2">Sri Ram Temple</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Locality</td>
                        <td className="mpText py-2">Malakpet</td>
                      </tr>
                      <tr
                        style={{ borderBottom: "1px solid #cecece !important" }}
                      >
                        <td className="mpText py-2">Mandal/village</td>
                        <td className="mpText py-2">Malakpet</td>
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
                        <td className="mpText py-2">300012</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-100 text-end mt-4">
                  <button
                    type="button"
                    className="btn doacBtn px-4"
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
        <div
          className="modal fade show"
          id="ndr"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">Not delivered Reason</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control minHeight w-100"
                  rows={20}
                  cols={10}
                  defaultValue={""}
                />
                <div className="w-100 text-end mt-4">
                  <button
                    type="button"
                    className="btn doacBtn px-4"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-ndr-ends-here*/}
        <div
          className="modal fade show"
          id="vpf"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">Valid Prescription Format</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img src={Clinic} alt="clinic" className="w-100" />
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-vpf-ends-here*/}
      </div>

      {/*container-ends-here*/}
    </div>
  );
}

export default PharmacyDeliveryStaff;
