import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className={`btn btn__toggle-contact`} onClick={onClick}>
      <span />
      <span />
    </div>
  );
};

export default Button;
