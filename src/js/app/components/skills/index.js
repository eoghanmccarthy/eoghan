import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSkillsData } from "selectors/skills";

class Skills extends Component {
  render() {
    const { skillsData } = this.props;
    console.log(skillsData);
    return (
      <div className="me__skills">
        <div>skills</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skillsData: selectSkillsData(state)
});

export default connect(mapStateToProps, null)(Skills);
