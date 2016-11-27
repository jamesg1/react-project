const React = require('react')
const { object } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    params: object.isRequired
  },
  render () {
    return (
      <div className='container'>
        <pre style={{textAlign: 'left'}} >
          <code>
            {JSON.stringify(this.props.params, null, 4)}
          </code>
        </pre>
      </div>
    )
  }
})

module.exports = Details
