import React, { useState } from "react";
import styles from "./cart.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";
import Modal from "./Modal";


const Cart = ({modalView}) => {
  const cartData = useContext(cartItemsContext);
  const { readyCart, setReadyCart } = cartData;
  const orderTotal = readyCart.reduce((acc, item) => {
    return (acc += item.totalPrice);
  }, 0);

  Cart.defaultProps  = {
    modalView: false
  };

  function openPortal() {
    console.log("open portal i clicked, modalView is set to TRUE");
    
  }

  function closePortal() {
    console.log("close portal i clicked, modalView is set to FALSE");
    setReadyCart([]);
  }
  console.log(readyCart);
  return (
    <div
      className={modalView ? styles.modalCartContainer : styles.cartContainer}
    >
      {!modalView && <h4>Your Cart ({readyCart.length})</h4>}

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
                modalView={modalView}
              />
            </div>
          ))}
          <div className={styles.orderTotal}>
            <p className={modalView ? styles.modalViewOrderTotal : ""}>
              Order Total:
            </p>
          </div>
          {!modalView && (
            <div className={styles.carbonNeutral}>
              <img src="../src/assets/images/icon-carbon-neutral.svg" alt="" />
              <p>
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
          )}

          {modalView ? (
            <button className={styles.confirmOrder} onClick={closePortal}>
              Start New Order
            </button>
          ) : (
            <button className={styles.confirmOrder} onClick={openPortal}>
              Confirm Order
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
