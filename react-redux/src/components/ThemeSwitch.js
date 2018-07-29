import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThemeSwitch extends Component {
  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  // dispatch action 去改变颜色
  handleSwitchColor = (color) => {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  render () {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={()=>{ this.handleSwitchColor('green') }}>Red</button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={()=>{ this.handleSwitchColor('blue') }}>Blue</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch