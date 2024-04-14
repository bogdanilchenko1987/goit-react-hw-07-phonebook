import './modal.css';
import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={e => e.stopPropagation()}
      >
        <IoCloseCircleOutline
          className="modal__close"
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
