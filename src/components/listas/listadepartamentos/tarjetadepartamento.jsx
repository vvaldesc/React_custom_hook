import React from 'react';

export const Tarjeta = ({ contenido }) => {
  return (
    <div className="tarjeta">
      <h2 className="titulo">Título de la Tarjeta</h2>
      <p className="contenido">{contenido}</p>
    </div>
  );
};
