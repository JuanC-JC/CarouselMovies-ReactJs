import React from 'react';
import './styles/Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className='cabezera'>

      <Link to='/'>
        <div className='cabezera__logo' />
      </Link>

      <nav className='cabezera__menu'>
        <div className='menu__profile'>
          <div className='profile__logo' />
          <p className='profile__text'>Profile</p>
        </div>

        <ul className='menu__list'>
          <li className='list__item'><Link to='/Login'>Login</Link></li>
          <li className='list__item'><Link to='/'>Help</Link></li>
          <li className='list__item'><Link to='/'>Sign off</Link></li>
        </ul>
      </nav>

    </header>
  );
}
