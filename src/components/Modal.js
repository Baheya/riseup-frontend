import React from 'react';
import axios from 'axios';

import './Modal.scss';
import Register from './Register';

class Modal extends React.Component {
  state = {
    showModal: true,
    redirect: false
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div
        className="modal-wrapper"
        style={{
          transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}
      >
        <div className="modal-header">
          <h3>Hello, Speaker!</h3>
          <span className="close-modal-btn" onClick={this.props.onClose}>
            x
          </span>
        </div>
        <div className="modal-body">
          <Register
            hideModal={this.props.onClose}
            inputChangeHandler={this.props.inputChangeHandler}
            postForm={this.props.postForm}
            registerSpeaker={this.props.registerSpeaker}
          />
        </div>
        <div className="modal-footer">
          {/* <button className="btn-continue" onClick={this.uploadImage}>
            CONTINUE
          </button> */}
        </div>
      </div>
    );
  }
}

export default Modal;
