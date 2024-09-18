import React from "react";
import styles from "./button.module.css";
import { useContext } from "react";
import { cartItemsContext } from "./Container";

const Btn = ({ product }) => {
  const cartData = useContext(cartItemsContext);
  const { cartItems, setCartItems, readyCart, setReadyCart } = cartData;

  function addToCart() {
    // add product to productList
    cartData.setCartItems([...cartItems, product]);
  }
  function decrement() {
    // decrement the quantity of the product in cartItems
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.name !== product.name
    );
    setCartItems(updatedCartItems);

    // const updatedReadyCart = readyCart.map((item) => {
    //   item.name === product.name && item.quantity > 0;
    //   console.log("working");
    //   // ? { ...item, quantity: item.quantity - 1 }
    //   // : item;
    // });
    // setReadyCart(updatedReadyCart);
  }

  function increment() {
    const updatedReadyCart = readyCart.map((item) => {
      item.name === product.name
        ? { ...item, quantity: item.quantity + 1 }
         : item;
    });
     setReadyCart(updatedReadyCart);
  }

  let foundProduct;
  if (readyCart[0]) {
    foundProduct = readyCart.find((item) => item.name === product.name);
  }

  const productQuantity = foundProduct ? foundProduct.quantity : 0;

  return productQuantity < 1 ? (
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
      <input type="number" value={productQuantity} readOnly />
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
