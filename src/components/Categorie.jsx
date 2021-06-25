import React from 'react';
import './styles/Categorie.scss';

export default function Categorie({ children }) {
  return (
    <div className='categoria'>
      <h3 className='categoria__title'>Titulo Categoria</h3>
      {children}
    </div>
  );
};
