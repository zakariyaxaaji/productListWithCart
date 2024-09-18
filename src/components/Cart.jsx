import React, { useState } from "react";
import styles from "./cart.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";
import CartItem from "./CartItem";

const Cart = () => {
  const cartData = useContext(cartItemsContext);
  const { cartItems, setCartItems, readyCart, setReadyCart } = cartData;

  console.log(readyCart);
  console.log(cartItems);
  return (
    <div className={styles.cartContainer}>
      <h4>Your Cart ({cartItems.length})</h4>
      {readyCart.length < 1 ? (
        <div>
          <div className={styles.imgContainer}>
            <img
              src="../src/assets/images/illustration-empty-cart.svg"
              alt="Illustration of empty cart"
            />
          </div>
          <p>Your added items will appear here</p>
        </div>
      ) : (
        readyCart.map((item, index) => (
          <CartItem
            key={index}
            cartItems={cartItems}
            setCartItems={setCartItems}
            readyCart={readyCart}
            setReadyCart={setReadyCart}
            item={item}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
