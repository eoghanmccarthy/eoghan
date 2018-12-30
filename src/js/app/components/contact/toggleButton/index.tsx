import React from "react";

import Button from "components/button";

const ToggleButton: React.FunctionComponent<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <Button addClass={`btn__round btn__toggle-contact`} onClick={onClick}>
      <span />
      <span />
    </Button>
  );
};

export default ToggleButton;
