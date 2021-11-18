import React, { Component } from 'react';
import Rhino from '../../images/doctoModule/rhino.png';
import HealthFeed from '../../images/doctoModule/new-health-feed.png';
import TrashGreen from '../../images/doctoModule/trash-green.png';
import Backbtn from '../../images/back-button-new.png';
import {useHistory} from 'react-router-dom';


export default function EditHealthFeed() {
  const history = useHistory();
        return (
            <div>
                <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 d-flex flex-wrap align-items-center p-3 mt-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Health Feed
    </div>
    {/*doaNText-ends-here*/}
    <div>
      <button type="button" className="btn doaOrangeBtn px-3" data-bs-toggle="modal" data-bs-target="#healthEdit">+ Add</button>
    </div>
  </div>
  {/*flexbox-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-5">
    <div className="articleCard p-3 m-2">
      <div className="f10bTeal w-100">
        Title of the link goes here
      </div>
      <div className="mpText w-100 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
      </div>
      <div className="w-100 mt-2">
        <img src={Rhino} alt="rihno" />
      </div>
      <div className="w-100 text-end mt-2">
        <a href="/" data-bs-toggle="modal"><img src={TrashGreen} alt="delete" /></a>
      </div>
    </div>
    {/*articleCard-ends-here*/}
    <div className="articleCard p-3 m-2">
      <div className="f10bTeal w-100">
        Title of the link goes here
      </div>
      <div className="mpText w-100 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
      </div>
      <div className="w-100 mt-2">
      <img src={Rhino} alt="rihno" />
      </div>
      <div className="w-100 text-end mt-2">
        <a href="/" data-bs-toggle="modal"><img src={TrashGreen} alt="delete" /></a>
      </div>
    </div>
    {/*articleCard-ends-here*/}
    <div className="articleCard p-3 m-2">
      <div className="f10bTeal w-100">
        Title of the link goes here
      </div>
      <div className="mpText w-100 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
      </div>
      <div className="w-100 mt-2">
      <img src={Rhino} alt="rihno" />
      </div>
      <div className="w-100 text-end mt-2">
        <a href="#" data-bs-toggle="modal"><img src={TrashGreen} alt="delete" /></a>
      </div>
    </div>
    {/*articleCard-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>


<div>
  {/*modals-starts-here*/}
  {/*modal-HealthEdit-starts-here*/}
  <div className="modal fade" id="healthEdit" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={HealthFeed} alt="feed" className="me-2" />New Health Feed</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form className="w-100 mt-2">
            <div className="mpText w-100 mb-2">
              * Health Feed Title
            </div>
            <input type="text" className="form-control w-100 mb-3" />
            <div className="mpText w-100 mb-2">
              * Health Feed Description
            </div>
            <textarea className="form-control w-100 mb-3" rows={3} defaultValue={""} />
            <div className="mpText w-100 mb-2">
              * Upload Image
            </div>
            <input type="file" className="form-control w-100" />
            <button type="submit" className="btn doacBtn w-100 mt-4">Save</button>
          </form>
          {/*form-ends-here*/}
        </div>
        {/*modal-body-ends-here*/}
      </div>
    </div>
  </div>
  {/*modal-HealthEdit-ends-here*/}
  {/*modal-HealthDelete-starts-here*/}
  <div className="modal fade" id="healthdelete" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title"><img src={TrashGreen} alt="trashgreen" className="me-2" />Delete Health feed</h5>
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
  {/*modal-HealthDelete-ends-here*/}
  {/*modals-ends-here*/}
</div>

{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
