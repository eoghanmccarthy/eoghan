import React from "react";
import { Transition, animated } from "react-spring";

interface Props {
  children?: JSX.Element | null;
  isVisible: boolean;
}

const ModalOverlay: React.FunctionComponent<Props> = ({
  children,
  isVisible
}) => {
  return (
    <Transition
      native
      items={isVisible}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{
        tension: 220,
        friction: 20,
        clamp: true
      }}
    >
      {isVisible =>
        isVisible &&
        (props => (
          <animated.div style={props} className={"modal-overlay"}>
            {children}
          </animated.div>
        ))
      }
    </Transition>
  );
};

export default ModalOverlay;
