import React from 'react'

const randomWords = require('random-words')


export default class GameModel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
              startGame: false,
              targetWord: '',
              wordDisplay: ''
              priorGuesses: [],
              remainingLives: 7,
              feedback: "Guess a letter to begin the game!",
              showInput: true,
              showInfo: false

        }
    this.startNewGame = this.startNewGame.bind(this)
    this.guess = this.guess.bind(this)
    this.duplicateGuess = this.duplicateGuess.bind(this)
    this.wrongGuess = this.wrongGuess.bind(this)
    }
    startNewGame() {
      const targetWord = randomWords()
      const wordDisplay = targetWord.split('').map(letter => '_')
      this.setState({ startGame: true,
                      targetWord,
                      wordDisplay
                      priorGuesses: [],
                      remainingLives: 7,
                      feedback: 'Guess a letter to begin the game!',
                      showInput: true
                    })
    }

    makeGuess(guess) {
          let indexArray = []
          let targetWord = this.state.targetWord
          let newWordDisplay = this.state.wordDisplay

          if (this.state.priorGuesses.includes(guess)) {
            return this.duplicateGuess(guess)
          }

          targetWord.join('').forEach((letter, index) => {
              if (letter === guess) {
                  indexArray.push(index)
              }
        })

          if (indexArray.length < 1) {
            return this.wrongGuess(guess)
          }

        newWordDisplay.forEach((letter, index) => {
            if (indexArray.includes(index)) {
                newWordDisplay[index] = guess
            }
        })

        this.setState({ wordDisplay: newWordDisplay
                        priorGuesses: [...this.state.priorGuesses, guess]
                        feedback: `Correct guess!)`
                      })
    }

    duplicateGuess(guess) {
          this.setState({ feedback: `You have already guessed ${guess}, guess a different letter!`})
    }

    wrongGuess(guess) {
      this.state.remainingLives = 1 ? this.gameOver() :

      this.setState({
        remainingLives--
        feedback: `Sorry there are no ${guess}'s, try again!`
      })
    }

    gameOver() {
      this.setState({
        feedback: "Sorry, you have no more guesses left! The Game is over",
        wordDisplay: targetWord
        showInput: false
      })
    }

    showInfo() {
      this.setState({
        showInfo: true
      })
    }

    onClose() {
      setState({
        showInfo: false
      })
    }
    
    render() {
      return (

      )
    }
}
