import React, { Fragment, useState } from 'react';
import './home.scss';

import { Dialog } from 'componentLib/dialog';
import Main from 'componentLib/main';
import Bio from 'app/features/bio';
import GestureLogo from 'app/features/gestureLogo';

const Home = () => {
  const [showDialog, toggleDialog] = useState(false);

  return (
    <Fragment>
      <Dialog isVisible={showDialog} closeDialog={() => toggleDialog(!showDialog)}>
        <Bio />
      </Dialog>
      <Main className={'page__index'}>
        <GestureLogo />
        <button
          style={{
            position: 'absolute',
            right: '30px',
            bottom: '30px',
            width: '54px',
            height: '54px',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '100%',
            cursor: 'pointer',
            outline: 'none'
          }}
          onClick={() => toggleDialog(!showDialog)}
        />
      </Main>
    </Fragment>
  );
};

export default Home;
