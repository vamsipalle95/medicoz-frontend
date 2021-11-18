import React, { Component } from 'react';
import CallGreen from '../../images/call-green.png';
import Myphone from '../../images/my-phone.png';

class content extends Component {
    render() {
        return (
            <div>
                <div className="myPhoneCardCnt overflow-auto p-md-3 my-4">
  <div className="draCard1 p-3">
    <div className="w-100 doacTitle d-flex align-items-center pb-2">
      <img src ={CallGreen} className="me-2" alt="callgreen" />
      <h3 className="mb-0">My Phone</h3>
    </div>
    {/*doacTitle-ends-here*/}
    <div className="w-100 text-center mt-3">
      <img src={Myphone} alt="myphone" />
    </div>
    {/*image-ends-here*/}
    <div className="orangeTextBox px-3 py-2 mt-3 mx-auto">
      Primary member
    </div>
    {/*orangeTextBox-ends-here*/}
    <div className="grayTextBox mt-2 mx-auto">
      Srinivas
    </div>
    {/*grayTextBox-ends-here*/}
    <div className="w-100 doaDuration text-center mt-2">
      UID 123456789
    </div>
    <div className="orangeLargeText text-center mt-2">
      +78480 12345
    </div>
    {/*orangeLargeText-ends-here*/}
    <div className="w-100 text-center mt-3">
      <button type="button" className="btn doacBtn">Change Phone</button>
    </div>
    {/*button-ends-here*/}
  </div>
  {/*draCard1-ends-here*/}
</div>

            </div>
        );
    }
}

export default content;