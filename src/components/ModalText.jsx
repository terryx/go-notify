import React from 'react'

class ModalText extends React.Component {
  render () {
    return (
      <textarea value={this.props.content} onChange={this.props.onEdit} />
    )
  }
}

export default ModalText
