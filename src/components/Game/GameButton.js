import React from 'react'

export default class GameButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.props.handleClick()
    }
    render() {
      <button type="submit"> onClick={this.handleClick} value/>
    }

}
