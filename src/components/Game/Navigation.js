import React from 'react'

import GameButton from './GameButton'


export default class Navigation extends React.Component {
    // constructor(props) {
    //   super(props)
    //   this.handleNewGameClick = this.handleNewGameClick.bind(this)
    //   this.handleShowInfoClick = this.handleShowInfoClick.bind(this)
    // }

    render() {

        return (
              <ul>
                <li><GameButton value="New Game" handleClick={this.props.handleNewGame}/></li>
                <li><GameButton value ="Game Info" handleClick={this.props.handleShowInfo}/></li>
              </ul>
        )
    }
}
