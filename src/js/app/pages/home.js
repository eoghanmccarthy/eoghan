import React, { Component } from "react";

import Skills from "components/skills";

export default class Home extends Component {
  render() {
    return (
      <div className="me__page">
        <div className="page__tile">
          <h1>recent libraries</h1>
        </div>
        <Skills />
      </div>
    );
  }
}
