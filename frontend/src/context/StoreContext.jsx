import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((perv) => ({ ...perv, [itemId]: 1 }));
    } else {
      setCartItems((perv) => ({ ...perv, [itemId]: perv[itemId] + 1 }));
    }
  };
  const removeCart = (itemId) => {
    setCartItems((perv) => ({ ...perv, [itemId]: perv[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const value = {
    food_list,
    cartItems,
    addToCart,
    removeCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
