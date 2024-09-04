import React from "react";
import "./modal.css"
function Modal({ score }) {
  return (
    <div>
      <div>Score is: {score}</div>
      <div className="modal-btn" onClick={()=>window.location="/"}>Yeniden basla </div>
    </div>
  );
}

export default Modal;
