import React, { Component } from 'react';
import Letter from '../Letter'

function M (props) {
  return <path
    onClick={() => props.onClick()}
    fill={props.color}
    d="M443.05 28.07c-9.3 0-17.47 5.29-22.48 14.89-2.15-9-10.17-14.89-19.9-14.89-8.74 0-15.9 4.44-21.77 13.46V29.21H364v72.17h14.9V74c0-20.62 7.31-32.79 16.9-32.79 6.44 0 10.6 4.15 10.6 11.74v48.4h14.89V72.46c0-19 7.59-31.22 16.9-31.22 6.44 0 10.59 4.15 10.59 11.74v48.4h14.89V49.69c0-13.03-7.58-21.62-20.62-21.62z"
  />
}

export default Letter(M)
