import React, { useState } from "react";
import Cart from "./Cart";
import styles from "./modal.module.css";
const Modal = () => {
  const [modalView, setModalView] = useState(false);
  return (
    <div className={styles.modalContainer}>
      <img src="../src/assets/images/icon-order-confirmed.svg" alt="" />
      <h1>Order Confirmed</h1>
      <p>We hope you enjoy your food!</p>
      <div className={styles.cartItems}>
        <Cart modalView ={modalView} setModalView = {setModalView}  />
      </div>
    </div>
  );
};

export default Modal;
