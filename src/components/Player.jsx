/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import './styles/Player.scss';

function Player(props) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasPlaying = Object.keys(props.playing).length > 0 ;

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

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
