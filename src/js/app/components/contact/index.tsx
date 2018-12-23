import React, { Fragment, useState } from "react";
import { Transition } from "react-spring";

import ToggleButton from "components/contact/toggleButton";
import Modal from "components/contact/modal";

const Contact: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <ToggleButton onClick={_toggleVisibility} />
      <Transition
        items={isVisible}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {isVisible =>
          isVisible &&
          (props => (
            <Modal styles={props} toggleVisibility={_toggleVisibility} />
          ))
        }
      </Transition>
    </Fragment>
  );
};

export default Contact;
