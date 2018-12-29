import React, { Fragment, useState } from "react";

import ModalOverlay from "components/modalOverlay";
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
      <ModalOverlay isVisible={isVisible}>
        <Modal isVisible={isVisible} />
      </ModalOverlay>
    </Fragment>
  );
};

export default Contact;
