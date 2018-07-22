import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="skill">
        <span>{item.name}</span>
      </div>
    );
  }
}
