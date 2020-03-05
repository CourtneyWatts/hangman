import React, { Component } from 'react'
import '../components/hangmanword.scss'

class Hangmanword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trouble: true
    }
  }

  render () {
    return (
      <div className='Hangmanword'>
        <ul className='word-on-show'>
          {this.props.word}
        </ul>
      </div>
    )
  }
}

export default Hangmanword
