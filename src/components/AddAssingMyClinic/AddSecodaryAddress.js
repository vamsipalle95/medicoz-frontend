import React, { Component } from 'react';
import profile from '../../images/doctoModule/profile-1-sm.png';
import Anitha from '../../images/doctoModule/anitha-sm.png';
import Trash from '../../images/doctoModule/trash-green.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';



export default function AddSecodaryAddress(){
    const history = useHistory()
        return (
            <div>
                <div className="overflow-auto p-md-3  mb-4">
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start">
    <div className="draCard2 m-2 p-3">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} />Add Secondary Doctor</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <form className="w-100 mt-4">
        <div className="mpText w-100 mb-2">
          * Full name
        </div>
        <input className="form-control w-100" type="text" placeholder required />
        <div className="mpText w-100 mt-3 mb-2">
          * Email
        </div>
        <input className="form-control w-100" type="email" required />
        <div className="mpText w-100 mt-3 mb-2">
          * Mobile
        </div>
        <input className="form-control w-100" type="text" required />
        <div className="f10m w-100 mt-3">
          Invitee Dr. will receive an email invitation to be 
          added underthis clinic (Krupa Clinic)
        </div>
        <button type="button" className="d-block btn doaOrangeBtn mt-4 mx-auto">Send Invitation</button>
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
