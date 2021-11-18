import React, { Component } from 'react';
import Dummy from '../../images/dummy.png';
import BackBtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddEditTestReports() {
 const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard1 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="bktbn" /> Add/Edit Test Reports</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 d-flex align-items-center mt-3">
      <div className="doaNText me-2">
        Record for
      </div>
      <div className="grayTextBox">
        Srinivas
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <div className="w-100 d-flex align-items-baseline mt-3">
      <div>
        <img src={Dummy} alt='dummy' className="me-3" />
      </div>
      <div>
        <img src={Dummy} alt='dummy' />
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <button type="button" className="doaOrangeBtn py-1 px-3 mt-3">+ Add</button>
    <form className="w-100 mt-4">
      <div className="doaNText w-100 mb-2">
        *Record date
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="doaNText w-100 mt-3 mb-2">
        *Test Name
      </div>
      <input className="form-control w-100" type="text" required />
      <div className="doaNText w-100 mt-3 mb-2">
        Record Doctor's Name
      </div>
      <input className="form-control w-100" type="text" />
      <textarea className="form-control w-100 mt-3" rows={3} placeholder="Additional Notes" defaultValue={""} />
      <button type="submit" className="d-block btn doacBtn px-4 mt-4 mx-auto">Upload Test Report</button>
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
