import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <div className="flex justify-between max-w-screen-lg mx-auto items-center p-2 ">
      <div>
        <img className="w-20" src={assets.logo} alt="" />
      </div>
      <div>
        <img className="w-10" src={assets.profile_image} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
