import React, { Component } from "react";
import Header from "../Header/header";
import Sidenav from "../Sidenav/sidenav";
import Footer from "../Footer/footer";

class Patient extends Component {
  render() {
    return (
      <div>
        <div className="patientModule">
          <Header />
          <Sidenav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Patient;
