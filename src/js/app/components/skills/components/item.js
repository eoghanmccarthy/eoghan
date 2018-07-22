import React, { Component } from "react";
import classNames from "classnames";

export default class Item extends Component {
  render() {
    const { item } = this.props;
    const itemClass = classNames("skill", {
      category__webdev: item.category == "webdev"
    });

    return (
      <div className={itemClass}>
        <span>{item.name}</span>
      </div>
    );
  }
}
