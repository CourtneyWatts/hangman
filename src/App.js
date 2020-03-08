import React from 'react'
import './App.scss'
import Hangman from './components/Hangman'

function App () {
  return (
    <div className='App'>
      <div className='small-screen-text d-flex-col text-center p-5'>
        <p>Browser window is too small</p>
        <p className='pt-4'>Please open on a desktop browser</p>
        <p className='pt-4'> If you are using a desktop browser, please resize your browser window</p>
      </div>
      <Hangman />
    </div>
  )
}

export default App
