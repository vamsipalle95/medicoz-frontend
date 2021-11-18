import React, { Component } from 'react';
import Dashboard from '../../images/doctoModule/dashboard.png';


class DoctorDashboard extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 ms-lg-3 mb-4">
                <div className="draCard1 m-2 p-3">
                    <div className="w-100 doacTitle mb-3 pb-2">
                    <h3 className="mb-0"><img src={Dashboard} className="me-2" alt="dashboard"/>
                                Dashboard Under Progress</h3>
                    </div>
                    {/*doacTitle-ends-here*/}
                    <div className="walletCircle d-flex flex-wrap align-content-center text-center mt-4 mx-auto">
                    </div>
                    {/*circle-ends-here*/}
                </div>
                {/*drHospitalCard-ends-here*/}
                </div>
                {/*myPhoneCardCnt-ends-here*/}

                            </div>
        );
    }
}

export default DoctorDashboard;