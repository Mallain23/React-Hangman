import React from 'react'

export default class GameWindow extends React.Component {

   render () {
      return (
        <div className="game-window-container">
            <GuessDisplay guesses={this.props.gameModel.guesses}/>
            <HangmanDisplay />
            <WordDisplay />
      )
   }
}
