import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children}) => (
  ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>
  )
);

export default Modal;