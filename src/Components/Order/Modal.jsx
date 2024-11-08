import React from "react";
// import "./SignInModal.css";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          {CloseIcon}
        </button>

        <h2 className="modal-title">Sign in or Create account</h2>

        <button className="facebook-button">Continue with Facebook</button>

        <button className="email-button">Continue with email</button>
      </div>
    </div>
  );
};
