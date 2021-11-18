import React, { Component } from 'react';
import Cursor from '../../images/cursor.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Videocall extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Cursor} alt="cursor" className="me-2" />
      <h3 className="mb-0">Select</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="doaNText w-100 mt-3">
      Dr. + Patient
    </div>
    {/*doaNText-ends-here*/}
    <button type="button" className="btn doacBtn px-3 mt-3">Video Call</button>
    <div className="doaNText w-100 mt-4">
      Dr. + Patient+Caretaker
    </div>
    {/*doaNText-ends-here*/}
    <Link to="/AddMember"><button type="button" className="btn doacBtn px-3 mt-3">Conference Video Call</button></Link>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
}

export default Videocall;