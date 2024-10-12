import styles from "./container.module.css";
import { useState, createContext } from "react";
import Modal from "./Modal";
export const cartItemsContext = createContext();

const Container = ({ children }) => {
  //console.log(cartItems)
  // const readyCart = cartSummary(cartItems);
  const [readyCart, setReadyCart] = useState([]);
  const cartData = { readyCart, setReadyCart };

  return (
    <cartItemsContext.Provider value={cartData}>
      <div className={styles.container}>{children}</div>
    </cartItemsContext.Provider>
  );
};

export default Container;
