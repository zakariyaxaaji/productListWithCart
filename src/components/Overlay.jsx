import React from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import styles from "./overlay.module.css";
const Overlay = ({ modalView, setModalView }) => {
  return (
    <div>
      {modalView &&
        createPortal(
          <div className={styles.overlayContainer}>
            <Cart modalView={modalView} setModalView={setModalView} />
          </div>,
          document.getElementById("modal")
        )}
    </div>
  );
};

export default Overlay;
