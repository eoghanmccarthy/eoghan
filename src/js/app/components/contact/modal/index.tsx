import React from "react";
import { Transition, animated } from "react-spring";

import Logo from "components/logo";

const Modal: React.FunctionComponent<{
  isVisible: boolean;
}> = ({ isVisible }) => (
  <Transition
    native
    items={isVisible}
    from={{ transform: "translateY(75px)" }}
    enter={{ transform: "translateY(0)" }}
    leave={{ transform: "translateY(75px)" }}
    config={{
      tension: 98,
      friction: 22,
      clamp: true
    }}
  >
    {isVisible =>
      isVisible &&
      (props => (
        <animated.div style={props} className={"contact"}>
          <h1>
            <span className={"text__highlight"}>front-end developer</span>&ensp;&&ensp;
            <span className={"text__highlight"}>graphic designer</span>
          </h1>
          <mark>
            <a href="mailto:me@eoghan.io">me@eoghan.io</a>
          </mark>
          <Logo />
        </animated.div>
      ))
    }
  </Transition>
);

export default Modal;
