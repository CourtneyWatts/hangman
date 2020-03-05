import React, { Component } from 'react'
import '../components/keyboard.scss'

class Keyboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyboard: true
    }
  }

  render () {
    const handleClick = this.props.onClick
    const keys = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const keyboard = keys.map(function (i, idx, clickFunction) {
      return <li onClick={handleClick} key={i}>{i}</li>
    })
    return (
      <div className='keyboard'>
        <ul>
          {keyboard}
        </ul>
      </div>
    )
  }
}

export default Keyboard
