import React, { Component } from 'react'
import '../styles/table.scss'

class TableIndex extends Component {
  render () {
    return (
      <div className='table-container'>
        {this.props.rows.map((row, i) =>
          <div key={row.id} className='card'>
            <div className='actions'>
              {row.suspended === 1
                ? <div className='card-footer'>Suspended</div>
                : <button className='notify' onClick={(e) => this.props.notify(row, e)}>NOTIFY</button>
              }
            </div>
            <p><i className='fa fa-id-badge' /> ID {row.id}</p>
            <p><i className='fa fa-user' /> {row.name}</p>
            <p><i className='fa fa-phone' /> {row.phone}</p>
            <p><i className='fa fa-envelope' /> {row.email}</p>
          </div>
        )}
      </div>
    )
  }
}

export default TableIndex
