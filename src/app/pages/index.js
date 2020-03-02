import React, { Fragment, useState } from 'react';
import { Button, Dialog } from '@eoghanmccarthy/ui';
import './styles.css';

import Bio from 'app/features/bio';
import AnimatedLogo from 'app/features/animatedLogo';

const Home = () => {
  const [showDialog, toggleDialog] = useState(false);
  const close = () => toggleDialog(false);
  const toggle = () => toggleDialog(vis => !vis);

  return (
    <Fragment>
      <Dialog id={'bio-dialog'} isVisible={showDialog} closeDialog={close} onClick={close}>
        <Bio />
      </Dialog>
      <main className={'me__page page__index'}>
        <AnimatedLogo />
        <Button size={'xl'} shape={'circle'} className={'toggle-bio'} onClick={toggle}>
          <span />
          <span />
        </Button>
      </main>
    </Fragment>
  );
};

export default Home;
