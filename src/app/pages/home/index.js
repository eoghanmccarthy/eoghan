import React, { Fragment, useState } from 'react';
import './styles.css';

import { Button } from 'componentLib/button';
import { Dialog } from 'componentLib/dialog';
import Bio from 'app/features/bio';
import Logo from 'app/features/logo';

const Home = () => {
  const [showDialog, toggleDialog] = useState(false);

  return (
    <Fragment>
      <Dialog
        id={'bio-dialog'}
        isVisible={showDialog}
        closeDialog={() => toggleDialog(!showDialog)}
        onClick={() => toggleDialog(!showDialog)}
      >
        <Bio />
      </Dialog>
      <main className={'me__page page__index'}>
        <Logo />
        <Button className={'toggle-bio'} size={'lg'} onClick={() => toggleDialog(!showDialog)}>
          <span />
          <span />
        </Button>
      </main>
    </Fragment>
  );
};

export default Home;
