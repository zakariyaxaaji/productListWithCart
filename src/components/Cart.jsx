import React, { useState } from "react";
import styles from "./cart.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";
import CartItem from "./CartItem";

const Cart = () => {
  const cartData = useContext(cartItemsContext);
  const { readyCart, setReadyCart } = cartData;
  const orderTotal = readyCart.reduce((acc, item) => {
    return (acc += item.totalPrice);
  }, 0);

  console.log(readyCart);
  console.log(orderTotal);
  return (
    <div className={styles.cartContainer}>
      <h4>Your Cart ({readyCart.length})</h4>
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
        readyCart.map((product, index) => (
          <div>
            <CartItem
              key={index}
              readyCart={readyCart}
              setReadyCart={setReadyCart}
              product={product}
            />
          </div>
        ))
      )}
      <div className={styles.orderTotal}>
        <p>Order Total:</p>
        <h2>${orderTotal}</h2>
      </div>
    </div>
  );
};

export default Cart;
