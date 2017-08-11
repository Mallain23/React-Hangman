import React from 'react'

const randomWords = require('random-words')


export default class GameViewModel {
    static create() {
      return new GameViewModel()
    }

    constructor () {
        this.intializeState()
    }

    intializeState() {
        this.state = {
              startGame: false,
              targetWord: '',
              wordDisplay: '',
              priorGuesses: [],
              remainingLives: 7,
              feedback: "Guess a letter to begin the game!",
              showInput: true,
              showInfo: false
         }
    }

    setState(obj) {
      // this.state = Object.assign({}, this.state, obj)
      this.state = {
        ...this.state,
        ...obj
      }
    };

    startNewGame() {
        const targetWord = randomWords()
        const wordDisplay = targetWord.split('').map(letter => '_')
        console.log(this.setState)
        this.setState({ startGame: true,
                      targetWord,
                      wordDisplay,
                      priorGuesses: [],
                      remainingLives: 7,
                      feedback: 'Guess a letter to begin the game!',
                      showInput: true
                    })
          console.log(this.state)
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

        this.setState({ wordDisplay: newWordDisplay,
                        priorGuesses: [...this.state.priorGuesses, guess],
                        feedback: `Correct guess!)`
                      })
    }

    duplicateGuess(guess) {
          this.setState({ feedback: `You have already guessed ${guess}, guess a different letter!`})
    }

    wrongGuess(guess) {
      let remainingLives = this.state.remainLives--
      this.state.remainingLives = 1 ? this.gameOver() :

      this.setState({
        remainingLives,
        feedback: `Sorry there are no ${guess}'s, try again!`
      })
    }

    gameOver() {
      this.setState({
        feedback: "Sorry, you have no more guesses left! The Game is over",
        wordDisplay: this.state.targetWord,
        showInput: false
      })
    }

    showInfo() {
      this.setState({
        showInfo: true
      })
    }

    onClose() {
      this.setState({
        showInfo: false
      })
    }
}
