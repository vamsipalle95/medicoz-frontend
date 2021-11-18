import React, { Component } from "react";
import HeaderDoctor from "../Header/headerdoctor";
import SidenavDoctor from "../Sidenav/sidenavDoctor";
import Footer from "../Footer/footer";

export default function Doctor() {
  return (
    <div>
      <div className="doctorModule">
        <HeaderDoctor />
        <SidenavDoctor />
        <Footer />
      </div>
    </div>
  );
}
