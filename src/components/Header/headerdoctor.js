import React, { Component } from "react";
import Logo from "../../images/medicoz-logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function HeaderDoctor() {
  const history = useHistory();
  return (
    <div>
      <div className="header_sect">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={Logo} width="150px" alt="logomedicos" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Work Place
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        onClick={() => history.push("/ConsultantDrAdmin")}
                        className="dropdown-item"
                      >
                        Consultant Doctor
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/*navbar-collapse-ends-here*/}
          </div>
          {/*container-ends-here*/}
        </nav>
        {/*navbar-ends-here*/}

        {/*navbar-ends-here*/}
      </div>
    </div>
  );
}
