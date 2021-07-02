import React from 'react';
import './styles/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

function Header(props) {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = (e) => {
    props.logoutRequest();
  };

  return (
    <header className='cabezera'>

      <Link to='/'>
        <div className='cabezera__logo' alt='Img' />
      </Link>

      <nav className='cabezera__menu'>
        <div className='menu__profile'>
          { hasUser ?
            <img className='profile__logo' alt={user.email} src={gravatar(user.email)} /> :
            <div alt='ImgProfile' className='profile__logo' />}

          <p className='profile__text'>Profile</p>
        </div>

        <ul className='menu__list'>

          {hasUser ? (
            <>
              <Link to='/'><li className='list__item'>{user.name ? user.name : 'Username'}</li></Link>
              <li className='list__item'><Link to='/' onClick={handleLogout}>Logout</Link></li>
            </>
          ) :
            <li className='list__item'><Link to='/login'>Login</Link></li>}

          <li className='list__item'><Link to='/#AboutUs'>About Us</Link></li>
        </ul>
      </nav>

    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
