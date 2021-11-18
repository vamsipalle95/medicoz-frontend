import React, { Component } from "react";
import SignUpLogo from "../../images/signup-logo.png";
import Comment from "../../images/comment.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <div>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-12 col-lg-6 p-3" style={{ height: "100%" }}>
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 600, marginTop: "15%" }}
            >
              <div className="w-100">
                <img src={SignUpLogo} alt="signUp" />
              </div>
              <div className="w-100 p18sb text-center mt-4">
                Thank you for signing up. We will setup your account and reach
                you out on your registered email shortly
              </div>
              <div className="w-100 text-center p12 mt-5">
                Already have an account?{" "}
                <Link to="/" className="p12Orange text-decoration-none">
                  Log in
                </Link>
              </div>
            </div>
            {/*fixed-width-box-ends-here*/}
          </div>
          {/*col-ends-here*/}
          <div
            className="col-12 col-lg-6 p-3"
            style={{
              height: "100%",
              backgroundColor: "#068975",
              backgroundImage: 'url("images/dr-bg.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "80%",
            }}
          >
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 600, marginTop: "15%" }}
            >
              <div className="w-100 p34sbOrange">Doctors Love Medicoz</div>
              <div className="w-100 mt-3">
                <img src={Comment} alt="comment" />
              </div>
              {/*carousel-starts-here*/}
              <div
                id="testimonials"
                className="carousel slide mt-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently,
                      <br />
                      Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Dr.Pritam, Nice Hospitals</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                  <div className="carousel-item">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently,
                      <br />
                      Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Dr.Pritam, Nice Hospitals</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                  <div className="carousel-item active">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently,
                      <br />
                      Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Dr.Pritam, Nice Hospitals</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                </div>
                {/*carousel-inner-ends-here*/}
                <div className="carousel-indicators mx-auto my-3">
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={0}
                    className
                  />
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={1}
                    className
                  />
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={2}
                    className="active"
                    aria-current="true"
                  />
                </div>
              </div>
              {/*carousel-ends-here*/}
            </div>
            {/*fixed-width-ends-here*/}
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-fluid-ends-here*/}
    </div>
  );
}
