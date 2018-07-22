import React, { Component } from "react";
import classNames from "classnames";

export default class Item extends Component {
  render() {
    const { item } = this.props;
    const itemClass = classNames("skill", {
      category__webdev: item.category == "webdev",
      category__frontend: item.category == "frontend",
      category__backend: item.category == "backend",
      category__design: item.category == "design"
    });

    return (
      <div className={itemClass}>
        <span>{item.name}</span>
      </div>
    );
  }
}
