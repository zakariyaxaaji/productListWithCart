import React, { useState } from "react";
import styles from "./cart.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";
import CartItem from "./CartItem";

<<<<<<< HEAD
const Cart = ({ modalView, setModalView }) => {
=======
const Cart = () => {
>>>>>>> parent of 7068b22 (made the cart component more variable so i could use it in the modal as well)
  const cartData = useContext(cartItemsContext);
  const { readyCart, setReadyCart } = cartData;
  const orderTotal = readyCart.reduce((acc, item) => {
    return (acc += item.totalPrice);
  }, 0);

<<<<<<< HEAD
  function openPortal() {
    console.log("open portal i clicked, modalView is set to TRUE");
    setModalView && setModalView(true);
  }

  function closePortal() {
    console.log("close portal i clicked, modalView is set to FALSE");
    setReadyCart([]);
    setModalView && setModalView(false);
  }
  console.log(modalView); // return undefiend
=======
>>>>>>> parent of 7068b22 (made the cart component more variable so i could use it in the modal as well)
  console.log(readyCart);
  return (
<<<<<<< HEAD
    <div
      className={modalView ? styles.modalCartContainer : styles.cartContainer}
    >
      {!modalView && <h4>Your Cart ({readyCart.length})</h4>}

=======
    <div className={styles.cartContainer}>
      <h4>Your Cart ({readyCart.length})</h4>
>>>>>>> parent of 7068b22 (made the cart component more variable so i could use it in the modal as well)
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
<<<<<<< HEAD
            <p className={modalView ? styles.modalViewOrderTotal : ""}>
              Order Total:
=======
            <p>Order Total:</p>
            <h1>${orderTotal}</h1>
          </div>
          <div className={styles.carbonNeutral}>
            <img src="../src/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <b>carbon-neutral</b> delivery
>>>>>>> parent of 7068b22 (made the cart component more variable so i could use it in the modal as well)
            </p>
          </div>
<<<<<<< HEAD
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
=======
          <button className={styles.confirmOrder}>Confirm Order</button>
>>>>>>> parent of 7068b22 (made the cart component more variable so i could use it in the modal as well)
        </div>
      )}
      
    </div>
  );
};

export default Cart;
