import React, { Fragment, forwardRef, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import FocusLock from 'react-focus-lock';
import cx from 'classnames';
import './styles.css';

import dialogBase from '../dialogBase';
import ContentOverlay from '../contentOverlay';
import DialogBackground from '../dialogBackground';

const Dialog = forwardRef(
  ({ children, className, isVisible, closeDialog, onDestroy, ...rest }, forwardedRef) => {
    const [overlayVisible, toggleOverlay] = useState(false);

    useEffect(() => {
      isVisible && toggleOverlay(true);
    }, [isVisible]);

    const transition = useTransition(isVisible, null, {
      from: { opacity: 0, transform: 'translateY(+70px)' },
      enter: { opacity: 1, transform: 'translateY(0px)' },
      leave: { opacity: 0, transform: 'translateY(+50px)' },
      config: (item, state) =>
        state === 'leave' ? { mass: 1, tension: 380, friction: 40, clamp: true } : config.stiff,
      onDestroyed: () => !isVisible && toggleOverlay(false)
    });

    return (
      <Fragment>
        {transition.map(({ item, key, props }) =>
          item ? (
            <Fragment key={key}>
              <FocusLock returnFocus>
                <DialogBackground closeDialog={closeDialog}>
                  <animated.div
                    ref={forwardedRef}
                    tabIndex={'-1'}
                    style={props}
                    className={cx('dialog', className)}
                    onClick={e => e.stopPropagation()}
                    {...rest}
                  >
                    {children}
                  </animated.div>
                </DialogBackground>
              </FocusLock>
            </Fragment>
          ) : null
        )}
        <ContentOverlay isVisible={overlayVisible} onDestroy={onDestroy} />
      </Fragment>
    );
  }
);

export default dialogBase(Dialog);
