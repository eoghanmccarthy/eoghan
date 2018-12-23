import React from "react";

import Logo from "components/logo";
import ToggleButton from "components/contact/toggleButton";

// import skills from "config/skills";

//<ul>{skills.map((item,index) => (<li key={index}>{item.name}</li>))}</ul>

const Modal: React.FunctionComponent<{ toggleVisibility: () => void }> = ({
  toggleVisibility
}) => (
  <div className={"contact"}>
    <Logo />
    <div className={"contact__inner"}>
      <h1>front-end developer & graphic designer</h1>
      <mark>
        <a href="mailto:me@eoghan.io">me@eoghan.io</a>
      </mark>
      <ToggleButton onClick={toggleVisibility} />
    </div>
  </div>
);

export default Modal;
