import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function SelectPatient() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
        {/*flexbox-ends-here*/}
        <div className="w-100 tabsOrange mt-4">
          <div className="w-100 d-flex flex-wrap mb-3 align-items-baseline p-3 mt-3 mpGrayBox">
            <div className="doaNText me-3">Dr.Name Appointments</div>
            {/*doaNText-ends-here*/}
            <select className="form-select w-auto bg-white">
              <option selected>Dr.Prasad (GP)</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            {/*select-ends-here*/}
          </div>

          {/*tabpane-1-ends-here*/}
          <nav>
            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#pq"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Patient Que
              </button>
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#ba"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Book Appointment
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#gb"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Generate Bill
              </button>
            </div>
          </nav>

          <div className="draCard2 p-3 mt-4">
            <form className="w-100">
              <div className="w-100 doacTitle pb-2 mb-3">
                <h3 className="mb-0">Select Patient</h3>
              </div>
              <div className="mpText w-100 mb-2">
                Search &amp; Select Patient
              </div>
              <input className="form-control w-100" type="search" />
              <div className="w-100 doacTitle pb-2 my-3">
                <h3 className="mb-0">Or Add New Patient</h3>
              </div>
              <div className="mpText w-100 mt-3 mb-2">* First Name</div>
              <input className="form-control w-100" type="text" required />
              <div className="mpText w-100 mt-3 mb-2">*Last Name</div>
              <input className="form-control w-100" type="text" required />
              <div className="mpText w-100 mt-3 mb-2">* Gender</div>
              <div className="abFormGroup">
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="male"
                  autoComplete="off"
                />
                <label className="btn py-1 px-3 m-1" htmlFor="male">
                  Male
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="female"
                  autoComplete="off"
                />
                <label className="btn py-1 px-3 m-1" htmlFor="female">
                  Female
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="others"
                  autoComplete="off"
                />
                <label className="btn py-1 px-3 m-1" htmlFor="others">
                  Others
                </label>
              </div>
              <div className="mpText w-100 mt-3 mb-2">* Mobile</div>
              <input className="form-control w-100" type="text" required />
              <div className="mpText w-100 mt-3 mb-2">* Age</div>
              <input className="form-control w-100" type="text" required />
              <div className="mpText w-100 mt-3 mb-2">City/Dist</div>
              <input className="form-control w-100" type="text" />
              <div className="mpText w-100 mt-3 mb-2">Mandal/Village</div>
              <input className="form-control w-100" type="text" />
              <div className="mpText w-100 mt-3 mb-2">Locality</div>
              <input className="form-control w-100" type="text" />
              <div className="w-100 text-end mt-4">
                <button
                  type="submit"
                  className="btn doabBtn me-2"
                  onClick={() => history.goBack()}
                >
                  Back
                </button>
                <Link to="/ConfirmAppointment">
                  <button type="submit" className="btn doaOrangeBtn">
                    + Add
                  </button>
                </Link>
              </div>
            </form>
            {/*form-ends-here*/}
          </div>
          {/*card-ends-here*/}
        </div>
      </div>
      {/*tabs-ends-here*/}
    </div>
  );
}
