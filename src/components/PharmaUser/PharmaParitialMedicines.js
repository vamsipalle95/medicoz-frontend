import React from "react";
import LocsmGreen from "../../images/location-sm-green.png";
import FilterOrange from "../../images/flite-orange.png";
import PercentOrange from "../../images/percentage-orange.png";
import TagOrange from "../../images/tag-orange.png";
import StarOrange from "../../images/star-orange.png";
import Clinic from "../../images/clinic.jpg";
import MyProfile from "../../images/my-profile.png";
import Alaram from "../../images/alarm.png";
import CertBadge from "../../images/certificate-badge.png";
import HospCert from "../../images/hospital-certificate.png";
import StarOutline from "../../images/star-outline.png";
import { useHistory } from "react-router-dom";
import Back from "../../images/back-button-new.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const OrderfullNow = () => (
  <div className="clsexp">
    <div>
      <div className="input-group mt-4" style={{ maxWidth: 306 }}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Select Prescription"
        />
        <button
          className="btn doaOrangeBtn"
          style={{ marginLeft: "-5px" }}
          type="button"
        >
          Browse
        </button>
      </div>
      <div className="w-100 overflow-auto">
        <table className="w-100">
          <tbody>
            <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
              <td className="p-2 text-nowrap">
                <a
                  href="#vpf"
                  data-bs-toggle="modal"
                  className="f10mBlue text-decoration-none"
                >
                  View Valid Prescription Format
                </a>
              </td>
              <td className="p-2" />
              <td className="p-2 f10m text-nowrap">
                Unit Rate
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  (₹)
                </span>
              </td>
              <td className="p-2 f10m">
                Amount
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  (₹)
                </span>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
              <td className="p-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Drug Name"
                />
              </td>
              <td className="p-2">
                <input className="form-control" type="text" placeholder="Qty" />
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                10
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                0.00
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
              <td className="p-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Drug Name"
                />
              </td>
              <td className="p-2">
                <input className="form-control" type="text" placeholder="Qty" />
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                10
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                0.00
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
              <td className="p-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Drug Name"
                />
              </td>
              <td className="p-2">
                <input className="form-control" type="text" placeholder="Qty" />
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                10
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                0.00
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #E1DCDC" }}>
              <td className="p-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Drug Name"
                />
              </td>
              <td className="p-2">
                <input className="form-control" type="text" placeholder="Qty" />
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                10
              </td>
              <td className="p-2 f10m">
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                0.00
              </td>
            </tr>
            <tr>
              <td className="p-2" />
              <td className="p-2 text-end">
                <button type="button" className="btn doaOrangeBtn px-4">
                  Add
                </button>
              </td>
              <td className="p-2" />
              <td className="p-2 doaNText text-nowrap">
                Total:{" "}
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  ₹
                </span>
                0.00
                <br />
                (Without discount)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*table-ends-here*/}
      <div className="w-100 text-end mt-3">
        <Link to="/DeliverMode">
          <button type="button" className="btn doacBtn px-4">
            Upload &amp; Place Order
          </button>
        </Link>
      </div>
    </div>
  </div>
);

function PharmaOrderPartialPresc() {
  const history = useHistory();
  return (
    <div>
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
      {/*modals-ends-here*/}

      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="w-100 d-flex flex-wrap align-items-center p-3 mb-2 mpGrayBox">
              <div className="mpTitle me-4 mb-2">
                <img src={Back} alt="back" onClick={() => history.goBack()} />
                Balaji Medicals
              </div>
              {/*doaNText-ends-here*/}
              <div className="f10m mb-2">
                <img src={LocsmGreen} alt="location" className="me-2" />
                Begumpet, Hyderabad
              </div>
            </div>
            {/*graybox-ends-here*/}
            <div
              className="p-3"
              style={{ background: "#F2F7F7", borderRadius: 5 }}
            >
              <div className="w-100 d-flex flex-wrap align-items-center">
                <p className="f12sbTeal mb-2 me-4">
                  <img src={FilterOrange} alt="filter" className="me-2" />
                  Home Delivery Available
                </p>
                <p className="f12sbTeal mb-2 me-4">
                  <img src={PercentOrange} alt="orange" className="me-2" />
                  Discount Upto 20%
                </p>
                <p className="mb-2 me-4">
                  <a href="#" className="f11sbBlue text-decoration-none">
                    <img src={TagOrange} alt="tagOrange" className="me-2" />
                    Offers (2)
                  </a>
                </p>
                <p className="mb-2">
                  <Link
                    to="/PharmaCustomerReivews"
                    className="f11sbBlue text-decoration-none"
                  >
                    <img src={StarOrange} alt="orange" className="me-2" />
                    3/5 Rating
                  </Link>
                </p>
              </div>
              <div className="w-100 d-flex flex-wrap align-items-center">
                <p className="f10m mb-2 me-4">Home Delivery within 3 KM FREE</p>
                <p className="f10m mb-2 me-4">
                  Home Delivery within 8Km:{" "}
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    ₹
                  </span>
                  50/-
                </p>
                <p className="f10m mb-2">
                  Minimum order amount for home delivery:{" "}
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    ₹
                  </span>
                  300/-
                </p>
              </div>
            </div>
            {/*light-green-box-ends-here*/}
            <div className="w-100 tabsOrange mt-4 p-3 p-md-0">
              <nav>
                <div
                  className="nav nav-tabs border-0"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Order Medicines
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#offers"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Offers
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    About the Store
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="order"
                  role="tabpanel"
                >
                  <div className="form-check form-check-inline mt-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Order Full Prescription
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="options"
                      id="option2"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="option2">
                      Order Partial Prescription
                    </label>
                  </div>

                  <OrderfullNow />
                </div>
                {/*tabpane-1-ends-here*/}
                <div className="tab-pane fade" id="offers" role="tabpanel">
                  <div className="w-100 d-flex flex-wrap align-items-flex-start mt-3">
                    <div className="draCard1 m-2 p-3">
                      <div className="w-100 mpText mb-3">
                        Title of the offer goes here Lorem ipsum dore
                        consectetur adipiscing elit.
                      </div>
                      <div className="w-100 mpText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas quis sapien tristique, pellentesque velit ac,
                        pellentesque dolor. Sed lacinia bibendum eleifend. Nulla
                        commodo, ante vel venenatis laoreet, quam ex rhoncus
                        eros, non tincidunt metus ipsum scelerisque dui. Integer
                        erat dui, sodales eget magna sed, ullamcorper bibendum
                        leo. Donec non rutrum libero. Proin est sapien, egestas
                        ut viverra eget, commodo vitae ipsum. Donec et magna
                        quis tellus interdum dictum et non erat. Integer
                        ullamcorper ex arcu, volutpat accumsan quam sagittis at.
                        Etiam feugiat eros sed odio blandit gravida. Integer
                        ultrices non velit non eleifend.
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 m-2 p-3">
                      <img src={Clinic} alt="clinic" className="w-100" />
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 m-2 p-3">
                      <div className="w-100 mpText mb-3">
                        Title of the offer goes here Lorem ipsum dore
                        consectetur adipiscing elit.
                      </div>
                      <div className="w-100 mpText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas quis sapien tristique, pellentesque velit ac,
                        pellentesque dolor. Sed lacinia bibendum eleifend. Nulla
                        commodo, ante vel venenatis laoreet, quam ex rhoncus
                        eros, non tincidunt metus ipsum scelerisque dui. Integer
                        erat dui, sodales eget magna sed, ullamcorper bibendum
                        leo. Donec non rutrum libero. Proin est sapien, egestas
                        ut viverra eget, commodo vitae ipsum. Donec et magna
                        quis tellus interdum dictum et non erat. Integer
                        ullamcorper ex arcu, volutpat accumsan quam sagittis at.
                        Etiam feugiat eros sed odio blandit gravida. Integer
                        ultrices non velit non eleifend.
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-2-ends-here*/}
                <div className="tab-pane fade" id="about" role="tabpanel">
                  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle pb-2">
                        <h3 className="mb-0">About Pharmacy</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mpText mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar sic tempor. Sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum…
                      </div>
                      {/*text-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={MyProfile} alt="profile" className="me-2" />
                        <h3 className="mb-0">Pharmacy Details</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div
                        className="w-100 pt-3 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Name</div>
                        <div className="mpText mt-1">Friendly Pharma</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">
                          Pharmacy Registration No.
                        </div>
                        <div className="mpText mt-1">12345 12345</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Phone 1</div>
                        <div className="mpText mt-1">12345 12345</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Phone 2</div>
                        <div className="mpText mt-1">12345 12345</div>
                      </div>
                      <div
                        className="w-100 pt-2 pb-2"
                        style={{ borderBottom: "1px solid #D4D5D5 !important" }}
                      >
                        <div className="doaNText">Email</div>
                        <div className="mpText mt-1">
                          info@friendlypharma.com
                        </div>
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={LocsmGreen} alt="location" className="me-2" />
                        <h3 className="mb-0">Pharma Address</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                        <div className="w-100 text-center">
                          <img src={LocsmGreen} alt="green" />
                        </div>
                      </div>
                      {/*circle-ends-here*/}
                      <div className="w-100 mpText text-center mt-3">
                        A49, First Floor, Indian Airlines Colony, Begumpet,
                        Hyderabad - 13
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={Alaram} alt="alarm" className="me-2" />
                        <h3 className="mb-0">Pharma Timings</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mt-2 overflow-auto">
                        <table className="w-100">
                          <tbody>
                            <tr
                              style={{
                                borderBottom: "1px solid #cecece !important",
                              }}
                            >
                              <td className="mpText pe-2 py-2">9:30 AM</td>
                              <td className="mpText py-2">12:30 PM</td>
                            </tr>
                            <tr
                              style={{
                                borderBottom: "1px solid #cecece !important",
                              }}
                            >
                              <td className="mpText pe-2 py-2">1:30 AM</td>
                              <td className="mpText py-2">8:30 PM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*table-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <img src={CertBadge} alt="badge" className="me-2" />
                        <h3 className="mb-0">Pharmacy Certificate</h3>
                      </div>
                      {/*doacTitle-ends-here*/}
                      <div className="w-100 mt-3">
                        <img src={HospCert} alt="cert" />
                      </div>
                    </div>
                    {/*draCard1-ends-here*/}
                    <div className="draCard1 p-3 m-2">
                      <div style={{ height: 340 }}>
                        <div className="w-100 doacTitle pb-2">
                          <h3 className="mb-0">Ratings &amp; Reviews</h3>
                        </div>
                        {/*doacTitle-ends-here*/}
                        <div className="w-100 mt-3">
                          <img src={StarOrange} alt="star" className="me-2" />
                          <img src={StarOrange} alt="star" className="me-2" />
                          <img src={StarOrange} alt="star" className="me-2" />
                          <img src={StarOrange} alt="star" className="me-2" />
                          <img src={StarOutline} alt="outline" />
                        </div>
                        <a
                          href="#"
                          className="w-100 f11sbBlue text-decoration-none"
                        >
                          10 Rating
                        </a>
                      </div>
                      <div className="w-100 text-center mt-3">
                        <button
                          type="button"
                          className="btn doaOrangeBtn px-3 py-2"
                          onclick="location.href='pharma-landing-customer-ratings-reviews.html';"
                        >
                          View Ratings
                        </button>
                      </div>
                      {/*button-ends-here*/}
                    </div>
                    {/*draCard1-ends-here*/}
                  </div>
                  {/*flexbox-ends-here*/}
                </div>
                {/*tabpane-3-ends-here*/}
              </div>
              {/*tabs-ends-here*/}
            </div>
            {/*tabs-container-ends-here*/}
          </div>
          {/*col-ends-here*/}
          <div
            className="col-12 col-lg-2 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <ul className="timeline">
              <li className="active">
                <p className="f10m">Select Full or Partial Prescription</p>
              </li>
              <li>
                <p className="f10m">Upload Prescription</p>
              </li>
              <li>
                <p className="f10m">
                  If Partial Prescription, Enter Drug and Quantity
                </p>
              </li>
              <li>
                <p className="f10m">Select Delivery Mode</p>
              </li>
              <li>
                <p className="f10m">Select Payment Mode</p>
              </li>
              <li>
                <p className="f10m">Place Order</p>
              </li>
              <li>
                <p className="f10m">Receive Medicines</p>
              </li>
            </ul>
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-ends-here*/}
    </div>
  );
}

export default PharmaOrderPartialPresc;
