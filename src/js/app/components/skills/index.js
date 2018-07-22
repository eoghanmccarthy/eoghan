import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectSkillsData } from "selectors/skills";

import * as skillsActions from "actions/skills";

import Item from "components/skills/components/item";

const library = [
  { name: "javascript", category: "webdev" },
  { name: "react", category: "webdev" },
  { name: "redux", category: "webdev" },
  { name: "redux-observable", category: "webdev" },
  { name: "rx-js", category: "webdev" },
  { name: "redux-persist", category: "webdev" },
  { name: "figma", category: "design" }
];

class Skills extends Component {
  componentDidMount = () => {
    this.props.loadSkills(library);
  };
  render() {
    const { skillsData } = this.props;
    return (
      <div className="skills">
        {skillsData.map((item, index) => <Item key={index} item={item} />)}
      </div>
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
