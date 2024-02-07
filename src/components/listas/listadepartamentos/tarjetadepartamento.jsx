import React from 'react';
import "./tarjetadepartamento.css";

export const Tarjeta = ({ contenido }) => {
  return (
    <div className="li_div">
      <h2 className="titulo">{contenido.loc}</h2>
      <p className="contenido">{contenido.dnombre}</p>
      <p className="contenido">{contenido.dept_no}</p>
    </div>
  );
};
