import React from "react";
import './styles.scss'

import GitHub from "assets/GitHub-Mark-120px-plus.png";

const Bio: React.FunctionComponent<{}> = () => {
  return (
      <div id={"bio"}  className={"bio"}>
        <div className={"bio__header"}>
          <h1>&ensp;<mark>front-end developer</mark> & graphic designer</h1>
        </div>
        <div className={"bio__main"}>
          <mark className={'contact-link'}>
            <a href="mailto:me@eoghan.io">me@eoghan.io</a>
          </mark>
          <Skills />
        </div>
        <div className={"bio__footer"}>
          <a href={"https://github.com/eoghanmccarthy"} target={"_blank"}>
            <img src={GitHub} />
          </a>
        </div>
      </div>
  );
};

export default Bio;

const data = [
  { name: "javascript", category: "frontend" },
  { name: "typescript", category: "frontend" },
  { name: "react", category: "frontend" },
  { name: "react-native", category: "frontend" },
  { name: "rx-js", category: "frontend" },
  { name: "css", category: "frontend" },
  { name: "sass", category: "frontend" },
];

const Skills: React.FunctionComponent<{}> = () => (
  <ul id={'skills'}>
    {data.map((item: { name: string }, index: number) => (
      <li key={index}>
        {item.name}
      </li>
    ))}
  </ul>
);
