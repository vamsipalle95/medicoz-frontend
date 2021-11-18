import React, { Component } from 'react';
import Help from '../../images/help.png';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class needhelp extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard1 p-3 m-2">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Help} alt="help" className="me-2" />Need Help?</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 abFormGroup mt-3">
      <input type="radio" className="btn-check" name="options" id="option-1" autoComplete="off" defaultChecked />
      <Link to="/OnlineDrNow"><label className="btn py-1 px-3 m-1" htmlFor="option-1">Video Consulting</label></Link>
      <input type="radio" className="btn-check" name="options" id="option-2" autoComplete="off" />
      <label className="btn py-1 px-3 m-1" htmlFor="option-2">Pharmacy</label>
      <input type="radio" className="btn-check" name="options" id="option-3" autoComplete="off" />
      <Link to="/BookAppoinments"><label className="btn py-1 px-3 m-1" htmlFor="option-3">In-Person Consulting</label></Link>
      <input type="radio" className="btn-check" name="options" id="option-4" autoComplete="off" />
      <Link to="/MyHealthRecords"><label className="btn py-1 px-3 m-1" htmlFor="option-4">Health Records</label></Link>
      <input type="radio" className="btn-check" name="options" id="option-5" autoComplete="off" />
      <label className="btn py-1 px-3 m-1" htmlFor="option-5">Diagnostics</label>
    </div>
    <div className="doaNText w-100 mt-3 pb-2 border-bottom">
      FAQ’s
    </div>
    <div className="w-100 accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed px-0 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Have not received my refund
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body p-0">
            Answer goes here
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed px-0 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Some question title will go here
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body p-0">
            Answer goes here
          </div>
        </div>
      </div>
    </div>
    {/*accordion-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
}

export default needhelp;