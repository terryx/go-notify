import React from 'react'
import ModalText from './ModalText'
import ModalActions from './ModalActions'
import '../styles/modal.scss'

class Modal extends React.Component {
  state = {
    show: this.props.show
  }

  toggleSelf (show = false) {
    this.setState({ show })
  }

  render () {
    const modalStyle = { display: !this.state.show ? 'flex' : 'none' }
    return (
      <div className='modal-container' style={modalStyle}>
        <div className='modal-content'>
          <ModalText />
          <ModalActions />
        </div>
      </div>
    )
  }
}

export default Modal
