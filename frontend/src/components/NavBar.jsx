import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const NavBar = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className=" sticky top-0 mx-20 sm:mx-0 w-[100vw] shadow bg-gray-100 z-20  ">
      <div className="flex items-center justify-between w-[90vw] mx-auto ">
        <Link to={"/"} className="capitalize w-20">
          <img
            className=" bg-transparent w-full"
            src={assets.logo}
            alt="logo"
          />
        </Link>
        <div className=" hidden sm:flex justify-between  gap-4 capitalize ">
          <NavLink to={"/"} className={"flex flex-col items-center p-3"}>
            <a href="#app">home</a>
            <hr className="hidden w-10 h-[1.5px] bg-gray-400" />
          </NavLink>
          <NavLink to={"/menu"} className={"flex flex-col items-center p-3"}>
            <a href="exploreMenu">menu</a>
            <hr className="w-10 h-[1.5px] bg-gray-400 hidden" />
          </NavLink>
          <NavLink to={"/mobile"} className={"flex flex-col items-center p-3"}>
            <a href="exploreMenu">mobile</a>
            <hr className="w-10 h-[1.5px] bg-gray-400 hidden" />
          </NavLink>
          <NavLink to={"/contact"} className={"flex flex-col items-center p-3"}>
            <p>contact</p>
            <hr className="w-10 h-[1.5px] bg-gray-400 hidden" />
          </NavLink>
        </div>

        <div className="flex self-end justify-between gap-4 items-center p-3">
          <img className="w-5 text-white" src={assets.search_icon} alt="" />
          <Link to={"/cart"} className="relative">
            <img className="w-5 text-white" src={assets.basket_icon} alt="" />
            <p className="absolute top-[-8px] right-[-5px] rounded-full bg-red-600 flex items-center justify-center text-[10px] w-3 text-white">
              {getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}
            </p>
          </Link>
          <NavLink
            to={"/sign-in"}
            className="border border-black rounded-full px-3 hover:bg-black transition hover:text-white capitalize"
          >
            sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
