import React from "react";
import { Transition, animated } from "react-spring";

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
        <animated.div id={"bio"} style={props} className={"bio"}>

        </animated.div>
      ))
    }
  </Transition>
);

export default Modal;
