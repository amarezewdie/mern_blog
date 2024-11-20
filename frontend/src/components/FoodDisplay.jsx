import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl capitalize my-6">top dish near here</h1>
      <div className=" grid mx-20 sm:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 mb-6">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
