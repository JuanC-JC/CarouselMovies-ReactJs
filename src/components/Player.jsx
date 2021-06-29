import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './styles/Player.scss';
// import { Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import NotFound from '../containers/NotFound';

function Player(props) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasPlaying = Object.keys(props.playing).length > 0 ;

  //cambiar el estado de playing mediante la action, asignando el video que mandaron a reproducir aca
  useEffect(() => {
    props.getVideoSource(props.match.params.id);
    setLoading(false);
  }, []);

  const handleErrorVideo = () => {
    setError(true);
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (hasPlaying) {
    return (
      <div className=''>
        <video controls autoPlay onError={handleErrorVideo}>
          <source src={props.playing.source} type='video/mp4' />
        </video>

        {
          error && (
            <div className='player__error'>
              <h2>Error streaming cannot connect to provider of this file</h2>
            </div>
          )
        }

        <div className='Player-back'>
          <button type='button' onClick={() => props.history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    );
  }

  return (
    <Redirect to='/404' />
  );

};

//si termino de cargar y el video existe mostarlo
//si el id existe pero el video no carga hacer el overlay
//si el id no existe redirect a 404

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
