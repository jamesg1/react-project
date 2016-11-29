const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { func, string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  },
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search' type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all'> or Browse All ></Link>
      </div>
    )
  }
})

module.exports = connector(Landing)
