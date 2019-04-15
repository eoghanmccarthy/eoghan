import React, { Fragment, useState } from "react";

import { ContentOverlay } from "eoghandotio-ui";
import ToggleButton from "components/bio/toggleButton";
import Modal from "components/bio/modal";

const Contact: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <ToggleButton onClick={_toggleVisibility} />
      <ContentOverlay isVisible={isVisible}>
        <Modal isVisible={isVisible} />
      </ContentOverlay>
    </Fragment>
  );
};

export default Contact;
