import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./SignUp.css";
import image from "../../images/authPageSide.png"

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submitForm = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
          <img src={logo} alt="" className="w-[200px]" />
          <form className="w-[full] mt-[60px]" onSubmit={submitForm}>
            <div className="inputBox">
              <input required onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" placeholder="Username" />
            </div>
            <div className="inputBox">
              <input required onChange={(e) => {setName(e.target.value)}} value={name} type="text" placeholder="Name" />
            </div>
            <div className="inputBox">
              <input required onChange={(e) => {setEmail(e.target.value)}} value={email} type="text" placeholder="Email" />
            </div>
            <div className="inputBox">
              <input required onChange={(e) => {setPwd(e.target.value)}} value={pwd} type="text" placeholder="Password" />
            </div>
            <p className="text-[gray]">Already have an account? <Link to="/login" className="loginText">login</Link></p>
            <button className="btnBlue w-full mt-[20px] text-center">Sign Up</button>
          </form>
        </div>
        <div className="right w-[55%]">
            <img src={image} alt="" className="h-[100vh] w-[100%] object-cover" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
