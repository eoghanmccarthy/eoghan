import React, { forwardRef } from 'react';
import { string, oneOf } from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/core';

import buttonBase from '../buttonBase';

const Button = forwardRef(
  (
    { children, className, disabled = false, colour = 'primary', shape = 'circle', ...rest },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={cx('btn', className, {
          disabled: disabled,
          [shape]: shape
        })}
        css={css`
          background-color: ${colour};
        `}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default buttonBase(Button);

Button.propTypes = {
  colour: string,
  shape: oneOf(['rounded', 'circle', 'capsule'])
};
