import { Tarjeta } from "./tarjetadepartamento";
import "./listadepartamentos.css";
import React from "react";


export const Listar = ({ array }) => {
  return array.map((departamento, index) => (
    <li key={index} className="ul_li">
      <Tarjeta contenido={departamento} />
    </li>
  ));
};
