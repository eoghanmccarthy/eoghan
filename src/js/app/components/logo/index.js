import React, { Component } from "react";

import LogoAlt from "media/images/logo-alt.png";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logo" src={LogoAlt} />
      </div>
    );
  }
}
