import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Login.css";
import image from "../../images/authPageSide.png"

const Login = () => {
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
              <input required onChange={(e) => {setEmail(e.target.value)}} value={email} type="text" placeholder="Email" />
            </div>
            <div className="inputBox">
              <input required onChange={(e) => {setPwd(e.target.value)}} value={pwd} type="text" placeholder="Password" />
            </div>
            <p className="text-[gray]">Don't have an account? <Link to="/signup" className="loginText">Sign up</Link></p>
            <button className="btnBlue w-full mt-[20px] text-center">Login</button>
          </form>
        </div>
        <div className="right w-[55%]">
            <img src={image} alt="" className="h-[100vh] w-[100%] object-cover" />
        </div>
      </div>
    </>
  );
};

export default Login;
