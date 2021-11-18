import React from 'react';
import Pencil from '../../images/pencil.png';
import Trash from '../../images/trash.png';
import Backbtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';

export default function CurrentMedicationrecords() {
   const history = useHistory(true);
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img onClick={() => history.goBack()} src={Backbtn} alt="backbtn" /> Current Medications List</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 d-flex align-items-center mt-3">
      <div className="doaNText me-2">
        Record for
      </div>
      <div className="grayTextBox">
        Srinivas
      </div>

      <div className="previewCls mt-3 mx-3">
        <p className="doaNText1" data-bs-toggle="modal" data-bs-target="#ViewPopUp">View List</p>
      </div>
    </div>
    {/*flexbox-ends-here*/}
    <form className="w-100 mt-4">
      <div className="doaNText w-100 pb-2 mb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        Morning
      </div>
      <div className="w-100 d-flex align-items-center" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        <div className="mpText">
          zincovit (Syrup) - Before Food
        </div>
        <div className="ms-auto me-3">
          <a href="/"><img src={Pencil} alt="pencil" /></a>
        </div>
        <div>
          <a href="/"><img src={Trash} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex align-items-center" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        <div className="mpText">
          zincovit (Syrup) - After Food
        </div>
        <div className="ms-auto me-3">
          <a href="/"><img src={Pencil} alt="pencil"  /></a>
        </div>
        <div>
          <a href="/"><img src={Trash} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center mt-4">
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Select Type</option>
          <option>Tablet</option>
          <option>Capsule</option>
          <option>Syrup</option>
          <option>Injection</option>
          <option>Ointment</option>
          <option>Cream</option>
          <option>Drops</option>
          <option>Sachet</option>
        </select>
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Select Time</option>
          <option>on Empty Stomach</option>
          <option>Before Food</option>
          <option>After Food</option>
          <option>SOS</option>
        </select>
        <input type="text" className="form-control m-1" placeholder="Enter Medicine" style={{width: '47%'}} />
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Since</option>
          <option>Days</option>
          <option>Weeks</option>
          <option>Months</option>
        </select>
        <input type="text" className="form-control m-1" placeholder="Enter Days" style={{width: '47%'}} />
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 text-end mt-3">
        <button type="button" className="btn doaOrangeBtn">+ Add New</button>
      </div>
      <div className="doaNText w-100 pb-2 mt-3 mb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        Afternoon
      </div>
      <div className="w-100 d-flex align-items-center" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        <div className="mpText">
          zincovit (Syrup) - Before Food
        </div>
        <div className="ms-auto me-3">
          <a href="/"><img src={Pencil} alt="pencil"  /></a>
        </div>
        <div>
          <a href="/"><img src={Trash} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center mt-4">
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Select Type</option>
          <option>Tablet</option>
          <option>Capsule</option>
          <option>Syrup</option>
          <option>Injection</option>
          <option>Ointment</option>
          <option>Cream</option>
          <option>Drops</option>
          <option>Sachet</option>
        </select>
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Select Time</option>
          <option>on Empty Stomach</option>
          <option>Before Food</option>
          <option>After Food</option>
          <option>SOS</option>
        </select>
        <input type="text" className="form-control m-1" placeholder="Enter Medicine" style={{width: '47%'}} />
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Since</option>
          <option>Days</option>
          <option>Weeks</option>
          <option>Months</option>
        </select>
        <input type="text" className="form-control m-1" placeholder="Enter Days" style={{width: '47%'}} />
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 text-end mt-3">
        <button type="button" className="btn doaOrangeBtn">+ Add New</button>
      </div>
      <div className="doaNText w-100 pb-2 mt-3 mb-2" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        Night
      </div>
      <div className="w-100 d-flex align-items-center" style={{borderBottom: '1px solid #B5B5B5 !important'}}>
        <div className="mpText">
          zincovit (Syrup) - After Food
        </div>
        <div className="ms-auto me-3">
          <a href="/"><img src={Pencil} alt="pencil"  /></a>
        </div>
        <div>
          <a href="/"><img src={Trash} alt="trash" /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center mt-4">
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Select Type</option>
          <option>Tablet</option>
          <option>Capsule</option>
          <option>Syrup</option>
          <option>Injection</option>
          <option>Ointment</option>
          <option>Cream</option>
          <option>Drops</option>
          <option>Sachet</option>
        </select>
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Select Time</option>
          <option>on Empty Stomach</option>
          <option>Before Food</option>
          <option>After Food</option>
          <option>SOS</option>
        </select>
        <input type="text" className="form-control m-1" placeholder="Enter Medicine" style={{width: '47%'}} />
        <select className="form-select m-1" style={{width: '47%'}}>
          <option selected>Since</option>
          <option>Days</option>
          <option>Weeks</option>
          <option>Months</option>
        </select>
        <input type="text" className="form-control m-1" placeholder="Enter Days" style={{width: '47%'}} />
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 text-end mt-3">
        <button type="button" className="btn doaOrangeBtn">+ Add New</button>
      </div>
      <button type="submit" className="d-block btn doacBtn px-5 mt-4 mx-auto">Save</button>
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>




<div className="modal fade" id="ViewPopup" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><i className="bi bi-chevron-left me-2" />Current Medication List</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="w-100 f12sbTeal">Morning</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 f12sbTeal mt-3">Afternoon</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 f12sbTeal mt-3">Night</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 20 ML-Before Food-2 Days</div>
          <div className="f10m w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>Zincovit (syrup) 30 ML-After Food-3 Days</div>
          <div className="w-100 text-end mt-4"><button type="button" className="btn doacBtn px-4" data-bs-dismiss="modal">Close</button></div>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
