import React, { Component } from 'react';
import Pencil from '../../images/doctoModule/pencil-green.png';
import TrashGreen from '../../images/doctoModule/trash-green.png';
import { useHistory } from 'react-router-dom';
import Backbtn from '../../images/back-button-new.png';

export default function MySymptomsList() {
  const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> My Symptoms List</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <form className="w-100 mt-2">
      <div className="w-100 text-end mb-2">
        <a href="#bulkUpload" className="f10mBlue text-decoration-none" data-bs-toggle="modal">Bulk Upload My Symptoms List</a>
      </div>
      <div className="w-100 f10sb mb-2">
        Add
      </div>
      <input className="form-control w-100" type="text" placeholder="Symptom Name" />
      <button type="button" className="btn doaOrangeBtn w-100 mt-3">Add Symptom</button>
      <div className="w-100 d-flex flex-wrap align-items-center mt-3" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="f10m mb-2 me-3">
          Symptom One
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={Pencil} alt="green" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={TrashGreen} alt='green' /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center pt-2" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="mb-2 me-3">
          <input className="form-control w-100" type="text" placeholder="LFT (Liver Function Test)" />
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={Pencil} alt="green" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={TrashGreen} alt='green' /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
      <div className="w-100 d-flex flex-wrap align-items-center" style={{borderBottom: '1px solid #cecece !important'}}>
        <div className="f10m mb-2 me-3">
          Lorem Ipsum
        </div>
        <div className="ms-auto me-3 mb-2">
          <a href><img src={Pencil} alt="green" /></a>
        </div>
        <div className="mb-2">
          <a href><img src={TrashGreen} alt='green' /></a>
        </div>
      </div>
      {/*flexbox-ends-here*/}
    </form>
    {/*form-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>

{/*modal-bulkUpload-starts-here*/}
<div className="modal fade" id="bulkUpload" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0">
      <div className="modal-header">
        <h5 className="modal-title">Bulk Upload</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="w-100 py-2" style={{borderBottom: '1px solid #B5B5B5'}}>
          <a href className="f10mBlue text-decoration-none">Download Template Here</a>
        </div>
        {/*flexbox-ends-here*/}
        <div className="w-100 mpText my-2">* Upload File</div>
        <input type="file" className="form-control w-100" />
        <button type="button" className="btn doacBtn w-100 mt-4" data-bs-dismiss="modal">Upload</button>
      </div>
      {/*modal-body-ends-here*/}
    </div>
  </div>
</div>
{/*modal-bulkUpload-ends-here*/}
{/*modals-ends-here*/}

{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
