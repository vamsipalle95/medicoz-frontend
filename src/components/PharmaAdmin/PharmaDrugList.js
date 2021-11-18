import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function PharmaDrugList() {
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="w-100 d-flex flex-wrap align-items-center p-3 mpGrayBox">
          <div className="mpTitle me-3 mb-3 mb-sm-0">Drugs List</div>
          {/*doaNText-ends-here*/}
          <div className="me-3">
            <Link to="/PharmaAddDrustList">
              <button type="button" className="btn doaOrangeBtn px-3">
                Add
              </button>
            </Link>
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 overflow-auto mt-3">
          <table id="table_id" className="w-100">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Drug Name</th>
                <th>Strength</th>
                <th>Drug Form</th>
                <th>Company Name</th>
                <th>Packing Qty</th>
                <th>Rate</th>
                <th>Unit Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name goes here</td>
                <td>200 mg</td>
                <td>Tablet</td>
                <td>Company name</td>
                <td>10</td>
                <td>100</td>
                <td>10.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Name goes here</td>
                <td>200 mg</td>
                <td>Tablet</td>
                <td>Company name</td>
                <td>15</td>
                <td>25</td>
                <td>2.50</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Name goes here</td>
                <td>200 mg</td>
                <td>Tablet</td>
                <td>Company name</td>
                <td>10</td>
                <td>85</td>
                <td>8.50</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Name goes here</td>
                <td>200 mg</td>
                <td>Tablet</td>
                <td>Company name</td>
                <td>10</td>
                <td>145</td>
                <td>14.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}

export default PharmaDrugList;
