import React from "react";
import Clinic from "../../images/clinic.jpg";

function LabUploadReports() {
  return (
    <div>
      <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 p-3 mpGrayBox">
          <div className="mpTitle">Upload Reports</div>
          {/*doaNText-ends-here*/}
        </div>
        {/*graybox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id" className="w-100">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Date</th>
                <th>Time</th>
                <th className="text-nowrap">Order Number</th>
                <th>Customer</th>
                <th>Mobile</th>
                <th />
                <th className="text-nowrap">Report Status</th>
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
                    href="#upload"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Upload
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
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
                    href="#upload"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Upload
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
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
                    href="#upload"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Upload
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </td>
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
                    href="#upload"
                    className="text-decoration-none"
                    data-bs-toggle="modal"
                  >
                    Upload
                  </a>
                </td>
                <td>
                  <select className="form-select">
                    <option selected>Select</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
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
        {/*modal-od-starts-here*/}
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
                  className="text-decoration-none f11sbBlue"
                  data-bs-toggle="modal"
                >
                  View Prescription
                </a>
                <div className="w-100 overflow-auto mt-4">
                  <table className="w-100">
                    <tbody>
                      <tr style={{ background: "#eaeaea" }}>
                        <th className="f11b p-2 text-nowrap">Test Name</th>
                        <th className="f11b p-2">Amount</th>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #cecece" }}>
                        <td className="mpText p-2 text-nowrap">Test Name</td>
                        <td className="mpText p-2">10.00</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #cecece" }}>
                        <td className="mpText p-2 text-nowrap">Test Name</td>
                        <td className="mpText p-2">10.00</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #cecece" }}>
                        <td className="f11b p-2 text-nowrap">
                          Total without discount
                        </td>
                        <td className="f11b p-2">20.00</td>
                      </tr>
                      <tr>
                        <td className="p-3" colSpan={2} />
                      </tr>
                      <tr style={{ background: "#eaeaea" }}>
                        <td
                          className="mpText pt-2 px-2 text-nowrap"
                          colSpan={3}
                        >
                          <span className="f11b">Collection By:</span> Kiran
                          Kumar
                        </td>
                        <td />
                      </tr>
                      <tr style={{ background: "#eaeaea" }}>
                        <td
                          className="mpText py-2 px-2 text-nowrap"
                          colSpan={3}
                        >
                          <span className="f11b">Delivery On:</span> 15/06/2021,
                          12:30PM
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*table-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-od-ends-here*/}
        {/*modal-vpf-starts-here*/}
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
        {/*modal-upload-starts-here*/}
        <div
          className="modal fade show"
          id="upload"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title">Upload reports</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="w-100">
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
                  <div className="mpText w-100 mt-3 mb-2">upload Reports</div>
                  <input className="form-control w-100" type="file" required />
                  <div className="mpText w-100 mt-3 mb-2">1 of 2 files</div>
                  <div className="progress w-100 mt-2" style={{ height: 10 }}>
                    <div
                      className="progress-bar w-75"
                      style={{ background: "#13E135" }}
                      role="progressbar"
                    />
                  </div>
                  <button type="submit" className="btn doaOrangeBtn w-100 mt-4">
                    Upload
                  </button>
                </form>
              </div>
              {/*modal-body-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-upload-ends-here*/}
        {/*modals-ends-here*/}
      </div>
    </div>
  );
}

export default LabUploadReports;
