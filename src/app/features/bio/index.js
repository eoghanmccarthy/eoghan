import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

import { Button } from 'componentLib/button';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const Bio = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <div id={'bio'} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <div className={'bio__header'}>
        <animated.h1 style={{ transform: props.xy.interpolate(trans1) }}>
          &ensp;<mark>front-end developer</mark> & graphic designer
        </animated.h1>
      </div>
      <div className={'bio__main'}>
        <Button
          size={'sm'}
          shape={'rounded'}
          href={'mailto:me@eoghan.io'}
          onClick={e => e.stopPropagation()}
        >
          me@eoghan.io
        </Button>
        <animated.ul id={'skills'} style={{ transform: props.xy.interpolate(trans2) }}>
          {data.map((item, index) => (
            <li key={index}>{item.name || ''}</li>
          ))}
        </animated.ul>
      </div>
      <div className={'bio__footer'}>
        <Button
          size={'lg'}
          href={'https://github.com/eoghanmccarthy'}
          target={'_blank'}
          onClick={e => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Bio;

const data = [
  { name: 'javascript', category: 'frontend' },
  { name: 'typescript', category: 'frontend' },
  { name: 'react', category: 'frontend' },
  { name: 'react-native', category: 'frontend' },
  { name: 'rx-js', category: 'frontend' },
  { name: 'ux', category: 'frontend' },
  { name: 'design systems', category: 'frontend' },
  { name: 'css', category: 'frontend' }
];
