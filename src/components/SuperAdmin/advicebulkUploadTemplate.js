import React from "react";
import xlFile from "../../images/xlfile.png";

function AdviceBulkUploadTemplate() {
  return (
    <div>
      <div className="row mb-2">
        <div className="col-sm-7 pl-25">
          <h5 className="m-0 font-weight-bold fnt-clr fs-700 p-3">
            Advice Bulk Upload Template
          </h5>
        </div>
        {/* /.col */}
        <div className="col-sm-5">
          <div className="alig_btns">
            <div className="add_btn px-2">
              <button
                className="btn btn-orange mr-2 mright bg2"
                data-bs-toggle="modal"
                data-bs-target="#bulkUpload"
              >
                + Add Advice Bulk Upload Template
              </button>
            </div>
            <div className="add_btn"></div>
          </div>
        </div>
      </div>

      <div className="overflow-auto p-md-3">
        <div className="templatecls">
          <div className="w-100 overflow-auto mt-3">
            <table className="mb-3" id="table_id">
              <thead>
                <tr>
                  <th>Template Name</th>
                  <th>File</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Advice Bulk Upload Template</td>
                  <td>
                    <img src={xlFile} alt="xlfile" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-eye cls_fa"></i>

                    <i className="fa fa-trash cls_fa1"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
    </div>
  );
}

export default AdviceBulkUploadTemplate;
