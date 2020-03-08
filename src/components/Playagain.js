import React, { Component } from 'react';
import './playagain.scss'

const Playagain = (props) => {
  return (
    <div className='Playagain' onClick={props.onClick}>
      <span>Play Again</span>
    </div>
  )
}

export default Playagain
