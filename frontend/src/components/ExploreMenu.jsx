import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="exploreMenu" className="max-w-screen-lg mx-auto p-10">
      <div>
        <h1 className="text-3xl capitalize font-semibold p-3">
          explore our menu
        </h1>
        <p>
          Whatever you’re craving, we’ve got it! Order from a wide variety of
          restaurants, customize your meal, and get it delivered fast—just the
          way you like it
        </p>
      </div>
      <div className="scroll-container overflow-x-scroll  flex gap-4 p-3 mx-3">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((perv) =>
                  perv === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center capitalize "
            >
              <img
                src={item.menu_image}
                alt=""
                className={`min-w-20 cursor-pointer ${
                  category === item.menu_name
                    ? "border-2 rounded-full p-1 border-red-600"
                    : ""
                }`}
              />
              <p className="text-gray-400 font-semibold cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="w-full h-[2px] bg-gray-500 my-8" />
    </div>
  );
};

export default ExploreMenu;
