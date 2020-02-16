import React, { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { bool, func } from 'prop-types';

import baseProps from 'componentLib/baseProps';

import ContentOverlay from '../contentOverlay';

const rootNode = document.getElementById('root');

const n = () => null;

const baseDialog = Component => {
  const BaseDialog = ({ isVisible = false, closeDialog, onDestroy = n, ...rest }) => {
    const [overlayIsVisible, toggleOverlay] = useState(false);

    useEffect(() => {
      isVisible && toggleOverlay(true);
    }, [isVisible]);

    return (
      <Fragment>
        {createPortal(
          <Component
            isVisible={isVisible}
            toggleContentOverlay={toggleOverlay}
            closeDialog={closeDialog}
            onDestroy={onDestroy}
            {...rest}
          />,
          rootNode
        )}
        <ContentOverlay isVisible={overlayIsVisible} onDestroy={onDestroy} />
      </Fragment>
    );
  };

  BaseDialog.propTypes = {
    isVisible: bool.isRequired,
    closeDialog: func.isRequired,
    onDestroy: func
  };

  return baseProps(BaseDialog);
};

export default baseDialog;
