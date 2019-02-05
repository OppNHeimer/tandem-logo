import React, { Component } from 'react';
import Letter from '../Letter'

function T (props) {
  return <path
    onClick={() => props.onClick()}
    fill={props.color}
    d="M0 42.39V29.21h17.76V9.31L32.65 0v29.21h18.76v13.18H32.65v35.23c0 7.87 3.15 11.74 9.59 11.74a13.22 13.22 0 0 0 6.88-2L53 100a26.41 26.41 0 0 1-11.6 2.58c-14.32 0-23.62-8.73-23.62-25.77V42.39z"
  />
}

export default Letter(T)
