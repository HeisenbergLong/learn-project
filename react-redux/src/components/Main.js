import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { connect } from 'react-redux'

class Content extends Component {
  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>this is content</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content