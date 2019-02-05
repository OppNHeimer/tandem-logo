import React, { Component } from 'react'
import styles from './App.css'

import TandemLogo from './TandemLogo'
import T from './characters/T'
import A from './characters/A'
import N from './characters/N'
import D from './characters/D'
import E from './characters/E'
import M from './characters/M'
import Square from './shapes/Square'
import Circle from './shapes/Circle'
import Triangle from './shapes/Triangle'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shape: this.randomShape()
    }
  }

  randomItem = (array) => array[Math.floor(Math.random()*array.length)]
  randomShape = () => {
    const shapes = [
      () => <Square onClick={this.randomizeShape} />,
      () => <Circle onClick={this.randomizeShape} />,
      () => <Triangle onClick={this.randomizeShape} />
    ]
    return this.randomItem(shapes)
  }

  randomizeShape = () => {
    this.setState(state => ({
      shape: this.randomShape()
    }))
  }

  render() {
    return <div className="App">
        <svg className="tandem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.67 116.71">
          <T color="#869B8D" />
          <A color="#869B8D" />
          <N color="#869B8D" />
          <D color="#869B8D" />
          <E color="#869B8D" />
          <M color="#869B8D" />
        </svg>
        {this.state.shape()}
      </div>
  }
}

export default App
