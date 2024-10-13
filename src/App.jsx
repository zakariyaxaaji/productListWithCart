import React, { useState } from "react";
import "./main.css";
import Container from "./components/Container";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const App = () => {
  
  return (
    <div>
      <Container>
        <ProductList />
        <Cart />
      </Container>
    </div>
  );
};

export default App;
