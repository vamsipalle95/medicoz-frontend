import React from 'react';
import BackBtn from '../../images/back-button-new.png';
import { useHistory } from "react-router-dom";

export default function Myphoneedit() {
      const history = useHistory();
        return (
        
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="backbtn"/> My Phone Number</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <form className="w-100 mt-3">
      <div className="doaNText w-100 mb-3">
        Existing Mobile Phone
      </div>
      {/*doaNText-ends-here*/}
      <div className="d-flex align-items-center">
        <input className="form-control w-auto" type="text" placeholder="Mobile #" />
        <button type="button" className="btn btn-sm ms-2 w-50 doaOrangeBtn">Send OTP</button>
      </div>
      {/*flexbox-ends-here*/}
      <input className="form-control w-100 mt-2" type="text" placeholder="OTP" />
      <div className="doaNText w-100 my-3">
        New Mobile Phone
      </div>
      {/*doaNText-ends-here*/}
      <div className="d-flex align-items-center">
        <input className="form-control w-auto" type="text" placeholder="Mobile #" />
        <button type="button" className="btn btn-sm ms-2 w-50 doaOrangeBtn">Send OTP</button>
      </div>
      {/*flexbox-ends-here*/}
      <input className="form-control w-100 mt-2" type="text" placeholder="OTP" />
      <div className="doaConfirm w-100 d-flex align-items-center mt-4">
        <button type="button" className="btn doabBtn ms-auto me-3 px-4">Cancel</button>
        <button type="submit" className="btn doacBtn px-4">Save</button>
      </div>
      {/*doaConfirm-ends-here*/}
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }


