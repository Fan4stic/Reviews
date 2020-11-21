import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';

const submitStyling = {
  height: '40px',
  width: '166px',
  padding: '0px 16px',
  border: '1px',
  backgroundColor: '#f43939',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',
  verticalAlign: 'middle',
  borderRadius: '4px',
  transition: '.8s',
  transitionProperty: 'background-image,background-color,background-position,background-size,border-color,box-shadow',
  font: '500 16px Arial'
};
const modalStyle =  {
  position: 'fixed',
  top: '100px',
  padding: '24px',
  left: '200px',
  backgroundColor: 'white',
  border: '1px solid grey',
  borderRadius: '3px',
  float: 'center',
  verticalAlign: 'top'
};

const nameStyle = {
  fontSize: '28px',
  lineHeight: '36px',
  fontFamily: 'Poppins, Helvetica Neue, Helvetica, Arial, sans-serif',
  fontWeight: '900',
  color: '#2b273c'
};

const Modal = ({handleClose, show, resname, children}) => {
  const showHide = show ? "modal display-block" : "modal display-none";

  return (
    <div style={modalStyle}>
      <span style={nameStyle}>{resname}</span>
      {children}
      <Form />
      <button style={submitStyling} onClick={handleClose}>Submit Review</button>
    </div>
    // document.getElementById('modal-root')
  );
};

export default Modal;