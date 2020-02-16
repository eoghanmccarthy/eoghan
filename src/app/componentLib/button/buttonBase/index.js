import React from 'react';
import { string, bool, oneOf, func } from 'prop-types';

import baseProps from 'componentLib/baseProps';

const n = () => null;

const buttonBase = Component => {
  const BaseComponent = props => {
    const {
      role = 'button',
      type = 'button',
      tabIndex = '0',
      disabled = false,
      onClick = n,
      ...rest
    } = props;

    return (
      <Component
        role={role}
        type={type}
        tabIndex={tabIndex}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      />
    );
  };

  BaseComponent.propTypes = {
    role: string,
    type: oneOf(['button', 'submit', 'reset']),
    tabIndex: string,
    disabled: bool,
    onClick: func
  };

  return baseProps(BaseComponent);
};

export default buttonBase;
