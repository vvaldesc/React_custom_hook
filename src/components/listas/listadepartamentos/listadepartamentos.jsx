import { Tarjeta } from "./tarjetadepartamento";
import React from "react";

export const Listar = ({ array }) => {
  debugger
  return array.map((departamento, index) => (
    <li key={index}>
      <Tarjeta contenido={departamento} />
    </li>
  ));
};
