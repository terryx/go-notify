import React from 'react'
import '../styles/alert.scss'

class Alert extends React.Component {
  static defaultProps = {
    messageLength: 144
  }

  render () {
    const alertStyle = { display: this.props.show ? 'flex' : 'none' }
    const message = this.props.content

    return (
      <div className='alert' style={alertStyle}>
        &#60;{this.props.data.email}&#62; {message.length > this.props.messageLength ? message.substr(0, this.props.messageLength) + '...' : message}
      </div>
    )
  }
}

export default Alert
