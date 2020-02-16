import React from 'react';
import cx from 'classnames';

import './main.scss';

const Main = ({ children, className }) => (
  <main className={cx('me__page', className)}>{children}</main>
);

export default Main;
