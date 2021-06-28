import React from 'react';
import './styles/Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';

function Header(props) {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

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
              <li className='list__item'><Link to='/'>{user.name}</Link></li>
              <li className='list__item'><Link to='#logout'>Sign off</Link></li>
            </>
          ) :
            <li className='list__item'><Link to='/login'>Login</Link></li>}

          <li className='list__item'><Link to='/#help'>Help</Link></li>
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

export default connect(mapStateToProps, null)(Header);
