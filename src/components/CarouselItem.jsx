import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import './styles/CarouselItem.scss';

//BUG: Mientras no exista un usuario activo no puede agregar a mi lista los elementos

function CarouselItem(props) {

  const { isList, id, cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = () => {
    props.deleteFavorite({
      id,
    });
  };

  return (
    <div className='categoria__item'>
      <img className='item__img' src={cover} alt={title} />
      <div className='item__details'>
        <div className='details__buttons'>
          <Link to={`/player/${id}`}>
            <div className='details__play details__button' />
          </Link>

          {isList ? (
            <div
              aria-label='remove from my list'
              role='button'
              tabIndex='0'
              onClick={handleDeleteFavorite}
              className='details__remove details__button'
            />
          ) : (
            <div
              aria-label='add to my list'
              role='button'
              tabIndex='0'
              onClick={handleSetFavorite}
              className='details__add details__button'
            />
          )}

        </div>

        <p className='details__title'>{title}</p>
        <p className='details__info'>
          {`${year} ${contentRating} ${duration} Minutes `}
        </p>

      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  isList: PropTypes.bool,
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

//enviar funciones (actions)
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
