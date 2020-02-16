import React, { forwardRef } from 'react';
import { string, oneOf } from 'prop-types';
import cx from 'classnames';
import './styles.scss';

import buttonBase from '../buttonBase';

const Button = forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      size = 'md',
      shape = 'circle',
      colour = 'primary',
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={cx('btn', className, {
          disabled: disabled,
          [size]: size,
          [shape]: shape,
          [colour]: colour
        })}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default buttonBase(Button);

Button.propTypes = {
  size: oneOf(['sm', 'md', 'lg']),
  shape: oneOf(['rounded', 'circle', 'capsule']),
  colour: string
};
