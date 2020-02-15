import React from "react";
import './styles.scss';

import {Button} from 'eoghandotio-ui'
import Bio from "app/features/bio";
import GestureLogo from "app/features/gestureLogo";

const Home: React.FunctionComponent<{}> = () => (
  <main className="me__page page__index" ><GestureLogo /><Button className={'xl circle'}/></main>
);

export default Home;
