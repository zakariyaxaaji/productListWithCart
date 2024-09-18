import React from "react";
import styles from "./button.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";

const Btn = ({ product }) => {
  const cartData = useContext(cartItemsContext);
  const { readyCart, setReadyCart } = cartData;

  
  //utillity functions
  function addToCart() {
    // Add product to Cart
    setReadyCart([
      ...readyCart,
      { ...product, quantity: 1, totalPrice: product.price * 1 },
    ]);
  }
  function decrement() {
    // Decrement the quantity of the product in readyCart
    const updatedCartItems = readyCart.map((cartItem) =>
      cartItem.name === product.name
        ? {
            ...cartItem,
            quantity:
              cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity, // Use cartItem.quantity, not undefined quantity
            totalPrice:
              cartItem.quantity > 1
                ? cartItem.price * (cartItem.quantity - 1)
                : cartItem.price, // Update totalPrice accordingly
          }
        : cartItem
    );
    setReadyCart(updatedCartItems);
  }
  function increment() {
    const updatedReadyCart = readyCart.map((item) =>
      item.name === product.name
        ? {
            ...item,
            quantity: item.quantity + 1, // Update quantity first
            totalPrice: item.price * (item.quantity + 1), // Recalculate totalPrice based on new quantity
          }
        : item
    );
    setReadyCart(updatedReadyCart);
  }
  // Find the product in readyCart to get the updated quantity
  const productInCart = readyCart.find((cartItem) => cartItem.name === product.name);

  return !readyCart.some((cartItem) => cartItem.name === product.name) ? (
    <button onClick={addToCart} className={styles.addToCartBtn}>
      <div className={styles.divInBtn}>
        <img
          src="../src/assets/images/icon-add-to-cart.svg"
          alt="ad to cart image"
        />
        <p>Add to Cart</p>
      </div>
    </button>
  ) : (
    // Render a different button or UI if quantity >= 1
    <div className={styles.inputContainer}>
      <button onClick={decrement}>
        <img
          className={styles.quantity}
          src="../src/assets/images/icon-decrement-quantity.svg"
          alt="decrement icon"
        />
      </button>
      <span>{productInCart.quantity}</span>
      <button onClick={increment}>
        <img
          className={styles.quantity}
          src="../src/assets/images/icon-increment-quantity.svg"
          alt="decrement icon"
        />
      </button>
    </div>
  );
};

export default Btn;
