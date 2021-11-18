import React, { Component } from 'react';
import Aamc from '../../images/aamc.png';
import GreenTrash from '../../images/trash-green.png';
import Save from '../../images/save.png';

export default function RoomsAvailability() {
    
        return (
            <div>
                 <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      Rooms Availability
    </div>
    {/*doaNText-ends-here*/}
  </div>
  {/*gray-box-ends-here*/}
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="draCard1 p-3 m-2">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Aamc} alt="aamce" className="me-2" />Configure Room Types</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <table className="w-100 mt-2">
        <tbody><tr style={{borderBottom: '1px solid #cecece !important'}}>
            <td className="mpText">
              General Ward
            </td>
            <td className="text-end">
              <a href="#"><img src={GreenTrash} alt="trash" /></a>
            </td>
          </tr>
          <tr style={{borderBottom: '1px solid #cecece !important'}}>
            <td className="mpText">
              Twin Sharing
            </td>
            <td className="text-end">
              <a href="#"><img src={GreenTrash} alt="trash" /></a>
            </td>
          </tr>
          <tr style={{borderBottom: '1px solid #cecece !important'}}>
            <td className="mpText">
              Private
            </td>
            <td className="text-end">
              <a href="#"><img src={GreenTrash} alt="trash" /></a>
            </td>
          </tr>
          <tr style={{borderBottom: '1px solid #cecece !important'}}>
            <td className="mpText">
              ICU   
            </td>
            <td className="text-end">
              <a href="#"><img src={GreenTrash} alt="trash" /></a>
            </td>
          </tr>
        </tbody></table>
      <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Add Room Type" />
        <button className="btn doaOrangeBtn" type="button" id="button-addon2">+</button>
      </div>
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard1 p-3 m-2">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Aamc} alt="aamce" className="me-2" />General Ward</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">20</div>
      </div>
      {/*circle-ends-here*/}
      <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Update Availability" />
        <button className="btn doaOrangeBtn" type="button" id="button-addon2"><img src={Save} alt="save" /></button>
      </div>
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard1 p-3 m-2">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Aamc} alt="aamce" className="me-2" />Twin Sharing</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">5</div>
      </div>
      {/*circle-ends-here*/}
      <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Update Availability" />
        <button className="btn doaOrangeBtn" type="button" id="button-addon2"><img src={Save} alt="save"/></button>
      </div>
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard1 p-3 m-2">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Aamc} alt="aamce" className="me-2" />Private</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">12</div>
      </div>
      {/*circle-ends-here*/}
      <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Update Availability" />
        <button className="btn doaOrangeBtn" type="button" id="button-addon2"><img src={Save} alt="save" /></button>
      </div>
    </div>
    {/*draCard1-ends-here*/}
    <div className="draCard1 p-3 m-2">
      <div className="w-100 doacTitle d-flex align-items-center pb-2">
        <h3 className="mb-0"><img src={Aamc} alt="aamce" className="me-2" />ICU</h3>
      </div>
      {/*doacTitle-ends-here*/}
      <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
        <div className="w-100 f16sb">6</div>
      </div>
      {/*circle-ends-here*/}
      <div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Update Availability" />
        <button className="btn doaOrangeBtn" type="button" id="button-addon2"><img src={Save} alt="save" /></button>
      </div>
    </div>
    {/*draCard1-ends-here*/}
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
   
            </div>
        );
    }
