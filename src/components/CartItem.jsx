import React from "react";
import styles from "./cartItem.module.css";
const CartItems = ({ readyCart, setReadyCart, product }) => {
  function handelDelete() {
    const newArr = readyCart.filter(
      (cartItem) => cartItem.name !== product.name
    );
    setReadyCart(newArr);
  }

  return (
    <div className={styles.container}>
      <div className={styles.flexCol}>
        <p>{product.name}</p>
        <div>
          <span>{product.quantity}x</span>
          <span>@${product.price}</span>
          <span>${product.totalPrice}</span>
        </div>
      </div>
      <div className={styles.deleteBtnContainer}>
        <button onClick={() => handelDelete()} className={styles.removeBtn}>
          <img
            src="../src/assets/images/icon-remove-item.svg"
            alt="an x icon"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
