import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img src={logo} alt="" className="w-[150px] cursor-pointer" />
        </div>
        <div className="links flex items-center gap-2 text-white">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Services</Link>
          <Avatar name="Wim Mostmans" size="40" round="50%" className="cursor-pointer ml-2" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
