import React from "react";
import classNames from "classnames";

const Button: React.FunctionComponent<{
  style?: object;
  type?: string;
  disabled?: boolean;
  addClass?: string;
  onClick: () => void;
  hover?: boolean;
  animate?: boolean;
}> = ({
  children,
  style,
  type,
  disabled,
  addClass,
  onClick,
  hover,
  animate
}) => {
  const btnClass = classNames("btn", {
    hover: hover,
    animate: animate
  });

  return (
    <button
      style={style}
      type={type}
      disabled={disabled}
      className={`${btnClass} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  style: {},
  type: "",
  disabled: false,
  addClass: "",
  onClick: null,
  hover: true,
  animate: false
};

export default Button;
