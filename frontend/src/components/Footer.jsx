import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-600 p-4">
      <div className="sm:flex p-6 justify-between gap-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col max-w-[500px]">
          <img className="w-20" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            asperiores assumenda, nemo non inventore nisi molestias expedita
            veniam, libero dolore neque, cupiditate voluptas velit delectus qui
            in nihil aut numquam.
          </p>
          <div className="flex gap-3 my-2">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-xl capitalize">company</h1>
          <p>home</p>
          <p>about us</p>
          <p>delivery</p>
          <p>privacy policy</p>
        </div>
        <div>
          <h1>get in touch</h1>
          <p>+2588999</p>
          <p>contact@tomato.com</p>
        </div>
      </div>
      <hr className="max-w-screen-lg h-[2px] bg-gray-400 mx-auto my-3" />
      <p className="text-center p-3 capitalize">
        © {new Date().getFullYear()} amare tech. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
