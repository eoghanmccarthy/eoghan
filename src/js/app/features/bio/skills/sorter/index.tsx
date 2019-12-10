import React, { Fragment, useState } from "react";

interface Props {
  dataSet: Array<object>;
  children({}): JSX.Element;
}

const SkillSorter: React.FunctionComponent<Props> = ({ children, dataSet }) => {
  const [filter, setFilter] = useState("SORT_BY_NAME_ZA");

  const sorter = (data: Array<object>, fil: string) => {
    let list = data.slice();
    switch (fil) {
      case "SORT_BY_NAME_AZ":
        return list.sort((a, b) => a.name - b.name);
      case "SORT_BY_NAME_ZA":
        return list.sort((a, b) => b.name - a.name);
      case "SORT_BY_CATEGORY":
        return list.sort((a, b) => b.category - a.category);
      default:
        return list;
    }
  };

  return (
    <Fragment>
      {children({
        setFilter: setFilter,
        sortedData: sorter(dataSet, filter)
      })}
    </Fragment>
  );
};

export default SkillSorter;
