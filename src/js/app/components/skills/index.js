import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectSkillsData } from "selectors/skills";

import * as skillsActions from "actions/skills";

import { library } from "data/skills";

import Item from "components/skills/components/item";
import SkillsListSorter from "components/skillsSorter";

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
