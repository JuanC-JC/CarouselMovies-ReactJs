import React from 'react';
import './styles/Search.scss';

export default function Search() {
  return (
    <section className='buscar'>
      <h2 className='buscar__title'>¿Que quieres ver hoy care monda?</h2>
      <input type='text' placeholder='Buscar...' className='buscar__input' />
    </section>
  );
}
