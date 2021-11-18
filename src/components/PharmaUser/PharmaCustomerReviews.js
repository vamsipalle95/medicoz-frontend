import React from "react";

function PharmaCustomerReviews() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="mpTitle w-100 p-3 mpGrayBox">
              Customer Ratings &amp; Reviews
            </div>
            {/*graybox-ends-here*/}
            <div className="w-100 overflow-auto mt-4">
              <table id="table_id" className="w-100">
                <thead>
                  <tr>
                    <th />
                    <th />
                    <th />
                    <th>Rating</th>
                    <th>Testimonial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>15/06/2021</td>
                    <td className="text-nowrap">
                      <a href="#" className="text-decoration-none">
                        Prem Kumar
                      </a>
                    </td>
                    <td>
                      <a href="#" className="text-decoration-none">
                        3/5
                      </a>
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Aenean euismod bibendum
                      laoreet.
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>15/06/2021</td>
                    <td className="text-nowrap">
                      <a href="#" className="text-decoration-none">
                        Jai Ram
                      </a>
                    </td>
                    <td>
                      <a href="#" className="text-decoration-none">
                        2/5
                      </a>
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Aenean euismod bibendum
                      laoreet.
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>15/06/2021</td>
                    <td className="text-nowrap">
                      <a href="#" className="text-decoration-none">
                        Veera Babu
                      </a>
                    </td>
                    <td>
                      <a href="#" className="text-decoration-none">
                        5/5
                      </a>
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Aenean euismod bibendum
                      laoreet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*table-ends-here*/}
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

export default PharmaCustomerReviews;
