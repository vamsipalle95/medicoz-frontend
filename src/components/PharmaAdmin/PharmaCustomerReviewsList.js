import React from "react";

function PharmaCustomerReviewsList() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="w-100 d-flex flex-wrap align-items-center p-3 mb-2 mpGrayBox">
              <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                <div className="w-100 p-3 mt-3 mpGrayBox">
                  <div className="mpTitle">Customer Ratings &amp; Reviews</div>
                  {/*doaNText-ends-here*/}
                </div>
                {/*flexbox-ends-here*/}
                <div className="w-100 overflow-auto mt-3">
                  <table id="table_id" className="w-100">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Testimonial</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>15/06/2021</td>
                        <td className="text-nowrap">
                          <a
                            href="#location"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                          >
                            Prem Kumar
                          </a>
                        </td>
                        <td>
                          <a
                            href="#od"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                          >
                            3/5
                          </a>
                        </td>
                        <td>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean euismod bibendum laoreet. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Aenean
                          euismod bibendum laoreet.
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15/06/2021</td>
                        <td className="text-nowrap">
                          <a
                            href="#location"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                          >
                            Jai Ram
                          </a>
                        </td>
                        <td>
                          <a
                            href="#od"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                          >
                            2/5
                          </a>
                        </td>
                        <td>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean euismod bibendum laoreet
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>15/06/2021</td>
                        <td className="text-nowrap">
                          <a
                            href="#location"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                          >
                            Veera Babu
                          </a>
                        </td>
                        <td>
                          <a
                            href="#od"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                          >
                            5/5
                          </a>
                        </td>
                        <td>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean euismod bibendum laoreet
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*myPhoneCardCnt-ends-here*/}
            </div>
          </div>
        </div>
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
                          data-bs-target="#deliveredOrder"
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
                                  className="doaNText p-2 text-nowrap"
                                  colSpan={5}
                                >
                                  Total without discount
                                </td>
                                <td className="doaNText p-2">20.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*table-ends-here*/}
                      </div>
                      {/*tabpane-1-ends-here*/}
                      <div
                        className="tab-pane fade"
                        id="deliveredOrder"
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
                                  className="doaNText p-2 text-nowrap"
                                  colSpan={5}
                                >
                                  Total without discount
                                </td>
                                <td className="doaNText p-2">20.00</td>
                              </tr>
                              <tr>
                                <td className="p-3" colSpan={6} />
                              </tr>
                              <tr style={{ background: "#eaeaea" }}>
                                <td
                                  className="mpText pt-2 px-2 text-nowrap"
                                  colSpan={3}
                                >
                                  Delivered By: Kiran Kumar
                                </td>
                                <td
                                  className="mpText pt-2 px-2"
                                  colSpan={3}
                                ></td>
                              </tr>
                              <tr style={{ background: "#eaeaea" }}>
                                <td
                                  className="mpText pb-2 px-2 text-nowrap"
                                  colSpan={3}
                                >
                                  Delivered On: 15/06/2021, 12:30PM
                                </td>
                                <td
                                  className="mpText pb-2 px-2"
                                  colSpan={3}
                                ></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/*table-ends-here*/}
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
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">Name</td>
                          <td className="mpText py-2">Ramesh</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">Mobile</td>
                          <td className="mpText py-2">1112234567</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">House/Flat No</td>
                          <td className="mpText py-2">#30/440</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">
                            Apartment/society Name
                          </td>
                          <td className="mpText py-2">Teja Apparments</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">Street Name</td>
                          <td className="mpText py-2">Gandhinagar</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">Landmark</td>
                          <td className="mpText py-2">Sri Ram Temple</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">Locality</td>
                          <td className="mpText py-2">Malakpet</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">Mandal/village</td>
                          <td className="mpText py-2">Malakpet</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
                        >
                          <td className="mpText py-2">City/Dist</td>
                          <td className="mpText py-2">Hyderabad</td>
                        </tr>
                        <tr
                          style={{
                            borderBottom: "1px solid #cecece !important",
                          }}
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
          {/*modals-ends-here*/}
        </div>
      </div>
    </div>
  );
}

export default PharmaCustomerReviewsList;
