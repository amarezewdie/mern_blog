import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, image, description, price }) => {
  const { addToCart, removeCart, cartItems } = useContext(StoreContext);

  return (
    <div className="shadow-md p-3">
      <div className="overflow-hidden relative">
        <img className="rounded-lg hover:scale-110" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="w-8 rounded-full absolute bottom-4 right-4"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="w-20 absolute bottom-3 right-4 flex gap-1 items-center bg-gray-300 rounded-full  pr-2">
            <img
              className="w-8"
              onClick={() => removeCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className=" text-white ">{cartItems[id]}</p>
            <img
              className="w-8"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="flex sm:justify-between  items-center gap-10 my-3">
        <p className=" whitespace-nowrap text-start font-semibold">{name}</p>

        <img className="w-[60px]" src={assets.rating_starts} alt="" />
      </div>
      <p className="text-gray-400">{description}</p>
      <p className="text-xl font-semibold">${price}</p>
    </div>
  );
};

export default FoodItem;
