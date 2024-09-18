import React, { useState } from "react";
import styles from "./productList.module.css"
import productsData from "../data.json"
import Product from "./Product";

const ProductList = () => {
  const products = productsData;
  return (
    <div>
      <h1>Desserts</h1>
      <div className={styles.productListContainer}>
        {products.map((product) => {
          return <Product key={product.name} product={product}/>;
        })}
      </div>
    </div>
  );
};

export default ProductList;
