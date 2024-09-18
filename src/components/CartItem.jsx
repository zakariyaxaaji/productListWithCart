import React from "react";
import styles from "./cartItem.module.css";
const CartItems = ({
  cartItems,
  setCartItems,
  readyCart,
  setReadyCart,
  item,
}) => {
  function handelDelete() {
    const newArr = readyCart.filter((cartItem) => cartItem.name !== item.name);
    setReadyCart(newArr);

    const newItemsArray = cartItems.filter(
      (cartItem) => cartItem.name !== item.name
    );
    setCartItems(newItemsArray);
  }
  console.log(item)

  return (
    <div className={styles.container}>
      <div className={styles.flexCol}>
        <p>{item.name}</p>
        <div>
          <span>{item.quantity}x</span>
          <span>@${item.price}</span>
          <span>${item.totalPrice}</span>
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
