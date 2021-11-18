import React from "react";
import Back from "../../images/back-button-new.png";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function UserLogin() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/PharmaSubscription");
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-12 col-lg-9 mb-3 mx-lg-2 bg-white p-3"
            style={{ border: "1px solid #EAEAEA", borderRadius: 8 }}
          >
            <div className="w-100 d-flex flex-wrap align-items-center p-3 mb-2 mpGrayBox">
              <div className="mpTitle me-4 mb-2">
                <img src={Back} alt="back" onClick={() => history.goBack()} />
                Signup/Login
              </div>
              <div className="w-100 text-end mt-4">
                <Link to="/PharmaSubscription">
                  {" "}
                  <button type="button" className="btn doaOrangeBtn">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
