import React from "react";
import styles from "./cartItem.module.css";
const CartItems = ({ readyCart, setReadyCart, product, modalView }) => {
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
        <div className={styles.cartNumbers}>
          <span>{product.quantity}x</span>
          <span>@${product.price.toFixed(2)}</span>
          <span>${product.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      {!modalView && (
        <div className={styles.deleteBtnContainer}>
          <button onClick={() => handelDelete()} className={styles.removeBtn}>
            <img
              src="../src/assets/images/icon-remove-item.svg"
              alt="an x icon"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
