import React, { useState, useEffect } from 'react';

interface Item {
  nombre: string;
  id: number;
  disponible: boolean;
}

function Fantasia() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('data.json');
      const jsonData: Item[] = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {item.nombre}, <strong>ID:</strong> {item.id},{' '}
            <strong>Disponible:</strong> {item.disponible ? 'Sí' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fantasia;