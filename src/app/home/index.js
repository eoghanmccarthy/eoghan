import React, { Fragment, useState } from 'react';
import './home.scss';

import { Dialog } from 'componentLib/dialog';
import Bio from 'app/bio';
import GestureLogo from 'app/gestureLogo';

const Home = () => {
  const [showDialog, toggleDialog] = useState(false);

  return (
    <Fragment>
      <Dialog
        isVisible={showDialog}
        closeDialog={() => toggleDialog(!showDialog)}
        //onClick={() => toggleDialog(!showDialog)}
      >
        <Bio />
      </Dialog>
      <main className={'me__page page__index'}>
        <GestureLogo />
        <button className={'btn toggle-bio'} onClick={() => toggleDialog(!showDialog)}>
          <span />
          <span />
        </button>
      </main>
    </Fragment>
  );
};

export default Home;
