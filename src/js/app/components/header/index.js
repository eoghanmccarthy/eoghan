import React, { Component } from "react";

import Logo from "components/logo";

export default class Header extends Component {
  render() {
    return (
      <div className="me__header">
        <Logo />
      </div>
    );
  }
}
