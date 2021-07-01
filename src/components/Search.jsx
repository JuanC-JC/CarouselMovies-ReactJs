import React from 'react';
import './styles/Search.scss';

export default function Search() {
  return (
    <section className='buscar'>
      <h2 className='buscar__title'>What would you like to watch today?</h2>
      <input type='text' placeholder='Search...' className='buscar__input' />
    </section>
  );
}
