import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import './styles/CarouselItem.scss';

//TODO: el opacitiy 0 en los botones de mover igual sigue dejandose seleccionar, hay que eliminarlo
//TODO: Determinar si en redux puedo guardar objetos ref como props - para saber cual es el que esta OPEN
//TODO: EventListener en el body para cerrar cuando se haga click en otro lado
function CarouselItem(props) {

  const myRef = useRef(null);

  const { isHoverAvaliable, user, isList, id, cover, title, year, contentRating, duration } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleClick = (e) => {
    if (!isHoverAvaliable) {
      myRef.current.setAttribute('style', 'transform: scale(1.3); z-index: 2');

      myRef.current.querySelector('.item__details').setAttribute('style', 'visibility:visible; opacity:1');
    }
  };

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
    <div ref={myRef} tabIndex='0' role='button' aria-label='carousel item' className='categoria__item' onClick={handleClick}>
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
              onClick={hasUser ? handleDeleteFavorite : undefined}
              className='details__remove details__button'
            />
          ) : (
            <div
              aria-label='add to my list'
              role='button'
              tabIndex='0'
              onClick={hasUser ? handleSetFavorite : undefined}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isHoverAvaliable: state.isHoverAvaliable,
  };
};

//enviar funciones (actions)
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
