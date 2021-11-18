import React from "react";

function MedcialRepsList() {
  return (
    <div>
      <div className="row mb-2">
        <div className="col-sm-6 pl-25">
          <h5 className="m-0 font-weight-bold fnt-clr fs-700 p-3">
            Medical Reps List
          </h5>
        </div>
        {/* /.col */}
        <div className="col-sm-6">
          <div className="alig_btns">
            <div className="add_btn px-2">
              <button
                className="btn btn-orange mr-2 mright bg2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addMR"
              >
                + Add Medical Rep
              </button>
            </div>
            <div className="add_btn">
              <button
                className="btn btn-primary mr-2 mright bg2"
                data-bs-toggle="modal"
                data-bs-target="#bulkUpload"
              >
                Bulk Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex my-3 flex-wrap align-items-center justify-content-between">
        <div className="entries d-flex flex-wrap">
          <span className="mx-2">Show </span>
          <span>
            <select className="form-control">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </span>
          <span className="mx-2"> Entries </span>
        </div>

        <div class="searchItem d-flex flex-wrap">
          <div>Search: </div>
          <div className="ml-2">
            <input type="text" className="form-control"></input>
          </div>
        </div>
      </div>

      <div className="w-100 overflow-auto mt-3">
        <table className="overflow_tb2 mb-3" id="table_id">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Medical Rep Name</th>
              <th>Rep ID</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Company ID</th>
              <th>State</th>
              <th>City/Dist</th>
              <th>Mandal/Taluk</th>
              <th>Village</th>
              <th>Locality</th>
              <th>Street Name</th>
              <th>Pincode</th>
              <th className="text-center wd25"> Actions </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Dr.Raghava</td>
              <td>DR125465985</td>
              <td>996309329</td>
              <td>sairebba@gmail.com</td>
              <td>Laxmi Pharmacy</td>
              <td>P1212323</td>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>N/A</td>
              <td>Kukatpally</td>
              <td>Allwyn colony</td>
              <td>Vivekananda Nagar</td>
              <td>500072</td>
              <td className="text-center">
                <i
                  className="fa fa-eye cls_fa"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#viewMR"
                ></i>
                <i
                  className="fa fa-edit cls_fa"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editMR"
                ></i>
                <i
                  className="fa fa-trash cls_fa1"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteMR"
                ></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Dr.Raghava</td>
              <td>DR125465985</td>
              <td>996309329</td>
              <td>sairebba@gmail.com</td>
              <td>Laxmi Pharmacy</td>
              <td>P1212323</td>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>N/A</td>
              <td>Kukatpally</td>
              <td>Allwyn colony</td>
              <td>Vivekananda Nagar</td>
              <td>500072</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
                <i className="fa fa-trash cls_fa1"></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Dr.Raghava</td>
              <td>DR125465985</td>
              <td>996309329</td>
              <td>sairebba@gmail.com</td>
              <td>Laxmi Pharmacy</td>
              <td>P1212323</td>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>N/A</td>
              <td>Kukatpally</td>
              <td>Allwyn colony</td>
              <td>Vivekananda Nagar</td>
              <td>500072</td>

              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
                <i className="fa fa-trash cls_fa1"></i>
              </td>
            </tr>

            <tr>
              <td>1.</td>
              <td>Dr.Raghava</td>
              <td>DR125465985</td>
              <td>996309329</td>
              <td>sairebba@gmail.com</td>
              <td>Laxmi Pharmacy</td>
              <td>P1212323</td>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>N/A</td>
              <td>Kukatpally</td>
              <td>Allwyn colony</td>
              <td>Vivekananda Nagar</td>
              <td>500072</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
                <i className="fa fa-trash cls_fa1"></i>
              </td>
            </tr>

            <tr>
              <td>1.</td>
              <td>Dr.Raghava</td>
              <td>DR125465985</td>
              <td>996309329</td>
              <td>sairebba@gmail.com</td>
              <td>Laxmi Pharmacy</td>
              <td>P1212323</td>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>N/A</td>
              <td>Kukatpally</td>
              <td>Allwyn colony</td>
              <td>Vivekananda Nagar</td>
              <td>500072</td>

              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
                <i className="fa fa-trash cls_fa1"></i>
              </td>
            </tr>

            <tr>
              <td>1.</td>
              <td>Dr.Raghava</td>
              <td>DR125465985</td>
              <td>996309329</td>
              <td>sairebba@gmail.com</td>
              <td>Laxmi Pharmacy</td>
              <td>P1212323</td>
              <td>Telangana</td>
              <td>Hyderabad</td>
              <td>N/A</td>
              <td>Kukatpally</td>
              <td>Allwyn colony</td>
              <td>Vivekananda Nagar</td>
              <td>500072</td>

              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
                <i className="fa fa-trash cls_fa1"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex mt-2 flex-wrap align-items-center justify-content-between">
          <div className="entries d-flex flex-wrap">
            <span className="mx-2">Showing </span>
            <span>1 to 3 of 3 entries</span>
          </div>

          <div class="searchItem d-flex flex-wrap">
            <ul className="pagination pagination-sm">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6 className="my-2 fontxs">* UID = "Unique ID"</h6>
        <h6 className="my-2 fontxs">
          {" "}
          *IMR No = "Internal Medical Record Number"
        </h6>
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
      <div
        className="modal fade"
        id="addMR"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Add Medical Reps List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Medical Rep Name</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Medical Co. Name"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Rep ID</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Rep ID"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Mobile</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Email</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Company Name</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Company ID</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Company ID"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">State</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="State"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">City/District</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="City/District"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Mandal/Taluk</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Mandal/Taluk"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Village</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Village"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Locality</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Locality"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Street Name</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Street Name"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Pincode</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Pincode"
                  />
                </div>
              </div>
            </div>
            {/*modal-body-ends-here*/}
            <div className="modal-footer border-0">
              <button type="button" className="btn fmaBtn">
                Add Medical rep
              </button>
            </div>
            {/*modal-footer-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-filter-ends-here*/}
      <div
        className="modal fade"
        id="viewMR"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                View Medical Rep List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Medical Rep Name</div>
                  <div>Analog Pharma</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Rep ID</div>
                  <div>DR125465985</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Mobile</div>
                  <div>996309329</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Email</div>
                  <div>sairebba@gmail.com</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Company Name</div>
                  <div>Laxmi Pharmacy</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Company ID</div>
                  <div>P1212323</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">State</div>
                  <div>Telangana</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">City/District</div>
                  <div>Telangana</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Mandal/Taluk</div>
                  <div>N/A</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Village</div>
                  <div>Kukatpally</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Locality</div>
                  <div>N/A</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Street Name</div>
                  <div>Vivekananda Nagar</div>
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Pincode</div>
                  <div>500072</div>
                </div>
              </div>
            </div>
            {/*modal-body-ends-here*/}
            <div className="modal-footer border-0">
              <button type="button" className="btn fmaBtn">
                OK
              </button>
            </div>
            {/*modal-footer-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-filter-ends-here*/}
      <div
        className="modal fade"
        id="editMR"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Edit Medical Reps List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Medical Rep Name</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Medical Rep Name"
                    value="Dr.Raghava"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Rep ID</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="ID"
                    value="DR125465985"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Mobile</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Mobile"
                    value="996309329"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Email</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Email"
                    value="sairebba@gmail.com"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Company Name</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Company Name"
                    value="Laxmi Pharmacy"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Company ID</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Company ID"
                    value="P1212323"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">State</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="State"
                    value="Telangana"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">City/District</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="City/District"
                    value="Hyderabad"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Mandal/Taluk</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Mandal/Taluk"
                    value="N/A"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Village</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Village"
                    value="Kukatpally"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Locality</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Locality"
                    value="N/A"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Street Name</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Street Name"
                    value="Vivekananda Nagar"
                  />
                </div>
                <div className="col-6">
                  <div class="doaNText w-100 mt-3">Pincode</div>
                  <input
                    class="form-control w-100 mt-2"
                    type="text"
                    placeholder="Pincode"
                    value="500072"
                  />
                </div>
              </div>
            </div>
            {/*modal-body-ends-here*/}
            <div className="modal-footer border-0">
              <button type="button" className="btn fmaBtn">
                Edit Medical Rep
              </button>
            </div>
            {/*modal-footer-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-filter-ends-here*/}
      <div
        className="modal fade"
        id="deleteMR"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Delete Medical Reps List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>Are You Sure You Want To Delete</div>
            </div>
            {/*modal-body-ends-here*/}
            <div className="modal-footer border-0">
              <button type="button" className="btn fmaBtn">
                Yes
              </button>
              <button type="button" className="btn fmaBtn">
                No
              </button>
            </div>
            {/*modal-footer-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-filter-ends-here*/}
    </div>
  );
}

export default MedcialRepsList;
