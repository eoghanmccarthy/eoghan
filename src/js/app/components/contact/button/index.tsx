import React from "react";

const Button: React.FunctionComponent<{ onClick: () => void }> = ({
  onClick
}) => {
  return (
    <div className={`btn btn__toggle-contact`} onClick={onClick}>
      <span />
      <span />
    </div>
  );
};

export default Button;
