import React, { useRef } from 'react';
import './styles/Carousel.scss';

export default function Carousel({ children }) {

  const carousel = useRef(null);

  const handleMoveLeft = () => {
    carousel.current.scrollLeft -= 420;
    // console.log(datos);
  };
  const hanldeMoveRight = () => {
    carousel.current.scrollLeft += 420;
  };

  // const [videos, setVideos] = useState([]);

  return (
    <div ref={carousel} className='categoria__carousel'>
      <div className='categoria__items'>
        {children}
      </div>

      <div className='categoria__buttons'>
        <div role='button' tabIndex='0' onClick={() => { handleMoveLeft(); }} id='btn-left' name='btn-left' className='categoria__button categoria__button-left'>
          <div className='imagen' />
        </div>
        <div role='button' tabIndex='0' onClick={() => { hanldeMoveRight(); }} id='btn-right' name='btn-right' className='categoria__button categoria__button-right'>
          <div className='imagen' />
        </div>
      </div>
    </div>
  );
};
