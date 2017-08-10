import React from 'react'

export default class WordDisplay extends React.Component {

  render() {
      const { wordDisplay } = this.props.gameViewModel.state
      const display = wordDisplay.join('')

      return (
          <h2>{display}</h2>
      )
  }
}
