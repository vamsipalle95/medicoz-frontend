import React, { Component } from 'react';
import Que from '../../images/que.png';
import Speaker from '../../images/speaker.png';
import MicroPhone from '../../images/micro-phone.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class youAreQueue extends Component {
    render() {
        return (
            <div>
                <div className="container px-2 py-5">
  <div className="draCard2 ms-auto me-auto p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src={Que} alt="que" className="me-2" />
      <h3 className="mb-0">Your are in a queue</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="doaNText w-100 mt-3">
      Approximate wait time
    </div>
    {/*doaNText-ends-here*/}
    <div className="clockBox w-100 mt-4 p-3 text-center">
      05:01 Mins
    </div>
    {/*clockBox-ends-here*/}
    <div className="w-100 d-flex align-items-center justify-content-evenly mt-4">
      <button type="button" className="btn doaOrangeBtn">Check audio<img src={Speaker} alt="speakar" className="ms-2" /></button>
      <button type="button" className="btn doaOrangeBtn">Test mic<img src={MicroPhone} alt="micro" className="ms-2" /></button>
    </div>
    {/*flexbox-ends-here*/}
    <Link to="/HealthConcerns"><button type="button" className="btn doacBtn w-100 mt-5">Edit Health Concerns</button></Link>
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*container-ends-here*/}

            </div>
        );
    }
}

export default youAreQueue;