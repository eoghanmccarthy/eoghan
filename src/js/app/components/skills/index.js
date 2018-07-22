import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectSkillsData } from "selectors/skills";

import * as skillsActions from "actions/skills";

import Item from "components/skills/components/item";

const library = [
  { name: "javascript", category: "webdev" },
  { name: "html", category: "frontend" },
  { name: "css", category: "frontend" },
  { name: "react", category: "webdev" },
  { name: "react-router", category: "frontend" },
  { name: "redux", category: "webdev" },
  { name: "redux-observable", category: "webdev" },
  { name: "rx-js", category: "webdev" },
  { name: "redux-persist", category: "webdev" },
  { name: "sass", category: "frontend" },
  { name: "figma", category: "design" },
  { name: "adobe illustrator", category: "design" }
];

class Skills extends Component {
  componentDidMount = () => {
    this.props.loadSkills(library);
  };
  render() {
    const { skillsData } = this.props;
    return (
      <section className="skills">
        {skillsData.map((item, index) => <Item key={index} item={item} />)}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skillsData: selectSkillsData(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(skillsActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
