import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="max-w-[1024px] mx-8 flex flex-col sm:flex sm:flex-row justify-between my-7">
      <form className="flex max-w-md flex-col gap-3 ">
        <h1>delivery information</h1>
        <div className="flex gap-2">
          <input type="text" className="p-2 w-full" placeholder="first name" />
          <input type="text" className="p-2 w-full" placeholder="last name" />
        </div>
        <input
          type="email"
          name=""
          id=""
          placeholder="email"
          className="p-2 w-full"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="street"
          className="p-2 w-full"
        />
        <div className="flex gap-2">
          <input type="text" className="p-2 w-full" placeholder="city" />
          <input type="text" className="p-2 w-full" placeholder="state" />
        </div>
        <div className="flex gap-2">
          <input type="number" className="p-2 w-full" placeholder="zipCode" />
          <input type="text" className="p-2 w-full" placeholder="country" />
        </div>
        <input
          type="number"
          name=""
          id=""
          placeholder="phone"
          className="p-2 w-full"
        />
      </form>
      <div>
        <div className="sm:w-[400px] p-3 flex flex-col gap-6 justify-center my-10">
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
            proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
