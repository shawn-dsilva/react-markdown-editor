import React from "react";

const Modal = ({ onClose, show, children }) => {
  const toggle = show ? {display:"flex"} : {display:"none"};

  return (
    <div className="modal-container" style={toggle}>
      <div className="modal">
        <button  className="modal-close" onClick={onClose}>
        <i class="fas fa-times-circle"></i>
        </button>
        {children}

      </div>
    </div>
  );
};

export default Modal;