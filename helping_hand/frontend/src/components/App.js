import React, { Component } from 'react'

class App extends Component {
  state = {
    name: 'Woo'
  }
  render() {
    const { name } = this.state
    return <h1>{name}</h1>
  }
}

export default App
