import React from "react";

import Button from "components/button";

const ToggleButton: React.FunctionComponent<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <div className={`btn btn__toggle-contact`} onClick={onClick}>
      <span />
      <span />
    </div>
  );
};

export default ToggleButton;
