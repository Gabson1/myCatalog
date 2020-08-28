import React from 'react'
import ReactDOM from 'react-dom'

import './modal.css';

export const Modal = React.memo(({ children, closeModal }) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null

  // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
  // use this component inside our React tree
  return ReactDOM.createPortal(
    <div className='modalWrapper'>
      <div className='modalContent'>
        <button onClick={closeModal} style={{ float: 'right' }}>Close</button>
        {children}
      </div>
    </div>,
    domEl
  )
})
