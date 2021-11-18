import React from "react";
import EllipseRed from "../../images/ellipse-red-xs.png";
import EllipseGreen from "../../images/ellipse-green-xs.png";
import EllipseOrange from "../../images/ellipse-orange-xs.png";
import EllipseGray from "../../images/ellipse-gray-xs.png";

function PharmaOnlineOrders() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 p-3 mpGrayBox">
          <div className="mpTitle">Online Orders</div>
          {/*doaNText-ends-here*/}
        </div>
        {/*graybox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id" className="overflow_tb2">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Time</th>
                <th className="text-nowrap">Order Number</th>
                <th>Customer</th>
                <th>Mobile</th>
                <th>Location</th>
                <th>Payment</th>
                <th>Delivery</th>
                <th className="text-nowrap">Order Status</th>
                <th className="text-nowrap">Not Delivered Reason</th>
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
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    OR123456789
                  </a>
                </td>
                <td className="text-nowrap">J Sanjay Reddy</td>
                <td className="text-nowrap">12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Moosarambagh
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Cash</option>
                    <option value={1}>UPI</option>
                    <option value={2}>COD</option>
                    <option value={3}>Received</option>
                    <option value={3}>Paid Online</option>
                  </select>
                </td>
                <td>Home</td>
                <td className="d-flex align-items-center">
                  <img src={EllipseGray} alt="red" className="me-2 width15" />
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>Prepare Bill</option>
                    <option value={2}>Rejected</option>
                    <option value={3}>Not Picked</option>
                    <option value={4}>Started</option>
                    <option value={5}>Delivered</option>
                    <option value={6}>Not Delivered</option>
                    <option value={7}>Not Picked</option>
                  </select>
                </td>
                <td />
              </tr>
              <tr>
                <td>2</td>
                <td>15/06/2021</td>
                <td>11:45 AM</td>
                <td>
                  <a
                    href="#od"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    OR123456789
                  </a>
                </td>
                <td className="text-nowrap">Vincent</td>
                <td className="text-nowrap">12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Chaitanyapuri
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Cash</option>
                    <option value={1}>UPI</option>
                    <option value={2}>COD</option>
                    <option value={3}>Received</option>
                    <option value={3}>Paid Online</option>
                  </select>
                </td>
                <td>Home</td>
                <td className="d-flex align-items-center">
                  <img
                    src={EllipseGreen}
                    alt="green"
                    className="me-2 width15"
                  />
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>Prepare Bill</option>
                    <option value={2}>Rejected</option>
                    <option value={3}>Not Picked</option>
                    <option value={4}>Started</option>
                    <option value={5}>Delivered</option>
                    <option value={6}>Not Delivered</option>
                    <option value={7}>Not Picked</option>
                  </select>
                </td>
                <td />
              </tr>
              <tr>
                <td>3</td>
                <td>15/06/2021</td>
                <td>11:45 AM</td>
                <td>
                  <a
                    href="#od"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    OR123456789
                  </a>
                </td>
                <td className="text-nowrap">Kiran Kumar</td>
                <td className="text-nowrap">12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Malakpet
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Cash</option>
                    <option value={1}>UPI</option>
                    <option value={2}>COD</option>
                    <option value={3}>Received</option>
                    <option value={3}>Paid Online</option>
                  </select>
                </td>
                <td>Home</td>
                <td className="d-flex align-items-center">
                  <img
                    src={EllipseOrange}
                    alt="orange"
                    className="me-2 width15"
                  />
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>Prepare Bill</option>
                    <option value={2}>Rejected</option>
                    <option value={3}>Not Picked</option>
                    <option value={4}>Started</option>
                    <option value={5}>Delivered</option>
                    <option value={6}>Not Delivered</option>
                    <option value={7}>Not Picked</option>
                  </select>
                </td>
                <td />
              </tr>
              <tr>
                <td>4</td>
                <td>15/06/2021</td>
                <td>11:45 AM</td>
                <td>
                  <a
                    href="#od"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    OR123456789
                  </a>
                </td>
                <td className="text-nowrap">Kiran Kumar</td>
                <td className="text-nowrap">12345 12345</td>
                <td>
                  <a
                    href="#location"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Malakpet
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Cash</option>
                    <option value={1}>UPI</option>
                    <option value={2}>COD</option>
                    <option value={3}>Received</option>
                    <option value={3}>Paid Online</option>
                  </select>
                </td>
                <td>Store</td>
                <td className="d-flex align-items-center">
                  <img
                    src={EllipseRed}
                    alt="ellipsered"
                    className="me-2 width15"
                  />
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>Prepare Bill</option>
                    <option value={2}>Rejected</option>
                    <option value={3}>Not Picked</option>
                    <option value={4}>Started</option>
                    <option value={5}>Delivered</option>
                    <option value={6}>Not Delivered</option>
                    <option value={7}>Not Picked</option>
                  </select>
                </td>
                <td>
                  <a
                    href="#ndr"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Reason Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*myPhoneCardCnt-ends-here*/}

      <div>
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
                <a href="#" className="text-decoration-none f11sbBlue">
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
                        data-bs-target="#editOrder"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Edit Order
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
                            <tr>
                              <td className="p-3" colSpan={6} />
                            </tr>
                            <tr style={{ background: "#eaeaea" }}>
                              <td
                                className="mpText p-2 text-nowrap"
                                colSpan={3}
                              >
                                Assign Delivery Staff
                                <select className="form-select mt-3">
                                  <option selected>Select</option>
                                  <option>One</option>
                                  <option>Two</option>
                                  <option>Three</option>
                                </select>
                              </td>
                              <td className="mpText p-2" colSpan={3}></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*table-ends-here*/}
                      <div className="w-100 text-end mt-4">
                        <button type="button" className="btn doacBtn px-4">
                          Assign/Close
                        </button>
                      </div>
                    </div>
                    {/*tabpane-1-ends-here*/}
                    <div
                      className="tab-pane fade"
                      id="editOrder"
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
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Medicine name"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="200mg"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Tablet"
                                  disabled
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={10}
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={10.0}
                                  disabled
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={10.0}
                                  disabled
                                />
                              </td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #cecece" }}>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Medicine name"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="200mg"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Tablet"
                                  disabled
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={10}
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={10.0}
                                  disabled
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={10.0}
                                  disabled
                                />
                              </td>
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

                        <div style={{ background: "#eaeaea" }} className="p-1">
                          <p className="mpText p-2 text-nowrap">
                            Assign Delivery Staff
                          </p>
                          <select className="form-select pb-3 mb-3 mb-2 w-75">
                            <option>Select</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                          </select>
                        </div>
                      </div>
                      {/*table-ends-here*/}
                      <div className="w-100 text-end mt-4">
                        <button type="button" className="btn doacBtn px-4">
                          Save
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
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
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
                  className="form-control w-100"
                  rows={10}
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
        {/*modals-ends-here*/}
      </div>
    </div>
  );
}

export default PharmaOnlineOrders;
