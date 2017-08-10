import React from 'react'

import GameModel from './game-model'

export default class Game extends React.Component {
    constructor (props) {
        super(props)

    }
    renderPage() {
      const { startGame, startNewGame } = this.props.gameModel
      return startGame === true ? <GameWindow gameModel={this.props.gameModel}/> : <GameButton handleClick={startNewGame}/>
    }
    render() {


      return (
        <div>
            <Navigation />
            <h1>Hangman</h1>
            {this.renderPage()}
        </div>
      )
    }
}
