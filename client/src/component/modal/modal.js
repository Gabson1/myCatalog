/* eslint-disable react/forbid-prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './modal.css';

export const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById('modal-root');

  if (!domEl) return null;

  // our modal div will be rendered into 'modal-root' div,
  // no matter where we use this component inside our React tree
  return ReactDOM.createPortal(
    <div className="modalWrapper">
      <div className="modalContent">
        <button onClick={closeModal} style={{ float: 'right' }} type='button'>Close</button>
        {children}
      </div>
    </div>,
    domEl,
  );
});

Modal.propTypes = {
  children: PropTypes.any,
  closeModal: PropTypes.any,
};

Modal.defaultProps = {
  children: PropTypes.any,
  closeModal: PropTypes.any,
};
