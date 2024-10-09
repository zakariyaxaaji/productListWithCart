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
        <div>
          {readyCart.map((product, index) => (
            <div key={index}>
              <CartItem
                readyCart={readyCart}
                setReadyCart={setReadyCart}
                product={product}
              />
            </div>
          ))}
          <div className={styles.orderTotal}>
            <p>Order Total:</p>
            <h1>${orderTotal}</h1>
          </div>
          <div className={styles.carbonNeutral}>
            <img src="../src/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button className={styles.confirmOrder}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
