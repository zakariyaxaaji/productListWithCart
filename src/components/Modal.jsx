import React, { useState } from "react";
import Cart from "./Cart";
import styles from "./modal.module.css";
const Modal = () => {
  let modalView 
  return (
    <div className={styles.modalContainer}>
      <img src="../src/assets/images/icon-order-confirmed.svg" alt=" order confirmation icon" />
      <h1>Order Confirmed</h1>
      <p>We hope you enjoy your food!</p>
      <div className={styles.cartItems}>
        <Cart modalView = {true}/>  
        {/* passing default value for modalview ???*/}
      </div>
      
      
    </div>
  );
};

export default Modal;
