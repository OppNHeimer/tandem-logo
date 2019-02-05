import React from 'react'
import DiagonalLines from './patterns/DiagonalLines'
import Pluses from './patterns/Pluses'
import Solid from './patterns/Solid'

export default function Shape(WrappedShape) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        pattern: this.pattern(this.props.pattern),
        color: this.props.color ||this.randomColor()
      }
    }

    randomColor = () => {
      const colors = [
        "#932C00", "#684608", "#031B2D", "#717244", "#D3AD45", "#380925", "#FF694E", "#AF8030", "#0B2D48", "#869B8D",  "#FFEC3C", "#8B0444", "#FCD9D2", "#FFEAB1", "#A3CCCD", "#D6F7E8", "#FFFF22", "#F3E8EE"
      ]
      return colors[Math.floor(Math.random()*colors.length)]
    }


    pattern = (pattern) => {
      const patterns = {
        "DiagonalLines": () => <DiagonalLines color={this.state.color} />,
        "Pluses": () => <Pluses color={this.state.color} />,
        "Solid": () => <Solid color={this.state.color} />
      }
      var keys = Object.keys(patterns)
      return patterns[pattern] || patterns[keys[ keys.length * Math.random() << 0]]
    }

    render() {
      return (
        <svg className="shape" xmlns="http://www.w3.org/2000/svg" viewBox="100 100 800 800" onClick={() => this.props.onClick()}>
          <clipPath id="clip" >
            <WrappedShape />
          </clipPath>
          {this.state.pattern()}
        </svg>
      )
    }
  }
}
