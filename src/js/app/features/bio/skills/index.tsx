import React from "react";

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

const List: React.FunctionComponent<{}> = () => (
  <ul>
    {data.map((item: { name: string }, index: number) => (
      <li key={index}>
        {item.name}
        {index !== data.length - 1 ? `${String.fromCharCode(8194)}/${String.fromCharCode(8194)}` : ""}
      </li>
    ))}
  </ul>
);

export default List;
