import React, { useState, useContext } from "react";
import styles from "./product.module.css";
import Btn from "./Btn";
import { cartItemsContext } from "./Container";

//add the context here so you can render the incremnt/decrement buttons after the first item is added to the cart
const Product = ({ product }) => {
  // const cartData = useContext(cartItemsContext);
  // const { cartItems, setCartItems, readyCart } = cartData;
  // console.log(readyCart)

  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.productContainer}>
      <div className={styles.imgContainer}>
        <picture>
          <source media="(min-width:1024px)" srcSet={product.image.desktop} />
          <source media="(min-width:786px)" srcSet={product.image.tablet} />
          <source media="(max-width:767px)" srcSet={product.image.mobile} />
          <img className={styles.productImg} src={product.image.desktop} alt={product.name} loading="lazy" />
        </picture>
        {/* (quantity<1)? button: secondButton */}
        <Btn product={product} clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={styles.productText}>
        <span>{product.category}</span>
        <h4>{product.name}</h4>
        <span>{product.price}$</span>
      </div>
    </div>
  );
};

export default Product;
