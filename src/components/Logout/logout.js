import React, { Component } from 'react';

class logout extends Component {
    render() {
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
        <div className="draCard2 ms-auto me-auto p-3">
            <div className="w-100 doacTitle d-flex align-items-center pb-2">
            <h3 className="mb-0">Login</h3>
            </div>
            <form className="w-100 mt-3">
            <div className="doaNText w-100 mb-3">
            Enter your Mobile Number to Login
            </div>
            <div className="d-flex align-items-center">
                <input className="form-control w-auto" type="text" placeholder="Mobile #" />
                <button type="button" className="btn btn-sm ms-2 w-50 doaOrangeBtn">Send OTP</button>
            </div>
            <input className="form-control w-100 mt-2" type="text" placeholder="OTP" />
            
            <div className="doaConfirm w-100 d-flex align-items-center mt-4">
                
               <button type="submit" className="btn doacBtn px-4">Login</button>
            </div>
            {/*doaConfirm-ends-here*/}
            </form>
            {/*form-ends-here*/}
        </div>
        {/*draCard1-ends-here*/}
</div>
            </div>
        );
    }
}

export default logout;