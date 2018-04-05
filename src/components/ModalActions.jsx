import React from 'react'

class ModalActions extends React.Component {
  render () {
    return (
      <div className='actions'>
        <button className='cancel' onClick={this.props.onCancel}>CANCEL</button>
        <button className='send' onClick={this.props.onSend}>SEND</button>
      </div>
    )
  }
}

export default ModalActions
