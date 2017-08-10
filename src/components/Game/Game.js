import React from 'react'

import GameWindow from './GameWindow'
import GameButton from './GameButton'
import Navigation from './Navigation'
import InfoPage from './InfoPage'

export default class Game extends React.Component {
    constructor (props) {
        super(props)


    }

    renderPage() {
      const { startGame } = this.props.viewModel.state
      return startGame === true ? <GameWindow gameViewModel={this.props.viewModel}/> : <GameButton value="start new game"
                                                                                            handleClick={this.props.viewModel.startNewGame}/>
    }

    render() {
      if (this.props.viewMode.showInfo) {
        return <InfoPage gameViewModel={this.props.viewModel}/>
      }

      return (
        <div>
            <Navigation handleNewGame={this.props.viewModel.startNewGame} handleShowInfo={this.props.viewModel.showInfo}/>
            <h1>Hangman</h1>
            {this.renderPage()}
        </div>
      )
    }
}
