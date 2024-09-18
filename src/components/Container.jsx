import styles from "./container.module.css";
import { useState, createContext, useEffect } from "react";
export const cartItemsContext = createContext();

const Container = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // array of objects with name, price, image and catagory
  //console.log(cartItems)
  // const readyCart = cartSummary(cartItems);
  const [readyCart, setReadyCart] = useState([]);
  const cartData = { cartItems, setCartItems, readyCart, setReadyCart };

  useEffect(() => {
    setReadyCart(cartSummary(cartItems));
  }, [cartItems]);

  function cartSummary(arr) {
    const summary = arr.reduce((acc, item) => {
      const { name, price } = item;

      if (acc[name]) {
        acc[name].quantity += 1;
        acc[name].totalPrice += price;
      } else {
        acc[name] = {
          price,
          quantity: 1,
          totalPrice: price,
        };
      }
      return acc;
    }, {});
    return Object.entries(summary).map(
      ([name, { price, quantity, totalPrice }]) => ({
        name,
        price,
        quantity,
        totalPrice,
      })
    );
  }

  return (
    <cartItemsContext.Provider value={cartData}>
      <div className={styles.container}>{children}</div>;
    </cartItemsContext.Provider>
  );
};

export default Container;
