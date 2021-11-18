import React, { Component } from 'react';
import Phone from '../../images/phone-sm.png';
import Mobile from '../../images/mobile.png';
import Download from '../../images/download.png';
import Reload from '../../images/reload-orange.png';
import BackBtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';

export default function ViewOrders() {

  const history = useHistory();
   
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
  <div className="draCard2 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="backbtn" /> My Orders</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 mt-3">
      <p className="mpText mb-1">Order Summary</p>
      <div className="d-flex flex-wrap align-items-center mb-3 pb-2" style={{borderBottom: '1px solid #CECECE !important'}}>
        <p className="mpText mb-0 me-3"><span>Bill #CS0156327</span></p>
        <p className="mpText mb-0">Total: ₹70.62</p>
      </div>
      {/*flexbox-ends-here*/}
      <p className="mpText mb-0">Order Placed</p>
      <p className="mpText mb-4"><span>Wed, 2 April, 10:11 AM</span></p>
      <p className="mpText mb-3">Store Address</p>
    </div>
    {/*text-ends-here*/}
    <div className="w-100 mpGrayBox p-2 mb-4">
      <p className="mpText mb-1"><span>Pharmacy name will go here</span></p>
      <p className="mpText mb-2">
        House number, 1-5-4, Some Nagar,
        Some street, Padma rao nagar,
        Hyderabad - 25
      </p>
      <div className="w-100 d-flex align-items-center">
        <a href="tel:040-123456789" className="text-decoration-none me-3">
          <p className="mpText mb-0"><img src={Phone} alt="phone" className="me-2" />040-123456789</p>
        </a>
        <a href="tel:9848345678" className="text-decoration-none">
          <p className="mpText mb-0"><img src={Mobile} alt="mobile" className="me-2" />9848345678</p>
        </a>
      </div>
      {/*flexbox-ends-here*/}
    </div>
    {/*graybox-ends-here*/}
    <p className="mpText mb-3">4 Item(s) in this shipment</p>
    <div className="w-100 mpGrayBox mb-4 p-2">
      <table>
        <tbody><tr>
            <th className="mpText text-center"><span>Item</span></th>
            <th className="mpText text-center" width="50px"><span>QTY</span></th>
            <th className="mpText text-center" width="80px"><span>MRP Value</span></th>
          </tr>
          <tr>
            <td className="mpText text-center">Lorem ipsum dolor</td>
            <td className="mpText text-center">1</td>
            <td className="mpText text-center">₹10</td>
          </tr>
          <tr>
            <td className="mpText text-center">Lorem ipsum dolor</td>
            <td className="mpText text-center">1</td>
            <td className="mpText text-center">₹50</td>
          </tr>
          <tr>
            <td className="mpText text-center">Lorem ipsum dolor</td>
            <td className="mpText text-center">1</td>
            <td className="mpText text-center">₹60</td>
          </tr>
          <tr>
            <td className="mpText text-center">Lorem ipsum dolor</td>
            <td className="mpText text-center">1</td>
            <td className="mpText text-center">₹70</td>
          </tr>
          <tr>
            <td className="mpText text-center">Lorem ipsum dolor</td>
            <td className="mpText text-center">1</td>
            <td className="mpText text-center">₹20</td>
          </tr>
          <tr>
            <td className="mpText text-center" />
            <td className="mpText text-center" />
            <td className="mpText text-center">₹250</td>
          </tr>
        </tbody></table>
      {/*table-ends-here*/}
    </div>
    {/*graybox-ends-here*/}
    <div className="w-100 d-flex justify-content-center align-items-center">
      <button type="button" className="btn doacBtn me-3"><img src={Download} alt="download" className="me-2" />Download</button>
      <button type="button" className="btn doacBtn"><img src={Reload} alt="reload" className="me-2" />Re Order</button>
    </div>
    {/*button-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}
{/*container-ends-here*/}

            </div>
        );
    }
