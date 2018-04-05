import React from 'react'
import ReactDOM from 'react-dom'
import { Observable } from 'rxjs'
import Alert from './components/Alert'
import Modal from './components/Modal'
import Search from './components/Search'
import Table from './components/Table'
import data from '../data/drivers.json'

import 'font-awesome/css/font-awesome.css'
import './styles/main.scss'

class Index extends React.Component {
  static defaultProps = {
    rows: data,
    limit: 100
  }

  state = {
    row: {},
    rows: data,
    searchTerm: '',
    isSuspended: 0,
    showModal: false,
    showAlert: false,
    content: '',
    alertMessage: ''
  }

  componentDidMount = () => {
    Observable
      .from(this.props.rows)
      .filter(row => row.suspended === this.state.isSuspended)
      .takeLast(this.props.limit)
      .toArray()
      .filter(rows => rows.length > 0)
      .subscribe(rows => this.setState({ rows }))
  }

  handleSearchTermChange = (value) => {
    Observable
      .of(value)
      .filter(value => value.length > 1)
      .distinctUntilChanged()
      .debounceTime(250)
      .mergeMap(value => Observable
        .from(this.props.rows)
        .filter(row => row.suspended === this.state.isSuspended)
        .filter(row =>
          row.id.toString().includes(value) ||
          row.name.toLowerCase().includes(value) ||
          row.email.toLowerCase().includes(value)
        )
        .takeLast(this.props.limit)
      )
      .toArray()
      .filter(rows => rows.length > 0)
      .subscribe(rows => this.setState({ rows }))
  }

  handleCheckIsSuspended = (value) => {
    const isSuspended = value === true ? 0 : 1
    Observable
      .of(value)
      .distinctUntilChanged()
      .debounceTime(250)
      .mergeMap(value => Observable
        .from(this.props.rows)
        .filter(row => row.suspended === isSuspended)
        .takeLast(this.props.limit)
      )
      .toArray()
      .filter(rows => rows.length > 0)
      .subscribe(rows => this.setState({ rows, isSuspended }))
  }

  handleNotification = (data) => {
    this.setState({ showModal: true, row: data, showAlert: false, content: '' })
  }

  handleModalCancel = (e) => {
    this.setState({ showModal: false, content: '' })
  }

  handleModalSend = (e) => {
    if (this.state.content !== '') {
      this.setState({ showModal: false, showAlert: true })
    }
  }

  handleModalEdit = (e) => {
    this.setState({ content: e.target.value })
  }

  handleAlertShow = () => {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div>
        <Alert show={this.state.showAlert} content={this.state.content} data={this.state.row} />
        <Modal
          show={this.state.showModal}
          data={this.state.row}
          content={this.state.content}
          onCancel={this.handleModalCancel}
          onEdit={this.handleModalEdit}
          onSend={this.handleModalSend}
        />
        <Search searchTerm={this.handleSearchTermChange} checkIsSuspended={this.handleCheckIsSuspended} />
        <Table rows={this.state.rows} notify={this.handleNotification} />
      </div>
    )
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
