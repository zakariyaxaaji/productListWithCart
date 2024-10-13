import styles from "./container.module.css";
<<<<<<< HEAD
import { useState, createContext } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";
=======
import { useState, createContext, useEffect } from "react";
>>>>>>> parent of 7068b22 (made the cart component more variable so i could use it in the modal as well)
export const cartItemsContext = createContext();

const Container = ({ children }) => {
  //console.log(cartItems)
  // const readyCart = cartSummary(cartItems);
  const [readyCart, setReadyCart] = useState([]);
  const cartData = { readyCart, setReadyCart };
  return (
    <cartItemsContext.Provider value={cartData}>
      <div className={styles.container}>{children}</div>;
    </cartItemsContext.Provider>
  );
};

export default Container;
