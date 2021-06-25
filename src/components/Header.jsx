import React from 'react';
import './styles/Header.scss';

export default function Header() {

  return (
    <header className='cabezera'>
      <div className='cabezera__logo' />

      <nav className='cabezera__menu'>
        <div className='menu__profile'>
          <div className='profile__logo' />
          <p className='profile__text'>Profile</p>
        </div>

        <ul className='menu__list'>
          <li className='list__item'><a href='/'>Account</a></li>
          <li className='list__item'><a href='/'>Help</a></li>
          <li className='list__item'><a href='/'>Sign off</a></li>
        </ul>
      </nav>

    </header>
  );
}
