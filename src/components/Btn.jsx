import React from "react";
import styles from "./button.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";

const Btn = ({ product, setActive }) => {
  const cartData = useContext(cartItemsContext);
  const { readyCart, setReadyCart } = cartData;

  //utillity functions
  function addToCart() {
    // Add product to Cart
    setReadyCart([
      ...readyCart,
      { ...product, quantity: 1, totalPrice: product.price * 1 },
    ]);
    setActive(true);
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
  function decrement() {
    const updatedCartItems = readyCart
      .map((cartItem) => {
        if (cartItem.name === product.name) {
          if (cartItem.quantity > 1) {
            // Decrement the quantity if it's greater than 1
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalPrice: cartItem.price * (cartItem.quantity - 1),
            };
          } else {
            // Return null if the quantity is 1 to mark it for removal
            return null;
          }
        }
        return cartItem; // If not the same product, return the cart item as is
      })
      .filter((cartItem) => cartItem !== null); // Remove items that are marked as null

    setReadyCart(updatedCartItems);

    if (!updatedCartItems.some((item) => item.name === product.name)) {
      setActive(false); // Remove border if item is removed from the cart
    }
  }
  // Find the product in readyCart to get the updated quantity
  const productInCart = readyCart.find(
    (cartItem) => cartItem.name === product.name
  );

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
