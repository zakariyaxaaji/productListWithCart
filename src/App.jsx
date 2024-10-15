import React, { useState } from "react";
import "./main.css";
import Container from "./components/Container";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";
const App = () => {
  
  return (
    <div>
      <Container>
        <ProductList />
        <Cart /> 
        <Overlay/>
      </Container>
    </div>
  );
};

export default App;
