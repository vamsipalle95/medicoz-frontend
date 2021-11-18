import React, { Component } from "react";
import Dummy from "../../images/dummy.png";
import AgeGreen from "../../images/age-green.png";
import HeightGreen from "../../images/height-green.png";
import WeightGreen from "../../images/weight-green.png";
import BloodGroupGreen from "../../images/blood-group-green.png";
import GenderGreen from "../../images/gender-green.png";
import Backbtn from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";

function AddInsuraceDetails() {
  const history = useHistory();
  return (
    <div>
      <div className="overflow-auto p-md-3 mb-4">
        <div className="draCard2 p-3">
          <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">
              <img
                onClick={() => history.goBack()}
                src={Backbtn}
                alt="bckbtn"
              />{" "}
              Add/Edit My Insurance Details
            </h3>
          </div>
          {/*doacTitle-ends-here*/}
          <div className="w-100 d-flex align-items-center mt-3">
            <div className="doaNText me-2">Record for</div>
            <div className="grayTextBox">Srinivas</div>
          </div>
          {/*flexbox-ends-here*/}
          <div className="w-100 d-flex align-items-baseline mt-3">
            <div>
              <img src={Dummy} alt="dummmy" className="me-3" />
            </div>
            <div>
              <img src={Dummy} alt="dummmy" />
            </div>
          </div>
          {/*flexbox-ends-here*/}
          <button type="button" className="doaOrangeBtn py-1 px-3 mt-3">
            + Upload Insurance Certificate
          </button>
          <form className="w-100 mt-4">
            <div className="doaNText w-100 mb-2">* Type of Insurance</div>
            <select className="form-select w-100">
              <option selected>Select</option>
              <option value={1}>Mediclaim</option>
              <option value={2}>Life Insurance</option>
            </select>
            <div className="doaNText w-100 mt-3 mb-2">* Insurance Co.Name</div>
            <input className="form-control w-100" type="text" required />
            <div className="doaNText w-100 mt-3 mb-2">* Policy Number</div>
            <input className="form-control w-100" type="text" required />

            <div className="doaNText w-100 mt-3 mb-2">* Policy Start Date</div>
            <input className="form-control w-100" type="text" required />

            <div className="doaNText w-100 mt-3 mb-2">* Policy End Date</div>
            <input className="form-control w-100" type="text" required />

            <div className="doaNText w-100 mt-3 mb-2">* Premium Amount(₹)</div>
            <input className="form-control w-100" type="text" required />

            <div className="doaNText w-100 mt-3 mb-2">
              * Premium Payable Basis
            </div>
            <select className="form-select w-100">
              <option selected>Select</option>
              <option value={1}>Monthly</option>
              <option value={2}>Quarterly</option>
              <option value={3}>Half Yearly</option>
              <option value={4}>Yearly</option>
            </select>

            <div className="doaNText w-100 mt-3 mb-2">
              * Policy Coverage Amount(₹)
            </div>
            <input className="form-control w-100" type="text" required />

            <div className="doaNText w-100 mt-3 mb-2">
              * No. of Members Covered
            </div>
            <input className="form-control w-100" type="text" required />

            <div className="doaNText w-100 mt-3 mb-2">
              * Covered Member Names
            </div>
            <input className="form-control w-100" type="text" required />

            <button
              type="submit"
              className="d-block btn doacBtn px-4 mt-4 mx-auto"
            >
              Save
            </button>
          </form>
          {/*form-ends-here*/}
        </div>
        {/*draCard1-ends-here*/}
      </div>

      <div>
        {/*modals-starts-here*/}
        {/*modal-height-starts-here*/}
        <div
          className="modal fade"
          id="height"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <img src={HeightGreen} alt="htgreen" className="me-2" />
                  Height
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <input
                    className="form-control py-2"
                    type="text"
                    placeholder="Height (fts)"
                  />
                </form>
                {/*form-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn">
                  Save
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-height-ends-here*/}
        {/*modal-weight-starts-here*/}
        <div
          className="modal fade"
          id="weight"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <img src={WeightGreen} alt="wtgrn" className="me-2" />
                  Weight
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <input
                    className="form-control py-2"
                    type="text"
                    placeholder="Weight (Kgs)"
                  />
                </form>
                {/*form-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn">
                  Save
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-weight-ends-here*/}
        {/*modal-bg-starts-here*/}
        <div className="modal fade" id="bg" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <img src={BloodGroupGreen} alt="bldgrpgrn" className="me-2" />
                  Blood Group
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <select className="form-select py-2">
                    <option selected>Select Blood Group</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </form>
                {/*form-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn">
                  Save
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-bg-ends-here*/}
        {/*modal-gender-starts-here*/}
        <div
          className="modal fade"
          id="gender"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <img src={GenderGreen} alt="genderGreen" className="me-2" />
                  Gender
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="abFormGroup">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="gender1"
                    autoComplete="off"
                    defaultChecked
                  />
                  <label className="btn py-1 px-3 m-1" htmlFor="gender1">
                    Male
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="gender2"
                    autoComplete="off"
                  />
                  <label className="btn py-1 px-3 m-1" htmlFor="gender2">
                    Female
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="gender3"
                    autoComplete="off"
                  />
                  <label className="btn py-1 px-3 m-1" htmlFor="gender3">
                    Others
                  </label>
                </form>
                {/*form-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn">
                  Save
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-gender-ends-here*/}
        {/*modal-age-starts-here*/}
        <div className="modal fade" id="age" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <img src="images/age-green.svg" className="me-2" />
                  Age
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <input
                    className="form-control py-2"
                    type="text"
                    placeholder="Enter Date Of Birth"
                  />
                </form>
                {/*form-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn">
                  Save
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-age-ends-here*/}
        {/*modal-hc-starts-here*/}
        <div className="modal fade" id="hc" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  <i className="bi bi-chevron-left me-2" />
                  Add/Edit Healt=""h Conditions
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="doaNText w-100">Record for Srinivas</div>
                {/*doaNText-ends-here*/}
                <form className="form d-flex flex-wrap align-items-flex-start mt-3">
                  <div className="fmiTitle mb-2 w-100">Medical conditions</div>
                  <div className="form-check w-50">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option1"
                    />
                    <label className="form-check-label" htmlFor="option1">
                      I am Diabetic
                    </label>
                  </div>
                  <div className="form-check w-50">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option2"
                    />
                    <label className="form-check-label" htmlFor="option2">
                      I have Hypertension (BP)
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option3"
                    />
                    <label className="form-check-label" htmlFor="option3">
                      I have Arthritis
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option4"
                    />
                    <label className="form-check-label" htmlFor="option4">
                      I have Asthma
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option5"
                    />
                    <label className="form-check-label" htmlFor="option5">
                      Kidney problem
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option6"
                    />
                    <label className="form-check-label" htmlFor="option6">
                      Lever problem
                    </label>
                  </div>
                  <div className="doaNText w-100 mt-4 mb-2">Allergies</div>
                  <div className="w-100 d-flex align-items-center">
                    <input className="form-control" type="text" />
                    <button
                      type="button"
                      className="btn btn-sm ms-2 w-25 doaOrangeBtn"
                    >
                      + Add
                    </button>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div className="doaNText w-100 mt-3 mb-2">Aliments</div>
                  <div className="w-100 d-flex align-items-center">
                    <input className="form-control" type="text" />
                    <button
                      type="button"
                      className="btn btn-sm ms-2 w-25 doaOrangeBtn"
                    >
                      + Add
                    </button>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div className="doaNText w-100 mt-3 mb-2">Surgeries</div>
                  <div className="w-100 d-flex align-items-center">
                    <input className="form-control" type="text" />
                    <button
                      type="button"
                      className="btn btn-sm ms-2 w-25 doaOrangeBtn"
                    >
                      + Add
                    </button>
                  </div>
                  {/*flexbox-ends-here*/}
                  <div className="doaNText w-100 mt-4 mb-3">
                    Social History &amp; Habits
                  </div>
                  <div className="form-check w-50">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option7"
                    />
                    <label className="form-check-label" htmlFor="option7">
                      Smoking
                    </label>
                  </div>
                  <div className="form-check w-50">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option8"
                    />
                    <label className="form-check-label" htmlFor="option8">
                      Alcohol drinking
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option9"
                    />
                    <label className="form-check-label" htmlFor="option9">
                      Pan Masala
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option10"
                    />
                    <label className="form-check-label" htmlFor="option10">
                      Tobacco
                    </label>
                  </div>
                  <div className="form-check w-50 mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="option11"
                    />
                    <label className="form-check-label" htmlFor="option11">
                      Junk food
                    </label>
                  </div>
                  <div className="doaNText w-100 mt-4">Family History</div>
                  {/*doaNText-ends-here*/}
                  <div className="w-100 mt-3">
                    <textarea
                      className="form-control shcTextArea"
                      placeholder="Type here"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </form>
                {/*form-ends-here*/}
              </div>
              {/*modal-body-ends-here*/}
              <div className="modal-footer border-0">
                <button type="submit" className="btn fmaBtn mx-auto">
                  Save Healt=""h Concerns
                </button>
              </div>
              {/*modal-footer-ends-here*/}
            </div>
          </div>
        </div>
        {/*modal-hc-ends-here*/}
        {/*modals-ends-here*/}
      </div>

      {/*myPhoneCardCnt-ends-here*/}
      {/*container-ends-here*/}
    </div>
  );
}

export default AddInsuraceDetails;
