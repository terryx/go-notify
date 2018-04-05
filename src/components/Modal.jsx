import React from 'react'
import ModalText from './ModalText'
import ModalActions from './ModalActions'
import '../styles/modal.scss'

class Modal extends React.Component {
  render () {
    const modalStyle = { display: this.props.show ? 'flex' : 'none' }
    return (
      <div className='modal-container' style={modalStyle}>
        <div className='modal-content'>
          <div className='title'>
            To: {this.props.data.name} &#60;{this.props.data.email}&#62;
          </div>
          <ModalText content={this.props.content} onEdit={this.props.onEdit} />
          <ModalActions onCancel={this.props.onCancel} onSend={this.props.onSend} />
        </div>
      </div>
    )
  }
}

export default Modal
