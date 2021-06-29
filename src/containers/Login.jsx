import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components/styles/Login.scss';
import googleIcon from '../components/assets/google-icon.png';
import twitterIcon from '../components/assets/twitter-icon.png';
import { loginRequest } from '../actions';

function Login(props) {

  const [formUserLogin, setFormUserLogin] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    },
  );

  const handleInput = (e) => {
    setFormUserLogin({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(formUserLogin);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Email'
            name='email'
            value={formUserLogin.email || ''}
            onChange={handleInput}
            required
          />
          <input
            className='input'
            type='password'
            placeholder='Password'
            name='password'
            value={formUserLogin.password}
            onChange={handleInput}
            autoComplete='false'
            required
          />

          <button type='submit' className='button'>Iniciar sesión</button>

          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <Link to='/'> Olvidé mi contraseña </Link>
          </div>

        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
