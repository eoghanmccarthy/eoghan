import React, { Fragment, useState } from "react";
import { ContentOverlay } from "eoghandotio-ui";

import ToggleButton from "./toggleButton";
import Modal from "./modal";

const Contact: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  return (
    <Fragment>
      <ToggleButton onClick={() => toggleVisibility((pre) => !pre)} />
      <ContentOverlay isVisible={isVisible}>
        <Modal isVisible={isVisible} />
      </ContentOverlay>
    </Fragment>
  );
};

export default Contact;
