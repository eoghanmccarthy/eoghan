import React from 'react';
import './home.scss';

import { Main } from 'app/global/layout';
import Bio from 'app/features/bio';
import GestureLogo from 'app/features/gestureLogo';

const Home = () => (
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
      onClick={() => null}
    />
  </Main>
);

export default Home;
