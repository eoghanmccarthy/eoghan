import React from "react";
import { Button } from "eoghandotio-ui";

const ToggleButton: React.FunctionComponent<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <Button className={`btn__round btn__toggle-contact`} onClick={onClick}>
      <span />
      <span />
    </Button>
  );
};

export default ToggleButton;
