import React from "react";

const Button: React.FunctionComponent<{
  type?: string;
  disabled?: boolean;
  addClass?: string;
  onClick: () => void;
}> = ({ children, type, disabled, addClass, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "",
  disabled: false,
  addClass: "",
  onClick: null
};

export default Button;
