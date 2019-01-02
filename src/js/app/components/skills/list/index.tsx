import React from "react";

import SkillSorter from "components/skills/sorter";

import skillsData from "app/config/skills";

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
