import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import Table from './components/Table'
import data from './data/drivers.json'
console.log(data)

class Index extends React.Component {
  render () {
    return <div><Table rows={data} /> </div>
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
