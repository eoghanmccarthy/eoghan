import React from "react";
import './styles.scss'

import GitHub from "assets/logos/GitHub-Mark-120px-plus.png";

const Bio: React.FunctionComponent<{}> = () => {
  return (
      <div id={"bio"}  className={"bio"}>
        <div className={"bio__header"}>
          <div className={"header__title"}>
            <h1>&ensp;<mark>front-end developer</mark> & graphic designer</h1>
          </div>
        </div>
        <div className={"bio__main"}>
          <mark className={'contact-link'}>
            <a href="mailto:me@eoghan.io">me@eoghan.io</a>
          </mark>
          <Skills />
        </div>
        <div className={"bio__footer"}>
          <div className={"links"}>
            <a href={"https://github.com/eoghanmccarthy"} target={"_blank"}>
              <img src={GitHub} />
            </a>
          </div>
        </div>
      </div>
  );
};

export default Bio;

const data = [
  { name: "css", category: "frontend" },
  { name: "javascript", category: "frontend" },
  { name: "typescript", category: "frontend" },
  { name: "rx-js", category: "frontend" },
  { name: "react", category: "frontend" },
  { name: "react-native", category: "frontend" },
  { name: "react-spring", category: "frontend" },
  { name: "redux", category: "frontend" },
  { name: "redux-observable", category: "frontend" },
  { name: "webpack", category: "frontend" },
  { name: "sass", category: "frontend" }
];

const Skills: React.FunctionComponent<{}> = () => (
  <ul className={'skills-list'}>
    {data.map((item: { name: string }, index: number) => (
      <li key={index}>
        {item.name}
        {index !== data.length - 1 ? `${String.fromCharCode(8194)}/${String.fromCharCode(8194)}` : ""}
      </li>
    ))}
  </ul>
);
