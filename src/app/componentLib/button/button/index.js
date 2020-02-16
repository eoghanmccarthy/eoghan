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
      href = '',
      target,
      size = 'md',
      shape = 'circle',
      ...rest
    },
    forwardedRef
  ) => {
    const Element = href ? 'a' : 'button';

    return (
      <Element
        ref={forwardedRef}
        {...(href && { href: href })}
        {...(href && { target: target })}
        className={cx('btn', className, {
          disabled: disabled,
          [size]: size,
          [shape]: shape
        })}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

export default buttonBase(Button);

Button.propTypes = {
  href: string,
  target: oneOf(['_blank', '_self', '_parent', '_top']),
  size: oneOf(['sm', 'md', 'lg']),
  shape: oneOf(['rounded', 'circle'])
};
