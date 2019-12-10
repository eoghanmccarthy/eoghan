import React from "react";

import SkillSorter from "../sorter";

import skillsData from "../data";

const List: React.FunctionComponent<{}> = () => (
  <ul>
    <SkillSorter dataSet={skillsData}>
      {({ sortedData }) =>
        sortedData.map((item: { name: string }, index: number) => (
          <li key={index}>
            {item.name}
            {index !== sortedData.length - 1
              ? `${String.fromCharCode(8194)}/${String.fromCharCode(8194)}`
              : ""}
          </li>
        ))
      }
    </SkillSorter>
  </ul>
);

export default List;
