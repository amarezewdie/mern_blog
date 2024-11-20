import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, removeCart, cartItems, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="max-w-[1024px] mx-auto p-6 bg-white rounded-lg shadow-lg ">
        {/* Table Header */}
        <div className="flex justify-between border-b pb-4 font-semibold text-gray-700 sm:gap-28">
          <p className="w-16 text-center">Item</p>
          <p className="flex-1">Title</p>
          <p className="w-20 text-center">Price</p>
          <p className="w-20 text-center">Quantity</p>
          <p className="w-20 text-center">Total</p>
          <p className="w-20 text-center">Remove</p>
        </div>

        {/* Table Rows */}
        <div>
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-4 text-gray-600 sm:gap-28"
                >
                  {/* Image */}
                  <div className="w-16">
                    <img
                      className="w-12 h-12 object-cover rounded"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  {/* Name */}
                  <p className="flex-1 truncate">{item.name}</p>
                  {/* Price */}
                  <p className="w-20 text-center">${item.price.toFixed(2)}</p>
                  {/* Quantity */}
                  <p className="w-20 text-center">{cartItems[item._id]}</p>
                  {/* Total */}
                  <p className="w-20 text-center">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </p>
                  {/* Remove Button */}
                  <button
                    onClick={() => removeCart(item._id)}
                    className="w-20 text-center text-red-500 hover:text-red-700"
                  >
                    x
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="justify-between my-10 gap-6 flex flex-col-reverse sm:flex-row sm:flex ">
        <div className="sm:w-[400px] p-3 flex flex-col gap-6 justify-center">
          <h1 className="text-3xl font-semibold capitalize p-2">cart total</h1>
          <div className="flex justify-between border-b-2 py-1">
            <p className="capitalize text-x1 ">sub total</p>
            <p className="capitalize text-x1 ">${getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between  border-b-2 py-1">
            <p className="capitalize text-x1 ">delivery fee</p>
            <p className="capitalize text-x1 ">${2}</p>
          </div>
          <div className="flex justify-between border-b-2 py-1">
            <p className="capitalize text-x1 "> total</p>
            <p className="capitalize text-x1 ">
              ${getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}
            </p>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-red-400 p-3 uppercase text-x1 text-white rounded-lg"
          >
            proceed to checkout
          </button>
        </div>
        <div className="flex flex-col gap-5 sm:w-[400px]">
          <p>if you have a promo code. enter it here</p>
          <div className=" flex gap-3 ">
            <input
              type="text"
              placeholder="promo code"
              className="px-3 py-1 gap-3"
            />
            <button className="bg-gray-400  px-3 text-white rounded-md">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
