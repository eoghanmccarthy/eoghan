import React, { Fragment, useState } from 'react';
import './home.scss';

import { Dialog } from 'componentLib/dialog';
import Bio from 'app/bio';
import GestureLogo from 'app/gestureLogo';

const Home = () => {
  const [showDialog, toggleDialog] = useState(false);

  return (
    <Fragment>
      <Dialog isVisible={showDialog} closeDialog={() => toggleDialog(!showDialog)}>
        <Bio />
      </Dialog>
      <main className={'me__page page__index'}>
        <GestureLogo />
        <button
          className={'btn toggle-bio'}
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
        >
          <span />
          <span />
        </button>
      </main>
    </Fragment>
  );
};

export default Home;
