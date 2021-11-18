import React, { Component, useState } from "react";
import SignUpLogo from "../../images/signup-logo.png";
import Comment from "../../images/comment.png";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import DrBg from "../../images/dr-bg.png";

export default function DrSignUp() {

  const history = useHistory()
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')
  const [ gender, setGender ] = useState()
  const [ mobileNumber, setMobileNumber ] = useState('')
  const [ checkbox, setCheckBox ] = useState(false)


const handleChange=(e)=>{
  setGender(e.target.value)
}
function toggle(value){
  return !value
}

const onSubmit =()=>{
  fetch('http://localhost:8080/api/signup',{
    method:"Post",
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      firstName,
      lastName,
      gender,
      email,
      password,
      mobileNumber,
      checkbox
    })
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.status != "failed"){
      console.log(data)
      history.push('/SendOTP')
    }else{
      console.log(data)
    }
  }).catch(err=>{console.log(err)})
}
  return (
    <div>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-12 col-lg-6 p-3" style={{ height: "100%" }}>
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 600, marginTop: "2%" }}
            >
              <div className="w-100">
                <img src={SignUpLogo} alt="signUplogo" />
              </div>
              <div className="w-100 p20sb text-center mt-3">
                Signup Now - <span style={{ color: "#068975" }}>FREE</span>
              </div>
              <div className="w-100 d-lg-flex mt-5">
                <div className="w-100 mb-3 me-lg-3">
                  <label className="p18sb">* First Name</label>
                  <input type="text" className="form-control mt-2" value={firstName} onChange = {(e)=>setFirstName(e.target.value)} required />
                </div>
                <div className="w-100 mb-3">
                  <label className="p18sb">* Last Name</label>
                  <input type="text" className="form-control mt-2" value={lastName} onChange = {(e)=>setLastName(e.target.value)} required />
                </div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-lg-flex">
                <div className="w-100 mb-3 me-lg-3">
                  <label className="p18sb">* Email ID</label>
                  <input type="email" className="form-control mt-2" value={email} onChange = {(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="w-100 form-group mb-3">
                  <label className="p18sb">* Create Password</label>
                  <div className="input-group mt-2" id="show_hide_password">
                    <input className="form-control" type="password" value={password} onChange = {(e)=>setPassword(e.target.value)} required />
                    <span className="input-group-text">
                      <a href style={{ color: "#F18F01" }}>
                        <i className="bi bi-eye ms-2 mt-2" aria-hidden="true" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/*flexbox-ends-here*/}
              <div className="w-100 d-lg-flex">
                <div className="w-100 mb-3 me-lg-3">
                  <label className="p18sb">* Gender</label>
                  <select className="form-select mt-2" name='gender' onChange={handleChange} >
                    <option selected>Select</option>
                    <option value='Male' >Male</option>
                    <option value='Female'>Female</option>
                    <option value='Others'>Others</option>
                  </select>
                </div>
                <div className="w-100 mb-3 me-lg-3">
                  <label className="p18sb">* Mobile Number</label>
                  <input type="text" className="form-control mt-2" value={mobileNumber} onChange = {(e)=>setMobileNumber(e.target.value)} required />
                </div>
              </div>
              <div className="w-100 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checkbox={checkbox}
                  onChange={()=>setCheckBox(toggle)}
                />
                <label
                  className="form-check-label p14"
                  htmlFor="flexCheckDefault"
                >
                  Receive promotional offers and tailored communication from
                  Medicoz
                </label>
              </div>
              <div className="p12 mt-2">
                By signing up,{" "}
                <a href="#" className="p12Orange text-decoration-none">
                  i agree to Terms
                </a>
              </div>
              <div className="w-100 text-center mt-4">
                {/* <Link to="/SendOTP"> */}
                  {/* {" "} */}
                  <button type="button" className="btn btnOrangePill px-4" onClick= { ()=>onSubmit()} >
                    Send OTP
                  </button>
                {/* </Link> */}
              </div>
              <div className="w-100 text-center p12 mt-4">
                Already have an account?{" "}
                <Link to="/" className="p12Orange text-decoration-none">
                  Log in
                </Link>
              </div>
            </div>
            {/*fixed-width-box-ends-here*/}
          </div>
          {/*col-ends-here*/}
          <div
            className="col-12 col-lg-6 p-3"
            style={{
              height: "100%",
              backgroundColor: "#068975",
              backgroundImage: `url(${DrBg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "80%",
            }}
          >
            <div
              className="mx-auto"
              style={{ width: "100%", maxWidth: 600, marginTop: "15%" }}
            >
              <div className="w-100 p34sbOrange">Doctors Love Medicoz</div>
              <div className="w-100 mt-3">
                <img src={Comment} alt="comment" />
              </div>
              {/*carousel-starts-here*/}
              <div
                id="testimonials"
                className="carousel slide mt-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently,
                      <br />
                      Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Dr.Pritam, Nice Hospitals</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                  <div className="carousel-item">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently,
                      <br />
                      Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Dr.Pritam, Nice Hospitals</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                  <div className="carousel-item">
                    <div className="w-100 p16White">
                      We Plan our day more efficiently,
                      <br />
                      Thank you Medicoz
                    </div>
                    <div className="w-100 p16White mt-2">
                      <i>Dr.Pritam, Nice Hospitals</i>
                    </div>
                  </div>
                  {/*carousel-item-ends-here*/}
                </div>
                {/*carousel-inner-ends-here*/}
                <div className="carousel-indicators mx-auto my-3">
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                  />
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={1}
                    className
                  />
                  <button
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide-to={2}
                    className
                  />
                </div>
              </div>
              {/*carousel-ends-here*/}
            </div>
            {/*fixed-width-ends-here*/}
          </div>
          {/*col-ends-here*/}
        </div>
        {/*row-ends-here*/}
      </div>
      {/*container-fluid-ends-here*/}
    </div>
  );
}
