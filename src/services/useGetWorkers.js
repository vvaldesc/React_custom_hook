import { useState, useEffect } from "react";

export async function useGetWorkers() {
  const [workers, setWorkers] = useState(null);
  debugger;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:3000/deps/";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los trabajadores");
        }
        const data = await response.json();
        setWorkers(data);
      } catch (error) {
        console.error(error);
        setWorkers([]);
      }
    };
    fetchData();
  }, []);

  return workers;
}
