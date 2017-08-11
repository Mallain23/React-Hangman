import React from 'react'

import GameWindow from './GameWindow'
import GameButton from './GameButton'
import Navigation from './Navigation'
import InfoPage from './InfoPage'

export default class Game extends React.Component {
    constructor (props) {
        super(props)

      this.startNewGame = this.startNewGame.bind(this)
      this.showInfo = this.showInfo.bind(this)

    }
    startNewGame() {
      this.props.viewModel.startNewGame()
    }

    showInfo() {
      this.props.viewModel.showInfo()
    }

    renderPage() {
      const { startGame } = this.props.viewModel.state
      console.log(startGame)
      return startGame === true ? <GameWindow gameViewModel={this.props.viewModel} /> :
                                      <GameButton value="start new game" handleClick={this.startNewGame} />
    }


    render() {
      let gameElement = this.renderPage()


      if (this.props.viewModel.showInfo === true) {

        return <InfoPage gameViewModel={this.props.viewModel}/>
      }

      return (
        <div>
            <Navigation handleNewGame={this.startNewGame} handleShowInfo={this.showInfo}/>
            <h1>Hangman</h1>
            {gameElement}
        </div>
      )
    }
}
