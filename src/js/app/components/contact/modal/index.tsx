import React from "react";
import { Transition, animated } from "react-spring";

import ToggleButton from "components/contact/toggleButton";

const Modal: React.FunctionComponent<{
  styles?: object;
  isVisible: boolean;
  toggleVisibility: () => void;
}> = ({ styles, isVisible, toggleVisibility }) => (
  <div style={styles} className={"contact"}>
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
      {() => props => (
        <animated.div style={props} className={"contact__inner"}>
          <h1>front-end developer & graphic designer</h1>
          <mark>
            <a href="mailto:me@eoghan.io">me@eoghan.io</a>
          </mark>
          <ToggleButton onClick={toggleVisibility} />
        </animated.div>
      )}
    </Transition>
  </div>
);

export default Modal;
