import React, { Component } from 'react';
import {useHistory} from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';
export default function AddEducation() {
  const history = useHistory();
  
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Backbtn} onClick={() => history.goBack()} alt="backbutton"/> Education</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="w-100 d-flex mt-3">
          <div className="me-3">
            <div className="mpText mb-2">
              * Degree
            </div>
            <input className="form-control" type="text" required />
          </div>
          <div>
            <div className="mpText mb-2">
              * Year
            </div>
            <input className="form-control" type="text" required />
          </div>
        </div>
        {/*flexbox-ends-here*/}
        <div className="mpText w-100 mt-3 mb-2">
          * University/ College Name
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="w-100 d-flex mt-4">
          <button type="submit" className="btn doacBtn w-75 px-4 me-3">Save</button>
          <button type="button" className="btn doacBtn w-auto px-4">+Add</button>
        </div>
        {/*flexbox-ends-here*/}
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
             