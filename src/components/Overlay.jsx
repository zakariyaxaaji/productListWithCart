import React from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
const Overlay = () => {
  return (
    <div>
      {createPortal(
        <Cart modalView={true} />,
        document.getElementById("modal")
      )}
    </div>
  );
};

export default Overlay;
