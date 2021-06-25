import React from 'react';
import './styles/Categorie.scss';

export default function Categorie({ children, title }) {
  return (
    <div className='categoria'>
      <h3 className='categoria__title'>{title}</h3>
      {children}
    </div>
  );
};
