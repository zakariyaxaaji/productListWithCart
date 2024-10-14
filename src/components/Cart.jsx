import styles from "./cart.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";
import CartItem from "./CartItem";

const Cart = ({ modalView }) => {
  const cartData = useContext(cartItemsContext);
  const { readyCart, setReadyCart } = cartData;
  const orderTotal = readyCart.reduce((acc, item) => {
    return (acc += item.totalPrice);
  }, 0);

  Cart.defaultProps = {
    modalView: false,
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
      {!modalView ? (
        <h4>Your Cart ({readyCart.length})</h4>
      ) : (
        <div className={styles.modalHeader}>
          <img src="../src/assets/images/icon-order-confirmed.svg" alt="" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!!</p>
        </div>
      )}

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
        <div className={modalView ? styles.modalListContainer : ""}>
          {readyCart.map((product, index) => (
            <div key={index}>
              <CartItem
                readyCart={readyCart}
                setReadyCart={setReadyCart}
                product={product}
                modalView={modalView}
              />
              <hr />
            </div>
          ))}
          <div className={styles.orderTotal}>
            <p
              className={
                modalView ? styles.modalViewOrderTotal : styles.orderTotal
              }
            >
              Order Total:
            </p>
            <h2>${orderTotal.toFixed(2)}</h2>
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
