import React from 'react'

export default class GuessForm extends React.Component {
  constructor(props) {
      super(props)

      this.onGuess = this.onGuess.bind(this)
  }
  onGuess() {
    let guess = this.input.value
    this.props.gameViewModel.makeGuess(guess)
  }
  render() {
      return (
        <form onSumbit={this.onGuess} />
            <label htmlFor="user guess">Enter your guess </label
            <input type="text" ref={input => this.input = input}
                maxLength="1" id="user-guess" required />
            <input type="submit" id="guessButton"
                className="button" name="submit" value="Guess"/>
        </form>

      )
  }
}
