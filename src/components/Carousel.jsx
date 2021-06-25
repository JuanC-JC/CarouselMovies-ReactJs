import React, { useEffect, useRef } from 'react';
import './styles/Carousel.scss';

export default function Carousel({ children }) {

  const carousel = useRef(null);
  const btnRight = useRef(null);
  const btnLeft = useRef(null);

  useEffect(() => {
    btnRight.current.addEventListener('click', () => {
      carousel.current.scrollLeft += 420;
    });

    btnLeft.current.addEventListener('click', () => {
      carousel.current.scrollLeft -= 420;
    });

    // return btnRight.current.clearEventListener
  }, []);

  return (
    <div ref={carousel} className='categoria__carousel'>
      <div className='categoria__items'>
        {children}
      </div>

      <div className='categoria__buttons'>
        <div ref={btnLeft} id='btn-left' name='btn-left' className='categoria__button categoria__button-left'>
          <div className='imagen' />
        </div>
        <div ref={btnRight} id='btn-right' name='btn-right' className='categoria__button categoria__button-right'>
          <div className='imagen' />
        </div>
      </div>
    </div>
  );
};
