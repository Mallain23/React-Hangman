import React from 'react'

import GameButton from './GameButton'
import GuessForm from './GuessForm'
import GuessDisplay from './GuessDisplay'
import WordDisplay from './WordDisplay'

export default class GameWindow extends React.Component {

  renderCorrectDisplay() {
    this.props.gameViewModel.state.showInput === false ? <GameButton value="start new game"
                                                              onclick={this.props.gameViewModel.newGame} /> :
                                                        <GuessForm gameViewModel={this.props.gameViewModel} />
  }
   render () {
     const { targetWord, priorGuesses, wordDisplay, feedback } = this.props.gameViewModel.state

      return (
        <div className="game-window-container">
            <GuessDisplay guesses={priorGuesses} />
            <h3>{feedback}</h3>
            {this.renderCorrectDisplay}
            <WordDisplay gameViewModel={this.props.gameViewModel} />
        </div>
      )
   }
}
