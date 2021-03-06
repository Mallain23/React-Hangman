import React from 'react'
import GameViewModel from './GameViewModel'
import Game from './Game'

export default class GameProvider extends React.Component {
  constructor(props) {
    super(props)
    this.gameViewModel = GameViewModel.create()
  }

  render() {
    return (
      <Game viewModel={this.gameViewModel}/>
    )
  }
}
