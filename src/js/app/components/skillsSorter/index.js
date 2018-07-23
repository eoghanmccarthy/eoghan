import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class SkillsListSorter extends Component {
  static propTypes = {
    dataSet: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      active: "SORT_BY_CATEGORY"
    };
  }

  handleSetFilter = filter => {
    this.setState({
      filter: filter
    });
  };

  render() {
    const { dataSet } = this.props;
    const { active } = this.state;

    const sorter = (data, filter) => {
      let list = data.slice();
      switch (filter) {
        case "SORT_BY_CATEGORY":
          return list.sort((a, b) => b.category - a.category);
        case "SORT_BY_NAME_AZ":
          return list.sort((a, b) => a.name - b.name);
        case "SORT_BY_NAME_ZA":
          return list.sort((a, b) => b.name - a.name);
        default:
          return list;
      }
    };

    return (
      <Fragment>
        {this.props.children({
          setFilter: this.handleSetFilter,
          sortedData: sorter(dataSet, active)
        })}
      </Fragment>
    );
  }
}
