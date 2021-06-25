import React, { useEffect, useRef } from 'react';
import './styles/Carousel.scss';

export default function Carousel({ children }) {

  const btnLeft = useRef(null);

  useEffect(() => {
    btnLeft.current.addEventListener('click', () => {
      console.log('test');
    });
  }, []);

  return (
    <div className='categoria__carousel'>
      <div className='categoria__items'>
        {children}
      </div>

      <div className='categoria__buttons'>
        <div ref={btnLeft} id='btn-left' name='btn-left' className='categoria__button categoria__button-left'>
          <div className='imagen' />
        </div>
        <div id='btn-right' name='btn-right' className='categoria__button categoria__button-right'>
          <div className='imagen' />
        </div>
      </div>
    </div>
  );
};
