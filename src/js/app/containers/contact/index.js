import React, { Component, Fragment } from "react";

import Button from "components/contact/button";
import Modal from "components/contact/modal";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  _toggleVisibility = () => {
    this.setState(state => {
      return { isVisible: !state.isVisible };
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <Fragment>
        <Button onClick={this._toggleVisibility} />
        {isVisible && <Modal toggleVisibility={this._toggleVisibility} />}
      </Fragment>
    );
  }
}
