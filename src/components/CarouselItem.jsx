import React from 'react';
import './styles/CarouselItem.scss';

export default function CarouselItem({ cover, title, year, contentRating, duration }) {
  return (
    <div className='categoria__item'>
      <img className='item__img' src={cover} alt={title} />
      <div className='item__details'>
        <div className='details__buttons'>
          <div className='details__play details__button' />
          <div className='details__add details__button' />
        </div>

        <p className='details__title'>{title}</p>
        <p className='details__info'>
          {`${year} ${contentRating} ${duration} Minutes `}
        </p>

      </div>
    </div>
  );
};
