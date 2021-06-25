import React from 'react';
import './styles/CarouselItem.scss';

export default function CarouselItem() {
  return (
    <div className='categoria__item'>
      <img className='item__img' src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' alt='' />
      <div className='item__details'>
        <div className='details__buttons'>
          <div className='details__play details__button' />
          <div className='details__add details__button' />
        </div>

        <p className='details__title'>Titulo Descriptivo</p>
        <p className='details__info'>2016 16+ 114 Minutos</p>

      </div>
    </div>
  );
};
