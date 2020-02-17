import React, { useEffect, useRef } from 'react';
import './styles.css';

const DialogBackground = ({ children, closeDialog }) => {
  const ref = useRef(null);

  useEffect(() => {
    const _handler = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeDialog();
      }
    };

    ref.current.addEventListener('keydown', _handler);
    return () => {
      ref.current.removeEventListener('keydown', _handler);
    };
  });

  return (
    <div ref={ref} className={'dialog-background'} onClick={closeDialog}>
      {children}
    </div>
  );
};

export default DialogBackground;
