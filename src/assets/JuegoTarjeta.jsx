import React from 'react';

function JuegoTarjeta({ juego }) {
  return (
    <article className="tarjeta-juego">
      <img src={juego.imagen} alt={juego.nombre} />
      <h3>{juego.nombre}</h3>
      <a href={juego.link} className="boton-jugar">Jugar Ahora</a>
    </article>
  );
}

export default JuegoTarjeta;