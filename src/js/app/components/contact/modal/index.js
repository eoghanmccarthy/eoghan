import React, { Component } from "react";

import Logo from "components/logo";
import Button from "components/contact/button";

export default class Modal extends Component {
  render() {
    const { toggleVisibility } = this.props;

    return (
      <div className={"contact"}>
        <Logo />
        <h1>front-end developer & graphic designer</h1>
        <mark>
          <a href="mailto:me@eoghan.io">me@eoghan.io</a>
        </mark>
        <Button onClick={toggleVisibility} />
      </div>
    );
  }
}
