import React, { Component } from "react";

import Logo from "components/logo";
import Button from "components/contact/button";

import skills from "config/skills";

//<ul>{skills.map((item,index) => (<li key={index}>{item.name}</li>))}</ul>

export default class Modal extends Component {
  render() {
    const { toggleVisibility } = this.props;

    return (
      <div className={"contact"}>
        <Logo />
        <div className={"contact__inner"}>
          <h1>front-end developer & graphic designer</h1>
          <mark>
            <a href="mailto:me@eoghan.io">me@eoghan.io</a>
          </mark>
          <Button onClick={toggleVisibility} />
        </div>
      </div>
    );
  }
}
