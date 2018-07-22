import React, { Component } from "react";

import Logo from "components/logo";

export default class Header extends Component {
  render() {
    return (
      <header className="me__header">
        <Logo />
      </header>
    );
  }
}
