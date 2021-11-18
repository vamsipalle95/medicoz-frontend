import React from "react";
import { useHistory } from "react-router-dom";
import Backbtn from "../../images/back-button-new.png";

function LabAddTestList() {
  const history = useHistory();

  return (
    <div>
      <div className="d-flex flex-wrap align-items-flex-start overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="draCard2 p-3 m-2">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">
              <img src={Backbtn} alt="back" onClick={() => history.goBack()} />
              Add/Edit Test List
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <form className="w-100 mt-3">
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Test Name"
              required
            />
            <input
              className="form-control w-100 mb-3"
              type="text"
              placeholder="Rate"
              required
            />
            <button
              type="submit"
              className="btn doaOrangeBtn d-block px-5 mx-auto mt-4"
            >
              Add/Save
            </button>
          </form>
        </div>
        {/*draCard1-ends-here*/}
      </div>
      ;
    </div>
  );
}

export default LabAddTestList;
