import React from 'react';

const BACK_STYLE = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: '100',
};

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '150px',
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '10px',
  border: '2px solid red',
};

export default function Modal({ isOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACK_STYLE}>
        <div style={MODAL_STYLE}>{children}</div>
      </div>
    );
  }
  return null;
}
