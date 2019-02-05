import React, { Component } from 'react';
import Letter from '../Letter'

function E (props) {
  return <path
    onClick={() => props.onClick()}
    fill={props.color}
    d="M318.25 89.31c-1.68-.14-5.13-.46-7.27-1.48a22.13 22.13 0 0 1-10-10.3l-12.36 5.12c2.64 5.31 6 10.71 11.73 14.86 8.81 6.4 21.86 5.82 26.27 4.77l9.32 14.43h14.53l-12.64-19.57c9.9-7.45 13.17-16.73 13.17-31.66 0-7.32.15-37.13-31.39-37.18-19.77 0-28.53 12.7-30.74 26.25-.67 4.07-.57 13.16-.57 13.16h16zm.58-21.6h10.37l-7.6-13.56h-18a15.22 15.22 0 0 1 5.46-10.26c2.18-1.69 5.76-3.08 10.66-2.91 8.46.28 13.91 5.14 15.91 14.32v.08c0 .02 0 .2.07.3.11.51.21 1 .3 1.55a45.59 45.59 0 0 1-.12 17.1c-.12.69-.26 1.36-.44 2a20.07 20.07 0 0 1-5.22 9.05z"
  />
}

export default Letter(E)