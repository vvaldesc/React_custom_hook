import { useGetWorkers } from "./services/useGetWorkers";
import { Listar } from "./components/listas/listadepartamentos/listadepartamentos";
import "./App.css";
import React from "react";

function App() {
  const { departaments, loading, error } = useGetWorkers();
  console.log(departaments);

  return (
    <div className="App">
      <h1>Custom hook</h1>
      {loading && <h1>Cargando</h1>}
      {error && <h1>Error</h1>}
      {departaments.length}
      {<Listar array={departaments} />}
    </div>
  );
}

export default App;
