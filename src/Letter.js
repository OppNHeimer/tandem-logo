import React from 'react'

export default function Letter(WrappedLetter) {

  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        color: props.color || this.randomColor()
      }
    }

    randomColor = () => {
      const colors = ["#932C00", "#684608", " #031B2D", "#717244", "#D3AD45", "#380925", "#FF694E", "#AF8030", "#0B2D48", "#869B8D",  "#FFEC3C", "#8B0444", "#FCD9D2", "#FFEAB1", "#A3CCCD", "#D6F7E8", "#FFFF22", "#F3E8EE"]
      return colors[Math.floor(Math.random()*colors.length)]
    }

    changeColor = () => {
      this.setState(state => ({
        color: this.randomColor()
      }))
    }

    render() {
      return <WrappedLetter
        color={this.state.color}
        onClick={() => this.changeColor()}
      />
    }
  }
}
