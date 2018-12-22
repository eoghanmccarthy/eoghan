import React, { Fragment, useState } from "react";

import Button from "components/contact/button";
import Modal from "components/contact/modal";

const Contact: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <Button onClick={_toggleVisibility} />
      {isVisible && <Modal toggleVisibility={_toggleVisibility} />}
    </Fragment>
  );
};

export default Contact;
