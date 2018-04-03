import React from 'react'
import '../styles/search.scss'

class SearchIndex extends React.Component {
  state = {
    checked: 'checked'
  }

  handleCheckbox = (event) => {
    const checked = event.target.checked === true ? 'checked' : ''
    return this.setState({ checked }, this.props.checkIsSuspended(event.target.checked))
  }

  render () {
    return (
      <div className='search-container'>
        <input
          onChange={(e) => this.props.searchTerm(e.target.value)}
          type='text'
          placeholder='Type here to search for id, name or email'
        />

        <label className='checkbox-container'>
        Active
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={this.handleCheckbox} />
          <span className='checkmark' />
        </label>
      </div>
    )
  }
}

export default SearchIndex
