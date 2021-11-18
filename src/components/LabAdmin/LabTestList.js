import React from "react";
import { useHistory } from "react-router-dom";

function LabTestList() {
  const history = useHistory();
  const handleTestList = () => {
    history.push("/AddTestList");
  };

  return (
    <div>
      <div className=" overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">
            Investigations &amp; Test List
          </div>
          {/*doaNText-ends-here*/}
          <div className="me-3">
            <button
              type="button"
              onClick={handleTestList}
              className="btn doaOrangeBtn px-3"
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
                <th>Test Name</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name goes here</td>
                <td>100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Name goes here</td>
                <td>26</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Name goes here</td>
                <td>65</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Name goes here</td>
                <td>34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*myPhoneCardCnt-ends-here*/}
      {/*container-ends-here*/}
    </div>
  );
}

export default LabTestList;
