import React, { Component } from "react";
import { createPortal } from "react-dom";

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
      <div
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-overlay z-50"
        onClick={this.handleBackdropClick}
      >
        <div className="relative max-w-5xl h-650 w-full bg-white">
          <button
            onClick={this.props.onClose}
            type="button"
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white border border-border border-solid inline-flex justify-center items-center bg-center bg-no-repeat bg-bttn-close active:bg-black active:bg-active-bttn-close hover:bg-black hover:bg-active-bttn-close focus:bg-black focus:bg-active-bttn-close"
          ></button>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
