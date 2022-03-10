import { useState, createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItem] = useState(5);
  const addToCart = () => {
    setItem((item) => item + 1);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
