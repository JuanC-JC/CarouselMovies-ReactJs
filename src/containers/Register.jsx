import React, { useReducer } from 'react';
import '../components/styles/Register.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

function Register(props) {
  const [formUserRegister, setFormUserRegister] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
      password: '',
    },
  );

  const handleChange = (e) => {
    setFormUserRegister({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(formUserRegister);
    props.history.push('./');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre de usuario'
            value={formUserRegister.name}
            onChange={handleChange}
            required
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Email'
            value={formUserRegister.email}
            onChange={handleChange}
            required
          />
          <input
            name='password'
            autoComplete='false'
            className='input'
            type='password'
            placeholder='Password'
            onChange={handleChange}
            required
          />
          <button type='submit' className='button' aria-label='send register'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

//Notas importantes:
//    se deben manejar objetos inmutables para que react pueda identificar
//    el cambio correcto en la comparacion de dos estados, si hago referencia al mismo
//    objeto pasandolo, el no detectara el cambio de manera correcta
