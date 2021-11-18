import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddLanguage() {
    const history = useHistory(); 

        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img onClick={() => history.goBack()} src={Backbtn} alt="backbtn" /> Languages Spoken</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="formNow">
        <input className="form-control w-100 mb-2" type="text" placeholder="search Language" required />
        </div>
        <div className="abFormGroup">
          <input type="checkbox" className="btn-check" name="options" id="english" autoComplete="off" defaultChecked />
          <label className="btn py-1 px-3 m-1" htmlFor="english">English</label>
          <input type="checkbox" className="btn-check" name="options" id="telugu" autoComplete="off" defaultChecked />
          <label className="btn py-1 px-3 m-1" htmlFor="telugu">Telugu</label>
          <input type="checkbox" className="btn-check" name="options" id="tamil" autoComplete="off" defaultChecked />
          <label className="btn py-1 px-3 m-1" htmlFor="tamil">Tamil</label>
          <input type="checkbox" className="btn-check" name="options" id="kannada" autoComplete="off" />
          <label className="btn py-1 px-3 m-1" htmlFor="kannada">Kannada</label>
          <input type="checkbox" className="btn-check" name="options" id="oria" autoComplete="off" />
          <label className="btn py-1 px-3 m-1" htmlFor="oria">Oria</label>
          <input type="checkbox" className="btn-check" name="options" id="hindi" autoComplete="off" />
          <label className="btn py-1 px-3 m-1" htmlFor="hindi">Hindi</label>
        </div>
        <button type="submit" className="btn doacBtn w-100 px-4 mt-4">Save</button>
      </form>
      {/*form-ends-here*/}
    </div>
    {/*draCard1-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
