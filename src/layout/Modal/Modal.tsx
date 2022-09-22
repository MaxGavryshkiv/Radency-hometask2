import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { IModalProps } from "../../interfaces/Modal.interface";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

class Modal extends Component<IModalProps, {}> {
  handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <button
            onClick={this.props.onClose}
            type="button"
            className={styles.closeButton}
          ></button>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
