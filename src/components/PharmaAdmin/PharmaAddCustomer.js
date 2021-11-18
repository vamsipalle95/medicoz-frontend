import React from "react";
import Back from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";

function PharmaAddCustomer() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        <div className="draCard2 p-3">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">
              <img src={Back} alt="back" onClick={() => history.goBack()} />
              Add / Edit Customer
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <form className="w-100 mt-3">
            <div className="mpText w-100 mb-2">* Full Name</div>
            <input className="form-control w-100" type="text" required />
            <div className="mpText w-100 mt-3 mb-2">* Mobile</div>
            <input className="form-control w-100" type="text" required />
            <div className="mpText w-100 mt-3 mb-2">City/Dist</div>
            <input className="form-control w-100" type="text" required />
            <div className="mpText w-100 mt-3 mb-2">Mandal/Village</div>
            <input className="form-control w-100" type="text" required />
            <div className="mpText w-100 mt-3 mb-2">Locality</div>
            <input className="form-control w-100" type="text" required />
            <div className="mpText w-100 mt-3 mb-2">Street Name</div>
            <input className="form-control w-100" type="text" required />
            <button type="submit" className="btn doaOrangeBtn w-100 mt-4">
              Add
            </button>
          </form>
        </div>
        {/*draCard1-ends-here*/}
      </div>
      {/*myPhoneCardCnt-ends-here*/}
    </div>
  );
}

export default PharmaAddCustomer;
