import { css } from '@emotion/core';

import lightenDarkenColour from 'utils/helpers/lightenDarkenColour';

const styles = ({ theme, variant }) => {
  return css`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    text-transform: capitalize;
    border-width: ${variant === 'text' ? '0' : '1px'};
    border-style: solid;
    border-radius: 0;
    overflow: ${variant === 'text' ? 'visible' : 'hidden'};
    transition: all 0.25s ease;
    user-select: none;
    cursor: pointer;
    outline: 0;
    color: ${variant === 'contained' ? theme.onColour : theme.baseColour};
    background-color: ${variant === 'contained' ? theme.baseColour : 'transparent'};
    border-color: ${variant === 'text' ? 'transparent' : theme.baseColour};
    &:hover {
      color: ${variant === 'text' ? lightenDarkenColour(theme.baseColour, -20) : theme.onColour};
      background-color: ${variant === 'contained'
        ? lightenDarkenColour(theme.baseColour, -25)
        : variant === 'outlined'
        ? theme.baseColour
        : 'transparent'};
    }
  `;
};

export default styles;
