import React, { Component } from "react";

import Skills from "components/skills";

export default class Home extends Component {
  render() {
    return (
      <main className="me__page">
        <div className="page__tile">
          <h1>Stuff //</h1>
          <h2>Languages, libraries and tools I use /</h2>
        </div>
        <Skills />
      </main>
    );
  }
}
