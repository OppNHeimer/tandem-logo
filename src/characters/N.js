import React, { Component } from 'react';
import Letter from '../Letter'

function N (props) {
  return <path
    onClick={() => props.onClick()}
    fill={props.color}
    d="M175.52 28.07a26.85 26.85 0 0 0-23.35 13.46V29.21h-14.89v72.17h14.89V72.17c0-9.45 1.87-16.9 5.45-22.48s8-8.45 13-8.45c7.44 0 11.17 4.44 11.17 13.17v47h14.89V49.69c.03-13.75-8.42-21.62-21.16-21.62z"
  />
}

export default Letter(N)
