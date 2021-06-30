import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import './styles/CarouselItem.scss';

function CarouselItem(props) {

  const myRef = useRef(null);

  const { isHoverAvaliable, user, isList, id, cover, title, year, contentRating, duration } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleClick = (e) => {

    if (!isHoverAvaliable) {

      //select all categoria__items and remove his clases
      document.querySelectorAll('.categoria__item').forEach((item) => item.classList.remove('isClicked', 'oneSiblingIsClicked'));

      //add only his siblings and himself the class for opacity 0.3
      [...myRef.current.parentNode.children].forEach((element) => element.classList.add('oneSiblingIsClicked'));

      //actualy element is clicked and remove if him was a brother of one clicked
      myRef.current.classList.add('isClicked');
      myRef.current.classList.remove('oneSiblingIsClicked');

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
