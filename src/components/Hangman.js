import React, { Component } from 'react'
import Hangmanword from './Hangmanword'
import Keyboard from './Keyboard'
import Playagain from './Playagain'
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
import hangman11 from '../images/hangman11.svg'


class Hangman extends Component {
  static defaultProps = {
    images: [hangman0,hangman1,hangman2,hangman3,hangman4,hangman5,hangman6,hangman7,hangman8,hangman9,hangman10,hangman11],
    words: ['Toy Story', 'Shrek', 'Ice Age', 'The Incredibles', 'Wreck It Ralph', 'Frozen', 'Inside Out', 'Brave', 'Monsters Inc', 'Antz', 'Coco', 'Puss In Boots', 'Kung Fu Panda', 'Tangled', 'Moana', 'Bolt', 'The Lego Movie', 'Finding Dory', 'Zootopia', 'The Adams Family', 'The Secret Life of Pets', 'Trolls', 'Despicable Me', 'The Lion King', 'The Little Mermaid', 'The BFG']
  }
  constructor (props) {
    super(props)
    this.state = {
      answer: 'The Secret Life of Pets',
      incorrectlyGuessed: [],
      guessed: []

    }
    this.handleCharacterClick = this.handleCharacterClick.bind(this)
    this.handlePlayagainClick = this.handlePlayagainClick.bind(this)
  }

  handleCharacterClick (event) {
    if(event.target.classList.contains('clicked')){
      return
    }
    event.target.classList.add('clicked')
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

  handlePlayagainClick(){
    let playAgainBtn = document.querySelector('.Playagain')
    if (playAgainBtn.classList.contains('active')){
      return
    }
    playAgainBtn.classList.add('active')
    playAgainBtn.innerHTML = 'Generating new word...'
    let idx = Math.floor(Math.random()* this.props.words.length )
    let nextWord = this.props.words[idx]
    setTimeout(()=> {
      playAgainBtn.classList.remove('active')
      this.setState({
        answer: nextWord,
        guessed:[],
        incorrectlyGuessed:[]
      })
      
    }, 1500)
  }

  render () {
    const incorrect = this.state.incorrectlyGuessed.length
    const guessedCharacters = this.state.guessed
    const displayedWord = this.state.answer.split('').map(function (char) {
      if (guessedCharacters.includes(char.toLowerCase())) {
        return char
      } else if (char == ' '){
        return ''
      } else {
        return '_'
      }
    })
    //Game lost ? 
    let gameLost;
    if(incorrect > 10){
      gameLost = true    
    }
    //Game won ? 
    let gameWon;
    if (!displayedWord.includes('_')){
     gameWon = true    
    }

    const wordOnShow = displayedWord.map(function (i, idx) {
      return <li class={i ? '' : 'space'}key={idx}>{i}</li>
    })
    
    return (
      <div className='container game Hangman mt-3'>
        <h1 className='text-center'>Hangman</h1>
        <div className='Hangman-image'>
          <img src={this.props.images[incorrect]} />
        </div>

        <Hangmanword word={wordOnShow} />
        { (gameLost || gameWon) 
            ?  <h1 className='text-center mt-3'>{gameWon ? 'You Win!' : 'You lose'}</h1>
            : <Keyboard onClick={this.handleCharacterClick} />
        }
        { (gameLost || gameWon) && <Playagain onClick={this.handlePlayagainClick}/> }
      </div>

    )
  }
}

export default Hangman
