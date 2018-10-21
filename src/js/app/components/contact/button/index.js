import React from "react";

const Button = ({ buttonClass, onClick }) => {
  return (
    <div
      className={`btn btn__toggle-contact ${buttonClass ? buttonClass : ""}`}
      onClick={onClick}
    >
      <span />
      <span />
    </div>
  );
};

export default Button;
