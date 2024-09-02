import { useState } from 'react';
import '../styles/card.css';

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar }) => {
  const [added, setAdded] = useState(false);

  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  }

  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
  }

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">$ {precio}</p>

        {added ? (
          <button className="boton-quitar" onClick={clickQuitar}>
            Quitar
          </button>
        ) : (
          <button className="boton-agregar" onClick={clickAgregar}>
            Agregar
          </button>
        )}
      </div>
    </div>
  );
};
