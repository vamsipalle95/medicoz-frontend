import React, { Component } from 'react';
import PencilGreen from '../../images/doctoModule/pencil-green.png';
import Trashgreen from '../../images/doctoModule/trash-green.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';

export default function AddEditArticle() {

  const history = useHistory();
    
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Articles
    </div>
    {/*doaNText-ends-here*/}
    <div>
      <button type="button" className="btn doaOrangeBtn px-3" data-bs-toggle="modal" data-bs-target="#articleEdit">+ Add</button>
    </div>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="articleCard p-3 m-2">
      <div className="mpText w-100">
        Title of the link goes here
        Lorem ipsum dore
      </div>
      <div className="d-flex justify-content-between mt-4">
      <a href="#articleEdit" data-bs-toggle="modal"><img src={PencilGreen} alt="edit" /></a>
        <a href="#articleDelete" data-bs-toggle="modal"><img src={Trashgreen} alt="delete" /></a>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*articleCard-ends-here*/}
    <div className="articleCard p-3 m-2">
      <div className="mpText w-100">
        Title of the link goes here
        Lorem ipsum dore
      </div>
      <div className="d-flex justify-content-between mt-4">
        <a href="#articleEdit" data-bs-toggle="modal"><img src={PencilGreen} alt="edit" /></a>
        <a href="#articleDelete" data-bs-toggle="modal"><img src={Trashgreen} alt="delete" /></a>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*articleCard-ends-here*/}
    <div className="articleCard p-3 m-2">
      <div className="mpText w-100">
        Title of the link goes here
        Lorem ipsum dore
      </div>
      <div className="d-flex justify-content-between mt-4">
      <a href="#articleEdit" data-bs-toggle="modal"><img src={PencilGreen} alt="edit" /></a>
        <a href="#articleDelete" data-bs-toggle="modal"><img src={Trashgreen} alt="delete" /></a>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*articleCard-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>

<div>
  {/*modals-starts-here*/}
  {/*modal-articleEdit-starts-here*/}
  <div className="modal fade" id="articleEdit" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src="images/pencil-green.svg" className="me-2" />Add/Edit New Article Link</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form className="w-100 mt-2">
            <div className="mpText w-100 mb-2">
              * Link Title
            </div>
            <input type="text" className="form-control w-100 mb-3" />
            <div className="mpText w-100 mb-2">
              * Hyperlink
            </div>
            <input type="text" className="form-control w-100" />
            <button type="submit" className="btn doacBtn w-100 mt-4">Save</button>
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-articleEdit-ends-here*/}
  {/*modal-articleDelete-starts-here*/}
  <div className="modal fade" id="articleDelete" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={Trashgreen} alt="trashgreen" className="me-2" />Delete article</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <p className="mpText mb-0">Title of the link goes here
            Lorem ipsum dore</p>
          <button type="submit" className="btn doacBtn w-100 mt-3">Confirm Delete</button>
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-articleDelete-ends-here*/}
  {/*modals-ends-here*/}
</div>

{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
