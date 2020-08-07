import React from 'react';

import './modal.css';

const Modal = ({ photo, onModalCLose }) => {
  const style = {
    backgroundImage: `url('${photo}')`
  };

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={style}>
          <button className="close btn" type="button" onClick={onModalCLose}>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
