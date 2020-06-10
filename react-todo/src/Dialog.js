import React, { Component } from 'react'

class Dialog extends Component {
  render() {
    const { entries } = this.props;
    const listItems = entries.map(this.createTask);
    return <ul className="theList">{listItems}</ul>
  }
}

export default Dialog;