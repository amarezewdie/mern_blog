import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col max-w-[200px] gap-4 h-[100vh] border-r-2 items-start mx-4 py-5">
      <NavLink
        to={"/add"}
        className="flex gap-4 border-2 border-r-0 p-2 pr-0 w-full "
      >
        <img className="w-3 rounded-full" src={assets.add_icon} alt="" />
        <p>add items</p>
      </NavLink>
      <NavLink
        to={"/list"}
        className="flex gap-4 border-2 border-r-0 p-2 pr-0 w-full"
      >
        <img className="w-3 rounded-full" src={assets.order_icon} alt="" />
        <p>list items</p>
      </NavLink>
      <NavLink
        to={"/order"}
        className="flex gap-4 border-2 border-r-0 p-2 pr-0 w-full"
      >
        <img className="w-3 rounded-full" src={assets.order_icon} alt="" />
        <p>order items</p>
      </NavLink>
    </div>
  );
};

export default SideBar;
