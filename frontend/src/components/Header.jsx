import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 ">
      <div
        className="bg-cover bg-center text-white py-20 mt-5 mb-4"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="flex flex-col uppercase text-5xl items-center  gap-3 text-gray-">
            <span>Order Your Favorite Meals,</span>
            <span>Delivered Fast!</span>
          </div>
          <p>
            Craving something delicious? Order from your favorite local
            restaurants and get your meal delivered fast, right to your door!
            From pizza to sushi, we’ve got it all.
          </p>
          <p>
            Fast delivery, your way! Order from local restaurants and enjoy
            quick, hassle-free delivery. Great food, delivered fast, whenever
            you want it.
          </p>
          <button className="mt-12 text-xl  bg-black text-white px-3 py-1 border uppercase hover:bg-blue-950">
            view menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
