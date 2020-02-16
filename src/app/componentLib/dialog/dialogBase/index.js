import React, { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { bool, func } from 'prop-types';

import baseProps from 'componentLib/baseProps';

const rootNode = document.getElementById('root');

const baseDialog = Component => {
  const BaseDialog = ({ isVisible = false, closeDialog, ...rest }) => {
    return (
      <Fragment>
        {createPortal(
          <Component isVisible={isVisible} closeDialog={closeDialog} {...rest} />,
          rootNode
        )}
      </Fragment>
    );
  };

  BaseDialog.propTypes = {
    isVisible: bool.isRequired,
    closeDialog: func.isRequired
  };

  return baseProps(BaseDialog);
};

export default baseDialog;
