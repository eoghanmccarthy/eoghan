import React, { Fragment, useState } from "react";

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
      {isVisible && <Modal toggleVisibility={_toggleVisibility} />}
    </Fragment>
  );
};

export default Contact;
