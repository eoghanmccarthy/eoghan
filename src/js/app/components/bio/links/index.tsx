import React from "react";

import GitHub from "assets/logos/GitHub-Mark-120px-plus.png";

const Links: React.FunctionComponent<{}> = () => (
  <div className={"links"}>
    <a href={"https://github.com/eoghanmccarthy"} target={"blank"}>
      <img src={GitHub} />
    </a>
  </div>
);

export default Links;
