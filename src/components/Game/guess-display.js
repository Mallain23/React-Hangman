import React from 'react'

export default class GuessDisplay extends React.Component {

    render() {
        return (
          <div className="guess-display">{this.props.guesses}</div>
        )
    }
}
