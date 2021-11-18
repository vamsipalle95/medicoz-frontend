import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DrLogin from "./DrLogin";
import DrSignUp from "./DrSignUp";
import SendOTP from "./SendOTP";
import DrFillForm from "./DrFillDetails";
import Thankyou from "./Thankyou";

export default function DrAccount() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <Router>
            <Switch>
              <Route exact path="/" component={DrLogin} />
              <Route exact path="/DrSignUp" component={DrSignUp} />
              <Route exact path="/SendOTP" component={SendOTP} />
              <Route exact path="/DrFillForm" component={DrFillForm} />
              <Route exact path="/Thankyou" component={Thankyou} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
