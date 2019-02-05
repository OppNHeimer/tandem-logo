import React from 'react'

function Solid (props) {
  return (
    <path clipPath="url(#clip)" fill={props.color} d="M0,0 0,800 800,800 800,0"/>
  )
}

export default Solid
