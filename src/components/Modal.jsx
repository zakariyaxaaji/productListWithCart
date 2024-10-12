import React from "react";
import Cart from "./Cart";
import styles from "./modal.module.css";
const Modal = () => {
  return (
    <div className={styles.modalContainer}>
      <img src="../src/assets/images/icon-order-confirmed.svg" alt="" />
      <h1>Order Confirmed</h1>
      <p>We hope you enjoy your food!</p>
      <div className={styles.cartItems}>
        <Cart modalView={true} />
      </div>
    </div>
  );
};

export default Modal;
