import React from 'react'
import { Observable } from 'rxjs'

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rows: props.rows
    }
  }

  // componentDidMount () {
  //   Observable
  //     .from(this.state.rows)
  //     .map(row => {
  //       this.setState({
  //         tbody:
  //       })
  //     })
  //     .subscribe(
  //       console.log
  //     )
  // }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <td className='heading'>ID</td>
            <td className='heading'>Name</td>
            <td className='heading'>Phone</td>
            <td className='heading'>Email</td>
            <td className='heading'>Suspended</td>
            <td className='heading'>Action</td>
          </tr>
        </thead>
        <tbody>
          {this.state.rows.map((row, i) =>
            <tr key={i}>
              <td className='data'>{row.id}</td>
              <td className='data'>{row.name}</td>
              <td className='data'>{row.phone}</td>
              <td className='data'>{row.email}</td>
              <td className='data'>{row.suspended}</td>
              <td className='action'><button className='action'>Notify</button></td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default Table
