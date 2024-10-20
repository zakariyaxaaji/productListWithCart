import React, { useEffect, useState } from "react";
import "./main.css";
import Container from "./components/Container";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";
const App = () => {
  const [modalView, setModalView] = useState(false);
  const body = document.querySelector("body");
  useEffect(() => {
    if (modalView) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [modalView]);

  return (
    <div>
      <Container>
        <ProductList />
        <Cart setModalView={setModalView} />
        {modalView && (
          <Overlay modalView={modalView} setModalView={setModalView} />
        )}
      </Container>
    </div>
  )
}

export default App;
