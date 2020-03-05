import React, { Component } from 'react'
import Hangmanword from './Hangmanword'
import Keyboard from './Keyboard'
import '../components/hangman.scss'
import hangman0 from '../images/hangman0.svg'
import hangman1 from '../images/hangman1.svg'
import hangman2 from '../images/hangman2.svg'
import hangman3 from '../images/hangman3.svg'
import hangman4 from '../images/hangman4.svg'
import hangman5 from '../images/hangman5.svg'
import hangman6 from '../images/hangman6.svg'
import hangman7 from '../images/hangman7.svg'
import hangman8 from '../images/hangman8.svg'
import hangman9 from '../images/hangman9.svg'
import hangman10 from '../images/hangman10.svg'

class Hangman extends Component {
  static defaultProps = {
    images: [hangman0,hangman1,hangman2,hangman3,hangman4,hangman5,hangman6,hangman7,hangman8,hangman9,hangman10]
  }
  constructor (props) {
    super(props)
    this.state = {
      answer: 'Rainbow',
      incorrectlyGuessed: [],
      guessed: []

    }
    this.handleCharacterClick = this.handleCharacterClick.bind(this)
  }

  handleCharacterClick (event) {
    const guessed = event.target.innerText
    if (this.state.answer.toLowerCase().split('').includes(guessed)) {
      console.log('matching')
      this.setState({
        guessed: [...this.state.guessed, guessed]
      })
    } else {
      this.setState({
        incorrectlyGuessed: [...this.state.incorrectlyGuessed, guessed]
      })
    }
  }

  render () {
    const incorrect = this.state.incorrectlyGuessed.length
    const guessedCharacters = this.state.guessed
    const displayedWord = this.state.answer.split('').map(function (char) {
      if (guessedCharacters.includes(char.toLowerCase())) {
        return char
      } else {
        return '_'
      }
    })

    if(!this.state.gameOver && incorrect >= 7){
      this.setState({
        gameOver: true
      })

    }

    if (!displayedWord.includes('_')){
      console.log('ya')
    }



    const wordOnShow = displayedWord.map(function (i, idx) {
      return <li key={idx}>{i}</li>
    })
    
    return (
      <div className='container Hangman'>
        <h1 className='text-center'>Hangman</h1>
        <div className='Hangman-image'>
          <img src={this.props.images[incorrect]} />
        </div>

        <Hangmanword word={wordOnShow} />
        { (!this.state.gameOver) ? <Keyboard onClick={this.handleCharacterClick} /> : <p>gameover</p>}
      </div>

    )
  }
}

export default Hangman
