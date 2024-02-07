import { useState, useEffect } from "react";
const url = "http://localhost:3000/deps/";

export function useGetWorkers() {
  const [departaments, setDepartaments] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setDepartaments(data);
        Array.isArray(data) && setLoading(false); // Establecer loading en falso cuando se completa la solicitud
      });
  }, []);

  return {
    departaments : departaments || [],
    loading : loading,
    error : null
  };
}
