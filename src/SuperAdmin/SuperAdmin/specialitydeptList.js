import React from "react";

function SpecialityDeptList() {
  return (
    <div>
      <div className="row mb-2">
        <div className="col-sm-6 pl-25">
          <h5 className="m-0 font-weight-bold fnt-clr fs-700 p-3">
            Speciality Department List
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
                data-bs-target="#addSpecialityDept"
              >
                + Add Speciality Dept
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
        <table className="mb-3 w-100" id="table_id">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Speciality Department Name</th>
              <th className="text-center wd25"> Actions </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Cardiology Department</td>
              <td className="text-center">
                <i
                  className="fa fa-eye cls_fa"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#viewSpecialityDept"
                ></i>
                <i
                  className="fa fa-edit cls_fa"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editSpecialityDept"
                ></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Gynaecology Department</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Pediatrics Department</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Orthopedics Department</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Neurology Department</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>Gastroenterology Department</td>
              <td className="text-center">
                <i className="fa fa-eye cls_fa"></i>
                <i className="fa fa-edit cls_fa"></i>
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
        id="addSpecialityDept"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Add Speciality Departments List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div class="doaNText w-100 mt-3">Speciality Department Name</div>
              <input
                class="form-control w-100 mt-2"
                type="text"
                placeholder="Speciality Department Name"
              />
            </div>
            {/*modal-body-ends-here*/}
            <div className="modal-footer border-0">
              <button type="button" className="btn fmaBtn">
                Add Speciality Department
              </button>
            </div>
            {/*modal-footer-ends-here*/}
          </div>
        </div>
      </div>
      {/*modal-filter-ends-here*/}
      <div
        className="modal fade"
        id="viewSpecialityDept"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                View Speciality Departments List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div class="doaNText w-100 mt-3">Speciality Department Name</div>
              <div>Cardiology Department</div>
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
        id="editSpecialityDept"
        tabIndex={-1}
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Edit Speciality Departments List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div class="doaNText w-100 mt-3">Speciality Department Name</div>
              <input
                class="form-control w-100 mt-2"
                type="text"
                placeholder="Speciality Department Name"
                value="Cardiology Department"
              />
            </div>
            {/*modal-body-ends-here*/}
            <div className="modal-footer border-0">
              <button type="button" className="btn fmaBtn">
                Edit Speciality Department
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

export default SpecialityDeptList;
