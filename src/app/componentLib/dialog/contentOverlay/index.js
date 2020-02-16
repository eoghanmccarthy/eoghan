import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { func } from 'prop-types';
import { useTransition, animated } from 'react-spring';
import cx from 'classnames';
import './styles.scss';

const rootNode = document.getElementById('root');

const n = () => null;

const ContentOverlay = ({ isVisible, onDestroy = n }) => {
  const transition = useTransition(isVisible, null, {
    from: { backgroundColor: 'rgba(0,0,0,0)' },
    enter: { backgroundColor: 'rgba(0,0,0,.22)' },
    leave: { backgroundColor: 'rgba(0,0,0,0)' },
    config: (item, state) =>
      state === 'leave'
        ? { mass: 1, tension: 400, friction: 20, clamp: true }
        : { mass: 1, tension: 220, friction: 12, clamp: true },
    onDestroyed: () => !isVisible && onDestroy && onDestroy()
  });

  return transition.map(({ item, key, props }) =>
    item ? (
      <Fragment key={key}>
        {createPortal(
          <animated.div id={'content-overlay'} style={props} className={cx('content-overlay')} />,
          rootNode
        )}
      </Fragment>
    ) : null
  );
};

export default ContentOverlay;

ContentOverlay.propTypes = {
  onDestroy: func
};
