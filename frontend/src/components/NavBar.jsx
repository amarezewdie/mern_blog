import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import blogLogo from "../assets/blog_logo.png";

const NavBar = () => {
  return (
    <div className=" sticky top-0 w-[100%]  p-3 shadow">
      <div className="flex items-center justify-between w-[90vw] mx-auto ">
        <div className="capitalize">
          <img className="w-12 bg-transparent" src={blogLogo} alt="logo" />
        </div>
        <div className="flex justify-between  gap-10">
          <NavLink to={"/home"}>home</NavLink>
          <NavLink to={"/about"}>about</NavLink>
          <NavLink to={"/contact"}>contact</NavLink>
        </div>
        <div className="flex self-end justify-between gap-4 items-center">
          <FaSearch className="min-w-5" />
          <FaUser className="min-w-5" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
