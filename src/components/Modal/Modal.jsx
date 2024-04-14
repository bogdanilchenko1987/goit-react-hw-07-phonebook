import './modal.css';
import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.node.isRequired,
};
