import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div id="app" className="flex justify-center items-center my-10 flex-col">
      <h1 className="text-5xl p-3 capitalize text-center my-3">
        for better experience Download <br /> Tomato App
      </h1>
      <div className="flex gap-8">
        <img
          className="hover:scale-110 transition duration-150"
          src={assets.play_store}
          alt=""
        />
        <img
          className="hover:scale-110 transition duration-150"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
