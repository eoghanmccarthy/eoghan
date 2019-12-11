import React from "react";

import Skills from "app/features/bio/skills";
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
          <mark>
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
