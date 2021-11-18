import React, { Component } from 'react';
import Like from '../../images/doctoModule/like.png';
import LocsmGreen from '../../images/doctoModule/location-sm-green.png';
import yashoda from '../../images/doctoModule/yashoda.jpg';

class BulkAppointment extends Component {
    render() {
        return (
            <div>
                <div className="myPhoneCardCnt overflow-auto p-md-3 ms-lg-3 mb-4">
  <div className="w-100 p-3 mpGrayBox">
    <div className="mpTitle me-3 mb-3 mb-sm-0">
      <i className="bi bi-chevron-left me-2" />View My Bulk Appointment Service Providers
    </div>
    {/*doaNText-ends-here*/}
  </div>
  <div className="w-100 d-flex flex-wrap justify-content-center justify-content-md-start align-items-flex-start mt-3">
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Myltispeciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Myltispeciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
    <div className="drOnlineCard m-2 p-3">
      <div className="text-end w-100 drLike">
        <a href="/"><img src={Like} alt="like" /></a>
      </div>
      <div className="mb-3">
        <img src={yashoda} alt="yashoda" />
      </div>
      <div className="w-100 drName">
        <a href="/"><h3 className="mb-0">Hispital name will go here</h3></a>
      </div>
      <div className="w-100 drSp">
        <h3 className="mb-0">Myltispeciality</h3>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-baseline mb-0 drLocation">
        <img src={LocsmGreen} alt="locgreen" className="me-2" />
        <h3 className="mb-0">Begumpet, Hyderabad</h3>
      </div>
      <button type="button" className="btn doacBtn d-block mx-auto mt-4">View Doctors</button>
    </div>
  </div>
  {/*flexbox-ends-here*/}
</div>
{/*myPhoneCardCnt-ends-here*/}

            </div>
        );
    }
}

export default BulkAppointment;