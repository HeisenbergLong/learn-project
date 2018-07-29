import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Main'
import './index.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App