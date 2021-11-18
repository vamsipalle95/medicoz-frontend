import React, { Component } from "react";
import Fb from "../../images/fb.png";
import Insta from "../../images/instagram.png";
import Twitter from "../../images/twitter.png";

class footer extends Component {
  render() {
    return (
      <div>
        <>
          <div className="footer_sect">
            {/*footer-starts-here*/}
            <div className="container-fluid py-4 footer">
              <div className="container">
                <div className="row">
                  {/*col-ends-here*/}

                  <div className="col-12 col-md-3">
                    <a href="/">About Us</a>
                    <br />
                    <a href="/">FAQ's</a>
                    <br />
                    <a href="/">Advertise with us</a>
                    <br />
                    <a href="/">Contact Us</a>
                    <br />
                    <a href="/">Terms & Conditions</a>
                    <br />
                    <a href="/">Privacy Policy</a>
                    <br />
                    <a href="/">Cookies Policy</a>
                  </div>

                  <div className="col-12 col-md-3">
                    <a href="/">Payment Policy</a>
                    <br />
                    <a href="/">FAQ's</a>
                    <br />
                    <a href="/">Refund Policy</a>
                    <br />
                    <a href="/">Blogs</a>
                    <br />
                    <a href="/">Articles</a>
                    <br />
                    <a href="/">Press & Media</a>
                    <br />
                    <a href="/">Testimonials</a>
                    <br />
                    <a href="/">Social Media</a>
                  </div>
                  <div className="col-12 col-md-3">
                    <a href="/">Doctor Login</a>
                    <br />
                    <a href="/">Hospital Login</a>
                    <br />
                    <a href="/">Poly-Clinic Login</a>
                    <br />
                    <a href="/">Pharmacy Login</a>
                    <br />
                    <a href="/">Diagnostic Lab Login</a>
                    <br />
                    <a href="/">Remote Partner Login</a>
                  </div>
                  {/*col-ends-here*/}
                  <div className="col-12 col-md-3">
                    <a href="/">Medical Co. Login</a>
                    <br />
                    <a href="/">Medical Rep Login</a>
                    <br />
                    <a href="/">Dr.Assistant Login</a>
                    <br />
                    <a href="/">Receptionist Login</a>
                    <br />
                    <a href="/">Pharma Delivery Staff Login</a>
                    <br />
                    <a href="/">Lab Home Sample Collection Staff Login</a>
                  </div>
                  {/*col-ends-here*/}

                  {/*col-ends-here*/}
                  {/* <div className="col-12 col-md-3">
                    <h3 className="pb-2">Follow us on</h3>
                    <div className="d-flex flex-row">
                      <a href="/" className="me-1">
                        <img src={Fb} width="24px" alt="fb" />
                      </a>
                      <a href="/" className="me-1">
                        <img src={Insta} width="24px" alt="instagram" />
                      </a>
                      <a href="/" className="me-1">
                        <img src={Twitter} width="24px" alt="twitter" />
                      </a>
                    </div>
                  </div> */}
                  {/*col-ends-here*/}
                </div>

                <div className="row">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="">
                      <p>© Medicoz 2021</p>
                    </div>

                    <div className="">
                      <h3 className="pb-2">Follow us on</h3>
                      <div className="d-flex flex-row">
                        <a href="/" className="me-1">
                          <img src={Fb} width="24px" alt="fb" />
                        </a>
                        <a href="/" className="me-1">
                          <img src={Insta} width="24px" alt="instagram" />
                        </a>
                        <a href="/" className="me-1">
                          <img src={Twitter} width="24px" alt="twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*row-ends-here*/}
              </div>
              {/*container-ends-here*/}
            </div>
            {/*footer-ends-here*/}
          </div>
        </>
      </div>
    );
  }
}

export default footer;
